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

  watch: {
    "$fetchState.pending"(val) {
      $nuxt.$store.dispatch("app/actUpdateValue", {
        key: "isLoading",
        value: val,
      });
    },
  },

  methods: {
    getZones: zoneController.get.zones,

    clickMap() {
      console.log("ok");
    },
  },
};
</script>
