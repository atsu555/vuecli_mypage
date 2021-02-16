<template>
  <div class="container works-contents">
    <div
          v-observe-visibility="visibilityChangedtitle"
          v-bind:class="[isVisibletitle === true ? 'fade3' : 'a']"
          class="title"
    >
          <div class="read-more">
            <h1>
              Works
            </h1>
          </div>
    </div>




  </div>
</template>

<style scoped>
.read-more :after{
  content: '';
	width: 0;
	transition: all 0.5s ease;
	border-bottom: 3px solid #fff;
  display: block;
}
.read-more :hover:after {
	width: 40%;
	border-bottom: 3px solid #fff;
}
.top-page{
  z-index: 50;
}

.title h1{
  font-size: 150px;
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
    font-size: 100px;
    text-shadow: 15px 15px 20px #fff;
  }
  .description{
    padding-top: 0;
    padding-bottom: 0;
  }
  .description h2{
    font-size: 1.5rem;
    margin: 1rem 0;
  }
  .description p{
    font-size: 0.6rem;
  }
  .use-skill ul{
    margin: 0;
  }
  .use-skill li{
    padding: 1.5px;
    font-size: 0.5rem;
    width: 60px;
    height: 20px;
    text-align: center;
    margin: 0.5rem 0;
  }
  .thumbnails img{
    object-fit: cover;
    width: 180px;
    height: 100px;
  }
}
@media screen and (max-width: 500px){
  .title h1{
    font-size: 45px;
  }
  .landing-contents{
    margin: 1.5rem 0;
    flex-direction: column;
    width: 100%;
    order: 1;
  }
  .description{
    order: 2;
    margin-top: -4rem;
    margin-left: 1rem;
    margin-right: 1rem;
  }
  .landing-box{
    display: flex;
    flex-direction: column;
  }
  .lp-img{
    order: 1;
  }
  .thumbnails{
    order: 2;
  }
  .thumbnails img{
    object-fit: cover;
    width: 200px;
    height: 55px;
    opacity: 0.9;
  }
  .thumbnails li{
    margin: 0 0.3rem;
    position: relative;
    top: -57px;
  }
  .thumbnails li:last-child{
    margin-right: 0.3rem;
  }
  .use-skill ul{
    display: flex;
  };
}
</style>

<script>
export default {
  name: 'WorksPage',
  data() {
    return {
      show1: true,
      show2: false,
      show3: false,
      isVisibletitle: false,
      isVisiblelp: false
    }
  },
  methods: {
      visibilityChangedtitle (isVisibletitle, entry) {
        this.isVisibletitle = isVisibletitle
      },
      visibilityChangedlp (isVisiblelp, entry) {
        this.isVisiblelp = isVisiblelp
      },
      thumbnailBtn1: function(){
          this.show1 = true,
          this.show2 = false,
          this.show3 = false
      },
      thumbnailBtn2: function(){
          this.show2 = true,
          this.show1 = false,
          this.show3 = false
      },
      thumbnailBtn3: function(){
          this.show3 = true,
          this.show1 = false,
          this.show2 = false
      }
  }
}
</script>
