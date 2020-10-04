<template>
  <div class="about">
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
            <h4 class="mt-4">場館介紹</h4>
            <p class="text-muted">
              場館目前只開放給購課學員使用，館內設施分為自由重量區、器械啞鈴區以及飛輪和瑜珈教室，滿足學員全方位的訓練需求。
              <br>
              初次購課時，不論學員所購買的課程類型，<span class="font-ubuntu">FitSpace</span>
              都將免費贈送一堂身體分析課，在這堂課程中您將會更了解自己的身體狀況，我們也會提供給您一個訓練方向跟飲食建議。
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
    };
  },
};
</script>
