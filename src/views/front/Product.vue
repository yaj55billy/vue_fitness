<template>
  <div class="">
    <loading :active.sync="isLoading"></loading>
    <h2>單一產品頁</h2>
    <div>
      <img :src="product.imageUrl[0]" alt="">
      <h3>{{product.title}}</h3>
      <p>{{product.description}}</p>
    </div>
  </div>
</template>

<script>
export default {
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
};
</script>
