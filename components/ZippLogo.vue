<template>
  <img
    :class="{ 'vuetify-logo': animation === true }"
    alt="Vuetify Logo"
    src="/img/zipp_logo.png"
    :style="`width: ${width}px; height: ${height}px`"
  />
</template>

<script>
export default {
  props: {
    animation: {
      type: Boolean,
      default: true,
    },
    width: {
      type: Number,
      default: 50,
    },
    height: {
      type: Number,
      default: 50,
    },
  },
};
</script>

<style>
.vuetify-logo {
  /* height: 70px;
  width: 70px; */
  transform: rotateY(560deg);
  animation: turn 3.5s ease-out forwards 1s;
}

@keyframes turn {
  100% {
    transform: rotateY(0deg);
  }
}
</style>
