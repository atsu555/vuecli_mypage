<template>
  <div class="top-page">
    <Loading v-show="loading"></Loading>
    <div class="main-img">
      <img src="../assets/topimg.jpg" alt="バイク" class="pc img-fluid">
      <img src="../assets/topimg-4.jpg" alt="バイク" class="md img-fluid">
      <img src="../assets/topimg-3.jpg" alt="バイク" class="sp img-fluid">
    </div>
    <!-- プロフィール -->
    <profile-area></profile-area>
    <!-- サービス -->
    <service-area></service-area>
    <!-- スキル -->
    <skills-area></skills-area>
    <!-- works -->
    <works-area></works-area>
    <!-- contact -->
    <contact-area></contact-area>
  </div> <!-- toppage-->
</template>

<style scoped>
/* パソコンで見たときは"pc"のclassがついた画像が表示される */
.pc { display: block !important; }
.md { display: none !important; }
.sp { display: none !important; }
@media screen and (max-width: 1024px){
  /* スマートフォンで見たときは"sp"のclassがついた画像が表示される */
  .pc {
    display: none !important;
  }
  .md {
    display: block !important;
  }
}
@media screen and (max-width: 500px){
  /* スマートフォンで見たときは"sp"のclassがついた画像が表示される */
  .md {
    display: none !important;
  }
  .sp {
    display: block !important;
  }
  .main-img img{
    height: auto !important;
    object-fit: cover;
  }
}
@media screen and (max-width: 375px){
  .main-img img{
    object-fit: fill !important;
    height: 100vh !important;
  }
}
.img-250{
  width: 250px;
  height: 250px;
}
/* main */
.top-page{
  background: black;
}

.title h1{
  font-size: 180px;
  font-weight: 700;
  text-shadow: 25px 25px 30px #fff;
}


.main-img img{
  height: 100vh;
  object-fit: cover;
}

/* タイトルアンダーライン */
.read-more a{
  color: #fff;
  text-decoration: none;
  padding-bottom: 1rem;
}
.read-more a:after{
  content: '';
	width: 0;
	transition: all 0.5s ease;
	border-bottom: 3px solid #fff;
  display: block;
}
.read-more a:hover:after {
	width: 50%;
	border-bottom: 3px solid #fff;
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
    transform: translateX(-200px)
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
    transform: translateX(200px)
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
.fade4{
  opacity: 0;
  animation-name: title-fade1;
  animation-duration: 3s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
}
@keyframes title-fade1{
  0%{
    opacity: 0;
    transform: translateY(0px)
  }
  100%{
    opacity: 1;
    transform: translateY(0);
  }
}
.a{
  opacity: 0;
}

@media screen and (max-width: 1200px){
  .main-img img{
    /* height: auto; */
    object-fit: fill;
  }
  #profile h2{
    font-size: 80px;
  }
  #profile h3{
    font-size: 35px;
  }
  #profile p{
    font-size: 17px;
    line-height: 1.6;
    padding: 0.8rem;
  }
  .profile-text{
    padding: 0.8rem;
  }
  /* skills */
  .img-box{
    padding: 2rem;
  }
  .html-box, .ps-box, .js-box, .xd-box{
    margin: 5rem auto;
  }
  .js-box, .ps-box, .xd-box{
    margin-top: 0;
  }
  /* works */
  .works-item1{
    margin: 5rem auto;
  }
}
@media screen and (max-width: 900px){
  .title h1{
    font-size: 150px;
    text-shadow: 20px 20px 25px #fff;
  }
  /* profile */
  #profile h2{
    font-size: 70px;
  }
  #profile h3{
    font-size: 30px;
  }
  #profile p{
    font-size: 14px;
    line-height: 1.4;
    padding: 0.5rem;
  }
  .profile-text{
    padding: 0.5rem;
  }
  /* service */
  .service-area{
    flex-direction: column;
    margin-top: 5rem;
    text-align: center;
  }
  .service-item{
    margin: 1rem 0;
  }
  /* contact */
  .name{
    width: 500px;
    height: 60px;
    font-size: 1.3rem;
    padding-left: 1rem;
    margin-bottom: 2rem;
  }
  .message{
    width: 500px;
    height: 300px;
    font-size: 1.3rem;
    padding: 0.5rem 0 0 1rem;
    margin-bottom: 2rem;
  }
}
@media screen and (max-width: 767px){
  .profile-img{
    display: none;
  }
}
@media screen and (max-width: 500px){
  #profile, #skills, #works, #service{
    padding: 5rem 0;
  }
  .title h1{
    font-size: 75px;
    text-shadow: 18px 18px 20px #fff;
  }

  /* profile */
  #profile h2{
    font-size: 60px;
    padding: 0.5rem;
  }
  #profile h3{
    font-size: 25px;
  }
  #profile p{
    font-size: 13px;
    line-height: 1.6;
    padding: 0.5rem;
  }
  .profile-text{
    padding: 1rem;
  }
  /* service */
  #service h2{
    font-size: 1.5rem;
  }
  #service p{
    font-size: 10px;
  }
  .service-content{
    font-size: 0.8rem;
  }
  .service-item{
    padding: 0.5rem;
  }
  /* skills */
  .skills-data{
    width: 300px;
    text-align: center;
    padding: 1.5rem;
  }
  .text-box h2{
    padding: 0.8rem 0;
    font-size: 25px;
  }
  .text-box p{
    font-size: 13px;
    line-height: 1.7;
  }
  .img-box{
    padding: 2rem;
  }
  .html-box, .ps-box, .js-box, .xd-box{
    margin: 4rem auto;
  }
  .js-box, .ps-box, .xd-box{
    margin-top: 0;
  }
  /* works */

  /* contact */
  .name{
    width: 280px;
    height: 50px;
    font-size: 1.2rem;
    padding-left: 1rem;
  }
  .message{
    width: 280px;
    height: 300px;
    font-size: 1.2rem;
    padding: 0.5rem 0 0 1rem;
  }
  /* works */
  #works h2{
    font-size: 25px;
  }
  .works-item1{
    width: 290px;
  }
  .works-item2{
    width: 290px;
  }
  .works-items{
    padding: 3rem 0;
  }
  .slide{
    margin: 5rem 0;
  }
  .slide h2{
    font-size: 15px;
  }
  .slide img{
    padding: 0.5rem 3.5rem;
  }

}

</style>

<script>
import ProfileArea from '@/components/ProfileArea'
import ServiceArea from '@/components/ServiceArea'
import SkillsArea from '@/components/SkillsArea'
import WorksArea from '@/components/WorksArea'
import ContactArea from '@/components/ContactArea'
// import Loading from '@/components/Loading'
export default {
  components: {
    ProfileArea,
    ServiceArea,
    SkillsArea,
    WorksArea,
    ContactArea
  },
  name: 'HomePage',
  data (){
    return {
        // loading: true,
        isVisible01: false,
        isVisible02: false,
        isVisible03: false,
        isVisible04: false,
        isVisible05: false,
        isVisibleco: false,
        isVisiblede: false,
        isVisibleword: false,
        isVisiblemyname: false,
        isVisibletext: false,
        isVisibleme: false,
        isVisiblehtml: false,
        isVisiblejs: false,
        isVisibleps: false,
        isVisiblexd: false,
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
      visibilityChanged01 (isVisible01, entry) {
        this.isVisible01 = isVisible01
      },
      visibilityChanged02 (isVisible02, entry) {
        this.isVisible02 = isVisible02
      },
      visibilityChanged03 (isVisible03, entry) {
        this.isVisible03 = isVisible03
      },
      visibilityChanged04 (isVisible04, entry) {
        this.isVisible04 = isVisible04
      },
      visibilityChanged05 (isVisible05, entry) {
        this.isVisible05 = isVisible05
      },
      visibilityChangedco (isVisibleco, entry) {
        this.isVisibleco = isVisibleco
      },
      visibilityChangedde (isVisiblede, entry) {
        this.isVisiblede = isVisiblede
      },
      visibilityChangedword (isVisibleword, entry) {
        this.isVisibleword = isVisibleword
      },
      visibilityChangedmyname (isVisiblemyname, entry) {
        this.isVisiblemyname = isVisiblemyname
      },
      visibilityChangedtext (isVisibletext, entry) {
        this.isVisibletext = isVisibletext
      },
      visibilityChangedme (isVisibleme, entry) {
        this.isVisibleme = isVisibleme
      },
      visibilityChangedhtml (isVisiblehtml, entry) {
        this.isVisiblehtml = isVisiblehtml
      },
      visibilityChangedjs (isVisiblejs, entry) {
        this.isVisiblejs = isVisiblejs
      },
      visibilityChangedps (isVisibleps, entry) {
        this.isVisibleps = isVisibleps
      },
      visibilityChangedxd (isVisiblexd, entry) {
        this.isVisiblexd = isVisiblexd
      }
  },
  // mounted() {
  //   setTimeout(() => {
  //     this.loading = false;
  //   }, 2000);
  // }
}
</script>
