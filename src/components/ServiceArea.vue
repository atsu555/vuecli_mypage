<template>
<div id="service">
      <div class="container">
        <div
        v-observe-visibility="visibilityChanged05"
        v-bind:class="[isVisible05 === true ? 'fade3' : 'a']"
        class="title">
        <div class="read-more">
          <h1>
                  <router-link to="/service">
                      Service
                  </router-link>
          </h1>
        </div>
        </div>
        <div class="service-area">

          <div
          v-observe-visibility="visibilityChangedco"
          v-bind:class="[isVisibleco === true ? 'fade1' : 'a']"
          class="service-item">
            <div class="service-image">
              <img src="../assets/desktop.jpg" alt="coding" class="img-250"/>
            </div>
            <div class="sub-title">
              <h2>コーディング</h2>
            </div>

            <div class="service-content">
              LPやコーポレートサイト、ブログなど、
              目的に応じた適切なコーディングを行います(レスポンシブ対応可)。また、軽微なコードの修正などにも対応しています。<br><br>
              【料金目安】<br>
              コード修正: ¥10,000~/1p<br>
              LP制作: ¥20,000~/1p
            </div>
          </div>

          <div
          v-observe-visibility="visibilityChangedde"
          v-bind:class="[isVisiblede === true ? 'fade4' : 'a']"
          class="service-item">
            <div class="service-image">
              <img src="../assets//pencil.jpg" alt="web design" class="img-250"/>
            </div>
            <div class="sub-title">
              <h2>Webデザイン</h2>
            </div>
            <div class="service-content">
              ヒアリングにより、ご要望に沿ったデザインを的確に把握し作成致します。
              ユーザーインターフェースを重要視した設計を行い、ご期待を超える提案を提供します。<br><br>
              【料金目安】<br>
              LP制作: ¥30,000~/1p<br>
              コーポレートサイト (10p以下): ¥80,000~
            </div>
          </div>

          <div
          v-observe-visibility="visibilityChangedword"
          v-bind:class="[isVisibleword === true ? 'fade2' : 'a']"
          class="service-item">
            <div class="service-image">
              <img src="../assets//wordpress2.jpg" alt="wordpress" class="img-250"/>
            </div>
            <div class="sub-title">
              <h2>Wordpress</h2>
            </div>
            <div class="service-content">
              コーポレートサイトや個人ブログ、およびウェブマガジンなどのWordPressサイトの構築や既存サイトのWordPress移行、コードの修正に対応しております。
              <br><br>
              【料金目安】<br>
              Wordpress移行: ¥100,000~<br>
              Wordpress制作: ¥200,000~
            </div>
          </div>
        </div>

          <p>※正式なお見積もりは、別途ご相談させていただきます。</p>

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
/* service */
#service{
  padding: 10rem 0;
}
#service p{
  font-size:18px;
  text-align:center;
  margin: 2rem 0;
}
.service-area{
  display: flex;
  margin-top: 5rem;
}
.sub-title{
  padding: 1rem 0;
}
.service-item{
  background-color: rgba(255,255,255,0.7);
  margin-right: 1rem;
  border-radius: 30px;
  padding: 1rem;
  color: black;
}
.service-item:last-child{
  margin: 0;
}
.service-image{
  text-align: center;
}
.service-image img{
  border-radius: 50%;
}

#service .read-more a:hover:after {
	width: 60%;
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
  name: 'ServiceArea',
  data (){
    return {
        isVisible05: false,
        isVisibleco: false,
        isVisiblede: false,
        isVisibleword: false,
    }
  },
  methods: {
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
      }
  }
  }
</script>
