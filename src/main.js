import Vue from 'vue';
import axios from 'axios';
import 'bootstrap';
import $ from 'jquery';
import VueAxios from 'vue-axios';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

window.$ = $;

Vue.component('Loading', Loading);

Vue.use(VueAxios, axios);

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
