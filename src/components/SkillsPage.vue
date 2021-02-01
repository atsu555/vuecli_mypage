<template>
  <div class="container skills-contents">
    <div class="skills-title">
      <div
          v-observe-visibility="visibilityChangedtitle"
          v-bind:class="[isVisibletitle === true ? 'fade3' : 'a']"
          class="title"
          >
            <h1>Skills</h1>
      </div>
      <p>
        本サイトは自身で企画・設計しデザインからコーディングまでを行い作成しました。
      </p>
      <p>以下が本サイト作成時の使用スキルです。</p>
      <p><a href="https://github.com/atsu555/vuecli_mypage">本サイトのコードはこちら</a></p>
    </div>
    <div class="title2-box">
        <div
        v-observe-visibility="visibilityChangedcode"
        v-bind:class="[isVisiblecode === true ? 'fade3' : 'a']"
        class="title"
        >
          <h1>Cording</h1>
        </div>
        <div class="skill-box">
          <div class="skill-img">
            <img src="../assets/icon-htmlcss.png" art="HTML" class="img-fluid">
          </div>
          <div class="skill-html">
            <h2>HTML5/CSS3</h2>
            <p>
              レスポンシブサイトのコーディング。正しい文法で、UXが高く、
              コードがDRYで保守が容易な、SEOにも配慮したサイトをつくるべく日々勉強中です。
            </p>
          </div>
        </div>
        <div class="skill-box">
          <div class="skill-img">
            <img src="../assets/logo.png" art="JavaScript" class="img-fluid">
          </div>
          <div class="skill-html">
            <h2>JavaScript/Vue.js</h2>
            <p>
              class属性を操作してサイトに動きを付けたり、
              プラグインを使ってスライドショーや可変グリッドレイアウトを実装したり。
              本サイトはVueで実装。
            </p>
          </div>
        </div>
    </div>
    <div class="title2-box">
        <div
        v-observe-visibility="visibilityChangeddesign"
        v-bind:class="[isVisibledesign === true ? 'fade3' : 'a']"
        class="title design"
        >
          <h1>Design</h1>
        </div>
        <div class="skill-box">
          <div class="skill-img">
            <img src="../assets/icon-photoshop.png" art="Photoshop" class="img-fluid">
          </div>
          <div class="skill-html">
            <h2>Adobe Photoshop</h2>
            <p>
              Photoshopを使用したデザインカンプの作成。
              また、バナーやアイコンなど、サイトのパーツも作成します。
            </p>
          </div>
        </div>
        <div class="skill-box">
          <div class="skill-img">
            <img src="../assets/icon-xd.png" art="XD" class="img-fluid">
          </div>
          <div class="skill-html">
            <h2>Adobe XD</h2>
            <p>
              HTML/CSSでコーディングをする前にWebサイトのデザインと
              プロトタイプ(ワイヤーフレーム)の作成をします。
            </p>
          </div>
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
.title2-box h1{
  margin: 5rem 0;
  font-size: 140px;
}
.title2-box{
  margin: 6rem 1.5rem;
}
/* SkillsPage */
.skills-contents{
  padding-top: 5rem;
}
.skills-title p{
  font-size: 1.7rem;
  padding: 1.5rem 0.5rem;
  margin: 0;
}

.skill-box{
  display: flex;
  margin: 3rem 0;
}
.skill-img{
  padding: 2rem;
}
.skill-html{
  padding: 2rem 5rem;
}
.design h1{
  text-align: right;
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

@media screen and (max-width: 768px){
  .title h1{
    font-size: 150px;
    text-shadow: 20px 20px 25px #fff;
  }
  .skills-title p{
    font-size: 1.2rem;
    padding: 1rem 0.5rem;
    margin: 0;
  }
  .title2-box h1{
    margin: 3rem 0;
    font-size: 100px;
  }
}
@media screen and (max-width: 500px){
  .skill-img{
    padding: 3rem;
  }
  .skill-box{
    flex-direction: column;
    margin: 3rem 0;
  }
  .skill-html{
    padding: 0.5rem 1rem;
    text-align: left;
  }
  .skill-html p{
    padding: 0 5px;
  }
  .title2-box{
    margin: 5rem 0.5rem;
  }
  .title2-box h1{
    font-size: 50px;
  }
  .title h1{
    font-size: 70px;
  }
}

</style>

<script>
export default {
  name: 'SkillsPage',
  data (){
    return {
        isVisibletitle: false,
        isVisiblecode: false,
        isVisibledesign: false,
    }
  },
  methods: {
      visibilityChangedtitle (isVisibletitle, entry) {
        this.isVisibletitle = isVisibletitle
      },
      visibilityChangedcode (isVisiblecode, entry) {
        this.isVisiblecode = isVisiblecode
      },
      visibilityChangeddesign (isVisibledesign, entry) {
        this.isVisibledesign = isVisibledesign
      }
  }
}
</script>
