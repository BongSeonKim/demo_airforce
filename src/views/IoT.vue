<template>
  <v-main class="ma-0 pa-0 black">
    <v-container
      class="ma-0 pa-0 black"
      fluid
      style="height: 100vh; width: 100vw"
    >
      <iframe
        src="http://file.rozetatech.com:3000/grafana/d/RrGLp3R7z/test_airforce?orgId=1&refresh=5s&kiosk"
        width="100%"
        height="100%"
        frameborder="0"
      ></iframe>
    </v-container>
  </v-main>
</template>

<script>
export default {
  name: "IoT",

  components: {},

  directives: {},

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped></style>
