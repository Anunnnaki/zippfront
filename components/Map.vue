<template>
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
</template>

<script>
import L from "leaflet";
export default {
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      icon: L.icon({
        iconUrl: "/img/zipp_logo_map.png",
        iconSize: [50, 50],
        iconAnchor: [16, 37],
      }),
    };
  },
};
</script>

<style>
</style>