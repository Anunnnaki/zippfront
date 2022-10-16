<template>
  <!-- <h1 v-if="isLoading">Cargando...</h1> -->
  <div class="loading" v-if="isLoading">
    <semipolar-spinner
      class="ml-15"
      :animation-duration="500"
      :size="150"
      :color="'#bace00'"
    />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { SemipolarSpinner } from "epic-spinners";
// import { OrbitSpinner } from "epic-spinners";

export default {
  components: {
    SemipolarSpinner,
  },
  computed: {
    ...mapGetters("app", ["isLoading"]),
  },
};
</script>

<style>
div .loading {
  background: none;
  backdrop-filter: blur(8px);
  position: absolute;
  z-index: 9999;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
