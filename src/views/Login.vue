<template>
  <div>
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
    };
  },
  methods: {
    signin() {
      const api = `${process.env.VUE_APP_APIPATH}/auth/login`;
      this.axios.post(api, this.user).then((res) => {
        const { token } = res.data;
        const { expired } = res.data;
        /*
          new Date(expired * 1000)
          timestamp unix >> 一般時間格式
        */
        document.cookie = `token=${token}; expires=${new Date(expired * 1000)}; path=/`;

        // 轉址一定要在 ajax 之後
        this.$router.push('/admin/products');
      }).catch((error) => {
        console.log(error);
      });
    },
  },
};
</script>
