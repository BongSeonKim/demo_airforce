<template>
  <v-app id="inspire">
    <navig></navig>
    <Contentlayout></Contentlayout>
    <div class="black"></div>
  </v-app>
</template>
<script>
import navig from "@/components/Navigation.vue";
import Contentlayout from "@/views/Content.vue";

export default {
  name: "App",
  components: {
    navig: navig,
    Contentlayout,
  },
};
</script>

<style></style>
