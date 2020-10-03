import Vue from 'vue';
import axios from 'axios';
import 'bootstrap';
import $ from 'jquery';
import VueAxios from 'vue-axios';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import 'animate.css';
import WOW from 'wow.js';
import {
  ValidationProvider, ValidationObserver, extend, configure,
} from 'vee-validate';
import {
  required,
  email,
  min,
  min_value as minValue,
} from 'vee-validate/dist/rules';
import App from './App.vue';
import router from './router';
import './filters/tothousands';

new WOW().init();

Vue.config.productionTip = false;

window.$ = $;
Vue.component('Loading', Loading);
Vue.use(VueAxios, axios);
Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);
extend('email', {
  ...email,
  message: '請輸入正確的 Email 格式',
});
extend('required', {
  ...required,
  message: '{_field_} 為必填項目',
});
extend('min', {
  ...min,
  message: '請輸入至少 {length} 碼',
});
extend('min_value', {
  ...minValue,
  message: '最少為{min}',
});
configure({
  classes: {
    valid: 'is-valid', // 驗證通過回傳 is-valid
    invalid: 'is-invalid', // 驗證失敗回傳 is-invalid
  },
});

Vue.prototype.$bus = new Vue();

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
