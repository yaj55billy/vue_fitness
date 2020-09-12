<template>
  <div class="page">
    <loading :active.sync="isLoading">
      <div class="loadingio-spinner-ball-h1u60i2wsu">
        <div class="ldio-ivekc1fyg2">
          <div></div>
        </div>
      </div>
    </loading>

    <navbar></navbar>

    <section class="section">
      <div class="cart-page">
        <div class="container">

          <!-- 流程部分 -->
          <ul class="shop-step">
            <li class="shop-step__list complete">
              <div class="shop-step__num">1</div>
              <div>訂單</div>
            </li>
            <li class="shop-step__list complete">
              <div class="shop-step__num">2</div>
              <div>付款</div>
            </li>
            <li class="shop-step__list">
              <div class="shop-step__num">3</div>
              <div>完成</div>
            </li>
          </ul>
          <!-- 流程部分 END -->

          <div class="cart-title">
            <h2 style="">付款頁</h2>
          </div>

          <!-- 訂單內容 -->
          <ul class="cart-info">
            <li class="cart-info__list"
            v-for="item in order.products"
            :key="item.product.description">
              <div class="cart-info__pic">
                <img :src="item.product.imageUrl[0]" alt="">
              </div>
              <div class="cart-info__con">
                <h4 class="cart-info__title">{{ item.product.title }}</h4>
              </div>
              <div class="cart-info__num">
                <span class="font-weight-bold">{{ item.quantity }}</span> 堂
              </div>
              <div class="cart-info__price text-right">
                ${{ item.product.price | toThousands }}
                <br>
              </div>
            </li>
          </ul>
          <!-- 訂單內容 END -->

          <div class="row justify-content-end">
            <div class="col-md-4 cart-footer__total">
              <div class="cart-footer__total--item mt-2">
                <p class="mb-0 h4 font-weight-bold">總計</p>
                <p class="mb-0 h4 font-weight-bold">$ {{ order.amount | toThousands }}</p>
              </div>
            </div>
          </div>

          <!-- 購買者內容 -->
          <div class="cart-order">
            <h3 class="text-left">訂購人資料</h3>
            <ul class="cart-order__list" v-if="order.user">
              <li class="cart-order__item">
                <label class="cart-order__label">姓名:</label>
                <p class="cart-order__text">{{ order.user.name }}</p>
              </li>
              <li class="cart-order__item">
                <label class="cart-order__label">Email:</label>
                <p class="cart-order__text">{{ order.user.email }}</p>
              </li>
              <li class="cart-order__item">
                <label class="cart-order__label">電話:</label>
                <p class="cart-order__text">{{ order.user.tel }}</p>
              </li>
              <li class="cart-order__item">
                <label class="cart-order__label">地址:</label>
                <p class="cart-order__text">{{ order.user.address }}</p>
              </li>
              <li class="cart-order__item">
                <label class="cart-order__label">付款方式:</label>
                <p class="cart-order__text">{{ order.payment }}</p>
              </li>
            </ul>
          </div>
          <button type="button" class="btn btn-primary rounded-pill btn-xl"
          @click="payOrder()">
            付款
          </button>
        </div>
      </div>
    </section>
    <pagebottom></pagebottom>
  </div>
</template>

<script>

import navbar from '@/components/Navbar.vue';
import pagebottom from '@/components/Footer.vue';

export default {
  components: {
    navbar,
    pagebottom,
  },
  data() {
    return {
      orderId: '',
      order: {},
      isLoading: false,
    };
  },
  created() {
    this.orderId = this.$route.params.orderId; // 取上方網址參數 (id)
    if (this.orderId) {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/ec/orders/${this.orderId}`;
      this.axios.get(url).then((res) => {
        this.order = res.data.data;
        this.isLoading = false;
      });
    }
  },
  methods: {
    payOrder() {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/ec/orders/${this.orderId}/paying`;

      this.axios.post(url).then((res) => {
        if (res.data.data.paid) {
          this.$bus.$emit('notice-user', '付款成功');
          this.$router.push(`/complete/${this.orderId}`);
        }
        this.isLoading = false;
      }).catch(() => {
        this.$bus.$emit('notice-user', 'Oops~您已經付過款項了');
        this.isLoading = false;
      });
    },
  },
};
</script>
