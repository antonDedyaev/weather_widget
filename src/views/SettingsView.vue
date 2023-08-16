<template>
  <div class="settingsWrapper">
    <div class="settingsWrapper__header">
      <span>Settings</span>
      <img
        src="../assets/images/close.svg"
        alt="Close icon"
        @click="$router.push('/')"
      />
    </div>
    <div
      class="settingsWrapper__locations"
      v-for="location in locations"
      :key="location.id"
    >
      <LocationCard
        :id="location.id"
        :city="location.name"
        :country="location.country"
        @dragstart="startDrag($event, location)"
        @drop="onDrop($event, location)"
        @dragenter.prevent
        @dragover.prevent="$event.currentTarget.style.background = 'darkgray'"
        @dragleave="$event.currentTarget.style.background = 'lightgray'"
        @touchstart="onTouchDragStart($event, location)"
        @touchmove="onTouchDragMove"
        @touchend="onTouchDrop($event, location)"
      />
    </div>
    <div class="settingsWrapper__locationControl">
      <span>Add location:</span>
      <div class="settingsWrapper__locationInput">
        <input
          type="text"
          :value="searchQuery"
          @input="($event) => setSearchQuery(($event.target as HTMLInputElement).value)"
          :autofocus="true"
          @keyup.enter="fetchWeather(searchQuery)"
        />
        <img src="../assets/images/arrow-enter.svg" alt="Enter arrow" />
      </div>
      <div
        class="settingsWrapper__warnMessage"
        :class="{
          settingsWrapper__warnMessage_active: errors && searchQuery === '',
        }"
      >
        No matching locations!
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { State, defineComponent } from "vue";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { mapState, mapActions, mapMutations } from "vuex";
import LocationCard from "@/components/LocationCard.vue";

import ILocation from "@/models/ILocation";

export default defineComponent({
  components: {
    LocationCard,
  },
  data() {
    return {
      dropOverID: null,
    };
  },
  methods: {
    ...mapMutations({
      setSearchQuery: "setSearchQuery",
      setError: "setError",
    }),
    ...mapActions(["fetchWeather", "checkLocations"]),

    startDrag(event: DragEvent, location: ILocation) {
      if (event.dataTransfer) {
        event.dataTransfer.dropEffect = "move";
        event.dataTransfer.effectAllowed = "move";
        event.dataTransfer.setData("locationID", String(location.id));
      }
    },
    onDrop(event: DragEvent, location: ILocation) {
      const draggedLocationID = Number(
        event.dataTransfer?.getData("locationID")
      );
      const draggedLocation: ILocation = this.locations.find(
        (location: ILocation) => location.id === draggedLocationID
      );
      const fixedLocationOrder = draggedLocation.order;
      draggedLocation.order = location.order;
      location.order = fixedLocationOrder;
      if (event.currentTarget)
        (event.currentTarget as HTMLDivElement).style.background = "lightgray";
      localStorage.setItem("locations", JSON.stringify(this.locations));
    },
    onTouchDragStart($event: TouchEvent) {
      if ($event)
        this.currentId = ($event.currentTarget as HTMLDivElement).dataset.id;
    },
    onTouchDragMove($event: TouchEvent) {
      if ($event) {
        const coordX = $event.changedTouches[0].clientX;
        const coordY = $event.changedTouches[0].clientY;
        const target = document.elementFromPoint(coordX, coordY)?.parentElement;
        if (target?.parentElement?.matches(".locationCardWrapper")) {
          target.parentElement.style.background = "$shadow-gray";
          this.dropOverID = target.parentElement.dataset.id;
        }
      }
    },
    onTouchDrop($event: TouchEvent, location: ILocation) {
      if (
        !($event.target as HTMLDivElement).matches(
          ".locationCardWrapper__remove"
        )
      ) {
        const dropOverLocation: ILocation = this.locations.find(
          (location: ILocation) => {
            return location.id === Number(this.dropOverID);
          }
        );

        const fixedLocationOrder = dropOverLocation.order;
        dropOverLocation.order = location.order;
        location.order = fixedLocationOrder;
        localStorage.setItem("locations", JSON.stringify(this.locations));
      }
    },
  },
  computed: {
    ...mapState({
      searchQuery: (state: State) => state.searchQuery,
      locations: (state: State) =>
        state.locations.sort((a, b) => a.order - b.order),
      errors: (state: State) => state.errors,
    }),
  },
  mounted() {
    this.checkLocations();
    this.setSearchQuery("");
    this.setError(false);
  },
});
</script>

<style lang="scss">
@import "../styles/main";
.settingsWrapper {
  display: flex;
  max-width: 300px;

  flex-direction: column;
  margin-top: 10px;
  margin-left: 5px;
  padding: 20px;

  border-radius: 5px;
  box-shadow: 0 5px 10px 3px $shadow-gray;

  &__header {
    display: flex;

    justify-content: space-between;

    margin-bottom: 20px;

    font-size: 20px;
    font-weight: 600;

    img:hover {
      animation: zoomIn 0.5s ease;
    }
  }

  &__locationControl {
    margin-top: 40px;
    margin-bottom: 40px;

    span {
      font-weight: 600;
    }
  }

  @keyframes zoomIn {
    from {
      transform: scale(1) rotate(0deg);
    }
    to {
      transform: scale(1.5) rotate(180deg);
    }
  }

  &__locationInput {
    display: flex;
    gap: 5px;
    margin-top: 5px;

    input {
      width: 80%;
      padding: 6px 15px;
      border: 1px solid $dark-blue;
      border-radius: 4px;

      font-size: 20px;

      box-shadow: 0px 8px 12px 4px $shadow-gray;
    }
  }
  &__warnMessage {
    max-height: 0px;
    width: 80%;
    padding: 14px 5px 10px 5px;
    box-shadow: 0 0 12px 4px $shadow-gray;
    color: red;
    text-shadow: 0 0 2px orange;
    opacity: 0;

    border-radius: 0 0 5px 5px;

    text-align: center;
    &_active {
      max-height: 50px;
      opacity: 1;

      transition: max-height 0.4s, opacity 1s;
    }
  }
}
</style>
