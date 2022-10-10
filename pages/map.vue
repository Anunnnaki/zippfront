<template>
  <Map :items="items" />
</template>

<script>
import { zoneController } from "~/controllers/zoneController";

export default {
  middleware: "auth",

  data() {
    return {
      items: [],
    };
  },

  async fetch() {
    const zones = await this.getZones();
    this.items = zones;
  },
  methods: {
    getZones: zoneController.get.zones,

    clickMap() {
      console.log("ok");
    },
  },
};
</script>
<<<<<<< HEAD =======

<style></style>
>>>>>>> release/0.1.0
