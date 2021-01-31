<template>
  <div class="container works-contents">
    <div
          v-observe-visibility="visibilityChangedtitle"
          v-bind:class="[isVisibletitle === true ? 'fade3' : 'a']"
          class="title"
    >
            <h1>
              LandingPage
            </h1>
    </div>

    <div class="landing-contents">
      <div class="description">
        <div v-if="show1">
          <h2>スクールLP</h2>
          <p>
            説明が入ります。説明が入ります。説明が入ります。説明が入ります。
            説明が入ります。説明が入ります。説明が入ります。説明が入ります。
            説明が入ります。説明が入ります。説明が入ります。説明が入ります。
            説明が入ります。説明が入ります。説明が入ります。
          </p>
          <div class="use-skill">
            <h2>使用スキル</h2>
            <ul>
              <li class="tag-html">HTML</li>
              <li class="tag-css">CSS</li>
              <li class="tag-ps">Photoshop</li>
              <li class="tag-xd">XD</li>
            </ul>
          </div>
        </div>
        <div v-else-if="show2">
          <h2>矯正歯科LP</h2>
          <p>
            説明が入ります。説明が入ります。説明が入ります。説明が入ります。
            説明が入ります。説明が入ります。説明が入ります。説明が入ります。
            説明が入ります。説明が入ります。説明が入ります。説明が入ります。
            説明が入ります。説明が入ります。説明が入ります。
          </p>
          <div class="use-skill">
            <h2>使用スキル</h2>
            <ul>
              <li class="tag-html">HTML</li>
              <li class="tag-css">CSS</li>
              <li class="tag-js">JavaScirpt</li>
            </ul>
          </div>
        </div>
        <div v-else-if="show3">
          <h2>スクールLP</h2>
          <p>
            説明が入ります。説明が入ります。説明が入ります。説明が入ります。
            説明が入ります。説明が入ります。説明が入ります。説明が入ります。
            説明が入ります。説明が入ります。説明が入ります。説明が入ります。
            説明が入ります。説明が入ります。説明が入ります。
          </p>
          <div class="use-skill">
            <h2>使用スキル</h2>
            <ul>
              <li class="tag-html">HTML</li>
              <li class="tag-css">CSS</li>
              <li class="tag-js">JavaScirpt</li>
              <li class="tag-ps">Photoshop</li>
              <li class="tag-xd">XD</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="landing-box">
        <div>
          <div v-if="show1" class="landing-img">
            <img src="../assets/schoolLP.jpg" alt="デザインスクール" class="img-fluid">
          </div>
          <div v-else-if="show2" class="landing-img">
            <img src="../assets/dental.jpg" alt="デザインスクール" class="img-fluid">
          </div>
          <div v-else-if="show3" class="landing-img">
            <img src="../assets/img1.jpg" alt="デザインスクール" class="img-fluid">
          </div>
        </div>
          <div class="thumbnails">
            <ul>
              <li v-on:click="thumbnailBtn1">
                <img src="../assets/schoolLP.jpg" alt="デザインスクール" class="img-fluid"/>
              </li>
              <li v-on:click="thumbnailBtn2">
                <img src="../assets/dental.jpg" alt="デザインスクール" class="img-fluid"/>
              </li>
              <li v-on:click="thumbnailBtn3">
                <img src="../assets/img1.jpg" alt="デザインスクール" class="img-fluid"/>
              </li>
            </ul>
          </div>
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
  font-size: 150px;
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

.landing-contents{
  display: flex;
  margin: 3rem 0;
  width: 100%;
}
.description{
  border: solid 1px white;
  flex: 1;
  padding: 0.5rem;
  text-align: left;
}
.description h2{
  font-size: 1.8rem;
  margin: 2rem 0;
}
.description p{
  padding: 0 0.5rem;
}
.use-skill ul{
  list-style: none;
  padding: 0 0.5rem;
}
.use-skill li{
  padding: 3px;
  width: 100px;
  height: 30px;
  text-align: center;
  margin: 0.5rem 0;
}
.tag-html{
  background-color: #F08A53;
  border-radius: 30px;
}
.tag-css{
  background-color: #21ACD6;
  border-radius: 30px;
}
.tag-js{
  background-color: #E6E637;
  border-radius: 30px;
}
.tag-ps{
  background-color: #17202C;
  border-radius: 30px;
  color: #3D94DE;
}
.tag-xd{
  background-color: #271525;
  border-radius: 30px;
  color: #E54CE5;
}
.landing-box{
  flex: 4;
  margin: 0 1rem;
}
.landing-img{
  margin: 0.6rem 0;
}
.thumbnails ul{
  list-style: none;
  display: flex;
  padding: 0;
}
.thumbnails li{
  margin: 0.5rem 0.5rem 0 0;
}
.thumbnails li:last-child{
  margin-right: 0;
}
.thumbnails img{
  object-fit: cover;
  width: 280px;
  height: 160px;
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
      show1: true,
      show2: false,
      show3: false,
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
      },
      thumbnailBtn1: function(){
          this.show1 = true,
          this.show2 = false,
          this.show3 = false
      },
      thumbnailBtn2: function(){
          this.show2 = true,
          this.show1 = false,
          this.show3 = false
      },
      thumbnailBtn3: function(){
          this.show3 = true,
          this.show1 = false,
          this.show2 = false
      }
  }
}
</script>
