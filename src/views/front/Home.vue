<template>
  <div class="home">
    <navbar></navbar>

    <!-- banner START -->
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

    <div class="container">
      <!-- 我們能提供的三大保證 -->
      <div class="row mt-5">
        <div class="col-md-4 mt-md-4">
          <div class="card border-0 mb-4">
            <img
              src="https://images.unsplash.com/photo-1502743780242-f10d2ce370f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1916&q=80"
              class="card-img-top rounded-0"
              alt="..."
            />
            <div class="card-body text-center">
              <h4>Lorem ipsum</h4>
              <div class="d-flex justify-content-between">
                <p class="card-text text-muted mb-0">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4 mt-md-4">
          <div class="card border-0 mb-4">
            <img
              src="https://images.unsplash.com/photo-1502743780242-f10d2ce370f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1916&q=80"
              class="card-img-top rounded-0"
              alt="..."
            />
            <div class="card-body text-center">
              <h4>Lorem ipsum</h4>
              <div class="d-flex justify-content-between">
                <p class="card-text text-muted mb-0">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4 mt-md-4">
          <div class="card border-0 mb-4">
            <img
              src="https://images.unsplash.com/photo-1502743780242-f10d2ce370f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1916&q=80"
              class="card-img-top rounded-0"
              alt="..."
            />
            <div class="card-body text-center">
              <h4>Lorem ipsum</h4>
              <div class="d-flex justify-content-between">
                <p class="card-text text-muted mb-0">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-primary mt-7">
      <h2>學員見證</h2>
      <div class="container">
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div class="row justify-content-center py-7">
                <div class="col-md-6 text-center">
                  <h3>Lorem ipsum.</h3>
                  <p class="my-5">“Lorem ipsum dolor sit amet,
                    consetetur sadipscing elitr, sed diam nonumy
                    eirmod tempor invidunt ut labore et dolore magna aliquyam erat.”</p>
                  <p><small>—Lorem ipsum dolor sit amet.—</small></p>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="row justify-content-center py-7">
                <div class="col-md-6 text-center">
                  <h3>Lorem ipsum.</h3>
                  <p class="my-5">“Lorem ipsum dolor sit amet,
                     consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt
                      ut labore et dolore magna aliquyam erat.”</p>
                  <p><small>—Lorem ipsum dolor sit amet.—</small></p>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="row justify-content-center py-7">
                <div class="col-md-6 text-center">
                  <h3>Lorem ipsum.</h3>
                  <p class="my-5">“Lorem ipsum dolor sit amet,
                    onsetetur sadipscing elitr,
                    sed diam nonumy eirmod tempor
                    invidunt ut labore et dolore magna aliquyam erat.”</p>
                  <p><small>—Lorem ipsum dolor sit amet.—</small></p>
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

    <div class="container my-7">
      <h2>關於我們</h2>
      <div class="row">
        <div class="col-md-6">
          <img src="https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" alt="" class="img-fluid">
        </div>
        <div class="col-md-4 m-auto text-center">
          <h4 class="mt-4">Lorem ipsum</h4>
          <p class="text-muted">Lorem ipsum dolor sit amet,
            consetetur sadipscing elitr,
            sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.</p>
        </div>
      </div>
      <div class="row flex-row-reverse justify-content-between mt-4">
        <div class="col-md-6">
          <img src="https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" alt="" class="img-fluid">
        </div>
        <div class="col-md-4 m-auto text-center">
          <h4 class="mt-4">Lorem ipsum</h4>
          <p class="text-muted">Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.</p>
        </div>
      </div>
    </div>
    <pagebottom></pagebottom>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';
import navbar from '@/components/Navbar.vue';
import pagebottom from '@/components/Footer.vue';

export default {
  name: 'Home',
  components: {
    navbar,
    pagebottom,
    // HelloWorld,
  },
};
</script>
