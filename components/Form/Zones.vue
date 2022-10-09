<template>
  <v-container fill-height>
    <v-row>
      <!-- Mapa -->
      <v-col cols="6">
        <v-card style="height: calc(100vh - 250px)">
          <LazyMap :key="key"
        /></v-card>
      </v-col>
      <!-- Formulario -->
      <v-col cols="6">
        <v-row>
          <v-col cols="12" class="mb-n6">
            <Input
              label="Nombre de la zona"
              :model.sync="zoneItemNameZone"
              :rules="rules.zoneItemNameZone"
            />
          </v-col>
          <v-col cols="12" class="mb-n6">
            <Input
              label="Direccion de la zona"
              :model.sync="zoneItemAddressZone"
              :rules="rules.zoneItemAddressZone"
            />
          </v-col>
          <!-- <v-col cols="12" class="mb-n6">
              <Input
                label="GPS"
                :model.sync="zoneItemGps"
                :rules="rules.zoneItemGps"
              />
            </v-col> -->
          <v-col cols="12" class="mb-n6">
            <Input
              label="Tipos"
              :model.sync="zoneItemTipo"
              :rules="rules.zoneItemTipo"
            />
          </v-col>
          <v-col cols="12" class="mb-n6">
            <Input
              label="Disponibilidad"
              :model.sync="zoneItemDispo"
              :rules="rules.zoneItemDispo"
            />
          </v-col>
          <!-- <v-col cols="12">
              <Input
                label="Valor"
                :model.sync="zoneItemValor"
                :rules="rules.zoneItemValor"
              />
            </v-col> -->
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { zoneController } from "~/controllers/zoneController";
import { propertiesGenerator } from "~/plugins/helpers";
import { VModelZone } from "~/interfaces/zone.interface";
import { mapGetters } from "vuex";
import { Regex } from "~/plugins/regex";

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

  data() {
    return {
      key: 0,
      rules: {
        zoneItemNameZone: [
          (v) => !!v || "El nombre de la zona es requerido",
          (v) => Regex.onlyString.test(v) || "Solo se aceptan letras",
        ],
        zoneItemAddressZone: [
          (v) => !!v || "La direccion de la zona es requerida",
          (v) => Regex.onlyAddress.test(v) || "Direccion invalida",
        ],
        // zoneItemGps: [(v) => !!v || "El nombre de la zona es requerido"],
        zoneItemTipo: [(v) => !!v || "El tipo de la zona es requerido"],
        zoneItemDispo: [
          (v) => !!v || "La disponibilidad de la zona es requerido",
        ],
        // zoneItemValor: [(v) => !!v || "El nombre de la zona es requerido"],
      },
    };
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

  mounted() {
    this.key = 0;
    setTimeout(() => {
      this.key = 1;
    }, 100);
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
