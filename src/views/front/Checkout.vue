<template>
  <div class="">
     <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-10">
          <navbar></navbar>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-md-10">
          <h3 class="font-weight-bold mb-4 pt-3">收件人資訊</h3>
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
                  <th scope="row" class="border-0 px-0 pt-4 font-weight-normal">小計</th>
                  <td class="text-right border-0 px-0 pt-4">NT$24,000</td>
                </tr>
              </tbody>
            </table>
            <div class="d-flex justify-content-between mt-4">
              <p class="mb-0 h4 font-weight-bold">總計</p>
              <p class="mb-0 h4 font-weight-bold">NT$24,000</p>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <validation-observer v-slot="{ invalid }">
            <form @submit.prevent="clickMe()">
              <!-- 收件人姓名 -->
              <div class="form-group">
                <validation-provider rules="required" v-slot="{ errors, classes }">
                  <label for="username">收件人姓名</label>
                  <input id="username" type="text" name="收件人姓名"
                  v-model="username" class="form-control" :class="classes">
                  <span class="invalid-feedback">{{ errors[0] }}</span>
                </validation-provider>
              </div>

              <!-- Email  -->
              <div class="form-group">
                <validation-provider rules="required|email" v-slot="{ errors, classes }">
                  <label for="email">Email</label>
                  <input id="email" type="email" name="信箱" v-model="email"
                  class="form-control" :class="classes">
                  <span class="invalid-feedback">{{ errors[0] }}</span>
                </validation-provider>
              </div>

              <!-- 電話 -->
              <div class="form-group">
                <validation-provider rules="required|min:8" v-slot="{ errors, classes }">
                  <label for="tel">電話</label>
                  <input id="tel" type="tel" name="電話" v-model="tel"
                  class="form-control" :class="classes">
                  <span class="invalid-feedback">{{ errors[0] }}</span>
                </validation-provider>
              </div>

              <!-- 地址 -->
              <div class="form-group">
                <validation-provider rules="required" v-slot="{ errors, classes }">
                  <label for="addr">地址</label>
                  <input id="addr" type="text" name="地址" v-model="addr"
                  class="form-control" :class="classes">
                  <span class="invalid-feedback">{{ errors[0] }}</span>
                </validation-provider>
              </div>

              <!-- 購買方式 -->
              <div class="form-group">
                <label for="pay-method">購買方式</label>
                <select name="付款方式" id="pay-method" class="form-control"
                required="required" v-model="payMethod">
                  <option value="" disabled="disabled" selected>請選擇付款方式</option>
                  <option value="WebATM">WebATM</option>
                  <option value="ATM">ATM</option>
                  <option value="Barcode">Barcode</option>
                  <option value="Credit">Credit</option>
                  <option value="ApplePay">ApplePay</option>
                  <option value="GooglePay">GooglePay</option>
                </select>
              </div>

              <div class="form-group">
                <label for="message">留言</label>
                <textarea name="message" id="" cols="30" rows="3"
                class="form-control" v-model="message"></textarea>
              </div>

              <button type="submit" class="btn btn-primary" :disabled="invalid">按鈕</button>
            </form>
          </validation-observer>
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
      username: '',
      email: '',
      tel: '',
      addr: '',
      payMethod: '',
      message: '',
    };
  },
  created() {

  },
};
</script>
