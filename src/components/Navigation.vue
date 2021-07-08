<template>
  <v-app-bar
    app
    class="d-flex justify-start"
    color="black"
    height="100"
    width="100vw"
  >
    <v-img
      src="@/assets/logo_airforce.jpg"
      :aspect-ratio="16 / 9"
      width="290"
      height="100"
    ></v-img>
    <v-btn-toggle tile group>
      <v-btn @click="routeContent('main')">
        Home
      </v-btn>
      <v-btn @click="routeContent('dt')">
        Digital Twin
      </v-btn>
      <v-btn @click="routeContent('iot')">
        IoT감지기현황
      </v-btn>
      <v-btn @click="routeContent('fd')">
        영상분석현황
      </v-btn>
    </v-btn-toggle>
    <!-- <v-spacer></v-spacer> -->
  </v-app-bar>
</template>
<script>
export default {
  methods: {
    routeContent(key) {
      if (key === "main") {
        this.$emit("route", "main");
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
