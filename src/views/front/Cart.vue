<template>
  <div class="page">
    <loading :active.sync="isLoading"></loading>
    <navbar></navbar>
    <section class="section">
      <div class="cart-page">
        <div class="container">
          <!-- 流程部分 -->
          <ul class="shop-step">
            <li class="shop-step__list">
              <div class="shop-step__num">1</div>
              <h4 class="shop-step__text">
                購物車訂單<i class="fas fa-shopping-cart"></i>
              </h4>
            </li>
            <li class="shop-step__list shop-step__list--arrow">
              <i class="fas fa-angle-right"></i>
            </li>
            <li class="shop-step__list">
              <div class="shop-step__num">2</div>
              <h4 class="shop-step__text">
                收件人資料<i class="fas fa-edit"></i>
              </h4>
            </li>
            <li class="shop-step__list shop-step__list--arrow">
              <i class="fas fa-angle-right"></i>
            </li>
            <li class="shop-step__list">
              <div class="shop-step__num">3</div>
              <h4 class="shop-step__text">
                購物完成<i class="fas fa-check-circle"></i>
              </h4>
            </li>
          </ul>
          <!-- 流程部分 END -->

          <div class="section-title" style="text-align: left;
    border-bottom: solid 1px;
    border-top: solid 1px;
    padding: 11px 0;">
            <h2 style="    ">購物車</h2>
          <router-link to="/products" class="btn btn-primary btn-block mt-4 rounded-pill">
                    繼續購物
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
                    min="1">
                  <button
                    type="button"
                    class="btn-cart"
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
          <!-- 購物車內容 END -->

          <div class="row">
            <div class="col-md-8">
              <div class="input-group w-50">
                <input type="text"
                class="form-control rounded-0 border-bottom
                border-top-0 border-left-0 border-right-0 shadow-none"
                placeholder="折價券">
                <div class="input-group-append">
                  <button class="btn btn-outline-dark border-bottom
                  border-top-0 border-left-0 border-right-0 rounded-0"
                  type="button" id="button-addon2"><i class="fas fa-paper-plane"></i></button>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="mb-4">
                <div class="d-flex justify-content-between mt-4">
                  <p class="mb-0 font-weight-bold">小計</p>
                  <p class="mb-0 font-weight-bold">{{ cartTotal | toThousands }}</p>
                </div>
                <div class="d-flex justify-content-between mt-4">
                  <p class="mb-0 h4 font-weight-bold">總計</p>
                  <p class="mb-0 h4 font-weight-bold">{{ cartTotal | toThousands }}</p>
                </div>
              </div>
            </div>
            <router-link to="/products" class="btn btn-primary btn-block mt-4 rounded-pill">
              繼續購物
            </router-link>
            <router-link to="/checkout" class="btn btn-primary btn-block mt-4 rounded-pill">
              到收件人
            </router-link>
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
          // console.log(res);
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
    deleteCartItem(id) { // 刪除購物車某筆資料
      this.isLoading = true;
      const url = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/ec/shopping/${id}`;
      this.axios.delete(url).then((res) => {
        console.log(res);
        this.getCart(); // 要重新運算
        this.isLoading = false;
      }).catch((error) => {
        console.log(error);
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
  },
};
</script>
