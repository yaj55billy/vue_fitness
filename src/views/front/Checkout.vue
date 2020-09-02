<template>
  <div class="page">
    <loading :active.sync="isLoading"></loading>
    <navbar></navbar>
    <section class="section">
      <div class="cart-page">
        <div class="container">
          <div class="cart-title">
            <h2 style="">資料填寫</h2>
            <router-link to="/cart" class="btn btn-outline-primary btn-md rounded-pill">
              回購物車
            </router-link>
          </div>

          <!-- 購物車內容 -->
          <ul class="cart-info">
            <li class="cart-info__list" v-for="item in carts" :key="item.product.id + 1">
              <div class="cart-info__pic">
                <img :src="item.product.imageUrl[0]" alt="">
              </div>
              <div class="cart-info__con">
                <h4 class="cart-info__title">{{ item.product.title }}</h4>
              </div>
              <div class="cart-info__num">
                x <span class="font-weight-bold">{{ item.quantity }}</span>
              </div>
              <div class="cart-info__price text-right">
                ${{ item.product.price | toThousands }}
                <br>
                <!-- {{ item.product.price | toThousands }} -->
              </div>
            </li>
          </ul>
          <!-- 購物車內容 END -->

          <div class="row justify-content-end">
            <div class="col-md-4 cart-footer__total ">
              <div class="cart-footer__total--item">
                <p class="mb-0">小計</p>
                <p class="mb-0">$ {{ cartTotal | toThousands }}</p>
              </div>
              <div class="cart-footer__total--item mt-2">
                <p class="mb-0 h4 font-weight-bold">總計</p>
                <p class="mb-0 h4 font-weight-bold">$ {{ cartTotal | toThousands }}</p>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-12">
              <validation-observer v-slot="{ invalid }">
                <form class="form mt-4" @submit.prevent="clickMe()">
                  <!-- 收件人姓名 -->
                  <div class="form-group">
                    <validation-provider rules="required" v-slot="{ errors, classes }">
                      <label for="username" class="text-left w-100">收件人姓名</label>
                      <input id="username" type="text" name="收件人姓名"
                      v-model="username" class="form-control" :class="classes">
                      <span class="invalid-feedback">{{ errors[0] }}</span>
                    </validation-provider>
                  </div>

                  <!-- Email  -->
                  <div class="form-group">
                    <validation-provider rules="required|email" v-slot="{ errors, classes }">
                      <label for="email" class="text-left w-100">Email</label>
                      <input id="email" type="email" name="信箱" v-model="email"
                      class="form-control" :class="classes">
                      <span class="invalid-feedback">{{ errors[0] }}</span>
                    </validation-provider>
                  </div>

                  <!-- 電話 -->
                  <div class="form-group">
                    <validation-provider rules="required|min:8" v-slot="{ errors, classes }">
                      <label for="tel" class="text-left w-100">電話</label>
                      <input id="tel" type="tel" name="電話" v-model="tel"
                      class="form-control" :class="classes">
                      <span class="invalid-feedback">{{ errors[0] }}</span>
                    </validation-provider>
                  </div>

                  <!-- 地址 -->
                  <div class="form-group">
                    <validation-provider rules="required" v-slot="{ errors, classes }">
                      <label for="addr" class="text-left w-100">地址</label>
                      <input id="addr" type="text" name="地址" v-model="addr"
                      class="form-control" :class="classes">
                      <span class="invalid-feedback">{{ errors[0] }}</span>
                    </validation-provider>
                  </div>

                  <!-- 購買方式 -->
                  <div class="form-group">
                    <label for="pay-method" class="text-left w-100">購買方式</label>
                    <select name="付款方式" id="pay-method" class="form-control"
                    required="required" v-model="payMethod">
                      <option value="" disabled="disabled" selected>請選擇付款方式</option>
                      <option value="WebATM">WebATM</option>
                      <option value="ATM">ATM</option>
                      <option value="Barcode">Barcode</option>
                      <option value="Credit">Credit</option>
                      <option value="ApplePay">ApplePay</option>
                      <option value="GooglePay">GooglePay</option>
                    </select>
                  </div>

                  <div class="form-group">
                    <label for="message" class="text-left w-100">留言</label>
                    <textarea name="message" id="" cols="30" rows="3"
                    class="form-control" v-model="message"></textarea>
                  </div>
                  <div class="btn-area right">
                    <button type="submit"
                    class="btn btn-primary rounded-pill btn-xl" :disabled="invalid">確認結帳</button>
                  </div>
                </form>
              </validation-observer>
            </div>
          </div>
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
      carts: [],
      cartTotal: 0,
      isLoading: false,
      username: '',
      email: '',
      tel: '',
      addr: '',
      payMethod: '',
      message: '',
    };
  },
  created() {
    this.getCart();
  },
  methods: {
    getCart() { // 取得購物車資訊
      this.isLoading = true;
      const url = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/ec/shopping`;
      this.axios.get(url)
        .then((res) => {
          this.carts = res.data.data;
          this.updateTotal();
          this.isLoading = false;
        });
    },
    updateTotal() { // 計算總價
      this.cartTotal = 0; // 歸零，不然計算會有累加狀況。
      this.carts.forEach((item) => {
        this.cartTotal += item.product.price * item.quantity;
      });
    },
  },
};
</script>
