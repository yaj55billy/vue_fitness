<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <router-link to="/" class="navbar-brand">
      Navbar
    </router-link>
    <button class="navbar-toggler" type="button"
    data-toggle="collapse" data-target="#navbarNavAltMarkup"
    aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <router-link to="/products" class="nav-item nav-link mr-4">
          產品列表
        </router-link>
        <router-link to="/cart" class="nav-item nav-link mr-4">
          購物車 <i class="fas fa-shopping-cart"></i>
        </router-link>
        <router-link to="/login" class="nav-item nav-link mr-4">登入</router-link>
        <router-link to="/admin" class="nav-item nav-link">後台</router-link>

            <!-- <div id="nav">
      <router-link to="/about">關於我們</router-link> |
      <router-link to="/cart">購物車</router-link> |
      <router-link to="/checkout">結帳頁</router-link> |
      <router-link to="/complete">結帳完成頁</router-link> |
      <router-link to="/login">登入</router-link> |
      <router-link to="/admin">後台</router-link> |
    </div> -->
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>
