<template>
  <div>
    <Navbar></Navbar>
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
        <div class="row">
          <div class="col-md-4">
            <img src="https://hexschool-api.s3.us-west-2.amazonaws.com/custom/shcmC7WhOjZFX3wksjAU5jqI1fYxntSCzcoEolKucbSd6AXbFhkUsoTjQfeHo2LPrcF1MXz1LscEfGKKpIyg5JFf7WWdBGolySlCPZ6VtstexHFyw5OBiG3mb6RMAUup.jpg" alt="教練" title="Tony 教練" class="img-fluid wow animate__fadeIn" data-wow-duration=".5s">
          </div>
          <div class="col-md-8 m-auto text-left wow animate__fadeIn" data-wow-duration=".5s">
            <h4 class="mt-4">關於 <span class="font-ubuntu">FitSpace</span></h4>
            <p class="text-muted">
              現在的社會相當便利，運用科技就能達成許多事情，像是網購各式各樣的物品、或者是最近很火紅的外送平台，
              我們在螢幕點個幾下就能訂購到想吃的食物；而這麼便利的社會也帶來很多的副作用，大家的活動量越來越少
              (同一時間我們的飲食越來越精緻)，加上資訊爆炸帶來許多不太正確的運動、飲食知識，而這些狀況直接或間接的讓健康亮起了紅燈，並且影響年齡有越來越年輕的趨勢。
              <br><br>
              提到了影響年齡越來越年輕，也不得不提到台灣在 2017 年老年人口數首度多於幼年人口，在 2018 年老年人口達到 14.05% 成為高齡社會。
              年紀越來越大本身並不是什麼問題，而是在隨著年紀不斷提升時，
              身體所流失的營養(像是骨骼跟肌肉)，而這些流失有時會慢慢伴隨著失能問題，可以試想為何老人家會比較容易跌倒?
              而這個族群也更需要正確的運動、飲食知識。
              <br><br>
              從整個社會結構中，我們可以知道不論是哪個族群(年齡)，都是需要正確的運動、飲食知識，讓我們的身體更加強壯避免掉許多身體狀況，而 <span
               class="font-ubuntu">FitSpace</span> 希望藉由這樣的運動空間，盡力讓大家了解正確的運動知識、飲食觀念，並期望能幫助到更多的人。
            </p>
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';

export default {
  components: {
    Navbar,
    Footer,
  },
  data() {
    return {
    };
  },
};
</script>
