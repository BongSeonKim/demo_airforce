<template>
  <v-app-bar
    app
    class="d-flex justify-space-between"
    color="black"
    height="80"
    width="100vw"
  >
    <v-img
      src="@/assets/logo_airforce.png"
      :aspect-ratio="16 / 9"
      width="380"
      height="80"
    ></v-img>
    <v-btn-toggle tile group>
      <v-btn x-large @click="routeContent('dt')">
        디지털트윈
      </v-btn>
      <!-- <v-btn @click="routeContent('dt')">
        3D MAP
      </v-btn> -->
      <v-btn x-large @click="routeContent('iot')">
        IoT감지기현황
      </v-btn>
      <!-- <v-btn @click="routeContent('fd')">
        영상분석현황
      </v-btn> -->
    </v-btn-toggle>
    <!-- <v-spacer></v-spacer> -->
  </v-app-bar>
</template>
<script>
export default {
  methods: {
    routeContent(key) {
      if (key === "main") {
        // this.$emit("route", "main");
        this.$emit("route", "dt");
      } else if (key === "dt") {
        this.$emit("route", "dt");
      } else if (key === "iot") {
        this.$emit("route", "iot");
      } else if (key === "fd") {
        this.$emit("route", "fd");
      }
    },
  },
};
</script>
