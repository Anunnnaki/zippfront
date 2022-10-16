<template>
  <client-only>
    <l-map
      :zoom="15"
      :center="[5.063113580516123, -75.50212878432099]"
      @click="clickMap"
    >
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
          <MapPopupInfoZone />
        </l-marker>
      </template>
    </l-map>
  </client-only>
</template>

<script>
import L from "leaflet";

export default {
  props: {
    clickMap: {
      type: Function,
      default: () => null,
    },
    items: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      icon: L.icon({
        iconUrl: "img/logo_zipp_map.svg",
        iconSize: [60, 60],
        iconAnchor: [16, 37],
      }),
    };
  },
};
</script>
