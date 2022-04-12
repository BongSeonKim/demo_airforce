import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
//import { vuetoast } from "./plugins/vuetoast";
import router from "./router";
import AxiosPlugin from "vue-axios-cors";
import { store } from "./plugins/store.js";

Vue.config.productionTip = false;

new Vue({
  vuetify,
  AxiosPlugin,
  store: store,
  //vuetoast: vuetoast,
  router,
  render: (h) => h(App),
}).$mount("#app");
