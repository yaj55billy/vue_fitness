<template>
  <div class="">
    <loading :active.sync="isLoading"></loading>
    <div class="container">
      <navbar></navbar>
      <div class="page mt-6">
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
        <div class="row">
          <div class="col-md-8">
            <table class="table table-cart">
              <!-- <thead>
                <tr>
                  <th scope="col" class="border-0 pl-0">品名</th>
                  <th scope="col" class="border-0">數量</th>
                  <th scope="col" class="border-0">單價</th>
                  <th scope="col" class="border-0">刪除</th>
                </tr>
              </thead> -->
              <tbody class="table-cart__tbody">
                <tr class="table-cart__tr" v-for="item in carts" :key="item.product.id">
                  <td class="border-0 table-cart__td">
                    <img :src="item.product.imageUrl[0]" alt="" class="table-cart__pic"
                    style="width: 100px; height: 64px; object-fit: cover;">
                  </td>
                  <td class="border-0 table-cart__td" style="max-width: 160px;">
                    <p class="mb-0 font-weight-bold ml-3 d-inline-block">
                      {{ item.product.title }}
                    </p>
                    <div class="input-group">
                      <div class="input-group-prepend">
                        <button class="btn btn-outline-dark border-0 py-2"
                        type="button" id="button-addon1">
                          <i class="fas fa-minus"></i>
                        </button>
                      </div>
                      <input type="text" class="form-control border-0
                      text-center my-auto shadow-none"
                      placeholder=""
                      aria-label="Example text with button addon"
                      aria-describedby="button-addon1" value="1">
                      <div class="input-group-append">
                        <button class="btn btn-outline-dark border-0 py-2"
                        type="button" id="button-addon2">
                          <i class="fas fa-plus"></i>
                        </button>
                      </div>
                    </div>
                  </td>
                  <td class="border-0 table-cart__td">
                    <p class="mb-0 ml-auto">
                      NT$ {{ item.product.price }}
                    </p>
                  </td>
                  <td class="border-0 table-cart__td">
                    <i class="fas fa-trash-alt"></i>
                  </td>
                </tr>
              </tbody>
            </table>

          </div>
          <div class="col-md-4">
            <div class="border p-4 mb-4" style="background-color: #eee">
              <h4 class="font-weight-bold mb-4">訂單詳細</h4>
              <table class="table text-muted border-bottom">
                <tbody>
                  <tr>
                    <th scope="row" class="border-0 px-0 pt-4 font-weight-normal">小計</th>
                    <td class="text-right border-0 px-0 pt-4">NT$24,000</td>
                  </tr>
                  <!-- <tr>
                    <th scope="row" class="border-0 px-0 pt-0 pb-4 font-weight-normal">Payment</th>
                    <td class="text-right border-0 px-0 pt-0 pb-4">ApplePay</td>
                  </tr> -->
                </tbody>
              </table>
              <div class="d-flex justify-content-between mt-4">
                <p class="mb-0 h4 font-weight-bold">總計</p>
                <p class="mb-0 h4 font-weight-bold">NT$24,000</p>
              </div>
              <router-link to="/checkout" class="btn btn-primary btn-block mt-4">
                到收件人
              </router-link>
            </div>
            <div class="input-group w-50">
              <input type="text"
              class="form-control rounded-0 border-bottom
              border-top-0 border-left-0 border-right-0 shadow-none"
              placeholder="折價券"
              aria-label="Recipient's username"
              aria-describedby="button-addon2">
              <div class="input-group-append">
                <button class="btn btn-outline-dark border-bottom
                border-top-0 border-left-0 border-right-0 rounded-0"
                type="button" id="button-addon2"><i class="fas fa-paper-plane"></i></button>
              </div>
            </div>
          </div>
        </div>
        <div class="">
          <h3 class="font-weight-bold">可能有興趣的產品</h3>
          <div class="swiper-container mt-4 mb-5">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <div class="card border-0 mb-4 position-relative position-relative">
                  <img src="https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" class="card-img-top rounded-0" alt="...">
                  <a href="#" class="text-dark">
                  </a>
                  <div class="card-body p-0">
                    <h4 class="mb-0 mt-3"><a href="#">Lorem ipsum</a></h4>
                    <p class="card-text mb-0">
                      NT$1,080 <span class="text-muted "><del>NT$1,200</del></span></p>
                    <p class="text-muted mt-3"></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
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
          this.isLoading = false;
        });
    },
  },
};
</script>
