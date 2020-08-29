<template>
  <nav class="navbar navbar-dark bg-dark navbar-expand-lg fixed-top shadow">
    <router-link to="/" class="navbar-brand logo">
      FitSpace
    </router-link>
    <!-- navbar   bg-dark flex-md-nowrap  navbar-expand  -->

    <button class="navbar-toggler" type="button"
    data-toggle="collapse" data-target="#navbarNavAltMarkup"
    aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <router-link to="/products" class="nav-item nav-link mr-4">
          課程列表
        </router-link>
        <router-link to="/cart" class="nav-item nav-link mr-4">
          購物車
        </router-link>
        <router-link to="/login" class="nav-item nav-link mr-4">登入</router-link>
        <router-link to="/admin/products" class="nav-item nav-link">後台</router-link>

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
