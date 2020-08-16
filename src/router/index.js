import Vue from 'vue';
import VueRouter from 'vue-router';
import Shop from '../views/Shop.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/', // 路徑
    name: 'Shop', // 名字
    component: Shop,
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('../views/front/Home.vue'),
      },
      {
        path: 'about',
        name: 'About',
        component: () => import('../views/front/About.vue'),
      },
      {
        path: 'products',
        name: 'Products',
        component: () => import('../views/front/Products.vue'),
      },
      {
        path: 'product/:id',
        name: 'Product',
        component: () => import('../views/front/Product.vue'),
      },
      {
        path: 'cart',
        name: 'Cart',
        component: () => import('../views/front/Cart.vue'),
      },
      {
        path: 'checkout',
        name: 'Checkout',
        component: () => import('../views/front/Checkout.vue'),
      },
      {
        path: 'complete',
        name: 'Complete',
        component: () => import('../views/front/Complete.vue'),
      },
    ],
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('../views/Dashboard.vue'),
    children: [
      {
        path: 'order',
        name: 'Order',
        component: () => import('../views/admin/Order.vue'),
      },
      {
        path: 'coupons',
        name: 'Coupons',
        component: () => import('../views/admin/Coupons.vue'),
      },
      {
        path: 'products',
        name: 'Products',
        component: () => import('../views/admin/Products.vue'),
      },
      {
        path: 'storages',
        name: 'Storages',
        component: () => import('../views/admin/Storages.vue'),
      },
    ],
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue'),
  },
  {
    path: '*',
    redirect: '/',
  },
];

const router = new VueRouter({
  routes,
});

export default router;
