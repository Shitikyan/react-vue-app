import { isDate } from "lodash";
import Vue from "vue";

Vue.filter("dateStr", (date) =>
  isDate(date) ? new Date(date).toDateString() : "N/A"
);
