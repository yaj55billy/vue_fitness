<template>
  <div>
    <div class="toast fade hide" role="alert" aria-live="assertive" aria-atomic="true"
    style="position: fixed; top: 20px; right: 20px; min-width: 300px; z-index: 11000;">
      <div class="toast-header">
        <svg class="bd-placeholder-img rounded mr-2" width="20" height="20" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img"><rect width="100%" height="100%" fill="#274555"></rect></svg>
        <strong class="mr-auto">訊息通知</strong>
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
