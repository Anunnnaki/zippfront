<template>
  <v-container fluid>
    <Toolbar class="mb-8" title="Zonas" :actionButton="openModal" />
    <Table :headers="headers" :items="table.items">
      <!-- slot-scope="{ item }" -->
      <template slot="actions">
        <!-- <v-icon color="#f7c842" class="mr-2" @click="editItem(item)">
          mdi-pencil
        </v-icon> -->
        <!-- <v-icon color="#E74C3C" @click="deleteItem(item)"> mdi-delete </v-icon> -->
      </template>
    </Table>
    <Dialog
      :isDialog.sync="dialog.isDialog"
      :title="!editedZone._id ? 'Nueva zona' : 'Editar zona'"
      maxWidth="1100px"
    />
    <!-- maxWidth="1100px" -->
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
      headers: [
        {
          text: "Nombre de la zona",
          align: "start",
          sortable: false,
          value: "nameZone",
        },
        // { text: "Direccion", value: "addressZone" },
        // { text: "Tipos", value: "tipo" },
        // { text: "Disponibilidad", value: "dispo" },
        // { text: "Valor", value: "valor" },
        // { text: "Actions", value: "actions", sortable: false },
      ],
    };
  },

  async fetch() {
    this.table.items = await this.getZones();
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
    removeZone: zoneController.remove.zone,
    // postZone: zoneController.post.zones,
    openModal() {
      this.dialog.isDialog = true;
      // this.dialog.isOpen = true;
    },

    // actionButton() {
    //   console.log("ok");
    // },

    editItem(item) {
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

    deleteItem({ _id }) {
      this.removeZone(_id);
      // this.editedIndex = this.desserts.indexOf(item);
      // this.editedItem = Object.assign({}, item);
      // this.dialogDelete = true;
    },

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

<style></style>
