<template>
  <div class="home">
    <navbar></navbar>

    <!-- banner -->
    <div class="position-relative banner">
      <div class="position-absolute banner-bg"></div>
      <div class="container d-flex flex-column banner-body">
        <div class="row justify-content-center my-auto">
          <div class="col-md-6 banner-textarea">
            <!-- <h2 class="banner-textarea__title">Lorem ipsum.</h2> -->
            <p class="mb-0 banner-textarea__text">
              想讓身體更健康、更強壯嗎? <br>
              <span class="shopname">FitSpace</span>能夠提供給您正確的飲食知識、運動方法
            </p>
            <!-- 這邊需要一個動態 -->
            <button class="btn btn-dark mt-4">我要手刀上課</button>
          </div>
        </div>
      </div>
    </div>
    <!-- banner END -->

    <!-- 關於我們 -->
    <div class="container mt-6 mb-6">
      <h2>關於我們</h2>
      <div class="row">
        <div class="col-md-6">
          <img src="https://hexschool-api.s3.us-west-2.amazonaws.com/custom/shcmC7WhOjZFX3wksjAU5jqI1fYxntSCzcoEolKucbSd6AXbFhkUsoTjQfeHo2LPrcF1MXz1LscEfGKKpIyg5JFf7WWdBGolySlCPZ6VtstexHFyw5OBiG3mb6RMAUup.jpg" alt="教練" title="Tony 教練" class="img-fluid">
        </div>
        <div class="col-md-6 m-auto text-left">
          <h4 class="mt-4">關於 FitSpace</h4>
          <p class="text-muted">
            現在的社會相當方便，我們幾乎可以隔著螢幕就完成許多事情，
            例如: 使用手機點個幾下就能對外送平台訂購我們想吃的食物；
            而這麼便利的 3C 社會也帶來一些副作用，大家的活動量越來越少、飲食卻越來越精緻，
            加上資訊爆炸帶來許多不太正確的運動、飲食觀念，這些副作用直接或間接的影響到了大家的健康，
            而且影響年齡有越來越年輕化的趨勢。
            <br>
            所以 FitSpace 希望藉由這個運動空間，盡力讓大家了解正確的運動健身以及飲食觀念，並期望能幫助更多的人。
          </p>
          <h4 class="mt-4">場館介紹</h4>
          <p class="text-muted">
            場館目前只開放給購課學員使用，館內設施分為自由重量區、器械啞鈴區以及飛輪和瑜珈教室，滿足學員全方位的訓練需求。
            <br>
            初次購課時，不論學員所購買的課程類型，FitSpace 都將免費贈送一堂身體分析課，在這堂課程中您將會更了解自己的身體狀況，我們也會提供給您一個訓練方向跟飲食建議。
          </p>
        </div>
      </div>
    </div>
    <!-- 關於我們 END -->

    <!-- 場館位置 -->
    <div class="bg-primary home-location">
      <div class="container">
        <div class="row home-location__body">
          <div class="col-md-6 m-auto">
            <h2 class="home-location__title">FitSpace 位於:</h2>
            <p class="home-location__text">土城海山捷運站3號出口步行約3分鐘</p>
          </div>
          <div class="col-md-6">
            <iframe class="home-location__map" src="https://www.google.com/maps/embed?pb=!1m21!1m12!1m3!1d760.2495735119152!2d121.44920677138153!3d24.987309071922386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m6!3e0!4m0!4m3!3m2!1d24.9873288!2d121.4491542!5e0!3m2!1szh-TW!2stw!4v1599478944075!5m2!1szh-TW!2stw" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
          </div>
        </div>
      </div>
    </div>
    <!-- 場館位置 END -->

    <!-- 學員見證 -->
    <div class="mt-6 mb-6">
      <h2>學員見證</h2>
      <div class="container">
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active" v-for="item in studentMessage.slice(0,1)"
            :key="item.id">
              <div class="row justify-content-center py-7">
                <div class="col-md-6 text-center">
                  <h3>{{ item.name }}</h3>
                  <p class="">
                    {{ item.experience }}
                  </p>
                </div>
              </div>
            </div>
            <div class="carousel-item" v-for="item in studentMessage.slice(1)"
            :key="item.id">
              <div class="row justify-content-center py-7">
                <div class="col-md-6 text-center">
                  <h3>{{ item.name }}</h3>
                  <p>
                    {{ item.experience }}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <a class="carousel-control-prev"
          href="#carouselExampleControls"  role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next"
          href="#carouselExampleControls" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
    </div>
    <!-- 學員見證 END -->

    <pagebottom></pagebottom>
  </div>
</template>

<script>
// @ is an alias to /src
import navbar from '@/components/Navbar.vue';
import pagebottom from '@/components/Footer.vue';

export default {
  name: 'Home',
  components: {
    navbar,
    pagebottom,
    // HelloWorld,
  },
  data() {
    return {
      studentMessage: [
        {
          id: `s1${Math.random()}`,
          name: '小芳',
          experience: '真的很推薦 FitSpace，幾個月前購買了 Mike 教練的健身綜合課程，除了健身相關的知識之外，Mike 教練也會提到飲食的重要性。運動加上飲食的調整，精神真的比以前好很多!',
        },
        {
          id: `s2${Math.random()}`,
          name: 'Tony Chen',
          experience: '推薦瑜珈課程，緊繃上班族的福音!!!',
        },
        {
          id: `s3${Math.random()}`,
          name: '大明',
          experience: '筋膜放鬆推推，原本自己是一個只注重運動而不在意身體活動度、柔軟度的人，沒想到放鬆後反而可以讓運動表現好很多。',
        },
        {
          id: `s4${Math.random()}`,
          name: 'Mei',
          experience: '喜歡飛輪課，享受爆汗的暢快感~~',
        },
        {
          id: `s5${Math.random()}`,
          name: '建智',
          experience: '感謝 Mike 教練，現在力量訓練時，更能意識到呼吸的方式。',
        },
        {
          id: `s6${Math.random()}`,
          name: '德',
          experience: '感謝 FitSpace 提供了這麼好的運動環境，還在練習跟適應 TRX 中。',
        },
        {
          id: `s7${Math.random()}`,
          name: '小瑜',
          experience: '教練都會一步一步循序漸進，因應每個學員的狀況調整，而且很有耐心的指導我們~~ ',
        },
      ],
    };
  },
};
</script>
