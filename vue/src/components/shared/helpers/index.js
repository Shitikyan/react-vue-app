import Vue from 'vue';
import Container from './container/index.vue';
import TitledBordered from './border/titled/index.vue';
import Bordered from './border/index.vue';
import Grid from './grid/index.vue';
import Loading from './loading/index.vue';

Vue.component('bordered-component', Bordered);
Vue.component('titled-bordered-component', TitledBordered);
Vue.component('loading-component', Loading);
Vue.component('grid-component', Grid);
Vue.component('container-component', Container);
