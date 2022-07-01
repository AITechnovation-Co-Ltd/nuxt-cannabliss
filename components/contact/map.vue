<template>
    <!-- Leaflet Street Map -->
    <div class="w-full flex justify-center">
      <div id="map-wrap" class="w-full h-96 px-20 py-2  z-0">
        <client-only>
          <l-map @ready="ready" :zoom="16" :center="[13.7194164,100.5846806]" class="rounded-xl">
            <l-tile-layer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"></l-tile-layer>
            <l-marker :lat-lng="[13.7194164,100.5846806]" ref="marker">
              <l-popup> Cannabliss </l-popup>
              <l-icon :icon-size="[30, 40]" :icon-anchor="[15, 40]" :popup-anchor="[1, -35]"
                :icon-url="require('~/static/images/IMG_05contacts/me-location.png')">
              </l-icon>
            </l-marker>
          </l-map>
        </client-only>
      </div>
    </div>
</template>

<script>
export default {
  layout: "user",
  methods: {
    ready() {
      this.$refs.marker.mapObject.openPopup();
    },
  },
};
</script>
