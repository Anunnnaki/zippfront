<template>
  <img class="vuetify-logo" alt="Vuetify Logo" src="/img/zipp_logo.png" />
</template>

<style>
.vuetify-logo {
  height: 50px;
  width: 50px;
  transform: rotateY(560deg);
  animation: turn 3.5s ease-out forwards 1s;
}

@keyframes turn {
  100% {
    transform: rotateY(0deg);
  }
}
</style>
