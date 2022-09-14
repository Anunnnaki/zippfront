<template>
  <Table :items="table.items" />
</template>

<script>
import { zoneController } from "~/controllers/zoneController";

export default {
  middleware: "auth",

  data() {
    return {
      table: {
        items: [],
      },
    };
  },

  async fetch() {
    this.table.items = await this.getZones();
  },
  methods: {
    getZones: zoneController.get.zones,
  },
};
</script>

<style>
</style>