import Vue from 'vue';

Vue.filter('toThousands', (para = 0) => {
  const parts = para.toString().split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return parts.join('.');
});
