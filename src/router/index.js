import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  // {
  //   path: "/",
  //   name: "Content",
  //   component: Content,
  // },
  // {
  //   path: "/dt",
  //   name: "Digitaltwin",
  //   component: Digitaltwin,
  // },
  // {
  //   path: "/iot",
  //   name: "IoT",
  //   component: IoT,
  // },
  // {
  //   path: "/fd",
  //   name: "FireDetection",
  //   component: FireDetection,
  // },
];

const router = new VueRouter({
  routes,
});

export default router;
