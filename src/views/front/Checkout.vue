<template>
  <div class="">
    <h2>結帳頁</h2>
     <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-10">
          <navbar></navbar>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-md-10">
          <h3 class="font-weight-bold mb-4 pt-3">Checkout</h3>
        </div>
      </div>
      <div class="row flex-row-reverse justify-content-center pb-5">
        <div class="col-md-4">
          <div class="border p-4 mb-4">
            <div class="d-flex">
              <img src="https://images.unsplash.com/photo-1502743780242-f10d2ce370f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1916&q=80" alt="" class="mr-2" style="width: 48px; height: 48px; object-fit: cover">
              <div class="w-100">
                <div class="d-flex justify-content-between">
                  <p class="mb-0 font-weight-bold">Lorem ipsum</p>
                  <p class="mb-0">NT$12,000</p>
                </div>
                <p class="mb-0 font-weight-bold">x1</p>
              </div>
            </div>
            <div class="d-flex mt-2">
              <img src="https://images.unsplash.com/photo-1502743780242-f10d2ce370f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1916&q=80" alt="" class="mr-2" style="width: 48px; height: 48px; object-fit: cover">
              <div class="w-100">
                <div class="d-flex justify-content-between">
                  <p class="mb-0 font-weight-bold">Lorem ipsum</p>
                  <p class="mb-0">NT$12,000</p>
                </div>
                <p class="mb-0 font-weight-bold">x1</p>
              </div>
            </div>
            <table class="table mt-4 border-top border-bottom text-muted">
              <tbody>
                <tr>
                  <th scope="row" class="border-0 px-0 pt-4 font-weight-normal">Subtotal</th>
                  <td class="text-right border-0 px-0 pt-4">NT$24,000</td>
                </tr>
                <tr>
                  <th scope="row" class="border-0 px-0 pt-0 pb-4 font-weight-normal">Payment</th>
                  <td class="text-right border-0 px-0 pt-0 pb-4">ApplePay</td>
                </tr>
              </tbody>
            </table>
            <div class="d-flex justify-content-between mt-4">
              <p class="mb-0 h4 font-weight-bold">Total</p>
              <p class="mb-0 h4 font-weight-bold">NT$24,000</p>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <form>
            <p>Contact information</p>
            <div class="form-group mb-0">
              <label for="ContactMail" class="text-muted mb-0">Email</label>
              <input type="email" class="form-control"
              id="ContactMail" aria-describedby="emailHelp" placeholder="example@gmail.com">
            </div>
            <div class="form-group form-check">
              <input type="checkbox" class="form-check-input" id="ContactLorem">
              <label class="form-check-label"
              for="ContactLorem">Lorem ipsum dolor sit amet, consetetur</label>
            </div>
            <p class="mt-4">Shipping address</p>
            <div class="form-group mb-2">
              <label for="ContactName" class="text-muted mb-0">Name</label>
              <input type="text" class="form-control" id="ContactName" placeholder="Carmen A. Rose">
            </div>
            <div class="form-group">
              <label for="ContactPhone" class="text-muted mb-0">Phone</label>
              <input type="text" class="form-control" id="ContactPhone" placeholder="Password">
            </div>
            <div class="form-group">
              <label for="ContactPhone" class="text-muted mb-0">Message</label>
              <textarea class="form-control" rows="3" placeholder="message ... "></textarea>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import navbar from '@/components/Navbar.vue';

export default {
  components: {
    navbar,
  },
  data() {
    return {
      isLoading: false,
    };
  },
  created() {

  },
};
</script>
