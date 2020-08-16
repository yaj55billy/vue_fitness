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

Vue.prototype.$bus = new Vue();

Vue.filter('toThousands', (para) => {
  const parts = para.toString().split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return parts.join('.');
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
