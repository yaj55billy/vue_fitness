<template>
  <div class="">
    <loading :active.sync="isLoading"></loading>
    <div class="container">
      <navbar></navbar>
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
      <div class="row my-5">
        <div class="col-md-4">
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
            sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
            sed diam voluptua. At vero eos et accusam et</p>
        </div>
        <div class="col-md-3">
          <p class="text-muted">Lorem ipsum dolor sit amet,
            consetetur sadipscing elitr, sed diam nonumy eirmod tempor</p>
        </div>
      </div>
      <h3 class="font-weight-bold">Lorem ipsum dolor sit amet</h3>
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
  },
  // computed: {
  //   count() {
  //     const x = this.product.imageUrl;
  //     return x;
  //   },
  // },
};
</script>
