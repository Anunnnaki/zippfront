<template>
  <v-container fluid>
    <Toolbar class="mb-8" title="Zonas" :actionButton="openModal" />
    <Table :items="table.items" />
    <Dialog :isDialog.sync="dialog.isDialog" title="Crear zona" />
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
      dialog: {
        isDialog: false,
      },
    };
  },

  async fetch() {
    this.table.items = await this.getZones();
  },
  methods: {
    getZones: zoneController.get.zones,
    // postZone: zoneController.post.zones,
    openModal() {
      this.dialog.isDialog = true;
      // this.dialog.isOpen = true;
    },

    // actionButton() {
    //   console.log("ok");
    // },
  },
  // created() {
  //   $nuxt.$on("actionButton", () => {
  //     console.log("ok");
  //   });
  // },
};
</script>

<style>
</style>