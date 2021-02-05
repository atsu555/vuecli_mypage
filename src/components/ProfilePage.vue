<template>
  <div class="About">
        <div
        v-observe-visibility="visibilityChangedtitle"
        v-bind:class="[isVisibletitle === true ? 'fade3' : 'a']"
        class="title"
        >
          <h1>About</h1>
        </div>
        <div class="about-me">
          <div class="about-text">
            <h2>橘川 夏隆</h2>
            <h3>Kikkawa Atsutaka</h3>
            <p class="info">
              22歳。東京都在住。Webデザイナー・コーダー志望で勉強と
              就職活動をしています。(2021年1月時点)
            </p>
            <p class="info">
              2018年3月に航空自衛隊に入隊し、調達員として入間基地で
              勤務をしていました。コロナウイルスが流行し始めた際に、ス
              キルを身につけてどんな時代にも適応できる市場価値の高い人
              材になりたいと思い、プログラミングの学習を始めました。
              Web業界に本格的に就職したいと考え、自衛隊の退職を決意
              し、現在はWebデザインやコーディングをしたりしながら東京
              を中心に就職活動をしています。
            </p>
          </div>
          <div class="about-img">
            <img src="../assets/bike-fuji.png" art="富士山" class="img-fluid">
          </div>
        </div>
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
/* Profilepage */
.About h1{
  margin: 0 0 5rem 5rem;
  padding-top: 5rem;
}
.about-img{
  flex: 3;
}
.about-me{
  display: flex;
}
.about-me h3{
  font-family: 'Noto Serif JP', serif;
}
.about-text{
  flex: 1;
  padding-top: 8rem;
}
.about-me{
  margin-left: 5rem;
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
@media screen and (max-width: 1100px) {
  .about-text{
    top: 12rem;
  }
  .about-text h2{
    font-size: 1.5rem;
  }
  .about-text h3{
    font-size: 1.1rem;
  }
  .about-text p{
    font-size: 0.6rem;
    margin: 0.8rem 0 1rem;
  }
}
@media screen and (max-width: 768px) {
  .title h1{
    font-size: 150px;
    text-shadow: 20px 20px 25px #fff;
  }
  .About h1{
    margin: 5rem 0 5rem 2rem;
  }
  .about-img{
    flex: 3;
  }
  .about-me{
    display: flex;
  }
  .about-me p{
    line-height: 1.7;
  }
  .about-text{
    flex: 1;
    padding-top: 2rem;
  }
  .about-me{
    margin-left: 2rem;
  }
}
@media screen and (max-width: 500px){
  .About{
    padding-bottom: 10rem;
  }
  .title h1{
    font-size: 70px;
    text-shadow: 10px 10px 15px #fff;
  }
  .about-me{
    margin-left: 2rem;
  }
  .about-text{
    padding-top: 3rem;
    flex: 1;
  }
  .about-img{
    flex: 4;
  }
  .about-text h2{
    font-size: 1rem;
  }
  .about-text h3{
    font-size: 0.5rem;
  }
  .info{
    display: none;
  }
}
</style>

<script>
export default {
  name: 'ProfilePage',
  data (){
    return {
        isVisibletitle: false
    }
  },
  methods: {
      visibilityChangedtitle (isVisibletitle, entry) {
        this.isVisibletitle = isVisibletitle
      }
  }
}
</script>
