<template>
  <div>
    <div class="toast fade hide" role="alert" aria-live="assertive" aria-atomic="true"
    style="position: fixed; top: 20px; right: 20px; min-width: 300px; z-index: 11000;">
      <div class="toast-header">
        <!-- <img src="..." class="rounded mr-2" alt="..."> -->
        <strong class="mr-auto">TEST TOAST</strong>
        <!-- <small>11 mins ago</small> -->
        <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="toast-body">
        {{ message }}
      </div>
    </div>
  </div>
</template>

<script>

/* global $ */

export default {
  data() {
    return {
      message: '',
    };
  },
  created() {
    this.$bus.$on('notice-user', (acce) => {
      this.message = acce;
      $('.toast').toast({
        autohide: false,
      });
      $('.toast').toast('show');
      setTimeout(() => {
        $('.toast').toast('hide');
        this.message = '';
      }, 3000);
    });
  },
};
</script>
