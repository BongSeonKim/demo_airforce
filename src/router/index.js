import Vue from "vue";
import VueRouter from "vue-router";
//import Login from "../views/Login.vue";
import MainView from "../views/MainView.vue";

Vue.use(VueRouter);

const routes = [
  // {
  //   path: "/",
  //   name: "login",
  //   component: Login,
  // },
  {
    path: "/",
    name: "mainview",
    component: MainView,
  },
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
