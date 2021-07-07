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
      <v-btn>
        Home
      </v-btn>
      <v-btn>
        Digital Twin
      </v-btn>
      <v-btn>
        IoT감지기현황
      </v-btn>
      <v-btn>
        영상분석현황
      </v-btn>
    </v-btn-toggle>
    <!-- <v-spacer></v-spacer> -->
  </v-app-bar>
</template>
<script>
export default {};
</script>
