<template>
    <header>
        <div class="header-box">
          <div class="header-border">
            <div class="header-title">
                <h1>Portfolio</h1>
            </div>
            <div class="header-menu">
                <ul>
                    <li v-for="(item, index) in items" :key=index class="hmargin-right">
                        <router-link v-bind:to=item.path>
                             {{ item.title }}
                        </router-link>
                     </li>
                </ul>
            </div>
          </div>
        </div>
        <div class="git-hub">
          <a href="https://github.com/atsu555"><img src="../assets/github-brands.png" art="githubアイコン" class="img-fluid"></a>
        </div>
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
                          <!-- <li><a href="skills.html">スキル</a></li>
                          <li><a href="works.html">制作物</a></li>
                          <li><a href="profile.html">プロフィール</a></li> -->
                          <li v-for="(item, index) in items" :key=index>
                              <router-link v-bind:to=item.path>
                                  {{ item.title }}
                              </router-link>
                          </li>
                      </ul>
                  </div>
                </transition>
            </div>
    </header>
</template>

<style scoped>
/* header */
header{
  position: fixed;
  z-index: 100;
  top: 0;
  width: 100%;
  background-color: rgba(0,0,0, 0.9);
}
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
.header-border{
  display: flex;
  justify-content: space-between;
  border-bottom: solid 1px #fff;
  padding-bottom: 5px;
}
.header-menu ul{
  list-style: none;
  display: flex;
  margin: 0;
  padding-top: 1.5rem;
}
.hmargin-right{
  margin-right: 2rem;
}
.hmargin-right:last-child{
  margin-right: 0;
}
.git-hub{
  position: fixed;
  right: 12rem;
  top: 1.6rem;
  width: 30px;
}

/* hamburgerbutton */
.hamburger_btn {
  position: fixed;
  top: 1.8rem;
  right: 8rem;
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
  background-color: rgba(0, 0, 0, 0.9);
  z-index: 30;
  padding: 2rem 1rem;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
}
.menu a {
  color: #fff;
  text-decoration: none;
  font-size: 100px;
  font-weight: 700;
  text-shadow: 25px 25px 30px #fff;
  padding: 0 2rem;
}
.menu ul{
  text-align: center;
  margin: 3rem 0;
  padding: 0;
}
@media screen and (max-width: 900px){
/* ヘッダー */
  .header-menu, .git-hub{
    display: none;
  }
  .hamburger_btn{
    top: 2rem;
    right: 3rem;
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
      items: [
        {title: 'Home', path: '/'},
        {title: 'Skills', path: '/skills'},
        {title: 'Works', path: '/works'},
        {title: 'Profile', path: '/profile'}
      ],
      ActiveBtn: false
    }
  }
}
</script>
