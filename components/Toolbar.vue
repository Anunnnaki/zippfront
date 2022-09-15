<template>
  <v-toolbar elevation="1">
    <v-toolbar-title v-text="title" />
    <v-spacer />
    <Button label="Agregar" color="primary" />
  </v-toolbar>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "title",
    },
  },
};
</script>

<style>
</style>