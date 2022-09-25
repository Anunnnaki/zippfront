<template>
  <v-row>
    <v-col cols="12" class="pa-0 pt-3">
      <div style="height: 100vh; width: 100%">
        <client-only>
          <l-map :zoom="15" :center="[5.063113580516123, -75.50212878432099]">
            <l-tile-layer
              url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
            ></l-tile-layer>
            <template v-for="(item, i) in items">
              <l-marker
                v-if="item.gps.longitud !== 3546363"
                :key="i"
                :lat-lng="[item.gps.latitud, item.gps.longitud]"
                :icon="icon"
              >
              </l-marker>
            </template>
          </l-map>
        </client-only>
      </div>
    </v-col>
  </v-row>
</template>

<script>
import { zoneController } from "~/controllers/zoneController";
import L from "leaflet";

export default {
  middleware: "auth",

  data() {
    return {
      items: [],
      icon: L.icon({
        iconUrl: "/img/zipp_logo_map.png",
        iconSize: [50, 50],
        iconAnchor: [16, 37],
      }),
    };
  },
  async fetch() {
    this.items = await this.getZones();
  },
  methods: {
    getZones: zoneController.get.zones,
  },
};
</script>

<style>
</style>