<template>
  <div class="">
    <loading :active.sync="isLoading"></loading>
    <navbar></navbar>

    <div class="container" style="margin-top: 120px">
      <div class="row align-items-center">
        <div class="col-md-7">
          <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item" v-for="(item, index) in product.imageUrl"
              :key="item.id" :class="{active: index == 0}">
                <img :src="item" class="d-block w-100" alt="...">
              </div>
            </div>

            <a class="carousel-control-prev"
            href="#carouselExampleControls"
            role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>
        <div class="col-md-5">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb bg-white px-0 mb-0">
              <li class="breadcrumb-item"><a class="text-muted" href="./index.html">Home</a></li>
              <li class="breadcrumb-item">
                <a class="text-muted" href="./product.html">Product</a></li>
              <li class="breadcrumb-item active" aria-current="page">Detail</li>
            </ol>
          </nav>
          <h2 class="font-weight-bold h1 mb-1">{{ product.title }}</h2>
          <p class="mb-0 text-muted text-right"><del>{{ product.origin_price }}</del></p>
          <p class="h4 font-weight-bold text-right">{{ product.price }}</p>
          <div class="d-flex align-items-center">
            <div class="input-group my-3 mr-2 bg-light rounded">
              <div class="input-group-prepend">
                <button class="btn btn-outline-dark border-0 py-2" type="button" id="button-addon1">
                  <i class="fas fa-minus"></i>
                </button>
              </div>
              <input type="text"
              class="form-control border-0 text-center my-auto shadow-none bg-light"
              placeholder=""
              aria-label="Example text with button addon"
              aria-describedby="button-addon1"
              value="1">
              <div class="input-group-append">
                <button class="btn btn-outline-dark border-0 py-2" type="button" id="button-addon2">
                  <i class="fas fa-plus"></i>
                </button>
              </div>
            </div>
            <a href="./checkout.html" class="btn btn-dark btn-block py-2">加入購物車</a>
          </div>
        </div>
      </div>
      <hr>

      <!-- 購課須知 -->
      <div class="">
        <h3>購課須知</h3>
      </div>
      <!-- 購課須知 END -->

      <hr>

      <h3 class="font-weight-bold">您可能有興趣的課程</h3>
      <div class="row">
        <div class="col-lg-4 col-md-6" v-for="item in relatedProducts" :key="item.id">
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
      product: [],
      relatedProducts: [],
      isLoading: false,
    };
  },
  created() {
    // 屬性 $route
    // 方法 $router
    this.isLoading = true;
    const { id } = this.$route.params; // 解構直接抓 {}
    this.axios.get(`${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/ec/product/${id}`).then((res) => {
      this.product = res.data.data;
      this.isLoading = false;
    });

    this.getRelatedProducts();
  },
  methods: {
    getRelatedProducts() {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/ec/products`;
      this.axios.get(url).then((res) => {
        res.data.data.filter((item) => {
          if (item.category === this.product.category) {
            this.relatedProducts.push(item);
          }
          return item;
        });
        this.isLoading = false;
      });
    },
  },
};
</script>
