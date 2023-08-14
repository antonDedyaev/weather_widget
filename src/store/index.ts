// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
import { createStore, Commit, Dispatch } from "vuex";
import axios from "axios";
import ILocation from "../models/ILocation";
import { State } from "vue";

export default createStore({
  state: () => ({
    searchQuery: "",
    dataFetched: false,
    locations: [] as ILocation[],
    errors: false,
  }),
  getters: {},
  mutations: {
    loadLocations(state: State, locations: ILocation[]) {
      state.locations = locations;
    },
    setSearchQuery(state: State, searchQuery: string) {
      state.searchQuery = searchQuery;
    },
    setDataFetched(state: State, bool: boolean) {
      state.dataFetched = bool;
    },
    setError(state: State, bool: boolean) {
      state.errors = bool;
    },
    addLocation(state: State, location: ILocation) {
      state.locations.push(location);
      localStorage.setItem("locations", JSON.stringify(state.locations));
      state.searchQuery = "";
    },
    removeLocation(state: State, id: number) {
      state.locations = state.locations.filter((item) => item.id !== id);
      localStorage.setItem("locations", JSON.stringify(state.locations));
    },
  },
  actions: {
    async checkLocations({
      commit,
      dispatch,
    }: {
      commit: Commit;
      dispatch: Dispatch;
    }) {
      try {
        const savedLocations = JSON.parse(
          localStorage.getItem("locations") || "[]"
        );
        if (savedLocations.length === 0) {
          const currentLocation = await axios.get(
            `https://ipinfo.io/json?tokens=${process.env.VUE_APP_IPINFO_TOKEN}`
          );
          const city: string = currentLocation.data.city;
          dispatch("fetchWeather", city);
        } else {
          commit("loadLocations", savedLocations);
          commit("setDataFetched", true);
        }
      } catch (e: any) {
        console.log(e.message);
        commit("setDataFetched", false);
      }
    },
    async fetchWeather(
      {
        state,
        commit,
      }: {
        state: State;
        commit: Commit;
      },
      queryLocation: string
    ) {
      try {
        const forecast = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${queryLocation}&units=metric&appid=${process.env.VUE_APP_OPEN_WEATHER_API_KEY}`
        );
        commit("setDataFetched", true);
        commit("setError", false);

        const dateOptions: Intl.DateTimeFormatOptions = {
          weekday: "long",
          month: "short",
          day: "numeric",
        };
        const date = new Date(forecast.data.dt * 1000).toLocaleDateString(
          "en-US",
          dateOptions
        );
        const windDirections: string[] = [
          "N",
          "NNE",
          "NE",
          "ENE",
          "E",
          "ESE",
          "SE",
          "SSE",
          "S",
          "SSW",
          "SW",
          "WSW",
          "W",
          "WNW",
          "NW",
          "NNW",
          "N",
        ];

        const currentDirection = Number(
          (forecast.data.wind.deg / 22.5).toFixed(0)
        );

        commit("addLocation", {
          id: forecast.data.id,
          order:
            state.locations.length !== 0
              ? state.locations[state.locations.length - 1].order + 1
              : 1,
          name: forecast.data.name,
          country: forecast.data.sys.country,
          date: date.split(","),
          temperature: Math.round(forecast.data.main.temp),
          feelTemperature: Math.round(forecast.data.main.feels_like),
          image: forecast.data.weather[0].icon,
          description:
            forecast.data.weather[0].description.slice(0, 1).toUpperCase() +
            forecast.data.weather[0].description.slice(1),
          windSpeed: forecast.data.wind.speed.toFixed(1),
          windDirection: windDirections[currentDirection],
          pressure: forecast.data.main.pressure,
          humidity: forecast.data.main.humidity,
          visibility: Number((forecast.data.visibility / 1000).toFixed(1)),
        });
      } catch (e: any) {
        console.log(e.message);
        commit("setError", true);
        commit("setDataFetched", false);
        commit("setSearchQuery", "");
      }
    },
  },

  modules: {},
});
