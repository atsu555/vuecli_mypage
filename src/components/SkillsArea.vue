<template>
<div id="skills">
      <div class="container skills-box">
        <div
        v-observe-visibility="visibilityChanged02"
        v-bind:class="[isVisible02 === true ? 'fade3' : 'a']"
        class="title">
          <div class="read-more">
            <h1>
                    <router-link to="/skills">
                        Skills
                    </router-link>
            </h1>
          </div>
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
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<style scoped>
.img-250{
  width: 250px;
  height: 250px;
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
.title h1{
  font-size: 180px;
  font-weight: 700;
  text-shadow: 25px 25px 30px #fff;
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
#skills .read-more a:hover:after {
	width: 40%;
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
  name: 'SkillsArea',
  data (){
    return {
        isVisible02: false,
        isVisiblehtml: false,
        isVisiblejs: false,
        isVisibleps: false,
        isVisiblexd: false
    }
  },
  methods: {
      visibilityChanged02 (isVisible02, entry) {
        this.isVisible02 = isVisible02
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
