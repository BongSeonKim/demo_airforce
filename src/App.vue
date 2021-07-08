<template>
  <v-app id="inspire">
    <navig @route="routeContent"></navig>
    <keep-alive>
      <component :is="routePath"> </component>
    </keep-alive>
    <!-- <router-view></router-view> -->
    <!-- <Contentlayout></Contentlayout> -->
    <div class="black"></div>
  </v-app>
</template>
<script>
import navig from "@/components/Navigation.vue";
import Content from "@/views/Content.vue";
import Digitaltwin from "@/views/DigitalTwin.vue";
import IoT from "@/views/IoT.vue";
import FireDetection from "@/views/FireDetection.vue";

export default {
  name: "App",
  components: {
    navig: navig,
    Content,
    Digitaltwin,
    IoT,
    FireDetection,
    //Contentlayout,
  },
  data() {
    return {
      routePath: Content,
    };
  },
  methods: {
    routeContent(key) {
      if (key === "main") {
        this.routePath = Content;
      } else if (key === "dt") {
        this.routePath = Digitaltwin;
      } else if (key === "iot") {
        this.routePath = IoT;
      } else if (key === "fd") {
        this.routePath = FireDetection;
      }
    },
  },
};
</script>

<style></style>
