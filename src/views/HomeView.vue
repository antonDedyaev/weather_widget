<template>
  <div
    class="homepageWrapper"
    :class="{ homepageWrapper_empty: locations.length === 0 }"
  >
    <div class="homepageWrapper__settings" @click="$router.push('/settings')">
      <img src="../assets/images/gear.svg" alt="settings icon" />
    </div>
    <div v-if="locations.length === 0">
      <div class="homepageWrapper__warning">
        <img
          src="../assets/images/alert-triangle.svg"
          alt="No locations added warning"
        />

        <span>No locations added</span>
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
      setError: "setError",
    }),
    ...mapActions(["checkLocations"]),
  },
  computed: {
    ...mapState({
      dataFetched: (state: State) => state.dataFetched,
      locations: (state: State) => state.locations,
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
    box-shadow: 0 2px 10px 3px $shadow-gray;
  }

  &__warning {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 50px 0;

    font-size: 22px;
    text-align: center;
  }
}
</style>
