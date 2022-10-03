<template>
  <v-row class="mb-2">
    <v-col :cols="items.length ? '8' : ''">
      <LazyMap :items="items" height="500px" :clickMap="addMarker" />
    </v-col>
    <v-col cols="4" v-if="items.length ? true : false">
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
          <!-- {{ (zoneItemGps = items.length ? items[0].gps : zoneItemGps) }} -->
          <!-- <Input
            label="GPS"
            :model.sync="zoneItemGps"
            :rules="[
              (v) => !!v || 'El gps es necesario',
              (v) => !isNaN(v) || 'Solo se aceptan numeros',
            ]"
          /> -->
        </v-col>
        <v-col cols="12" class="mb-n6">
          <!-- <Input
            label="Tipos"
            :model.sync="zoneItemTipo"
            :rules="[(v) => !!v || 'El tipo es necesario']"
          /> -->
          {{ zoneItemTipo }}
          <v-select
            v-model="zoneItemTipo"
            dense
            :items="selectItemsType"
            item-text="type"
            item-value="type"
            label="Tipo"
            outlined
            rounded
          ></v-select>
        </v-col>
        <v-col cols="12" class="mb-n6">
          <!-- <Input
            label="Disponibilidad"
            :model.sync="zoneItemDispo"
            :rules="[(v) => !!v || 'La disponibilidad es necesaria']"
          /> -->
          <v-select
            dense
            label="Diponibilidad"
            :items="selectItemsDispo"
            item-text="time"
            item-value="id"
            outlined
            rounded
          ></v-select>
        </v-col>
        <v-col cols="12">
          {{ zoneItemValor }}
          <!-- <Input
            label="Valor"
            :model.sync="zoneItemValor"
            :rules="[
              (v) => !!v || 'El valor es necesario',
              (v) => !isNaN(v) || 'Solo se aceptan numeros',
            ]"
          /> -->
        </v-col>
      </v-row>
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
  data() {
    return {
      items: [],
      selectItemsType: [
        {
          id: 1,
          type: "Carro",
        },
        {
          id: 2,
          type: "Motocicleta",
        },
        {
          id: 3,
          type: "Bicicleta",
        },
        {
          id: 4,
          type: "skooter",
        },
      ],
      selectItemsDispo: [
        {
          id: 1,
          time: "1 hora",
          value: 1,
        },
        {
          id: 2,
          time: "2 horas",
          value: 2,
        },
        {
          id: 3,
          time: "3 horas",
          value: 3,
        },
        {
          id: 4,
          time: "4 horas",
          value: 4,
        },
        {
          id: 5,
          time: "5 horas",
          value: 5,
        },
      ],
    };
  },

  watch: {
    zoneItemValor(val) {
      this.zoneItemValor = Number(val);
    },
    // zoneItemGps(val) {
    //   this.zoneItemGps = Number(val);
    // },
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

    addMarker({ containerPoint, latlng }) {
      const gps = {
        latitud: latlng.lat,
        longitud: latlng.lng,
      };

      this.items = [
        {
          id: containerPoint.y,
          gps,
        },
      ];
      this.zoneItemGps = gps;
    },
  },
};
</script>
