<template>
  <v-container fluid>
    <Toolbar class="mb-8" title="Zonas" :actionButton="openModal" />
    <Table :items="table.items">
      <template slot="actions" slot-scope="{ item }">
        <v-icon small class="mr-2" @click="editItem(item)"> mdi-pencil </v-icon>
        <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
      </template>
    </Table>
    <Dialog
      :isDialog.sync="dialog.isDialog"
      :title="!editedZone._id ? 'Crear zona' : 'Editar zona'"
    />
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
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

    editItem(item) {
      // console.log("🚀 ~ file: zones.vue ~ line 49 ~ editItem ~ item", item);
      // console.log(this.table.items.indexOf(item));
      // this.editedIndex = this.desserts.indexOf(item);
      // this.editedItem = Object.assign({}, item);
      // Object.assign(this.editedZone, item);
      $nuxt.$store.dispatch("zone.store/actUpdateValue", {
        key: "editedZone",
        value: item,
      });
      this.dialog.isDialog = true;
      // this.dialog = true;
    },

    // deleteItem(item) {
    //   this.editedIndex = this.desserts.indexOf(item);
    //   this.editedItem = Object.assign({}, item);
    //   this.dialogDelete = true;
    // },

    // deleteItemConfirm() {
    //   this.desserts.splice(this.editedIndex, 1);
    //   this.closeDelete();
    // },

    // close() {
    //   this.dialog = false;
    //   this.$nextTick(() => {
    //     this.editedItem = Object.assign({}, this.defaultItem);
    //     this.editedIndex = -1;
    //   });
    // },

    // closeDelete() {
    //   this.dialogDelete = false;
    //   this.$nextTick(() => {
    //     this.editedItem = Object.assign({}, this.defaultItem);
    //     this.editedIndex = -1;
    //   });
    // },

    // save() {
    //   if (this.editedIndex > -1) {
    //     Object.assign(this.desserts[this.editedIndex], this.editedItem);
    //   } else {
    //     this.desserts.push(this.editedItem);
    //   }
    //   this.close();
    // },
  },

  computed: {
    ...mapGetters("zone.store", ["editedZone"]),
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