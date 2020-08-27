<template>
  <div class="">
    <loading :active.sync="isLoading"></loading>
    <div class="container">
      <navbar></navbar>
    </div>
    <div class="position-relative d-flex align-items-center
    justify-content-center" style="min-height: 400px;">
      <div class="position-absolute" style="top:0; bottom: 0; left: 0; right: 0; background-image: url(https://images.unsplash.com/photo-1480399129128-2066acb5009e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80); background-position: center center; opacity: 0.1;"></div>
      <h2 class="font-weight-bold">課程列表</h2>
    </div>
    <div class="container mt-md-5 mt-3 mb-7">
      <div class="row">
        <div class="col-md-4">
          <div class="accordion border border-bottom
          border-top-0 border-left-0 border-right-0 mb-3" id="accordionExample">
            <div class="card border-0">
              <div class="card-header px-0 py-4 bg-white
              border border-bottom-0 border-top border-left-0
              border-right-0" id="headingOne" data-toggle="collapse" data-target="#collapseOne">
                <div class="d-flex justify-content-between align-items-center pr-1">
                  <h4 class="mb-0">
                    課程分類
                  </h4>
                  <i class="fas fa-chevron-down"></i>
                </div>
              </div>
              <div id="collapseOne" class="collapse show"
              aria-labelledby="headingOne" data-parent="#accordionExample">
                <div class="card-body py-0">
                  <ul class="list-unstyled">
                    <li><a href="#" class="py-2 d-block text-muted">全部商品</a></li>
                    <li v-for="item in filterNotRepeat" :key="item">
                      <a href="#" class="py-2 d-block text-muted">{{ item }}</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-8">
          <div class="row">
            <div class="col-md-6" v-for="item in products" :key="item.id">
              <div class="card border-0 mb-4 position-relative position-relative">
                <img :src="item.imageUrl[0]" class="card-img-top rounded-0" alt="...">
                <a href="#" class="text-dark">
                  <i class="far fa-heart position-absolute" style="right: 16px; top: 16px"></i>
                </a>
                <div class="card-body p-0">
                  <h4 class="mb-0 mt-3">
                    <router-link :to="`/product/${item.id}`">{{ item.title }}</router-link>
                  </h4>
                  <p class="card-text mb-0">NT${{ item.price }}
                    <span class="text-muted "><del>NT${{ item.origin_price }}</del></span></p>
                  <p class="text-muted mt-3"></p>
                  <button type="button" class="btn btn-primary"
                  @click="addToCart(item.id)">加到購物車</button>
                </div>
              </div>
            </div>
          </div>
          <nav class="d-flex justify-content-center">
            <pagination :pagedata="pagination" @update="getProducts"></pagination>
          </nav>
        </div>
      </div>
    </div>
    <div class="bg-light py-4">
      <div class="container">
        <div class="d-flex flex-column flex-md-row
        justify-content-between align-items-md-center align-items-start">
          <p class="mb-0 font-weight-bold">Lorem ipsum dolor sit amet.</p>
          <div class="input-group w-md-50 mt-md-0 mt-3">
            <input type="text" class="form-control rounded-0" placeholder="" />
            <div class="input-group-append">
              <button class="btn btn-dark rounded-0" type="button" id="search">
                Lorem ipsum
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-dark py-5">
      <div class="container">
        <div class="d-flex align-items-center justify-content-between text-white mb-md-7 mb-4">
          <a class="text-white h4" href="./index.html">LOGO</a>
          <ul class="d-flex list-unstyled mb-0 h4">
            <li><a href="#" class="text-white mx-3"><i class="fab fa-facebook"></i></a></li>
            <li><a href="#" class="text-white mx-3"><i class="fab fa-instagram"></i></a></li>
            <li><a href="#" class="text-white ml-3"><i class="fab fa-line"></i></a></li>
          </ul>
        </div>
        <div class="d-flex flex-column flex-md-row
        justify-content-between align-items-md-end align-items-start text-white">
          <div class="mb-md-0 mb-1">
            <p class="mb-0">02-3456-7890</p>
            <p class="mb-0">service@mail.com</p>
          </div>
          <p class="mb-0">© 2020 LOGO All Rights Reserved.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// /* global $ */

import navbar from '@/components/Navbar.vue';
import pagination from '@/components/Pagination.vue';

export default {
  components: {
    navbar,
    pagination,
  },
  data() {
    return {
      products: [],
      pagination: {},
      isLoading: false,
    };
  },
  created() {
    this.getProducts();
  },
  computed: {
    filterCategory() {
      return this.products.map((item) => item.category);
    },
    filterNotRepeat() {
      return this.filterCategory.filter((element, index, arr) => arr.indexOf(element) === index);
    },
  },
  methods: {
    getProducts(num = 1) {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/ec/products?page=${num}`;
      this.axios.get(url).then((res) => {
        this.products = res.data.data;
        this.pagination = res.data.meta.pagination; // 分頁的資料傳遞會用到
        this.isLoading = false;
      });
    },
    addToCart(id, quantity = 1) {
      const url = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/ec/shopping`;
      const cart = {
        product: id,
        quantity,
      };
      this.axios.post(url, cart).then(() => {
        // this.isLoading = false;
        // $('#productModal').modal('hide');
        // this.getCart();
        // console.log($('p'));
        this.$bus.$emit('notice-user', '商品已成功加入購物車');
      }).catch((error) => {
        this.$bus.$emit('notice-user', error.response.data.errors[0]);
      });
    },
  },
};
</script>
