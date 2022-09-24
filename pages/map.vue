<template>
  <v-row>
    <v-col cols="12" class="pa-0 pt-3">
      <div style="height: 100vh; width: 100%">
        <client-only>
          <l-map :zoom="15" :center="[5.063113580516123, -75.50212878432099]">
            <l-tile-layer
              url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
            ></l-tile-layer>
            <!-- <l-marker
              :lat-lng="[5.063113580516123, -75.50212878432099]"
              :icon="icon"
            >
            </l-marker> -->
          </l-map>
        </client-only>
      </div>
    </v-col>
  </v-row>
</template>

<script>
// import L from "leaflet";
export default {
  data() {
    return {
      // icon: L.icon({
      //   iconUrl: "/img/zipp_logo.png",
      //   iconSize: [50, 50],
      //   iconAnchor: [16, 37],
      // }),
    };
  },
};
</script>

<style>
</style>