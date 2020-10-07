<template>
  <div class="about">
    <loading :active.sync="isLoading">
      <div class="loadingio-spinner-ball-h1u60i2wsu">
        <div class="ldio-ivekc1fyg2">
          <div></div>
        </div>
      </div>
    </loading>
    <navbar></navbar>
    <div class="position-relative banner">
      <div class="position-absolute banner-prodbg"></div>
      <div class="container d-flex flex-column banner-body banner-body-prod">
        <div class="row justify-content-center my-auto">
          <div class="col-md-6 banner-textarea wow animate__fadeInDown" data-wow-duration="1s">
            <h3 class="banner-textarea__title">關於我們</h3>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-6 mb-6">
      <div class="container">
        <h2 class="home-title">
          關於我們
        </h2>
        <div class="row">
          <div class="col-md-4">
            <img src="https://hexschool-api.s3.us-west-2.amazonaws.com/custom/shcmC7WhOjZFX3wksjAU5jqI1fYxntSCzcoEolKucbSd6AXbFhkUsoTjQfeHo2LPrcF1MXz1LscEfGKKpIyg5JFf7WWdBGolySlCPZ6VtstexHFyw5OBiG3mb6RMAUup.jpg" alt="教練" title="Tony 教練" class="img-fluid wow animate__fadeIn" data-wow-duration=".5s">
          </div>
          <div class="col-md-8 m-auto text-left wow animate__fadeIn" data-wow-duration=".5s">
            <h4 class="mt-4">關於 <span class="font-ubuntu">FitSpace</span></h4>
            <p class="text-muted">
              現在的社會相當方便，我們幾乎可以隔著螢幕就完成許多事情，
              例如: 使用手機點個幾下就能對外送平台訂購我們想吃的食物；
              而這麼便利的 3C 社會也帶來一些副作用，大家的活動量越來越少、飲食卻越來越精緻，
              加上資訊爆炸帶來許多不太正確的運動、飲食觀念，這些副作用直接或間接的影響到了大家的健康，
              而且影響年齡有越來越年輕化的趨勢。
              <br>
              所以 <span class="font-ubuntu">FitSpace</span>
              希望藉由這個運動空間，盡力讓大家了解正確的運動健身以及飲食觀念，並期望能幫助更多的人。
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-6 mb-6">
      <div class="container">
        <h2 class="home-title">
          聯絡我們
        </h2>
        <div class="row">
          <div class="col-md-4">
            FitSpace
          </div>
          <div class="col-md-8 m-auto">
            <validation-observer v-slot="{ invalid }">
              <form class="form mt-5" @submit.prevent="sendMail()">
                <div class="form-group">
                  <validation-provider rules="required" v-slot="{ errors, classes }">
                    <label for="contac-tname" class="text-left w-100">姓名</label>
                    <input id="contact-name" type="text" name="姓名"
                    v-model="contactdata.name" class="form-control" :class="classes">
                    <span class="invalid-feedback">{{ errors[0] }}</span>
                  </validation-provider>
                </div>

                <div class="form-group">
                  <validation-provider rules="required|email" v-slot="{ errors, classes }">
                    <label for="contact-email" class="text-left w-100">Email</label>
                    <input id="contact-email" type="email" name="信箱" v-model="contactdata.email"
                    class="form-control" :class="classes">
                    <span class="invalid-feedback">{{ errors[0] }}</span>
                  </validation-provider>
                </div>

                <div class="form-group">
                  <validation-provider rules="required|min:8" v-slot="{ errors, classes }">
                    <label for="contact-tel" class="text-left w-100">電話</label>
                    <input id="contact-tel" type="tel" name="電話" v-model="contactdata.tel"
                    class="form-control" :class="classes">
                    <span class="invalid-feedback">{{ errors[0] }}</span>
                  </validation-provider>
                </div>

                <div class="form-group">
                  <validation-provider rules="required" v-slot="{ errors, classes }">
                    <label for="contact-message" class="text-left w-100">想跟我們說些什麼?</label>
                    <textarea name="留言" id="" cols="30" rows="3"
                    class="form-control" v-model="contactdata.message" :class="classes">
                    </textarea>
                    <span class="invalid-feedback">{{ errors[0] }}</span>
                  </validation-provider>
                </div>

                <div class="btn-area right">
                  <button type="submit"
                  class="btn btn-primary rounded-pill btn-xl" :disabled="invalid">留言</button>
                </div>
              </form>
            </validation-observer>
          </div>
        </div>
      </div>
    </div>
    <pagebottom></pagebottom>
  </div>
</template>

<script>
import navbar from '@/components/Navbar.vue';
import pagebottom from '@/components/Footer.vue';

export default {
  name: 'Home',
  components: {
    navbar,
    pagebottom,
  },
  data() {
    return {
      isLoading: false,
      contactdata: {
        name: '',
        email: '',
        tel: '',
        message: '',
      },
    };
  },
  methods: {
    sendMail() {
      this.isLoading = true;
      this.$bus.$emit('notice-user', '成功寄出，我們將會在三個工作天內與您聯繫。');
      setTimeout(() => {
        this.isLoading = false;
      }, 2000);
    },
  },
};
</script>
