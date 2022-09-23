<template>
  <div id="map-wrap" style="height: 500px; width: 500px">
    <client-only>
      <l-map :zoom="13" :center="[5.063113580516123, -75.50212878432099]">
        <l-tile-layer
          url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
        ></l-tile-layer>
        <l-marker
          :lat-lng="[5.063113580516123, -75.50212878432099]"
          :icon="icon"
        >
        </l-marker>
      </l-map>
    </client-only>
  </div>
</template>

<script>
import L from "leaflet";
export default {
  data() {
    return {
      icon: L.icon({
        iconUrl: "/img/zipp_logo.png",
        iconSize: [50, 50],
        iconAnchor: [16, 37],
      }),
    };
  },
};
</script>

<style>
</style>