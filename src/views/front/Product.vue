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
    <div class="container prod-detail">
      <div class="row align-items-start">
        <div class="col-md-6">
          <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item" v-for="(item, index) in product.imageUrl"
              :key="item.id" :class="{active: index == 0}">
                <img :src="item" class="d-block w-100" :alt="product.title">
              </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleControls"
            role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleControls"
            role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>
        <div class="col-md-6">
          <h2 class="h2 prod-detail__title">{{ product.title }}</h2>
          <div class="prod-detail__price">
            <span class="prod-detail__price--discount">
              ${{ product.price | toThousands }}
            </span>
            <del class="prod-detail__price--origin">
              ${{ product.origin_price | toThousands }}
            </del>
          </div>
          <p class="prod-detail__description">
            {{ product.description }}
          </p>
          <div class="form-group mt-2">
            <label for="classNum" class="prod-detail__label">課程數量：</label>
            <select class="form-control prod-detail__select" id="classNum" v-model="classNum">
              <option :value="item" v-for="item in classMax" :key="item">{{ item }}</option>
            </select>
          </div>
          <div class="btn-area right">
            <router-link to="/products"
            class="btn btn-outline-primary btn-md rounded-pill">回課程頁</router-link>
            <a href="" class="btn btn-primary btn-md rounded-pill"
            @click.prevent="addToCart(product.id,classNum)">加入購物車</a>
          </div>
        </div>
      </div>
      <div class="prod-detail__need mt-4">
        <h3 class="prod-detail__subtitle">購課須知</h3>
        <ul class="prod-detail__list">
          <li>購課後我們將於 1~3 個工作天跟您聯繫，若有任何問題也歡迎撥打 02-3456-7890。</li>
          <li>我們的教練都有經過嚴格篩選，並且教育不得強迫推銷課程。</li>
          <li>上課時，記得自備水壺跟毛巾，並著裝適合運動的服裝、鞋子。</li>
          <li>疫情期間入館內皆須量體溫，我們也會頻繁實施館內消毒清潔。</li>
        </ul>
      </div>
      <div class="prod-detail__maybelike" v-if="relatedProducts.length !== 0">
        <h3 class="prod-detail__subtitle">您可能也會喜歡</h3>
        <div class="row">
          <div class="col-lg-4 col-md-6" v-for="item in relatedProducts" :key="item.id">
            <div class="card prod-card mb-4">
              <div class="prod-pic">
                <img :src="item.imageUrl[0]" class="card-img-top" :alt="item.title">
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
              <a href="javascript:" class="prod-link" @click.prevent="goOtherPage(item.id)"></a>
            </div>
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
      classNum: 1,
      classMax: 36,
      product: [],
      relatedProducts: [],
      isLoading: false,
    };
  },
  created() {
    this.getProduct();
  },
  methods: {
    getProduct() {
      this.isLoading = true;
      const { id } = this.$route.params;
      this.axios.get(`${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/ec/product/${id}`)
        .then((res) => {
          this.product = res.data.data;
          this.isLoading = false;
          this.getRelatedProducts();
          if (this.product.category === '體驗課程') {
            this.classMax = 1;
          }
        }).catch((error) => {
          this.$bus.$emit('notice-user', error.response.data.errors[0]);
          this.isLoading = false;
        });
    },
    getRelatedProducts() {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/ec/products`;
      this.relatedProducts = [];
      this.axios.get(url).then((res) => {
        res.data.data.filter((item) => {
          if (item.category === this.product.category && item.title !== this.product.title) {
            this.relatedProducts.push(item);
          }
          return item;
        });
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
    goOtherPage(id) {
      this.$router.push(`/product/${id}`);
      this.getProduct();
    },
  },
};
</script>
