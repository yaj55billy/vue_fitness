<template>
  <div class="login-page">
    <loading :active.sync="isLoading">
      <div class="loadingio-spinner-ball-h1u60i2wsu">
        <div class="ldio-ivekc1fyg2">
          <div></div>
        </div>
      </div>
    </loading>
    <form class="form-signin" @submit.prevent="signin">
      <h1 class="h3 mb-3 font-weight-normal">
        請先登入
      </h1>
      <div class="form-group">
        <label for="inputEmail" class="sr-only">Email address</label>
        <input
          id="inputEmail"
          v-model="user.email"
          type="email"
          class="form-control"
          placeholder="Email address"
          required
          autofocus>
      </div>
      <div class="form-group">
        <label for="inputPassword" class="sr-only">Password</label>
        <input
          id="inputPassword"
          v-model="user.password"
          type="password"
          class="form-control"
          placeholder="Password"
          required>
      </div>
      <button class="btn btn-lg btn-primary btn-block" type="submit">
        登入
      </button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        email: '',
        password: '',
      },
      token: '',
      isLoading: false,
    };
  },
  methods: {
    signin() {
      this.isLoading = true;
      const api = `${process.env.VUE_APP_APIPATH}/auth/login`;
      this.axios.post(api, this.user).then((res) => {
        this.isLoading = false;
        const { token } = res.data;
        const { expired } = res.data;
        document.cookie = `token=${token}; expires=${new Date(expired * 1000)}; path=/`;
        this.$bus.$emit('notice-user', '登入成功~~');
        this.$router.push('/admin/products');
      }).catch(() => {
        this.isLoading = false;
        this.$bus.$emit('notice-user', '登入失敗，請再檢查帳密');
      });
    },
  },
};
</script>

<style lang="scss">
  .login-page{
    height: 100vh;
    display: flex;
    align-items: center;
    padding-top: 40px;
    padding-bottom: 40px;
    background-color: #f5f5f5;
  }
  .form-signin{
    width: 100%;
    max-width: 330px;
    padding: 15px;
    margin: auto;
  }
</style>
