<template>
  <div class="container works-contents">
    <div
          v-observe-visibility="visibilityChangedtitle"
          v-bind:class="[isVisibletitle === true ? 'fade3' : 'a']"
          class="title"
    >
            <h1>Works</h1>
    </div>
    <div class="title2-box">
      <div
        v-observe-visibility="visibilityChangedlp"
        v-bind:class="[isVisiblelp === true ? 'fade3' : 'a']"
        class="title"
        >
          <h1>Landing Page</h1>
      </div>
    </div>
    <swiper
      ref="mySwiper"
      :options="swiperOption"
      class="slide">
      <swiper-slide>
        <a href="">
          <img src="../assets/schoolLP.jpg" alt="デザインスクール" class="img-500">
          <h2>WebデザインスクールLP</h2>
        </a>
      </swiper-slide>
      <swiper-slide>
        <a href="">
          <img src="../assets/dental.jpg" alt="歯科LP" class="img-500">
          <h2>歯科矯正LP</h2>
        </a>
      </swiper-slide>
      <!-- <div class="swiper-pagination" slot="pagination"></div> -->
      <div slot="button-prev" class="swiper-button-prev"></div>
      <div slot="button-next" class="swiper-button-next"></div>
    </swiper>
  </div>
</template>

<style scoped>
.top-page{
  z-index: 50;
}

.title h1{
  font-size: 180px;
  font-weight: 700;
  text-shadow: 25px 25px 30px #fff;
}
.title2-box h1{
  margin: 5rem 0;
  font-size: 140px;
}
.title2-box{
  margin: 6rem 1.5rem;
}


/* workspage */
.works-contents{
  text-align: center;
  padding-top: 5rem;
}
.works-contents h1{
  text-align: left;
}
.works-contents a{
  color: #fff;
}
.slide{
  margin: 10rem 0;
}
.slide a:hover{
  text-decoration: none;
  opacity: 0.8;
}
.slide h2{
  padding: 1rem 0 0;
}
.swiper-button-prev, .swiper-button-next{
  color: #fff;
}
/* アニメーション */
.fade-in{
  font-size:40px;
  opacity:0;
  animation-name:sample02;
  animation-duration:5s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
}
@keyframes sample02 {
0% {
 opacity: 0;
 transform: translateX(-50px);
}
50%{
    opacity: 0.5;
    transform: translateX(0);
  }
 100% {
 opacity:1;
 transform: translateX(50px);
 }
}

.fade1{
  opacity: 0;
  animation-name: my-text;
  animation-duration: 2s;
  /* animation-iteration-count: infinite; */
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
}
@keyframes my-text{
  0%{
    opacity: 0;
    transform: translateX(-300px)
  }
  100%{
    opacity: 1;
    transform: translateX(0);
  }
}

.fade2{
  opacity: 0;
  animation-name: my-picture;
  animation-duration: 2s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
}
@keyframes my-picture{
  0%{
    opacity: 0;
    transform: translateX(300px)
  }
  100%{
    opacity: 1;
    transform: translateX(0);
  }
}

.fade3{
  opacity: 0;
  animation-name: title-fade;
  animation-duration: 2s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
}
@keyframes title-fade{
  0%{
    opacity: 0;
    transform: translateY(-100px)
  }
  100%{
    opacity: 1;
    transform: translateY(0);
  }
}
.a{
  opacity: 0;
}

</style>

<script>
export default {
  name: 'WorksPage',
  data() {
    return {
      isVisibletitle: false,
      isVisiblelp: false,
      swiperOption: {
        speed: 2000,//スライドの切り替わりスピード
        spaceBetween: 30,//各スライドの余白
        centeredSlides: true,//スライダーを真ん中に
        loop: true, //無限ループ
        slidesPerView: 1,
        autoplay: { //スライドの自動切り替え
          delay: 1000,//スライドの自動切り替えの秒数
          disableOnInteraction: false//何らかのアクション後の自動切り替えを再開
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
      }
      // pagination: {
      //   el: '.swiper-pagination',
      //   clickable: true
      // },
      }
    }
  },
  methods: {
      visibilityChangedtitle (isVisibletitle, entry) {
        this.isVisibletitle = isVisibletitle
      },
      visibilityChangedlp (isVisiblelp, entry) {
        this.isVisiblelp = isVisiblelp
      }
  }
}
</script>
