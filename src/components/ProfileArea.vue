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
                  <router-link to="/profile">
                      Profile
                  </router-link>
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

</template>

<style scoped>
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
.title h1{
  font-size: 180px;
  font-weight: 700;
  text-shadow: 25px 25px 30px #fff;
}
/* profile */
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
