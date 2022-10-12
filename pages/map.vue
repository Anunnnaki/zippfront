<template>
  <div class="fill-height">
    <Map :items="items" />
  </div>
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
