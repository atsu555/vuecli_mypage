<template>
  <div id="app">
    <div class="contents">
      <div id="nav">
        <header-menu></header-menu>
      </div>
     <router-view/>
      <!--コピーライト-->
      <div id="copyright">
        Copyright &copy; 2021 Atsutaka Kikkawa's Protfolio All Rights Reserved.
      </div>
    </div>
  </div>
</template>

<script>
import HeaderMenu from '@/components/HeaderMenu'

export default {
  name: 'App',
  components: {
    HeaderMenu
  }
}
</script>

<style scope>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100;300;400;500;700;900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@200;300;400;500;600;700;900&display=swap');
.contents{
  color: #fff;
  background: black;
}
.contents a{
  text-decoration: none;
}
.img-60{
  width: 60%;
}
.img-50{
  width: 50%;
}
.img-500{
  width: 500px;
}
.img-350{
  width: 350px;
}
.img250{
  width: 250px;
}
/* コピーライト */
#copyright{
  text-align: center;
  padding-bottom: 1.5rem;
}
</style>
