<template>
  <v-row>
    <v-col cols="12" class="pa-0 pt-3">
      <LazyMap :items="[]" :clickMap="clickMap" />
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
