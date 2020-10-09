<template>
  <div class="about">
    <navbar></navbar>
    <div class="position-relative banner">
      <div class="position-absolute banner-prodbg"></div>
      <div class="container d-flex flex-column banner-body banner-body-prod">
        <div class="row justify-content-center my-auto">
          <div class="col-md-6 banner-textarea wow animate__fadeInDown" data-wow-duration="1s">
            <h3 class="banner-textarea__title">常見問題</h3>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-6 mb-6">
      <div class="container">
        <h2 class="home-title">
          常見問題
        </h2>
        <div class="row">
          <div class="col-md-10 m-auto">
            <div class="accordion" id="accordionExample">

              <div class="card">
                <div class="card-header" id="headingOne">
                  <h2 class="mb-0">
                    <button class="btn btn-link" type="button"
                    data-toggle="collapse" data-target="#collapseOne"
                    aria-expanded="true" aria-controls="collapseOne">
                      Que: 上課後發現自己不太能適應的話，是否能退課呢?
                    </button>
                  </h2>
                </div>
                <div id="collapseOne" class="collapse show"
                aria-labelledby="headingOne" data-parent="#accordionExample">
                  <div class="card-body">
                    Ans: 基本上是可以的，但會先了解是什麼原因或狀況，從狀況再跟學員討論是否要換到其他老師或其他課程。
                  </div>
                </div>
              </div>

              <div class="card">
                <div class="card-header" id="headingTwo">
                  <h2 class="mb-0">
                    <button class="btn btn-link collapsed"
                    type="button" data-toggle="collapse"
                    data-target="#collapseTwo"
                    aria-expanded="false" aria-controls="collapseTwo">
                      Que: 如果臨時有事情或身體不舒服是可以請假的嗎?
                    </button>
                  </h2>
                </div>
                <div id="collapseTwo" class="collapse"
                aria-labelledby="headingTwo" data-parent="#accordionExample">
                  <div class="card-body">
                    Ans: 可以的，透過電話(02-3456-7890)聯繫我們，我們將會替你安排其他課程時間。
                  </div>
                </div>
              </div>

              <div class="card">
                <div class="card-header" id="headingThree">
                  <h2 class="mb-0">
                    <button class="btn btn-link collapsed"
                    type="button" data-toggle="collapse" data-target="#collapseThree"
                    aria-expanded="false" aria-controls="collapseThree">
                      Que: 新手想運動，但不太曉得從什麼課程開始，有什麼建議嗎?
                    </button>
                  </h2>
                </div>
                <div id="collapseThree" class="collapse"
                aria-labelledby="headingThree" data-parent="#accordionExample">
                  <div class="card-body">
                    Ans: 可以先報名體驗課程來參觀體驗。基本上我們的課程除了"進階瑜珈"、"TRX" 會比較不建議新手報名外，
                    其他課程都會應學員需求而做調整。 如果想要有趣一些的課程來維持運動習慣，可以先嘗試看看有氧課程、多功能訓練課程 :)
                  </div>
                </div>
              </div>

              <div class="card">
                <div class="card-header" id="headingFour">
                  <h2 class="mb-0">
                    <button class="btn btn-link collapsed"
                    type="button" data-toggle="collapse" data-target="#collapseFour"
                    aria-expanded="false" aria-controls="collapseFour">
                      Que: 問題四
                    </button>
                  </h2>
                </div>
                <div id="collapseFour" class="collapse"
                aria-labelledby="headingFour" data-parent="#accordionExample">
                  <div class="card-body">
                    Ans: 回答四
                  </div>
                </div>
              </div>

              <div class="card">
                <div class="card-header" id="headingFive">
                  <h2 class="mb-0">
                    <button class="btn btn-link collapsed"
                    type="button" data-toggle="collapse" data-target="#collapseFive"
                    aria-expanded="false" aria-controls="collapseFive">
                      Que: 問題五
                    </button>
                  </h2>
                </div>
                <div id="collapseFive" class="collapse"
                aria-labelledby="headingFive" data-parent="#accordionExample">
                  <div class="card-body">
                    Ans: 回答五
                  </div>
                </div>
              </div>

            </div>
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
    };
  },
};
</script>
