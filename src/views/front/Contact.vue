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
            <h3 class="banner-textarea__title">聯絡我們</h3>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-6 mb-6">
      <div class="container">
        <h2 class="home-title">
          聯絡我們
        </h2>
        <div class="row align-items-center">
          <div class="col-md-4">
            <div class="contact">
              <h4 class="contact-title">
                跟我們說說?
              </h4>
              <p>有任何問題都歡迎透過電話或表單聯繫我們，表單聯繫會在三個工作天回覆您。</p>
              <div class="contact-info">
                <i class="fas fa-phone"></i> 電話：02-3456-7890
              </div>
              <div class="contact-info">
                <i class="far fa-clock"></i> 營業時間：10:00 ~ 22:00
              </div>
              <div class="contact-info">
                <i class="fas fa-map-marker-alt"></i> 地址：新北市土城區海山路18號 (土城海山捷運站3號出口步行約3分鐘)
              </div>
            </div>
          </div>
          <div class="col-md-8 m-auto">
            <validation-observer v-slot="{ invalid }">
              <form class="form mt-5" @submit.prevent="sendMail()">
                <div class="form-group">
                  <validation-provider rules="required" v-slot="{ errors, classes }">
                    <label for="contact-name" class="text-left w-100">姓名</label>
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
                    <label for="contact-message" class="text-left w-100">留言</label>
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
  name: 'Contact',
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
      this.$bus.$emit('notice-user', '成功寄出，我們將會在三個工作天內回覆您。');
      setTimeout(() => {
        this.isLoading = false;
      }, 2000);
    },
  },
};
</script>
