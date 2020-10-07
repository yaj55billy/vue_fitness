<template>
  <nav class="navbar navbar-dark bg-dark navbar-expand-lg fixed-top shadow">
    <router-link to="/" class="navbar-brand logo">
      FitSpace
    </router-link>

    <button class="navbar-toggler" type="button"
    data-toggle="collapse" data-target="#navbarNavAltMarkup"
    aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <router-link to="/about" class="nav-item nav-link">
          關於我們
        </router-link>
        <router-link to="/qa" class="nav-item nav-link">
          常見問題
        </router-link>
        <router-link to="/products" class="nav-item nav-link">
          課程列表
        </router-link>
        <router-link to="/cart" class="nav-item nav-link">
          <i class="fas fa-shopping-cart"></i>
          <span class="badge badge-light">{{ carts.length }}</span>
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      carts: [],
    };
  },
  created() {
    this.getCart();
    this.$bus.$on('cart-num', () => {
      this.getCart();
    });
  },
  methods: {
    getCart() {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/ec/shopping`;
      this.axios.get(url)
        .then((res) => {
          this.carts = res.data.data;
        })
        .catch(() => {
          this.carts = 0;
        });
    },
  },
};
</script>
