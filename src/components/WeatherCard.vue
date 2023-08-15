<template>
  <div class="cardWrapper">
    <div class="cardWrapper__header">
      <h1>{{ weatherData.name }}, {{ weatherData.country }}</h1>
    </div>
    <div class="cardWrapper__pic">
      <img
        :src="`http://openweathermap.org/img/wn/${weatherData.image}@2x.png`"
        alt="weather icon"
      />
    </div>
    <div class="cardWrapper__dateString">
      <span>{{ weatherData.date[0] }}</span>
      <span>|</span>
      <span>{{ weatherData.date[1].trim() }}</span>
    </div>
    <div class="cardWrapper__degValue">{{ weatherData.temperature }}°C</div>
    <div class="cardWrapper__description">
      Feels like {{ weatherData.feelTemperature }}°C.
      {{ weatherData.description }}.
    </div>
    <hr />
    <div class="cardWrapper__details">
      <div class="cardWrapper__wind">
        <img
          class="cardWrapper__detailsImage"
          src="../assets/images/wind.svg"
          alt=""
        />
        <div class="cardWrapper__detailsData">
          <div class="cardWrapper__detailsText">
            <span
              >{{ weatherData.windSpeed }} m/s
              {{ weatherData.windDirection }}</span
            >
            <span>Wind</span>
          </div>
        </div>
      </div>
      <div class="cardWrapper__pressure">
        <img
          class="cardWrapper__detailsImage"
          src="../assets/images/pressure.svg"
          alt=""
        />
        <div class="cardWrapper__detailsData">
          <div class="cardWrapper__detailsText">
            <span>{{ weatherData.pressure }} hPa </span>
            <span>Pressure</span>
          </div>
        </div>
      </div>
      <div class="cardWrapper__humidity">
        <img
          class="cardWrapper__detailsImage"
          src="../assets/images/humidity.svg"
          alt=""
        />
        <div class="cardWrapper__detailsData">
          <div class="cardWrapper__detailsText">
            <span>{{ weatherData.humidity }} % </span>
            <span>Humidity</span>
          </div>
        </div>
      </div>
      <div class="cardWrapper__visibility">
        <img
          class="cardWrapper__detailsImage"
          src="../assets/images/visibility.svg"
          alt=""
        />
        <div class="cardWrapper__detailsData">
          <div class="cardWrapper__detailsText">
            <span>{{ weatherData.visibility }} km</span>
            <span>Visibility</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    weatherData: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss">
@import "../styles/main";
.cardWrapper {
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;

  align-items: center;

  background-color: $bgd-white;
  box-shadow: 0 5px 15px 5px gray;

  &__settings {
    position: absolute;
    top: 2%;
    right: 6%;
  }

  &__header {
    width: 75%;

    h1 {
      margin: 20px 0 12px 0;
      text-align: center;
      font-feature-settings: "clig" off, "liga" off;
      font-family: Poppins;
      font-size: 20px;
      font-style: normal;
      font-weight: 600;
      line-height: 20px; /* 125% */
      letter-spacing: -0.24px;
    }
  }

  &__pic {
    img {
      flex-shrink: 0;
      background: transparent;
    }
  }

  &__dateString {
    margin-bottom: 16px;
    span:nth-child(2) {
      margin: 0 5px;
    }
  }

  &__degValue {
    font-feature-settings: "clig" off, "liga" off;
    font-family: Poppins;
    font-size: 72px;
    font-style: normal;
    font-weight: 600;
    line-height: 120%; /* 86.4px */
    letter-spacing: -0.24px;

    text-shadow: 4px 4px 4px darkgray;
  }

  &__description {
    margin-bottom: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 120%; /*
19.2px */
    letter-spacing: -0.24px;
  }

  &__details {
    width: 90%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    row-gap: 24px;
    column-gap: 15px;
    margin: 10px 0 16px 0;
  }

  &__wind,
  &__pressure,
  &__humidity,
  &__visibility {
    display: flex;
    padding-left: 20px;
  }

  &__detailsImage {
    height: 20px;
    width: 20px;
    margin-right: 6px;
  }

  &__detailsText {
    display: flex;
    flex-direction: column;

    font-feature-settings: "clig" off, "liga" off;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 120%; /* 14.4px */
    letter-spacing: -0.24px;

    span:first-child {
      font-weight: 600;
    }
  }

  hr {
    color: black;
    width: 90%;
  }
}
</style>
