<template>
  <v-row>
    <v-col cols="12" class="pa-0 pt-3">
      <LazyMap :items="items" />
    </v-col>
  </v-row>
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

<style>
</style>