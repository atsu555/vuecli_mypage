<template>
  <div id="works">
    <div class="container works-box">
      <div
      v-observe-visibility="visibilityChanged03"
      v-bind:class="[isVisible03 === true ? 'fade3' : 'a']"
      class="title">
        <div class="read-more">
          <h1>
             Works
          </h1>
        </div>
      </div>
      <swiper
        ref="mySwiper"
        :options="swiperOption"

      >
        <swiper-slide>
            <div class="slide">
              <a href="#">
                <img src="../assets/schoolLP.jpg" alt="デザインスクール" class="img-fluid">
                <div class="mask1"></div>
                <div class="mask2"></div>
                <div class="caption">
                  <p>
                    【Category】実案件<br><br>
                    【Title】合同会社Day Produce様ホームページ<br><br>
                    【Skill】HTML / CSS / JQuery / WordPress / Photoshop /XD<br><br>
                  </p>
                </div>
              </a>
              <div class="caption2">
                <p>
                  【Category】実案件<br>
                  【Title】合同会社Day Produce様ホームページ<br>
                  【Skill】HTML / CSS / JQuery / WordPress / Photoshop /XD<br>
                </p>
              </div>
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="slide">
              <a href="#">
                <img src="../assets/portfoliosite.jpg" alt="デザインスクール" class="img-fluid">
                <div class="mask1"></div>
                <div class="mask2"></div>
                <div class="caption">
                  <p>
                    【Category】オリジナルサイト<br><br>
                    【Title】Kikkawa Atsutaka Portofolio<br><br>
                    【Skill】HTML / CSS / Vue.js / WordPress / Photoshop /XD<br><br>
                  </p>
                </div>
              </a>
              <div class="caption2">
                <p>
                  【Category】オリジナルサイト<br>
                  【Title】Kikkawa Atsutaka Portofolio<br>
                  【Skill】HTML / CSS / Vue.js / WordPress / Photoshop /XD<br>
                </p>
              </div>
            </div>
        </swiper-slide>
        <!-- <div class="swiper-pagination" slot="pagination"></div> -->
        <div slot="button-prev" class="swiper-button-prev"></div>
        <div slot="button-next" class="swiper-button-next"></div>
      </swiper>

    </div>
  </div>
</template>

<style scoped>
.img-250{
  width: 250px;
  height: 250px;
}
/* タイトルアンダーライン */
.read-more :after{
  content: '';
	width: 0;
	transition: all 0.5s ease;
	border-bottom: 3px solid #fff;
  display: block;
}
.read-more :hover:after {
	width: 100%;
	border-bottom: 3px solid #fff;
}
.title h1{
  font-size: 180px;
  font-weight: 700;
  text-shadow: 25px 25px 30px #fff;
}
/* works */
#works{
  padding: 5rem 0;
}
#works h1{
  display: inline-block;
}
.works-items{
  padding: 5rem 0;
  margin: 0 auto;
}
.works-item1{
  margin-bottom: 3rem;
}
.more-works{
  text-align: center;
}
.more-works a{
  background-color: #000;
  border: white 1px solid;
  color: #fff;
  padding: 1rem 3rem;
  text-decoration: none;
  font-size: 2rem;
  font-weight: 300;
}
.slide{
  margin: 5rem 0;
  position: relative;
  text-align: center;
}
.slide a{
  color: #fff;
  text-align: center;
}
.slide a:hover{
  text-decoration: none;
}
.caption{
  visibility: hidden;
  position: absolute;
  top: 15vh;
  left: 17vw;
  -webkit-transition:	all 0.4s step-end;
	transition:		all 0.4s step-end;
}
.caption p{
  opacity: 0;
  font-size: 150%;
}
.mask1, .mask2{
  width:			50%;	/* 幅は半部のサイズ */
	height:			100%;
	position:		absolute;
	top:			0;
	background-color:	rgba(0,0,0,0.7);
	-webkit-transition:	all .6s ease;
	transition:		all .6s ease;
}
.mask1{
  left:	-50%;
  visibility: hidden;
}
.mask2{
  right: -50%;
  visibility: hidden;
}
.slide a:hover .mask1{
	left:	0px;	/* 左にずらして表示する */
  visibility: visible;
}
.slide a:hover .mask2 {
	right:	0px;	/* 左にずらして表示する */
  visibility: visible;
}
.slide a:hover .caption{
  visibility: visible;
}
.slide a:hover .caption p{
  opacity: 1;
}
.slide img{
  width: 50vw;
}
.slide h2{
  padding: 0;
}

.swiper-button-prev, .swiper-button-next{
  color: #fff;
}
.caption2{
  display: none;
}
.swiper-button-next::after{
  outline: none;
}
.swiper-button-prev::after{
  outline: none;
}
@media screen and (max-width: 1024px){
  .caption2{
    display: block;
    font-size: 15px;
    margin-top: 10px;
  }
  .caption{
    display: none;
  }
}
@media screen and (max-width: 500px){
  .caption2{
    display: block;
    font-size: 10px;
  }
  .swiper-button-prev{
    top: 45%;
  }
  .swiper-button-next{
    top: 45%;
  }
  .swiper-button-prev::after{
    font-size: 25px;
  }
  .swiper-button-next::after{
    font-size: 25px;
  }
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
    height: auto;
    width: 100%;
    object-fit: cover;
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
}
</style>

<script>
export default {
  name: 'WorksArea',
  data (){
    return {
        isVisibletitle: false,
        isVisiblelp: false,
        isVisible03: false,
        swiperOption: {
        speed: 2000,//スライドの切り替わりスピード
        spaceBetween: 30,//各スライドの余白
        centeredSlides: true,//スライダーを真ん中に
        loop: true, //無限ループ
        slidesPerView: 1,
        // autoplay: { //スライドの自動切り替え
        //   delay: 1000,//スライドの自動切り替えの秒数
        //   disableOnInteraction: false//何らかのアクション後の自動切り替えを再開
        // },
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
      visibilityChanged03 (isVisible03, entry) {
        this.isVisible03 = isVisible03
      },
      visibilityChangedtitle (isVisibletitle, entry) {
        this.isVisibletitle = isVisibletitle
      },
      visibilityChangedlp (isVisiblelp, entry) {
        this.isVisiblelp = isVisiblelp
      }
  }
  }
</script>
