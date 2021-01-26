<template>
  <div id="app">
    <div id="nav">
      <header-menu></header-menu>
    </div>
     <router-view/>
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
@import "./css/style.css";
body{
  background-color: black;
  color: #fff;
}
</style>
