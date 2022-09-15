<template>
  <v-container fluid>
    <Toolbar class="mb-8" title="Zonas" />
    <Table :items="table.items" />
  </v-container>
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
    // postZone: zoneController.post.zones,

    // actionButton() {
    //   console.log("ok");
    // },
  },
};
</script>

<style>
</style>