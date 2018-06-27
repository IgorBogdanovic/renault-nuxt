<template>
  <div class="main-nav">
    <nav class="c-nav full-width-wrapper">
      <div class="main-wrapper">
        <div class="c-nav__hamburger u-only-mob" :class="{'c-nav__hamburger--close': dropMenuState}" @click="dropMenuState = !dropMenuState">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <nuxt-link class="c-nav__logo" to="/" tag="div">
          <img src="~static/images/logo.png" alt="logo">
        </nuxt-link>
        <div class="c-nav__search" :class="{'is-hidden': dropMenuState}" @click="stateController('search')">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 17">
            <g id="search" transform="translate(-595.064 -192)">
                <path id="Path_14" d="M27.792 26.793L23.7 22.706a7.158 7.158 0 1 0-1 1l4.087 4.083a.708.708 0 1 0 1-1zM18.164 23.9a5.74 5.74 0 1 1 5.742-5.738 5.746 5.746 0 0 1-5.742 5.738z" class="cls-1" data-name="Path 14" transform="translate(584.064 181)"/>
            </g>
          </svg>
        </div>
        <div class="c-nav__menu-container" :class="{'is-active': dropMenuState}">
          <div class="c-nav__menu-inner-wrapper">
            <ul class="c-nav__menu-list">
              <li class="c-nav__signup">
                <div class="c-nav__menu-arrow c-nav__menu-arrow--empty u-only-mob"></div>
                <span class="c-nav__menu-item" @click="stateController('signup')">sign up</span>
              </li>
              <li class="c-nav__login">
                <div class="c-nav__menu-arrow c-nav__menu-arrow--empty u-only-mob"></div>
                <span class="c-nav__menu-item" @click="stateController('login')">login</span>
              </li>
              <li v-for="(menuItem, index) in nav" :key="index">
                <div class="c-nav__menu-arrow u-only-mob">
                  <svg v-if="menuItem.children.length > 0" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                    viewBox="0 0 444.819 444.819" style="enable-background:new 0 0 444.819 444.819;" xml:space="preserve">
                    <g>
                      <path d="M434.252,114.203l-21.409-21.416c-7.419-7.04-16.084-10.561-25.975-10.561c-10.095,0-18.657,3.521-25.7,10.561
                        L222.41,231.549L83.653,92.791c-7.042-7.04-15.606-10.561-25.697-10.561c-9.896,0-18.559,3.521-25.979,10.561l-21.128,21.416
                        C3.615,121.436,0,130.099,0,140.188c0,10.277,3.619,18.842,10.848,25.693l185.864,185.865c6.855,7.23,15.416,10.848,25.697,10.848
                        c10.088,0,18.75-3.617,25.977-10.848l185.865-185.865c7.043-7.044,10.567-15.608,10.567-25.693
                        C444.819,130.287,441.295,121.629,434.252,114.203z"/>
                    </g>
                  </svg>
                </div>
                <span class="c-nav__menu-item" @click="activateThisSubmenu">{{ menuItem.name }}</span>
                <div v-if="menuItem.children.length > 0" class="c-nav__submenu-container" @mouseover="submenuMouseEvent" @mouseleave="submenuMouseEvent">
                  <div class="c-nav__submenu-wrapper main-wrapper u-clearfix">
                    <ul class="c-nav__submenu-list">
                      <div class="c-nav__submenu-list-mid-border"></div>
                      <li v-for="(submenuItem, index) in menuItem.children" :key="index">
                        <span>{{ submenuItem.name }}</span>
                      </li>
                    </ul>
                    <ul class="c-nav__submenu-articles u-only-desktop">
                      <h4><span>top&nbsp;</span><span>articles</span></h4>
                      <li v-for="(articleItem, index) in topArticles" :key="index">
                        <img :src="articleItem.image" alt="article preview image">
                        <h6>{{ articleItem.text }}</h6>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
            <div class="c-nav__menu-ext-links">
              <div class="c-nav__menu-link c-nav__menu-link--fb">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8.101 17.36">
                  <g id="facebook" transform="translate(-461.252 -240.951)">
                      <path id="Facebook-2" d="M116.447 3.363v2.39H114.7v2.923h1.751v8.685h3.6V8.676h2.414s.226-1.4.336-2.934h-2.736v-2a.849.849 0 0 1 .78-.7h1.96V0h-2.665c-3.782 0-3.693 2.926-3.693 3.363z" class="cls-1" data-name="Facebook" transform="translate(346.556 240.95)"/>
                  </g>
                </svg>
              </div>
              <div class="c-nav__menu-link c-nav__menu-link--yt">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18.148 12.772">
                  <g id="youtube" transform="translate(-658.06 -99.062)">
                      <path id="XMLID_823_" d="M17.441 47.013c-.655-.779-1.865-1.1-4.174-1.1H4.882c-2.363 0-3.593.338-4.245 1.167C0 47.893 0 49.084 0 50.732v3.142c0 3.194.755 4.815 4.882 4.815h8.385c2 0 3.113-.28 3.831-.968.736-.7 1.051-1.855 1.051-3.847v-3.142c-.001-1.738-.049-2.932-.708-3.719zm-5.79 5.723l-3.808 1.99a.585.585 0 0 1-.857-.519v-3.966a.585.585 0 0 1 .855-.52L11.65 51.7a.585.585 0 0 1 0 1.038z" class="cls-1" transform="translate(658.06 53.145)"/>
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <transition mode="out-in" name="slide">
      <app-search v-if="searchState" @deactivateSearch="stateController('search')"></app-search>
    </transition>
    <transition mode="out-in" name="fade">
      <app-signup v-if="signupState" @deactivateSignup="stateController('signup')" @activateLogin="stateController('login')"></app-signup>
      <app-login v-if="loginState" @deactivateLogin="stateController('login')" @activateSignup="stateController('signup')"></app-login>
    </transition>
  </div>
</template>

<script>
import Search from '~/components/Search.vue';
import Signup from '~/components/Signup.vue';
import Login from '~/components/Login.vue';

export default {
  data () {
    return {
      dropMenuState: false,
      searchState: false,
      signupState: false,
      loginState: false
    }
  },
  computed: {
    nav() {
      return this.$store.state.navigation;
    },
    topArticles() {
      return this.$store.state.articlesSim;
    }
  },
  watch: {
    dropMenuState() {
      if (!this.dropMenuState) {
        const activeMenuItems = document.getElementsByClassName('c-nav__menu-item js-active');
        for (let item of activeMenuItems) {
          const itemArrow = item.previousSibling;
          const itemArrowSvg = itemArrow.childNodes[0];
          const itemSubmenuList = item.nextSibling.childNodes[0].childNodes[0];
          itemArrowSvg.style.transform = 'rotate(0deg)';
          itemSubmenuList.style.height = 0 + 'px';
          item.classList.remove('js-active');
          itemSubmenuList.classList.remove('js-active');
        }
      } else {
        if (this.signupState) {
          this.signupState = false;
        } else if (this.loginState) {
          this.loginState = false;
        }
      }
    }
  },
  methods: {
    activateThisSubmenu(e) {
      if (window.innerWidth < 768) {
        const menuItem = e.currentTarget;
        const menuItemArrow = menuItem.previousSibling;
        const menuItemArrowSvg = menuItemArrow.childNodes[0];
        const submenuList = menuItem.nextSibling.childNodes[0].childNodes[0];
        const submenuListChildCount = submenuList.childElementCount - 1; // -1 because of the div (border) used on desktop
        const submenuListChildHeight = submenuList.childNodes[1].offsetHeight; // [0] because of the div (border) used on desktop
        const submenuListTotalHeight = submenuListChildCount * submenuListChildHeight;

        if (menuItem.classList.contains('js-active')) {
          menuItemArrowSvg.style.transform = 'rotate(0deg)';
          submenuList.style.height = 0 + 'px';
          menuItem.classList.remove('js-active');
          submenuList.classList.remove('js-active');
        } else {
          const activeMenuItems = document.getElementsByClassName('c-nav__menu-item js-active');
          for (let item of activeMenuItems) {
            const itemArrow = item.previousSibling;
            const itemArrowSvg = itemArrow.childNodes[0];
            const itemSubmenuList = item.nextSibling.childNodes[0].childNodes[0];
            itemArrowSvg.style.transform = 'rotate(0deg)';
            itemSubmenuList.style.height = 0 + 'px';
            item.classList.remove('js-active');
            itemSubmenuList.classList.remove('js-active');
          }
          menuItem.classList.add('js-active');
          submenuList.classList.add('js-active');
          if (submenuList.classList.contains('js-active')) {
            menuItemArrowSvg.style.transform = 'rotate(180deg)';
            submenuList.style.height = submenuListTotalHeight + 'px';
          }
        }
      }
    },
    submenuMouseEvent(e) {
      if (window.innerWidth > 767) {
        const submenuContainer = e.currentTarget;
        const menuItem = submenuContainer.previousSibling;
        if (e.type === 'mouseleave') {
          menuItem.classList.remove('on-submenu-container-hover');
        } else {
          menuItem.classList.add('on-submenu-container-hover');
        }
      }
    },
    stateController(arg) {
      const body = document.getElementsByTagName('body')[0];

      // arg case 'search'
      if (arg === 'search') {
        this.searchState = !this.searchState;
        if (this.signupState) {
          this.signupState = false;
        } else if (this.loginState) {
          this.loginState = false;
        }

      // arg case 'signup'
      } else if (arg === 'signup') {
        this.signupState = !this.signupState;
        if (this.dropMenuState) {
          this.dropMenuState = false;
        } else if (this.loginState) {
          this.loginState = false;
        }

      // arg case 'login'
      } else if (arg === 'login') {
        this.loginState = !this.loginState;
        if (this.dropMenuState) {
          this.dropMenuState = false;
        } else if (this.signupState) {
          this.signupState = false;
        }
      }

      if (this.searchState || this.signupState || this.loginState) {
        body.style.overflow = 'hidden';
      } else {
        body.style.overflow = 'initial';
      }
    }
  },
  components: {
    AppSearch: Search,
    AppSignup: Signup,
    AppLogin: Login
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/settings';

.main-nav {
  position: relative;
  z-index: 10;
  width: 100%;
  height: 4.4rem;

  @include breakpoint(desktop) {
    height: 5.5rem;
  }
}

.c-nav {
  z-index: 1;
  position: fixed;
  height: 4.4rem;
  background-color: #000;

  @include breakpoint(desktop) {
    height: 5.5rem;
  }

  > .main-wrapper {
    position: fixed;
    left: 0;
    right: 0;
    height: 4.4rem;
  }

  &__hamburger {
    position: absolute;
    top: 1.6rem;
    left: 2rem;
    width: 2rem;
    height: 2rem;
    transform: rotate(0deg);
    transition: .3s ease-in-out;
    cursor: pointer;

    span {
      display: block;
      position: absolute;
      height: 0.2rem;
      width: 100%;
      background: $sun-yellow;
      opacity: 1;
      left: 0;
      transform: rotate(0deg);
      transition: .15s ease-in-out;

      &:nth-child(1) {
        top: 0;
      }
      &:nth-child(2), &:nth-child(3) {
        top: .6rem;
      }
      &:nth-child(4) {
        top: 1.2rem;
      }
    }

    &.c-nav__hamburger--close span {
      &:nth-child(1) {
        top: 1.2rem;
        width: 0%;
        left: 50%;
      }
      &:nth-child(2) {
        transform: rotate(45deg);
      }
      &:nth-child(3) {
        transform: rotate(-45deg);
      }
      &:nth-child(4) {
        top: 1.2rem;
        width: 0%;
        left: 50%;
      }
    }
  }

  &__logo {
    cursor: pointer;
    position: absolute;
    top: 1.1rem;
    @include absolute(center-horizontal);

    @include breakpoint(desktop) {
      top: 0.8rem;
    }

    img {
      width: 14rem;

      @include breakpoint(desktop) {
        width: 17rem;
      }
    }
  }

  &__search {
    cursor: pointer;
    position: absolute;
    top: 1.6rem;
    right: 1.6rem;
    width: 1.6rem;
    height: 1.6rem;

    @include breakpoint(desktop) {
      top: 1.9rem;
      right: 3.2rem;
      width: 1.7rem;
      height: 1.7rem;
    }

    &.is-hidden {
      visibility: hidden;
    }

    .cls-1 {
      fill:#fff
    }
  }

  &__menu-container {
    z-index: -1;
    position: relative;
    left: -100%;
    padding-top: 4.4rem;
    height: 100vh;
    overflow: hidden;
    transition: left .3s ease;

    @include breakpoint(desktop) {
      left: 0;
      padding-top: 0;
      height: auto;
      overflow: initial;
    }

    &.is-active {
      left: 0;
    }
  }

  &__menu-inner-wrapper {
    background-color: $white;
    width: 85%;
    height: 100%;
    overflow: auto;

    @include breakpoint(desktop) {
      background-color: initial;
      width: 100%;
      height: auto;
      overflow: initial;
    }
  }

  &__menu-list {
    font-family: 'Lato-Black';
    @include fontSizeRem(17, 12);
    @include lineHeightRem(22, 15);
    @include letterSpacingEm(50, 0);
    padding-top: 3.9rem;
    padding-left: 2.1rem;

    @include breakpoint(desktop) {
      display: inline-block;
      padding-top: 2.2rem;
      padding-left: 0;
      margin-left: 32.5rem;
    }

    > li {
      text-transform: uppercase;
      margin-top: 3.4rem;

      @include breakpoint(desktop) {
        display: inline-block;
        color: $sun-yellow;
        margin-top: 0;
        margin-right: 3.2rem;
        
        // hadn't better solution for solving this then nth-child selector because of logo in the middle
        // should be changed in case of more li elements in menu list
        &:nth-child(5) {
          margin-right: 22rem;
        }

        > span {
          display: inline-block;

          &:hover {
            cursor: pointer;
            color: $white;
            padding-bottom: 1.1rem;

            &:after {
              content: "";
              display: block;
              height: 3px;
              margin-top: .4rem;
              background-color: $white;
            }

            + .c-nav__submenu-container {
              display: block;
            }
          }

          &.on-submenu-container-hover {
            color: $white;
            padding-bottom: 1.1rem;

            &:after {
              content: "";
              display: block;
              height: 3px;
              margin-top: .4rem;
              background-color: $white;
            }
          }
        }
      }

      &.c-nav__signup {
        margin-top: 0;

        @include breakpoint(desktop) {
          position: absolute;
          right: 12.5rem;
        }
      }

      &.c-nav__login {
        margin-top: 0;
        padding: 1.8rem 0 2.2rem 0;

        @include breakpoint(desktop) {
          position: absolute;
          right: 4.8rem;
          padding: 0;
        }
      }
    }
  }

  &__submenu-container {
    @include breakpoint(desktop) {
      display: none;
      position: fixed;
      top: 5.5rem;
      left: 0;
      width: 100%;
      background-color: $white;

      &:hover {
        display: block;
      }
    }
  }

  &__submenu-wrapper {
    @include breakpoint(desktop) {
      position: relative;
    }
  }

  &__submenu-list {
    font-family: 'Lato';
    @include fontSizeRem(18, 14);
    @include lineHeightRem(35, 24);
    @include letterSpacingEm(50, 50);
    height: 0;
    transition: height .3s ease;
    overflow: auto;

    @include breakpoint(desktop) {
      float: left;
      width: 50%;
      height: auto;
      padding-top: 6rem;
      padding-bottom: 2.2rem;

      &-mid-border {
        background-color: #ececec;
        position: absolute;
        top: 0;
        left: 25%;
        width: 1px;
        height: 100%;
      }
    }

    > li {
      text-transform: lowercase;
      padding-top: 2.4rem;
      padding-left: 3.6rem;

      @include breakpoint(desktop) {
        font-family: 'Lato-Black';
        text-transform: uppercase;
        color: #000;
        display: inline-block;
        width: 50%;
        padding-top: 0;
        padding-bottom: 5.3%;
        padding-left: 14.5%;

        > span {
          &:hover {
            cursor: pointer;
          }
        }
      }
    }

    & li:first-letter {
      text-transform: uppercase;
    }
  }

  &__submenu-articles {
    color: #000;
    float: right;
    width: 50%;
    height: auto;
    padding: 4.5rem 9rem 4.1rem 8rem;
    border-left: 1px solid #ececec;

    h4 {
      span:first-child {
        font-family: 'Lato-Black';
        @include fontSizeRem(0, 18);
        @include lineHeightRem(0, 48);
        @include letterSpacingEm(0, 0);
      }

      span:last-child {
        font-family: 'Airways';
        @include fontSizeRem(0, 18);
        @include lineHeightRem(0, 48);
        @include letterSpacingEm(0, 0);
        text-transform: capitalize;
      }
    }

    > li {
      cursor: pointer;
      display: inline-block;
      width: 50%;
      margin-bottom: .8rem;

      h6 {
        font-family: 'Lato';
        @include fontSizeRem(0, 12);
        @include lineHeightRem(0, 15);
        @include letterSpacingEm(0, 50);
        text-transform: initial;
        float: left;
        width: 13.5rem;
        margin-left: .9rem;
      }

      img {
        float: left;
        width: 6.4rem;
        height: 5rem;
      }
    }
  }

  &__menu-arrow {
    display: inline-block;
    width: .8rem;
    margin-right: 2rem;

    svg {
      fill: $sun-yellow;
      margin-bottom: .2rem;
      transition: .15s ease-in-out;
    }
  }

  &__menu-ext-links {
    display: block;
    margin-top: 5.3rem;
    margin-bottom: 6.2rem;
    margin-left: 4.8rem;

    @include breakpoint(desktop) {
      float: left;
      margin-top: 2.1rem;
      margin-bottom: 0;
      margin-left: 2.6rem;

      svg {
        fill: $white;
      }
    }
  }

  &__menu-link {
    cursor: pointer;
    display: inline-block;

    &--fb {
      width: 1.1rem;
      margin-right: 3.6rem;

      @include breakpoint(desktop) {
        width: .7rem;
        margin-right: 2.2rem;
      }
    }

    &--yt {
      width: 2.5rem;
      padding: .2rem 0;

      @include breakpoint(desktop) {
        width: 2rem;
        margin-right: 0;
        padding: .1rem 0;
      }
    }
  }
}

// animations for search, signup and login components
.slide-enter-active, .slide-leave-active {
  left: 0;
  transition: left .2s ease-in-out;
}

.slide-enter, .slide-leave-to {
  left: -100%;
}

.fade-enter-active, .fade-leave-active {
  opacity: 1;
  transition: opacity .3s ease-in-out;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
