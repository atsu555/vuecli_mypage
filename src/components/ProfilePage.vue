<template>
  <!-- profile -->
    <div id="profile">
      <div class="container">
        <div
          v-observe-visibility="visibilityChangedtitle"
          v-bind:class="[isVisibletitle === true ? 'fade3' : 'a']"
          class="title"
        >
          <div class="read-more">
            <h1>
              Profile
            </h1>
          </div>
        </div>
        <div class="profile-box">
            <div class="career-box">
              <h2>Career</h2>
              <div class="career-text">
                <p>1998年：東京都東大和市出身</p>
                <p>2017年：都立東大和南高等学校卒業</p>
                <p>2018年：航空自衛隊へ入隊（入間基地）</p>
                <p>2020年：2年9ヶ月勤めた後、航空自衛隊退職。</p>
              </div>
            </div>
            <div class="introduction-box">
              <h2>Introduction</h2>
              <p>
                初めまして。Webエンジニアの橘川夏隆と申します。
                現在フロントエンドを中心にWebサイト制作行なっております。<br>
                前職は航空自衛隊に勤めており、調達職員として主に
                防衛装備品の契約や納期交渉などをしていました。<br>
                コロナウイルスが流行した際に、スキルを持つ人が時間や場所に囚われず
                働いていることを知り、私もそのような市場価値の高い人間になりたいと思い
                プログラミングの学習を始めました。<br>
                そしてこれから本気でWeb業界で働いていくために、2020年12月に航空自衛隊を
                退職しました。<br>
                「<span style="color: red; font-weight: bold">質</span>」と「<span style="color: red; font-weight: bold">スピード</span>」を重視することで、期待以上のものを提供させていただきます。<br>
                また、クライアント様に寄り添った<span style="color: yellow; font-weight: bold">丁寧なコミュニケーション</span>を常に心がけ、
                <span style="color: yellow; font-weight: bold">最後まで責任を持って</span>、仕事に取り組ませていただきます。
              </p>
            </div>

        </div>
      </div>
    </div>

</template>

<style scoped>
ul{
  list-style: none;
}
/* パソコンで見たときは"pc"のclassがついた画像が表示される */
.pc { display: block !important; }
.sp { display: none !important; }
/* タイトルアンダーライン */
.read-more :after{
  content: '';
	width: 0;
	transition: all 0.5s ease;
	border-bottom: 3px solid #fff;
  display: block;
}
.read-more :hover:after {
	width: 52%;
	border-bottom: 3px solid #fff;
}
.title h1{
  font-size: 180px;
  font-weight: 700;
  text-shadow: 25px 25px 30px #fff;
}
/* profile */
.career-text{
  background: rgba(236, 236, 236,0.8);
  border-radius: 30px;
  color: #211801;
}
.profile-box{
  text-align: center;
}
.career-box, .introduction-box{
  margin: 3rem 0;
}
.introduction-box p{
  line-height: 2.5;
  background: rgba(236, 236, 236,0.8);
  color: #211801;
  border-radius: 30px;
}

#profile{
  padding: 10rem 0;
}
#profile h1{
  text-align: left;
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
  /* line-height: 1.6; */
  padding: 1.5rem;
}
.profile-text{
  padding: 1rem;
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
.profile-button{
  padding-left: 1.5rem;
}
.profile-button a{
  color: #000;
  background-color: white;
  padding: 1rem 3rem;
  border-radius: 50px;
  font-size: 20px;
}
.profile-button a:hover{
  background-color: rgba(255,255,255,0.9);
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
}
@media screen and (max-width: 767px){
  /* スマートフォンで見たときは"sp"のclassがついた画像が表示される */
  .pc {
    display: none !important;
  }
  .sp {
    display: block !important;
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

  .profile-text{
    order: 2;
  }
  .profile-img{
    order: 1;
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
  name: 'ProfilePage',
  data (){
    return {
        isVisibletitle: false,
        isVisiblemyname: false,
        isVisibletext: false,
        isVisibleme: false,
        isVisiblehtml: false,
        isVisiblejs: false,
        isVisibleps: false,
        isVisiblexd: false
    }
  },
  methods: {
      visibilityChangedtitle (isVisibletitle, entry) {
        this.isVisibletitle = isVisibletitle
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
