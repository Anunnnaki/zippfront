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
    this.items = await this.getZones();
  },
  methods: {
    getZones: zoneController.get.zones,
  },
};
</script>

<style></style>
