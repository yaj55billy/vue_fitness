<template>
  <div>
    <h2>後台管理頁面</h2>
    <nav class="navbar navbar-dark fixed-top bg-dark flex-md-nowrap shadow navbar-expand ">
      <a href="#" class="navbar-brand col-sm-3 col-md-2 mr-0 active text-left">後台管理頁面</a>
      <div class="ml-auto">
        <ul class="navbar-nav px-3">
          <li class="nav-item text-nowrap">
            <router-link to="/" class="nav-link active">回首頁</router-link>
          </li>
          <li class="nav-item text-nowrap">
            <a href="#" class="nav-link" @click.prevent="signout">登出</a>
          </li>
        </ul>
      </div>
    </nav>
    <div class="container-fluid">
      <div class="row">
        <nav class="col-lg-2 col-md-3 d-md-block bg-light sidebar">
          <div class="sidebar-sticky mt-4">
            <ul class="nav">
              <li class="nav-item">
                <router-link to="/admin/products"
                class="nav-link font-weight-bold router-link-exact-active active">
                  產品列表
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/admin/coupons"
                class="nav-link font-weight-bold">
                  優惠券列表
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/admin/order"
                class="nav-link font-weight-bold">
                  訂單列表
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/admin/storages"
                class="nav-link font-weight-bold">
                  圖片列表
                </router-link>
              </li>
            </ul>
          </div>
        </nav>
        <div class="col-lg-10 col-md-9 px-4">
          <router-view v-if="checkSuccess"></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      token: '',
      checkSuccess: false,
    };
  },
  created() {
    this.checkLogin();
  },
  methods: {
    checkLogin() {
      // 確認是否是有 token (登入)
      this.token = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/, '$1');
      const api = `${process.env.VUE_APP_APIPATH}/auth/check`;
      this.axios.post(api, {
        api_token: this.token,
      }).then(() => {
        this.checkSuccess = true;
        this.axios.defaults.headers.common.Authorization = `Bearer ${this.token}`;
      }).catch(() => {
        this.$router.push('/login');
      });
    },
    signout() {
      // 登出
      document.cookie = 'token=; expires=; path=/';
      this.$bus.$emit('notice-user', '您已登出~~');
      this.$router.push('/');
    },
  },
};
</script>

<style lang="scss">
.nav{
  .nav-item{
    width: 100%;
    text-align: left;
    @media (max-width: 767px) {
      width: 25%;
      text-align: center;
    }
    @media (max-width: 575px) {
      width: 50%;
    }
  }
}
.router-link-active{
  color: lighten(#274555,25%);
  &:hover{
    color: lighten(#274555,25%);
  }
}
</style>
