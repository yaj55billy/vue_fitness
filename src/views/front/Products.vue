<template>
  <div class="">
    <loading :active.sync="isLoading"></loading>
    <h2>這是產品頁</h2>
    <table>
      <tr v-for="item in products" :key="item.id">
        <td>{{ item.title }}</td>
        <td>{{ item.price }}</td>
        <td>
          <router-link :to="`/product/${item.id}`">產品細節頁</router-link>
        </td>
      </tr>
    </table>
    <p>123</p>
  </div>
</template>

<script>
/* global $ */

export default {
  data() {
    return {
      products: [],
      isLoading: false,
    };
  },
  created() {
    this.isLoading = true;
    this.axios.get(`${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/ec/products`).then((res) => {
      this.products = res.data.data;
      this.isLoading = false;
      console.log($('p'));
    });
  },
};
</script>
