<template>
  <div class="">
    <loading :active.sync="isLoading"></loading>
    <div class="container">
      <navbar></navbar>
    </div>
    <div class="position-relative d-flex align-items-center
    justify-content-center" style="min-height: 550px;">
      <div class="position-absolute" style="top:0; bottom: 0; left: 0; right: 0; background-image: url(https://hexschool-api.s3.us-west-2.amazonaws.com/custom/vnty7mxNMzR8GVgqSrbDlLJxyrkGRZsrz8t03ckt0VTMfj6Nr4P83LpSeCddwJmrmoGGrWi1nk70EUsGSlAYPICGHK7dIyGMFWLmCHt5nS9nt8wGrdvUSY6WOXVNSfJz.jpg); background-position: center center; opacity: 0.6;"></div>
      <h2 class="font-weight-bold">課程列表</h2>
    </div>
    <div class="container mt-md-5 mt-3 mb-7">
      <div class="row">
        <div class="col-md-12">
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
                    <li>
                      <a href="#" class="py-2 d-block text-muted"
                      @click.prevent="productHandler('全部課程')">
                        全部課程
                      </a>
                    </li>
                    <li v-for="item in filterNotRepeat" :key="item">
                      <a href="#" class="py-2 d-block text-muted"
                      @click.prevent="productHandler(item)">{{ item }}</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-12">
          <div class="row">
            <div class="col-lg-4 col-md-6" v-for="item in nowProducts" :key="item.id">
              <div class="card mb-4 prod">
                <div class="prod-pic">
                  <img :src="item.imageUrl[0]" class="card-img-top" :alt="item.title">
                  <!-- <span class="prod-cart">
                    <i class="fas fa-cart-plus"></i>
                  </span> -->
                  <a href="" class="prod-cart" @click.prevent="addToCart(item.id)">
                    <i class="fas fa-cart-plus"></i>
                  </a>
                </div>
                <div class="card-body prod-body">
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
          <nav class="d-flex justify-content-center">
            <pagination :pagedata="pagination" @update="getProducts"></pagination>
          </nav>
        </div>
      </div>
    </div>
    <pagebottom></pagebottom>
  </div>
</template>

<script>
// /* global $ */

import navbar from '@/components/Navbar.vue';
import pagination from '@/components/Pagination.vue';
import pagebottom from '@/components/Footer.vue';

export default {
  components: {
    navbar,
    pagebottom,
    pagination,
  },
  data() {
    return {
      products: [],
      nowProducts: [],
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
      this.axios.post(url, cart).then(() => {
        this.$bus.$emit('notice-user', '商品已成功加入購物車');
      }).catch((error) => {
        this.$bus.$emit('notice-user', error.response.data.errors[0]);
      });
    },
    productHandler(catchVal) {
      this.nowProducts = [];
      if (catchVal === '全部課程') {
        this.nowProducts = this.products;
      } else {
        this.products.map((item) => {
          if (item.category === catchVal) {
            this.nowProducts.push(item);
          }
          return this.nowProducts;
        });
      }
    },
  },
};
</script>
