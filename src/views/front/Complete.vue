<template>
  <div class="page">
    <loading :active.sync="isLoading">
      <div class="loadingio-spinner-ball-h1u60i2wsu">
        <div class="ldio-ivekc1fyg2">
          <div></div>
        </div>
      </div>
    </loading>
    <Navbar></Navbar>
    <section class="section">
      <div class="cart-page">
        <div class="container">
          <ul class="shop-step">
            <li class="shop-step__list complete">
              <div class="shop-step__num">1</div>
              <div>訂單</div>
            </li>
            <li class="shop-step__list complete">
              <div class="shop-step__num">2</div>
              <div>付款</div>
            </li>
            <li class="shop-step__list complete">
              <div class="shop-step__num">3</div>
              <div>完成</div>
            </li>
          </ul>
          <div class="cart-title">
            <h2 style="">結帳完成</h2>
            <router-link to="/index" class="btn btn-outline-primary btn-md rounded-pill">
              回首頁
            </router-link>
          </div>
          <div class="cart-complete">
            <h2 class="cart-complete__title">感謝您的購買!</h2>
            <p class="cart-complete__text">
              我們將於 1~3 個工作天內與您聯繫，若有任何問題也可撥打 02-3456-7890 聯繫我們。
            </p>
          </div>
        </div>
      </div>
    </section>
    <Footer></Footer>
  </div>
</template>
<script>

import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';

export default {
  components: {
    Navbar,
    Footer,
  },
  data() {
    return {
      isLoading: false,
    };
  },
};
</script>
