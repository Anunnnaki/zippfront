<template>
  <v-row>
    <v-col cols="12" class="mb-n6">
      <Input
        label="Nombre de la zona"
        :model.sync="zoneItemNameZone"
        :rules="[(v) => !!v || 'El nombre de la zona es necesario']"
      />
    </v-col>
    <v-col cols="12" class="mb-n6">
      <Input
        label="Direccion"
        :model.sync="zoneItemAddressZone"
        :rules="[(v) => !!v || 'La direccion es necesaria']"
      />
    </v-col>
    <v-col cols="12" class="mb-n6">
      <Input
        label="GPS"
        :model.sync="zoneItemGps"
        :rules="[
          (v) => !!v || 'El gps es necesario',
          (v) => !isNaN(v) || 'Solo se aceptan numeros',
        ]"
      />
    </v-col>
    <v-col cols="12" class="mb-n6">
      <Input
        label="Tipos"
        :model.sync="zoneItemTipo"
        :rules="[(v) => !!v || 'El tipo es necesario']"
      />
    </v-col>
    <v-col cols="12" class="mb-n6">
      <Input
        label="Disponibilidad"
        :model.sync="zoneItemDispo"
        :rules="[(v) => !!v || 'La disponibilidad es necesaria']"
      />
    </v-col>
    <v-col cols="12">
      <Input
        label="Valor"
        :model.sync="zoneItemValor"
        :rules="[
          (v) => !!v || 'El valor es necesario',
          (v) => !isNaN(v) || 'Solo se aceptan numeros',
        ]"
      />
    </v-col>
  </v-row>
</template>

<script>
import { zoneController } from "~/controllers/zoneController";
import { propertiesGenerator } from "~/plugins/helpers";
import { VModelZone } from "~/interfaces/zone.interface";
import { mapGetters } from "vuex";

export default {
  props: {
    isDialog: {
      type: Boolean,
      default: null,
    },
    methodSendForm: {
      type: Function,
      default: () => null,
    },
    paramForm: {
      type: Object,
      default: () => {},
    },
  },

  watch: {
    zoneItemValor(val) {
      this.zoneItemValor = Number(val);
    },
    zoneItemGps(val) {
      this.zoneItemGps = Number(val);
    },
    isDialog(val) {
      if (val) {
        this.dataSendForm();
      }
    },
  },

  created() {
    this.dataSendForm();
  },

  computed: {
    ...mapGetters("zone.store", ["editedZone"]),
    ...propertiesGenerator(VModelZone, {
      path: "zone.store",
      mut: "zone.store/setProperty",
    }),
  },
  methods: {
    postZone: zoneController.post.zone,
    putZone: zoneController.put.zone,

    dataSendForm() {
      this.$emit(
        "update:methodSendForm",
        !this.editedZone._id ? this.postZone : this.putZone
      );
      this.$emit("update:paramForm", this.editedZone);
    },
  },
};
</script>