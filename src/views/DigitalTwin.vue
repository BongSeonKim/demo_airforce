<template>
  <v-main class="ma-0 pa-0 black">
    <v-container
      class="ma-0 pa-0 black"
      fluid
      style="height: 100%; width: 100%"
    >
      <iframe
        src="http://file.rozetatech.com:8090/index"
        width="100%"
        height="100%"
        frameborder="0"
      ></iframe>
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
