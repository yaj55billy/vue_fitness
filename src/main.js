import Vue from 'vue';
import axios from 'axios';
import 'bootstrap';
import $ from 'jquery';
import VueAxios from 'vue-axios';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

import 'animate.css';
import WOW from 'wow.js';
// VeeValidate
// https://logaretm.github.io/vee-validate/guide/rules.html#rules
import {
  ValidationProvider, ValidationObserver, extend, configure,
} from 'vee-validate';
import {
  required,
  email,
  min,
  min_value as minValue,
  // max_value as maxValue,
} from 'vee-validate/dist/rules';

/* 驗證相關 import END */
import App from './App.vue';
import router from './router';
/* 驗證相關 import Start */

new WOW().init();

Vue.config.productionTip = false;

window.$ = $;

Vue.component('Loading', Loading);

Vue.use(VueAxios, axios);

/* 驗證相關 Start */
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
// extend('max_value', {
//   ...maxValue,
//   message: '最多為{max}',
// });
configure({
  classes: {
    valid: 'is-valid', // 驗證通過回傳 is-valid
    invalid: 'is-invalid', // 驗證失敗回傳 is-invalid
  },
});
/* 驗證相關 END */

Vue.filter('toThousands', (para = 0) => {
  const parts = para.toString().split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return parts.join('.');
});

Vue.prototype.$bus = new Vue();

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
