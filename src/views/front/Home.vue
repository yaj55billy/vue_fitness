<template>
  <div class="home">
    <navbar></navbar>
    <div class="position-relative banner">
      <div class="position-absolute banner-indexbg"></div>
      <i class="fas fa-angle-down banner-arrow wow animate__fadeInDown ani-infi"
      data-wow-delay="2s" data-wow-duration="1.5s"></i>
      <div class="container d-flex flex-column banner-body">
        <div class="row justify-content-center my-auto">
          <div class="col-md-6 banner-textarea wow animate__fadeInDown" data-wow-duration="1s">
            <p class="mb-0 banner-textarea__text">
              想讓身體更健康、更強壯嗎? <br>
              <span class="shopname">FitSpace</span>能夠提供給您正確的飲食知識、運動方法
            </p>
            <router-link
              to="/products/"
              class="btn btn-dark mt-4 wow animate__tada ani-infi3"
              data-wow-delay="2s"
              data-wow-duration="2s">
              我要上課
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="home-topic mt-6 mb-6">
      <div class="container">
        <h2 class="home-title">
          熱門課程
        </h2>
        <div class="row">
          <div class="col-lg-4 col-md-6">
            <div class="card prod-card mb-4">
              <div class="prod-pic">
                <img src="https://hexschool-api.s3.us-west-2.amazonaws.com/custom/nVQ9LU5QRFu47UahUcp6FEz4msu4uFZxx9VT9Y2iQvqsUaXEd90Kmv6SqyI1rYcfkTdUfjl7cVqAnQxXeiMpE5R18svxsOS2qzK1MKd1NRi1FvoMiD8PsbFrVdSsDURm.jpg" alt="健身綜合" class="card-img-top">
              </div>
              <div class="card-body prod-body text-left">
                <h4 class="mb-0">健身綜合</h4>
                <p class="text-muted mt-3 prod-content">為 1 對 1的教學課程，從身體評估、目標了解到操作器械以達到鍛鍊效果。</p>
                <div class="prod-price">
                  <div class="float-left">
                    <del>NT$1,200</del>
                  </div>
                  <div class="float-right prod-price__special">
                    NT$1,000
                  </div>
                </div>
              </div>
              <router-link
                to="/product/T19WN0ALYz2OEYHKYdQjQMKKmSkqHbS9aIAp2TtbBg3OZXm1tyxWT6mrDOTDd6Z4"
                class="prod-link">
              </router-link>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="card prod-card mb-4">
              <div class="prod-pic">
                <img src="https://hexschool-api.s3.us-west-2.amazonaws.com/custom/FgWWbyyhg0CDMz5y50k6WdgZyjFncKW4fOeJQCZfasnk7ZPGhX3teV1EbP031QrVhKw3gGmnUOX03YS6HMhvHs8b8nZrIlpJXpugAWPDFqS9F4Fp3acQGI4eenB75XC1.jpg" alt="初階瑜珈" class="card-img-top">
              </div>
              <div class="card-body prod-body text-left">
                <h4 class="mb-0">初階瑜珈</h4>
                <p class="text-muted mt-3 prod-content">
                  藉由身體延展搭配呼吸調整，有助疏解壓力，體態之雕塑及肢體平衡。
                </p>
                <div class="prod-price">
                  <div class="float-left">
                    <del>NT$600</del>
                  </div>
                  <div class="float-right prod-price__special">
                    NT$400
                  </div>
                </div>
              </div>
              <router-link
                to="/product/0nGGvACFS5KmDD2JpSBWgT6Xhrtb5ZAWXz7m9cIswHQEUBukyMhRdbIboWEeVfAF"
                class="prod-link">
              </router-link>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="card prod-card mb-4">
              <div class="prod-pic">
                <img src="https://hexschool-api.s3.us-west-2.amazonaws.com/custom/4WnO0OE58rGJW0bLsI0zHqfRLkAlCkDm1ZoToXOYwnvAJ4Rk1rI1s95QQHSkioGdsDCFAKpOIa0rGcvhoiaovHHVdbcDAap51ZoaVa0zRHGpZFg4iWzIkCZeWpAuHTmI.jpg" alt="燃脂飛輪" class="card-img-top">
              </div>
              <div class="card-body prod-body text-left">
                <h4 class="mb-0">燃脂飛輪</h4>
                <p class="text-muted mt-3 prod-content">
                  為簡單的有氧運動，搭配快慢不同情境的音樂鍛鍊下半身肌群，燃燒大量脂肪。
                </p>
                <div class="prod-price">
                  <div class="float-left">
                    <del>NT$400</del>
                  </div>
                  <div class="float-right prod-price__special">
                    NT$300
                  </div>
                </div>
              </div>
              <router-link
                to="/product/D7qyFGxIXWFg2Hk1PxzXUF14cPEOBOBOV93yllIMUX91KtdYRqbzuwCTIae5xItO"
                class="prod-link">
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-primary home-location pt-4 pb-4">
      <div class="container">
        <h2 class="home-title">
          場館位置
        </h2>
        <div class="row home-location__body">
          <div class="col-md-12 m-auto">
            <p class="home-location__info mb-0">
              <i class="fas fa-phone"></i>02-3456-7890
            </p>
            <p class="home-location__info">
              <i class="fas fa-map-marker-alt"></i>新北市土城區海山路18號 (土城海山捷運站3號出口步行約3分鐘)
            </p>
            <iframe src="https://www.google.com/maps/embed?pb=!1m19!1m8!1m3!1d1808.1884050541146!2d121.449207!3d24.987309!3m2!1i1024!2i768!4f13.1!4m8!3e0!4m0!4m5!1s0x346802ca53d3d8fd%3A0x60fb81099c3ac0f4!2zMjM25paw5YyX5biC5Zyf5Z-O5Y2A5rW35bGx6LevMTjomZ8!3m2!1d24.987433799999998!2d121.4489887!5e0!3m2!1szh-TW!2stw!4v1599851824240!5m2!1szh-TW!2stw" width="800" height="400" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0" class="home-location__map"></iframe>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-6 mb-6">
      <h2 class="home-title">
        學員成效
      </h2>
      <div class="container">
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel"
        style="background-color: #ccc;">
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
