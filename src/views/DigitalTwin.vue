<template>
  <v-main class="ma-0 pa-0 black">
    <v-container
      class="ma-0 pa-0 black"
      fluid
      style="height: 100%; width: 100%"
    >
      <!-- <iframe
        src="http://10.20.21.19:8090/index"
        width="100%"
        height="100%"
        frameborder="0"
      ></iframe> -->
      <iframe
        src="http://dt.rozetatech.com:8090/index"
        width="100%"
        height="100%"
        frameborder="0"
      ></iframe>

      <!-- <v-card height="80"><v-card-title></v-card-title></v-card>
      <v-card width="100vw" height="100vh"
        ><v-card-title color="white">DT</v-card-title></v-card
      > -->
    </v-container>
  </v-main>
</template>

<script>
export default {
  name: "DigitalTwin",

  components: {},

  directives: {},

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss">
html {
  overflow-y: hidden;
  overflow-x: hidden;
}
</style>
