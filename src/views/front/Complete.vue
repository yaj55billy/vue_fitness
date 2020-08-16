<template>
  <div class="">
    <h2>結帳完成頁</h2>
    <div class="position-relative d-flex">
      <div class="container d-flex flex-column" style="min-height: 100vh;">
        <nav class="navbar navbar-expand-lg navbar-light px-0">
          <router-link to="/" class="navbar-brand">
            Navbar
          </router-link>
        </nav>
        <div class="row my-auto pb-7">
          <div class="col-md-4 d-flex flex-column">
            <div class="my-auto">
              <h2>Checkout Success</h2>
              <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod</p>
              <a href="./index.html" class="btn btn-dark mt-4 px-5">Back To Home</a>
            </div>
          </div>
        </div>
      </div>
      <div class="w-md-50 w-100 position-absolute opacity-1" style="z-index: -1; min-height: 100vh; right: 0; background-image: url(https://images.unsplash.com/photo-1480399129128-2066acb5009e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80);
      background-position: center center;">
      </div>
    </div>
  </div>
</template>
<script>

export default {
  data() {
    return {
      isLoading: false,
    };
  },
  created() {

  },
};
</script>
