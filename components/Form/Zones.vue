<template>
  <v-row>
    <v-col cols="12" class="mb-n6">
      <Input
        label="Nombre de la zona"
        :model.sync="model.nameZone"
        :rules="[(v) => !!v || 'El nombre de la zona es necesario']"
      />
    </v-col>
    <v-col cols="12" class="mb-n6">
      <Input
        label="Direccion"
        :model.sync="model.addressZone"
        :rules="[(v) => !!v || 'La direccion es necesaria']"
      />
    </v-col>
    <v-col cols="12" class="mb-n6">
      <Input
        label="GPS"
        :model.sync="model.gps"
        :rules="[
          (v) => !!v || 'El gps es necesario',
          (v) => !isNaN(v) || 'Solo se aceptan numeros',
        ]"
      />
    </v-col>
    <v-col cols="12" class="mb-n6">
      <Input
        label="Tipos"
        :model.sync="model.tipo"
        :rules="[(v) => !!v || 'El tipo es necesario']"
      />
    </v-col>
    <v-col cols="12" class="mb-n6">
      <Input
        label="Disponibilidad"
        :model.sync="model.dispo"
        :rules="[(v) => !!v || 'La disponibilidad es necesaria']"
      />
    </v-col>
    <v-col cols="12">
      <Input
        label="Valor"
        :model.sync="model.valor"
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

export default {
  props: {
    methodSendForm: {
      type: Function,
      default: () => null,
    },
    paramForm: {
      type: Object,
      default: () => {},
    },
  },

  data() {
    return {
      model: {
        nameZone: "",
        addressZone: "",
        gps: 0,
        tipo: "",
        dispo: "",
        valor: 0,
      },
    };
  },
  watch: {
    "model.valor"(val) {
      this.model.valor = Number(val);
    },
    "model.gps"(val) {
      this.model.gps = Number(val);
    },
  },

  created() {
    this.$emit("update:methodSendForm", this.postZone);
    this.$emit("update:paramForm", this.model);
  },

  methods: {
    postZone: zoneController.post.zone,
  },
};
</script>