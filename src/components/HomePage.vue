<template>
  <div class="top-page">
    <div class="main-img">
      <img src="../assets/mybike-img.png" alt="バイク" class="img-fluid">
    </div>
    <!-- profile -->
    <div id="profile">
      <div class="container profile-box">
        <div
        v-observe-visibility="visibilityChanged01"
        v-bind:class="[isVisible01 === true ? 'fade3' : 'a']"
        class="title"
        >
          <h1>Profile</h1>
        </div>
        <div class="profile-data">
          <div
          v-observe-visibility="visibilityChangedmyname"
          v-bind:class="[isVisiblemyname === true ? 'fade1' : 'a']"
          class="my-name">
            <h2>Kikkawa Atsutaka</h2>
          </div>
          <div class="row">
            <div
            v-observe-visibility="visibilityChangedtext"
            v-bind:class="[isVisibletext === true ? 'fade1' : 'a']"
            class="col-md-5 profile-text">
              <h3>Webデザイナー志望</h3>
              <p>
                2018年3月に航空自衛隊に入隊。<br>
                職種は調達で、主に防衛装備品の見積価格の査定や契約の締結、
                納期交渉等を行なっていた。<br>
                コロナウイルスの流行により、スキルを持つ人は異常時にも働く場所、時間
                に囚われないと知り、私もそういう市場価値の高い人
                間になりたいと思い、プログラミング学習を始める。<br>
                本気でWeb業界で仕事をするために、2020年12月に航空自衛隊を退職。
              </p>
              <div>
                <div class="read-more">
                  <router-link to="/profile">
                      read more
                  </router-link>
                </div>
              </div>
            </div>
            <div
            v-observe-visibility="visibilityChangedme"
            v-bind:class="[isVisibleme === true ? 'fade2' : 'a']"
            class="col-md-7 profile-img">
              <img src="../assets/my-picture1.png" alt="橘川" class="img-fluid">
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- skills -->
    <div id="skills">
      <div class="container skills-box">
        <div
        v-observe-visibility="visibilityChanged02"
        v-bind:class="[isVisible02 === true ? 'fade3' : 'a']"
        class="title">
            <h1>Skills</h1>
        </div>
        <div class="skills-area">
          <div
          v-observe-visibility="visibilityChangedhtml"
          v-bind:class="[isVisiblehtml === true ? 'fade2' : 'a']"
          class="skills-data html-box">
            <div class="img-box">
              <img src="../assets/icon-htmlcss.png" art="HTML" class="img-fluid">
            </div>
            <div class="text-box">
              <h2>HTML5/CSS3</h2>
              <p>
                レスポンシブサイトのコーディング。正しい文法で、UXが高く、
                コードがDRYで保守が容易な、SEOにも配慮したサイトをつくるべく日々勉強中です。
              </p>
            </div>
          </div>
          <div
          v-observe-visibility="visibilityChangedjs"
          v-bind:class="[isVisiblejs === true ? 'fade1' : 'a']"
          class="skills-data js-box">
            <div class="img-box">
              <img src="../assets/icon-javascript.png" art="JavaScript" class="img-fluid">
            </div>
            <div class="text-box">
              <h2>JavaScript</h2>
              <p>
                Class属性を操作してサイトに動きを付けたり、
                プラグインを使ってスライドショーや可変グリッドレイアウトを実装したり。
              </p>
            </div>
          </div>
          <div
          v-observe-visibility="visibilityChangedps"
          v-bind:class="[isVisibleps === true ? 'fade2' : 'a']"
          class="skills-data ps-box">
            <div class="img-box">
              <img src="../assets/icon-photoshop.png" art="Photoshop" class="img-fluid">
            </div>
            <div class="text-box">
              <h2>Adobe Photoshop</h2>
              <p>
                Photoshopを使用したデザインカンプの作成。
                また、バナーやアイコンなど、サイトのパーツも作成します。
              </p>
            </div>
          </div>
          <div
          v-observe-visibility="visibilityChangedxd"
          v-bind:class="[isVisiblexd === true ? 'fade1' : 'a']"
          class="skills-data xd-box">
            <div class="img-box">
              <img src="../assets/icon-xd.png" art="XD" class="img-fluid">
            </div>
            <div class="text-box">
              <h2>Adobe XD</h2>
              <p>
                adobeXDを使用したワイヤーフレームの作成。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- works -->
    <div id="works">
      <div class="container works-box">
        <div
        v-observe-visibility="visibilityChanged03"
        v-bind:class="[isVisible03 === true ? 'fade3' : 'a']"
        class="title">
            <h1>Works</h1>
        </div>
        <swiper
          ref="mySwiper"
          :options="swiperOption"
          class="slide"
        >
          <swiper-slide>
            <a href="">
              <img src="../assets/schoolLP.jpg" alt="デザインスクール" class="img-fluid">
              <h2>WebデザインスクールLP</h2>
            </a>
          </swiper-slide>
          <swiper-slide>
            <a href="">
              <img src="../assets/dental.jpg" alt="歯科LP" class="img-fluid">
              <h2>歯科矯正LP</h2>
            </a>
          </swiper-slide>
          <swiper-slide>
            <a href="">
              <img src="../assets/img1.jpg" alt="バイク" class="img-fluid">
              <h2>バイク</h2>
            </a>
          </swiper-slide>
          <!-- <div class="swiper-pagination" slot="pagination"></div> -->
          <div slot="button-prev" class="swiper-button-prev"></div>
          <div slot="button-next" class="swiper-button-next"></div>
        </swiper>
      </div>
    </div>
    <!-- contact -->
    <div id="contact">
      <div class="container">
        <div
        v-observe-visibility="visibilityChanged04"
        v-bind:class="[isVisible04 === true ? 'fade3' : 'a']"
        class="title">
          <h1>Contact</h1>
        </div>
        <div class="contact-box">
          <form action="" method="post">
            <p>
              <input type="text" name="name" size="40" placeholder="NAME" class="name">
            </p>
            <p>
              <textarea name="message" rows="4" cols="40" placeholder="MESSAGE" class="message"></textarea>
            </p>
            <p>
              <input type="submit" value="SEND" class="send">
            </p>
          </form>
        </div>
      </div>
    </div>
  </div> <!-- toppage-->
</template>

<style scoped>
/* main */
.top-page{
  z-index: 50;
}

.title h1{
  font-size: 180px;
  font-weight: 700;
  text-shadow: 25px 25px 30px #fff;
}

.main-img img{
  object-fit: cover;
}

/* profile */
#profile{
  padding: 10rem 0;
}
#profile h1{
  text-align: right;
  padding-bottom: 5rem;
}
#profile h2{
  font-size: 85px;
}
#profile h3{
  font-size: 45px;
}
#profile p{
  font-size: 19px;
  line-height: 1.6;
  padding: 1.5rem;
}
.profile-text{
  padding: 1rem;
}
.read-more{
  text-align: center;
}
.read-more a{
  background-color: #000;
  border: white 1px solid;
  color: #fff;
  padding: 0.8rem 0.8rem;
  text-decoration: none;
}
.read-more a:hover{
  background-color: rgba(255,255,255,0.4);
}

/* skills */
#skills{
  padding: 10rem 0;
}
#skills h1{
  padding-bottom: 2rem;
}
.skills-data{
  border: solid 1px #fff;
  width: 500px;
  text-align: center;
  padding: 2rem;
}
.img-box{
  padding: 2rem;
}
.text-box{
  text-align: left;
}
.text-box h2{
  padding: 1rem 0;
}
.text-box p{
  line-height: 1.8;
}
.html-box, .ps-box{
  margin: 0 0 0 auto;
}
.js-box, .ps-box, .xd-box{
  margin-top: -15rem;
}

/* works */
#works{
  padding: 10rem 0;
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
.more-works a:hover{
  background-color: rgba(255,255,255,0.4);
}
.slide{
  margin: 10rem 0;
}
.slide a{
  color: #fff;
  text-align: center;
}
.slide a:hover{
  text-decoration: none;
  opacity: 0.8;
}
.slide img{
  padding: 3rem 5rem;
}
.slide h2{
  padding: 0;
}

.swiper-button-prev, .swiper-button-next{
  color: #fff;
}


/* contact */
#contact{
  background-color: black;
  text-align: center;
}
#contact h1{
  padding: 2rem 0;
}
.contact-box{
  padding: 5rem 0 8rem;
}
.name{
  width: 800px;
  height: 60px;
  color: #fff;
  background: rgba(255,255,255,0.4);
  border: solid 1px #fff;
  font-size: 1.5rem;
  font-weight: 300;
  padding-left: 1rem;
  margin-bottom: 2rem;
}
.name::placeholder{
  color: #fff;
}
.message::placeholder{
  color: #fff;
  font-size: 1.5rem;
}
.message{
  width: 800px;
  height: 300px;
  color: #fff;
  background: rgba(255,255,255,0.4);
  border: solid 1px #fff;
  font-size: 1.5rem;
  font-weight: 300;
  padding: 0.5rem 0 0 1rem;
  margin-bottom: 2rem;
}
.send{
  width: 150px;
  height: 60px;
  background: none;
  color: #fff;
  border: solid 1px #fff;
  border-radius: 20px;
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
.a{
  opacity: 0;
}

@media screen and (max-width: 1200px){
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
  .main-img img{
    margin-top: 2rem;
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
  .read-more a{
  padding: 0.6rem 0.6rem;
  text-decoration: none;
  font-size: 0.8rem;
}
.read-more a:hover{
  background-color: rgba(255,255,255,0.4);
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
  #profile, #skills, #works{
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
export default {
  name: 'HomePage',
  data (){
    return {
        isVisible01: false,
        isVisible02: false,
        isVisible03: false,
        isVisible04: false,
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
  }
}
</script>
