<template>
  <div class="mt-4">
    <loading :active.sync="isLoading"></loading>
    <h2>訂單列表</h2>
    <table class="table table-admin table-rwd mt-4">
      <thead>
        <tr>
          <th>下單時間</th>
          <th>購買款項</th>
          <th>付款方式</th>
          <th>應付金額</th>
          <th>是否付款</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in orders" :key="item.id">
          <td data-th="下單時間">{{ item.created.datetime }}</td>
          <td data-th="購買款項">{{ item.products[0].product.title }}</td>
          <td data-th="付款方式">{{ item.payment }}</td>
          <td data-th="應付金額">{{ item.amount | toThousands }}</td>
          <td data-th="是否付款">
            <input type="checkbox" :id="item.id"
            :checked="item.paid"
            @change="changePaidStatus(item)">
            <label :for="item.id">
              <span v-if="item.paid" class="text-success">
                已付款
              </span>
              <span v-else>
                尚未付款
              </span>
            </label>
            <div class="spinner-border text-primary"
            role="status"
            style="width: 12px; height: 12px;"
            v-if="paidLoading">
              <span class="sr-only">Loading...</span>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <pagination :pagedata="pagination" @update="getOrders"></pagination>
  </div>
</template>

<style lang="scss">
input[type="checkbox"]{
  margin-right: 3px;
  vertical-align: middle;
}
</style>

<script>

import pagination from '@/components/Pagination.vue';

export default {
  components: {
    pagination,
  },
  data() {
    return {
      orders: [],
      pagination: {},
      isLoading: false,
      paidLoading: false,
    };
  },
  props: ['token'],
  created() {
    this.getOrders();
  },
  methods: {
    getOrders(num = 1) {
      this.isLoading = true;
      const api = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/admin/ec/orders?page=${num}`;
      this.axios.get(api).then((res) => {
        this.orders = res.data.data;
        this.pagination = res.data.meta.pagination; // 分頁的資料傳遞會用到
        this.isLoading = false;
      });
    },
    changePaidStatus(item) {
      if (item.paid) {
        // true >> false
        this.paidLoading = true;
        const url = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/admin/ec/orders/${item.id}/unpaid`;
        this.axios.patch(url, item.id).then(() => {
          this.paidLoading = false;
          this.$bus.$emit('notice-user', '此筆訂單修改為: 尚未付款');
          this.getOrders();
        });
      } else {
        //  false >> true
        this.paidLoading = true;
        const url = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/admin/ec/orders/${item.id}/paid`;
        this.axios.patch(url, item.id).then(() => {
          this.paidLoading = false;
          this.$bus.$emit('notice-user', '此筆訂單修改為: 已付款');
          this.getOrders();
        });
      }
    },
  },
};
</script>
