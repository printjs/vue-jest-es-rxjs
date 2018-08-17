import Vue from "vue";
import {
    App
} from "@views/app";
import VueRx from "vue-rx";




Vue.use(VueRx);
export const app = new Vue({
    el: "#app",
    render: h => h(App)
});