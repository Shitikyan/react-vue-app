import Vue from "vue";

Vue.filter("checkValue", (value) => value ? value : "N/A");
