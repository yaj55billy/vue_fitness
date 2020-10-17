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
          <ul class="shop-step">
            <li class="shop-step__list" :class="{complete: !cartsEmpty}">
              <div class="shop-step__num">1</div>
              <div>訂單</div>
            </li>
            <li class="shop-step__list">
              <div class="shop-step__num">2</div>
              <div>付款</div>
            </li>
            <li class="shop-step__list">
              <div class="shop-step__num">3</div>
              <div>完成</div>
            </li>
          </ul>
          <div class="cart-title">
            <h2 style="">訂單</h2>
            <router-link to="/products" class="btn btn-outline-primary btn-md rounded-pill">
              繼續購物
            </router-link>
          </div>
          <div class="" v-if="cartsEmpty === true">
            <div class="cart-empty">
              <h2 class="cart-empty__title">
                QQ~~<br>
                購物車內沒有商品，<br>
                點擊上方按鈕去物色喜歡的課程吧 !
              </h2>
            </div>
          </div>
          <div v-else>
            <ul class="cart-info">
              <li class="cart-info__list" v-for="item in carts" :key="item.product.id + 1">
                <div class="cart-info__pic">
                  <img :src="item.product.imageUrl[0]" :alt="item.product.title">
                </div>
                <div class="cart-info__con">
                  <h4 class="cart-info__title">{{ item.product.title }}</h4>
                  <div class="cart-info__count">
                    <button
                      type="button"
                      class="btn-cart"
                      :disabled="item.quantity === 1"
                      @click="item.quantity --;
                        editCartItemNum(item.product.id, item.quantity)">
                      -
                    </button>
                    <input
                      type="number"
                      class="cart-info__input"
                      v-model="item.quantity"
                      min="1" disabled>
                    <button
                      type="button"
                      class="btn-cart"
                      :disabled="item.product.category === '體驗課程'"
                      @click="item.quantity ++;
                        editCartItemNum(item.product.id, item.quantity)">
                      +
                    </button>
                  </div>
                </div>
                <div class="cart-info__price">
                  ${{ item.product.price | toThousands }}
                </div>
                <div class="cart-info__close" @click="deleteCartItem(item.product.id)">
                  <i class="far fa-trash-alt"></i>
                </div>
              </li>
            </ul>
            <div class="row cart-footer">
              <div class="col-md-8 cart-footer__coupon">
                <div class="input-group">
                  <input
                  type="text"
                  class="form-control rounded-0 border-bottom
                  border-top-0 border-left-0 border-right-0 shadow-none"
                  placeholder="折價券"
                  v-model="discount.code">
                  <div class="input-group-append">
                    <button class="btn btn-outline-dark border-bottom
                    border-top-0 border-left-0 border-right-0 rounded-0"
                    type="button" id="button-discount" @click="classDiscount()">
                      <i class="fas fa-paper-plane"></i>
                    </button>
                  </div>
                </div>
                <div class="congratulate">
                  <i class="fas fa-bullhorn congratulate-icon"></i>
                  <p class="congratulate-text">
                    慶祝 <span class="font-ubuntu">FitSpace</span>
                    網站開幕，在 12/31 前，結帳輸入 fitspacegogo8 就享有課程售價 8 折優惠。
                  </p>
                </div>
              </div>
              <div class="col-md-4 cart-footer__total">
                <div class="cart-footer__total--item">
                  <p class="mb-0">小計</p>
                  <p class="mb-0">$ {{ cartPrice| toThousands }}</p>
                </div>
                <div class="cart-footer__total--item">
                  <p class="mb-0">折扣</p>
                  <p class="mb-0">
                    $ {{ Math.round(cartPrice * ((100 - couponPercent) / 100)) | toThousands }}
                  </p>
                </div>
                <div class="cart-footer__total--item mt-2">
                  <p class="mb-0 h4 font-weight-bold">總計</p>
                  <p class="mb-0 h4 font-weight-bold">
                    $ {{ cartPrice * (couponPercent / 100) | toThousands }}
                  </p>
                </div>
              </div>
            </div>
            <validation-observer v-slot="{ invalid }">
              <form class="form mt-5" @submit.prevent="createOrder()">
                <h3 class="text-left">填寫資料</h3>
                <div class="form-group">
                  <validation-provider rules="required" v-slot="{ errors, classes }">
                    <label for="username" class="text-left w-100">收件人姓名</label>
                    <input id="username" type="text" name="收件人姓名"
                    v-model="formdata.name" class="form-control" :class="classes">
                    <span class="invalid-feedback">{{ errors[0] }}</span>
                  </validation-provider>
                </div>
                <div class="form-group">
                  <validation-provider rules="required|email" v-slot="{ errors, classes }">
                    <label for="email" class="text-left w-100">Email</label>
                    <input id="email" type="email" name="信箱" v-model="formdata.email"
                    class="form-control" :class="classes">
                    <span class="invalid-feedback">{{ errors[0] }}</span>
                  </validation-provider>
                </div>
                <div class="form-group">
                  <validation-provider rules="required|min:8" v-slot="{ errors, classes }">
                    <label for="tel" class="text-left w-100">電話</label>
                    <input id="tel" type="tel" name="電話" v-model="formdata.tel"
                    class="form-control" :class="classes">
                    <span class="invalid-feedback">{{ errors[0] }}</span>
                  </validation-provider>
                </div>
                <div class="form-group">
                  <validation-provider rules="required" v-slot="{ errors, classes }">
                    <label for="addr" class="text-left w-100">地址</label>
                    <input id="addr" type="text" name="地址" v-model="formdata.address"
                    class="form-control" :class="classes">
                    <span class="invalid-feedback">{{ errors[0] }}</span>
                  </validation-provider>
                </div>
                <div class="form-group">
                  <label for="pay-method" class="text-left w-100">購買方式</label>
                  <select name="付款方式" id="pay-method" class="form-control"
                  required="required" v-model="formdata.payment">
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
                  class="form-control" v-model="formdata.message"></textarea>
                </div>
                <div class="btn-area right">
                  <button type="submit"
                  class="btn btn-primary rounded-pill btn-xl" :disabled="invalid">前往結帳</button>
                </div>
              </form>
            </validation-observer>
          </div>
        </div>
      </div>
    </section>
    <Footer></Footer>
  </div>
</template>

<script>

import navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';

export default {
  components: {
    navbar,
    Footer,
  },
  data() {
    return {
      carts: [],
      cartPrice: 0,
      cartsEmpty: false,
      isLoading: false,
      coupon: {},
      couponPercent: 100,
      discount: {
        code: '',
      },
      formdata: {
        name: '',
        email: '',
        tel: '',
        address: '',
        payment: '',
        message: '',
      },
    };
  },
  created() {
    this.getCart();
  },
  methods: {
    classDiscount() {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/ec/coupon/search`;
      this.axios.post(url, this.discount)
        .then((res) => {
          this.$bus.$emit('notice-user', '恭喜已為您折扣課程費用');
          this.couponPercent = res.data.data.percent;
          this.coupon = res.data.data;
          this.isLoading = false;
        }).catch(() => {
          this.$bus.$emit('notice-user', '折扣碼錯誤，請再確認看看是否輸入錯誤');
          this.couponPercent = 100;
          this.getCart();
          this.isLoading = false;
        });
    },
    getCart() {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/ec/shopping`;
      this.axios.get(url)
        .then((res) => {
          if (res.data.data.length === 0) {
            this.cartsEmpty = true;
            this.isLoading = false;
          } else {
            this.carts = res.data.data;
            this.updateTotal();
            this.$bus.$emit('cart-num', '');
            this.isLoading = false;
          }
        });
    },
    updateTotal() {
      this.cartPrice = 0; // 歸零，不然計算會有累加狀況。
      this.carts.forEach((item) => {
        this.cartPrice += item.product.price * item.quantity;
      });
    },
    deleteCartItem(id) {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/ec/shopping/${id}`;
      this.axios.delete(url).then(() => {
        this.getCart(); // 要重新運算
        this.isLoading = false;
      }).catch(() => {
        this.isLoading = false;
      });
    },
    editCartItemNum(id, quantity) {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/ec/shopping`;
      const cart = {
        product: id,
        quantity,
      };
      this.axios.patch(url, cart)
        .then(() => {
          this.$bus.$emit('notice-user', '課程數量改變成功');
          this.isLoading = false;
          this.getCart();
        }).catch(() => {
          this.isLoading = false;
        });
    },
    createOrder() {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/ec/orders`;
      const order = { ...this.formdata };
      if (this.coupon.enabled) {
        order.coupon = this.coupon.code;
      }
      this.axios.post(url, order)
        .then((res) => {
          if (res.data.data.id) {
            this.$router.push(`/checkout/${res.data.data.id}`);
          }
          this.isLoading = false;
        }).catch(() => {
          this.$bus.$emit('notice-user', '訂單送出失敗，再檢查看看');
          this.isLoading = false;
        });
    },
  },
};
</script>
