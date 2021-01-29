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
