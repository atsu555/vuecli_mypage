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
            <p>
              22歳。東京都在住。Webデザイナー・コーダー志望で勉強と<br>
              就職活動をしています。(2021年1月時点)
            </p>
            <p>
              2018年3月に航空自衛隊に入隊し、調達員として入間基地で<br>
              勤務をしていました。コロナウイルスが流行し始めた際に、ス<br>
              キルを身につけてどんな時代にも適応できる市場価値の高い人<br>
              材になりたいと思い、プログラミングの学習を始めました。<br>
              Web業界に本格的に就職したいと考え、自衛隊の退職を決意<br>
              し、現在はWebデザインやコーディングをしたりしながら東京<br>
              を中心に就職活動をしています。
            </p>
          </div>
          <div class="about-img">
            <img src="../assets/bike-fuji.png" art="富士山" class="img-fluid">
          </div>
        </div>
  </div>
</template>

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
