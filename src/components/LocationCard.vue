<template>
  <div class="locationCardWrapper" draggable="true" :data-id="id">
    <div class="locationCardWrapper__content">
      <img
        src="../assets/images/hamburger.svg"
        alt="Drag icon"
        draggable="false"
        class="test"
      />
      <span>{{ city }}, {{ country }}</span>
      <img
        class="locationCardWrapper__remove"
        src="../assets/images/bin.svg"
        alt="Waste bin icon"
        @click="removeLocation(id)"
      />
    </div>
  </div>
</template>

<script lang="ts">
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
import { mapMutations } from "vuex";

export default {
  props: {
    id: { type: Number, required: true },
    city: {
      type: String,
      required: true,
    },
    country: { type: String, required: true },
  },
  methods: {
    ...mapMutations({ removeLocation: "removeLocation" }),
  },
};
</script>

<style lang="scss">
@import "../styles/main";
.locationCardWrapper {
  display: flex;
  margin-bottom: 15px;
  padding: 10px;

  background: $bgd-gray;

  box-shadow: 0px 5px 10px 3px $shadow-gray;

  &:hover {
    transform: scale(1.1);
    transition: all 0.4s ease;
  }

  &:not(hover) {
    transform: scale(1);
    transition: all 0.4s ease;
  }

  &__content {
    display: flex;
    align-items: center;
    width: 100%;

    span {
      margin-left: 10px;
    }

    img:first-child {
      cursor: grab;
    }

    img:last-child {
      margin-left: auto;
      cursor: pointer;

      &:hover {
        filter: invert(21%) sepia(100%) saturate(7414%) hue-rotate(359deg)
          brightness(94%) contrast(117%);
      }
    }
  }
}
</style>
