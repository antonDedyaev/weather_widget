<template>
  <div class="homepageWrapper">
    <div class="homepageWrapper__settings" @click="$router.push('/settings')">
      <img src="../assets/images/gear.svg" alt="settings icon" />
    </div>
    <div
      class="homepageWrapper_empty"
      v-if="!dataFetched || locations.length === 0"
    >
      <div
        class="homepageWrapper__cityInput"
        :class="{ homepageWrapper__cityInput_warn: errors }"
      >
        <input
          type="text"
          :value="searchQuery"
          @input="($event) => setSearchQuery(($event.target as HTMLInputElement).value)"
          placeholder="Type city location"
          @keyup.enter="fetchWeather(searchQuery)"
          :autofocus="true"
        />
      </div>
      <div class="homepageWrapper__warning">
        <img
          src="../assets/images/alert-triangle.svg"
          alt="No locations added warning"
        />

        <span>No locations found!</span>
      </div>
    </div>
    <div v-for="location in locations.slice(0, 2)" v-else :key="location.name">
      <WeatherCard :weatherData="location" />
    </div>
  </div>
</template>

<script lang="ts">
import { State, defineComponent } from "vue";

import WeatherCard from "@/components/WeatherCard.vue";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { mapActions, mapMutations, mapState } from "vuex";

export default defineComponent({
  components: {
    WeatherCard,
  },

  methods: {
    ...mapMutations({
      setSearchQuery: "setSearchQuery",
      setError: "setError",
    }),
    ...mapActions(["fetchWeather", "checkLocations"]),
  },
  computed: {
    ...mapState({
      searchQuery: (state: State) => state.searchQuery,
      dataFetched: (state: State) => state.dataFetched,
      locations: (state: State) => state.locations,
      errors: (state: State) => state.errors,
    }),
  },
  mounted() {
    this.checkLocations();
    this.setError(false);
  },
});
</script>

<style lang="scss" scoped>
@import "../styles/main";
.homepageWrapper {
  position: relative;

  width: 300px;
  display: flex;
  gap: 20px;
  margin: 10px 0;
  flex-direction: column;

  //background: $bgd-gray;

  border-radius: 5px;

  &__settings {
    position: absolute;
    top: 14px;
    right: 14px;

    z-index: 2;

    img:hover {
      animation: rotation 3s infinite linear;
    }
  }

  @keyframes rotation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
  }

  &_empty {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  &__cityInput {
    position: relative;
    display: flex;
    align-items: center;
    width: 80%;
    height: 28px;
    margin: 60px 0 20px;

    &::before {
      position: absolute;
      top: 2px;
      left: 8px;
      content: url("../assets/images/magnifying-glass.svg");
      opacity: 0.4;
    }

    input {
      padding: 5px 15px 5px 34px;
      width: 100%;
      height: 30px;
      border-radius: 12px;
      border: none;

      font-size: 16px;

      &::placeholder {
        color: $text-input;
      }
    }

    &_warn {
      input {
        border: 2px solid red;
        font-size: 18px;
        color: red;
      }
    }
  }

  &__warning {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 20px 0 80px;

    font-size: 22px;
    text-align: center;
  }
}
</style>
