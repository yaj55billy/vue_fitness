<template>
  <div class="page">
    <loading :active.sync="isLoading"></loading>
    <navbar></navbar>
    <section class="section">
      <div class="cart-page">
        <div class="container">
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
            <div class="col-md-4 cart-footer__total ">
              <div class="cart-footer__total--item mt-2">
                <p class="mb-0 h4 font-weight-bold">總計</p>
                <p class="mb-0 h4 font-weight-bold">$ {{ order.amount | toThousands }}</p>
              </div>
            </div>
          </div>

          <!-- 購買者內容 -->
          <div class="">
            <h3>訂購人資料</h3>
            姓名: {{ order.user.name }} <br>
            Email:{{ order.user.email }} <br>
            電話: {{ order.user.tel }} <br>
            地址: {{ order.user.address }} <br>
            付款方式: {{ order.payment }}
          </div>
          <button class="btn btn-primary rounded-pill btn-xl" @click="payOrder()">
            付款
          </button>
          <!-- <router-link to="/compelete" class="btn btn-primary rounded-pill btn-xl">
            付款
          </router-link> -->
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
      order: [],
      isLoading: false,
    };
  },
  created() {
    this.orderId = this.$route.params.orderId; // 取上方網址參數 (id)
    if (this.orderId) {
      this.getDetailed(this.orderId);
    }

    // this.getOrders();
  },
  methods: {
    getDetailed(id) {
      this.isLoading = true;
      this.orderId = id;

      // const url = `${process.env.VUE_APP_APIPATH}/api/${this.uuid}/ec/orders/${id}`;

      const url = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/ec/orders/${id}`;

      this.axios.get(url).then((res) => {
        this.order = res.data.data;
        this.isLoading = false;
      });
    },
    payOrder() {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/ec/orders/${this.orderId}/paying`;

      this.axios.post(url).then((res) => {
        if (res.data.data.paid) {
          this.$router.push(`/complete/${this.orderId}`);
        }
        this.isLoading = false;
      });
    },

  },
};
</script>
