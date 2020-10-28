import Vue from "vue";
import App from "./components/app/index.vue";
// Registers all shared global components
import "./components/shared";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
