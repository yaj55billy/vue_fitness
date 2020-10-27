<template>
  <div>
    <loading :active.sync="isLoading">
      <div class="loadingio-spinner-ball-h1u60i2wsu">
        <div class="ldio-ivekc1fyg2">
          <div></div>
        </div>
      </div>
    </loading>
    <Navbar></Navbar>
    <div class="position-relative banner">
      <div class="position-absolute banner-prodbg"></div>
      <div class="container d-flex flex-column banner-body banner-body-prod">
        <div class="row justify-content-center my-auto">
          <div class="col-md-6 banner-textarea wow animate__fadeInDown" data-wow-duration="1s">
            <h3 class="banner-textarea__title">課程列表</h3>
          </div>
        </div>
      </div>
    </div>
    <div class="container prod">
      <div class="congratulate">
        <i class="fas fa-bullhorn congratulate-icon"></i>
        <p class="congratulate-text">
          慶祝 <span class="font-ubuntu">FitSpace</span>
          網站開幕，在 12/31 前，結帳輸入 fitspacegogo8 就享有課程售價 8 折優惠。
        </p>
      </div>
      <ul class="list-unstyled prod-filter">
        <li class="prod-filter__list">
          <a href="#" class="btn btn-outline-primary btn-sm rounded-pill"
          :class="{active: nowCategory === '全部課程'}"
          @click.prevent="productHandler('全部課程')">
            全部課程
          </a>
        </li>
        <li v-for="item in filterNotRepeat" :key="item" class="prod-filter__list">
          <a href="#" class="btn btn-outline-primary btn-sm rounded-pill"
          :class="{active: item === nowCategory}"
          @click.prevent="productHandler(item)">{{ item }}</a>
        </li>
      </ul>
      <div class="row mt-4">
        <div class="col-lg-4 col-md-6"
         v-for="item in nowProducts" :key="item.id">
          <div class="card prod-card mb-4">
            <div class="prod-pic">
              <img :src="item.imageUrl[0]" class="card-img-top" :alt="item.title">
              <a href="" class="prod-cart" @click.prevent="addToCart(item.id)">
                <i class="fas fa-cart-plus"></i>
              </a>
            </div>
            <div class="card-body prod-body text-left">
              <h4 class="mb-0">{{ item.title }}</h4>
              <p class="text-muted mt-3 prod-content">{{ item.content }}</p>
              <div class="prod-price">
                <div class="float-left">
                  <del>NT${{ item.origin_price | toThousands }}</del>
                </div>
                <div class="float-right prod-price__special">
                  NT${{ item.price | toThousands }}
                </div>
              </div>
            </div>
            <router-link :to="`/product/${item.id}`" class="prod-link"></router-link>
          </div>
        </div>
      </div>
    </div>
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
      products: [],
      nowProducts: [],
      nowCategory: '',
      isLoading: false,
    };
  },
  created() {
    this.getProducts();
    this.productHandler();
  },
  computed: {
    filterNotRepeat() {
      return this.products.map((item) => item.category)
        .filter((element, index, arr) => arr.indexOf(element) === index);
    },
  },
  methods: {
    getProducts(num = 1) {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/ec/products?page=${num}`;
      this.axios.get(url).then((res) => {
        this.products = res.data.data;
        this.nowProducts = res.data.data;
        this.isLoading = false;
      });
    },
    addToCart(id, quantity = 1) {
      const url = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/ec/shopping`;
      const cart = {
        product: id,
        quantity,
      };
      this.isLoading = true;
      this.axios.post(url, cart).then(() => {
        this.$bus.$emit('notice-user', '商品已成功加入購物車');
        this.$bus.$emit('cart-num', '');
        this.isLoading = false;
      }).catch((error) => {
        this.$bus.$emit('notice-user', error.response.data.errors[0]);
        this.$bus.$emit('cart-num', '');
        this.isLoading = false;
      });
    },
    productHandler(catchVal = '全部課程') {
      this.nowProducts = [];
      if (catchVal === '全部課程') {
        this.nowCategory = catchVal;
        this.nowProducts = this.products;
      } else {
        this.products.forEach((item) => {
          if (item.category === catchVal) {
            this.nowCategory = item.category;
            this.nowProducts.push(item);
          }
          return this.nowProducts;
        });
      }
    },
  },
};
</script>
