import Vue from "vue";
import vuetoast from "vue-toast-notification";
//Import one of the available themes
import "vue-toast-notification/dist/theme-default.css";
//import "vue-toast-notification/dist/theme-sugar.css";

Vue.use(vuetoast);

export default new vuetoast({});
