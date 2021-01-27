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
        <div class="works-items">
          <div class="works-item1">
            <div class="w-img">
              <img src="../assets/schoolLP.jpg" alt="オンラインスクール" class="img-fluid">
            </div>
            <div class="w-text">
              <h2>WEBデザインスクールLP</h2>
            </div>
          </div>
          <div class="works-item2">
            <div class="w-img">
              <img src="../assets/dental.jpg" alt="歯医者" class="img-fluid">
            </div>
            <div class="w-text">
              <h2>矯正歯科LP</h2>
            </div>
          </div>
        </div>
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
        isVisiblexd: false
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
