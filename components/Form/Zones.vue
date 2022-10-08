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
            :rules="rules.zoneItemNameZone"
          />
        </v-col>
        <v-col cols="12" class="mb-n6">
          <Input
            label="Direccion"
            :model.sync="zoneItemAddressZone"
            :rules="rules.zoneItemAddressZone"
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
          <v-select
            v-model="zoneItemTipo"
            dense
            :items="selectItemsType"
            item-text="type"
            :rules="[(v) => !!v || 'El tipo es necesario']"
            item-value="id"
            label="Tipo"
            outlined
            rounded
          ></v-select>
        </v-col>
        <v-col cols="12" class="mb-n6">
          <v-select
            v-model="zoneItemDispo"
            dense
            label="Diponibilidad"
            :items="selectItemsDispo"
            :rules="[(v) => !!v || 'La disponibilidad es necesaria']"
            item-text="time"
            item-value="id"
            outlined
            rounded
          ></v-select>
        </v-col>
        <v-col cols="12" v-if="valor">
          <v-card
            class="secondary pa-2 text-center text-body-1 rounded-lg elevation-0"
          >
            <span class="white--text">Tarifa del servicio</span><br />
            <span class="primary--text"> {{ valor }}</span>
          </v-card>
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
      rules: {
        zoneItemNameZone: [
          (v) => !!v || "El nombre de la zona es requerida",
          (v) => Regex.onlyLetters.test(v) || "Solo se aceptan letras",
        ],
        zoneItemAddressZone: [
          (v) => !!v || "La direccion de la zona es requerida",
          (v) => Regex.onlyAdress.test(v) || "Direccion invalida",
        ],
      },
      items: [],
      selectItemsType: [
        {
          id: 1,
          type: "Carro",
          price: 2500,
        },
        {
          id: 2,
          type: "Motocicleta",
          price: 2000,
        },
        {
          id: 3,
          type: "Bicicleta",
          price: 1500,
        },
        {
          id: 4,
          type: "skooter",
          price: 1500,
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

  created() {
    this.dataSendForm();
  },

  computed: {
    ...mapGetters("zone.store", ["editedZone"]),
    ...propertiesGenerator(VModelZone, {
      path: "zone.store",
      mut: "zone.store/setProperty",
    }),

    valor() {
      const itemAvailable = this.selectItemsDispo.find(
        (v) => v.id === this.zoneItemDispo
      );

      const itemType = this.selectItemsType.find(
        (v) => v.id === this.zoneItemTipo
      );
      if (!itemAvailable || !itemType) {
        return null;
      }
      return this.formatMoney(itemAvailable.value * itemType.price);
    },
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
      this.items = [];
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

    formatMoney(value) {
      const formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 0,
      });

      return formatter.format(value);
    },
  },
};
</script>
