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

<script>
export default {
  name: 'HeaderMenu',
  data () {
    return {
      items: [
        {title: 'Home', path: '/'},
        {title: 'Skills', path: '/skills'},
        {title: 'Works', path: '/works'},
        {title: 'Profile', path: '/profile'},
        {title: 'Contact', path: '/contact'}
      ],
      ActiveBtn: false
    }
  }
}
</script>
