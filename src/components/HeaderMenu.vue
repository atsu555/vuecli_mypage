<template>
    <header>
        <!-- hamburger_btn -->
            <div>
                <div class="hamburger_btn" v-on:click='ActiveBtn=!ActiveBtn'>
                  <span class="line line_01" v-bind:class="{'btn_line01':ActiveBtn}"></span>
                  <span class="line line_02" v-bind:class="{'btn_line02':ActiveBtn}"></span>
                  <span class="line line_03" v-bind:class="{'btn_line03':ActiveBtn}"></span>
                </div>
                <!--サイドメニュー-->
                <transition name="menu">
                  <div class="menu" v-show="ActiveBtn">
                      <ul>
                          <li v-on:click='ActiveBtn=!ActiveBtn'><a href="#">Home</a></li>
                          <li v-on:click='ActiveBtn=!ActiveBtn'><a href="#profile">Profile</a></li>
                          <li v-on:click='ActiveBtn=!ActiveBtn'><a href="#service">Service</a></li>
                          <li v-on:click='ActiveBtn=!ActiveBtn'><a href="#skills">Skills</a></li>
                          <li v-on:click='ActiveBtn=!ActiveBtn'><a href="#works">Works</a></li>
                          <li v-on:click='ActiveBtn=!ActiveBtn'><a href="#contact">Contact</a></li>
                          <!-- <li v-for="(item, index) in items" :key=index v-on:click='ActiveBtn=!ActiveBtn'>
                              <router-link v-bind:to=item.path>
                                  {{ item.title }}
                              </router-link>
                          </li> -->
                      </ul>
                  </div>
                </transition>
            </div>
    </header>
</template>

<style scoped>
/* header */
header h1, header a{
  color: #fff;
}
header a:hover{
  color: #fff;
}
header h1{
  font-family: 'Noto Serif JP', serif;
  font-weight: 300;
  margin: 0;
}
.header-box{
  padding: 3rem 8rem 0;
  width: 100%;
}
.header-menu ul{
  list-style: none;
  display: flex;
  margin: 0;
  padding-top: 1.5rem;
}


/* hamburgerbutton */
.hamburger_btn {
  position: fixed;
  top: 1.6rem;
  right: 2rem;
  cursor: pointer;
  z-index: 50;
  width: 32px;
  height: 26px;
}
.hamburger_btn ul{
  display: column;
}
.hamburger_btn .line {
  position: absolute;
  top: 0;
  left: 0px;
  width: 32px;
  height: 2px;
  background: #fff;
  text-align: center;
}

.hamburger_btn .line_01 {
  top: 0px;
  transition: 0.4s ease;
}
.hamburger_btn .line_02 {
  top: 10px;
  transition: 0.4s ease;
}
.hamburger_btn .line_03 {
  top: 20px;
  transition: 0.4s ease;
}


.btn_line01 {
  transform: translateY(10px) rotate(-45deg);
  transition: 0.4s ease;
}
.btn_line02 {
  transition: 0.4s ease;
  opacity: 0;
}
.btn_line03 {
  transform: translateY(-10px) rotate(45deg);
  transition: 0.4s ease;
}


/*サイドメニュー*/
.menu-enter-active, .menu-leave-active {
  transition: opacity 0.6s;
}
.menu-enter, .menu-leave-to {
  opacity: 0;
}

.menu li {
  list-style: none;
  line-height: 1;
  padding: 1rem;
}
.menu {
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 30;
  padding: 2rem 1rem;
  position: fixed;
  width: 20%;
  height: 100vh;
  top: 0;
  right: 0;
}
.menu a {
  color: #fff;
  text-decoration: none;
  font-size: 30px;
  font-weight: 700;
  text-shadow: 5px 5px 10px #fff;
  padding: 0 2rem;
}
.menu ul{
  text-align: center;
  margin: 2rem 0;
  padding: 0;
}
@media screen and (max-width: 900px){
/* ヘッダー */
  .header-menu, .git-hub{
    display: none;
  }
  .hamburger_btn{
    top: 2rem;
    right: 1.5rem;
  }
  .header-box {
    padding: 1rem 3rem 0;
  }
}
@media screen and (max-width: 500px){
  /* ヘッダー */
  header h1{
    font-size: 30px;
  }
  .hamburger_btn{
    top: 1.6rem;
  }
  .menu a {
    font-size: 65px;
    font-weight: 700;
    text-shadow: 20px 20px 20px #fff;
    padding: 0 2rem;
  }
  .main-img img{
    margin-top: 3rem;
  }
}
</style>

<script>
export default {
  name: 'HeaderMenu',
  data () {
    return {
  //     items: [
  //       {title: 'Home', path: '/'},
  //       {title: 'Profile', path: '/profile'},
  //       {title: 'Service', path: '/service'},
  //       {title: 'Skills', path: '/skills'},
  //       {title: 'Works', path: '/works'}
  //     ],
      ActiveBtn: false
    }
  }
}
</script>
