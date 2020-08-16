<template>
  <div>
    <h2>後台管理頁面</h2>
    <nav class="navbar navbar-dark fixed-top bg-dark flex-md-nowrap shadow navbar-expand ">
      <a href="#" class="navbar-brand col-sm-3 col-md-2 mr-0 active">後台</a>
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

    <div class="container-fluid mt-3">
      <div class="row">
        <!-- 側邊 -->
        <nav class="col-md-2 d-md-block bg-light sidebar">
          <div class="sidebar-sticky mt-6">
            <h6 class="sidebar-heading d-flex
            justify-content-between align-items-center
            px-3 mt-4 mb-1 text-muted">
              <span class="h5">儀表板</span>
            </h6>
            <ul class="nav flex-column">
              <li class="nav-item text-left">
                <router-link to="/admin/products"
                class="nav-link font-weight-bold
                router-link-exact-active active">
                  產品列表
                </router-link>
              </li>
              <li class="nav-item text-left">
                <router-link to="/admin/coupons"
                class="nav-link font-weight-bold">
                  優惠券
                </router-link>
              </li>
              <li class="nav-item text-left">
                <router-link to="/admin/order"
                class="nav-link font-weight-bold">
                  訂單
                </router-link>
              </li>
              <li class="nav-item text-left">
                <router-link to="/admin/storages"
                class="nav-link font-weight-bold">
                  圖片頁面
                </router-link>
              </li>
            </ul>
          </div>
        </nav>
        <div class="col-md-10 ml-sm-auto col-lg-10 px-4">
          <!-- 主要內容 -->
          <router-view :token="token" v-if="checkSuccess"></router-view>
        </div>
      </div>
    </div>

    <!-- <div id="nav">
      <router-link to="/admin/products">後台產品列表</router-link> |
      <router-link to="/admin/coupons">後台酷碰劵列表</router-link> |
      <router-link to="/admin/order">訂單列表</router-link> |
    </div> -->
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
      this.token = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/, '$1');
      // 將 Token 加入到 Headers 內
      this.axios.defaults.headers.common.Authorization = `Bearer ${this.token}`;

      const api = `${process.env.VUE_APP_APIPATH}/auth/check`;

      this.axios.post(api, {
        api_token: this.token,
      }).then(() => {
        this.checkSuccess = true;
      }).catch(() => {
        this.$router.push('/login');
      });
    },
    signout() {
      document.cookie = 'token=; expires=; path=/';
      this.$bus.$emit('notice-user', '您已登出~~');
      this.$router.push('/');
    },
  },
};
</script>
