<template>
  <div class="home">
    <div id="nav">
      <router-link to="/about">關於我們</router-link> |
      <router-link to="/products">產品列表</router-link> |
      <router-link to="/cart">購物車</router-link> |
      <router-link to="/checkout">結帳頁</router-link> |
      <router-link to="/complete">結帳完成頁</router-link> |
      <router-link to="/login">登入</router-link> |
      <router-link to="/admin">後台</router-link> |
    </div>
    <router-view></router-view>
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'Home',
  components: {
    // HelloWorld,
  },
};
</script>
