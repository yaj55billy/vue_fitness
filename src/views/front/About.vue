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
          經營理念
        </h2>
        <div class="row ">
          <div class="col-md-4">
            <img src="https://hexschool-api.s3.us-west-2.amazonaws.com/custom/shcmC7WhOjZFX3wksjAU5jqI1fYxntSCzcoEolKucbSd6AXbFhkUsoTjQfeHo2LPrcF1MXz1LscEfGKKpIyg5JFf7WWdBGolySlCPZ6VtstexHFyw5OBiG3mb6RMAUup.jpg" alt="教練" title="Tony 教練" class="img-fluid wow animate__fadeIn" data-wow-duration=".5s">
          </div>
          <div class="col-md-8 m-auto text-left wow animate__fadeIn" data-wow-duration=".5s">
            <h4 class="mt-4">關於 <span class="font-ubuntu">FitSpace</span></h4>
            <p class="text-muted">
              現在的社會相當便利，運用科技就能達成許多事情，像是網購各式各樣的物品、或者是最近很火紅的外送平台，我們在螢幕點個幾下就能訂購到想吃的食物；
              而這麼便利的社會也帶來很多的副作用，大家的活動量越來越少(同一時間我們的飲食越來越精緻)，加上資訊爆炸帶來許多不太正確的運動、飲食知識，
              而這些狀況直接或間接的讓健康亮起了紅燈，並且影響年齡有越來越年輕的趨勢。
              <br><br>
              提到了影響年齡越來越年輕，也不得不提到台灣在 2017 年老年人口數首度多於幼年人口，在 2018 年老年人口達到 14.05% 成為高齡社會。
              年紀越來越大本身並不是什麼問題，而是在隨著年紀不斷提升時，身體所流失的營養(像是骨骼跟肌肉)，而這些流失有時會慢慢伴隨著失能問題，
              可以試想為何老人家會比較容易跌倒? 而這個族群也更需要正確的運動、飲食知識。
              <br><br>
              從整個社會結構中，我們可以知道不論是哪個族群(年齡)，都是需要正確的運動、飲食知識，讓我們的身體更加強壯避免掉許多身體狀況，而 <span
               class="font-ubuntu">FitSpace</span> 希望藉由這樣的運動空間，盡力讓大家了解正確的運動知識、飲食觀念，並期望能幫助到更多的人。
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
        <div class="row align-items-center">
          <div class="col-md-4">
            <div class="contact">
              <h4 class="contact-title">
                跟我們說說?
              </h4>
              <p>有任何問題都歡迎透過電話或表單聯繫我們，我們會在三個工作天回覆您。</p>
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
      this.$bus.$emit('notice-user', '成功寄出，我們將會在三個工作天內回覆您。');
      setTimeout(() => {
        this.isLoading = false;
      }, 2000);
    },
  },
};
</script>
