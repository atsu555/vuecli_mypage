<template>
  <!-- profile -->
    <div id="profile">
      <div class="container profile-box">
        <div
        v-observe-visibility="visibilityChanged01"
        v-bind:class="[isVisible01 === true ? 'fade3' : 'a']"
        class="title"
        >
        <div class="read-more">
          <h1>
              Profile
          </h1>
        </div>
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
              <h3>Webエンジニア</h3>
              <p>
                初めまして。Webエンジニアの橘川夏隆と申します。<br>
                現在フロントエンドを中心にWebサイト制作行なっております。<br>
                「<span style="color: red; font-weight: bold">質</span>」と「<span style="color: red; font-weight: bold">スピード</span>」を重視することで、期待以上のものを提供させていただきます。<br>
                また、クライアント様に寄り添った<span style="color: yellow; font-weight: bold">丁寧なコミュニケーション</span>を常に心がけ、
                <span style="color: yellow; font-weight: bold">最後まで責任を持って</span>、仕事に取り組ませていただきます。
              </p>
            </div>
            <div
            v-observe-visibility="visibilityChangedme"
            v-bind:class="[isVisibleme === true ? 'fade2' : 'a']"
            class="col-md-7 profile-img">
              <img src="../assets/my-picture1.png" alt="橘川" class="img-fluid pc">
              <img src="../assets/mypicture2.png" alt="橘川" class="img-fluid sp">
            </div>
          </div>
        </div>
      </div>
    </div>

</template>

<style scoped>
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
	width: 100%;
	border-bottom: 3px solid #fff;
}
.title h1{
  font-size: 180px;
  font-weight: 700;
  text-shadow: 25px 25px 30px #fff;
}
/* profile */
#profile{
  padding: 10rem 0 5rem;
}
#profile h1{
  text-align: left;
  padding-bottom: 5rem;
  display: inline-block;
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
    transform: translateX(-100px)
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
    transform: translateX(100px)
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
  name: 'ProfileArea',
  data (){
    return {
        isVisible01: false,
        isVisiblemyname: false,
        isVisibletext: false,
        isVisibleme: false
    }
  },
  methods: {
      visibilityChanged01 (isVisible01, entry) {
        this.isVisible01 = isVisible01
      },
      visibilityChangedmyname (isVisiblemyname, entry) {
        this.isVisiblemyname = isVisiblemyname
      },
      visibilityChangedtext (isVisibletext, entry) {
        this.isVisibletext = isVisibletext
      },
      visibilityChangedme (isVisibleme, entry) {
        this.isVisibleme = isVisibleme
      }
  }
  }
</script>
