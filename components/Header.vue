<template>
  <nav class="b-nav">
    <div class="b-nav__hamburger u-only-mob" :class="{'is-active': dropMenuActive}" @click="dropMenuActive = !dropMenuActive">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div class="b-nav__logo">
      <img src="~static/images/header_logo.png" alt="logo">
    </div>
    <div class="b-nav__search">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 17">
        <defs>
            <style>
                .cls-1{fill:#fff}
            </style>
        </defs>
        <g id="search" transform="translate(-595.064 -192)">
            <path id="Path_14" d="M27.792 26.793L23.7 22.706a7.158 7.158 0 1 0-1 1l4.087 4.083a.708.708 0 1 0 1-1zM18.164 23.9a5.74 5.74 0 1 1 5.742-5.738 5.746 5.746 0 0 1-5.742 5.738z" class="cls-1" data-name="Path 14" transform="translate(584.064 181)"/>
        </g>
      </svg>
    </div>
  </nav>
</template>

<script>
export default {
  data () {
      return {
        dropMenuActive: false
      }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/settings';

.b-nav {
  position: relative;
  width: 100%;
  height: 4.4rem;
  background-color: #000;

  &__hamburger {
    position: absolute;
    top: 1.6rem;
    left: 2rem;
    width: 2rem;
    height: 2rem;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: .3s ease-in-out;
    -moz-transition: .3s ease-in-out;
    -o-transition: .3s ease-in-out;
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
      -webkit-transform: rotate(0deg);
      -moz-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
      -webkit-transition: .15s ease-in-out;
      -moz-transition: .15s ease-in-out;
      -o-transition: .15s ease-in-out;
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

    &.is-active span {
      &:nth-child(1) {
        top: 1.2rem;
        width: 0%;
        left: 50%;
      }
      &:nth-child(2) {
        -webkit-transform: rotate(45deg);
        -moz-transform: rotate(45deg);
        -o-transform: rotate(45deg);
        transform: rotate(45deg);
      }
      &:nth-child(3) {
        -webkit-transform: rotate(-45deg);
        -moz-transform: rotate(-45deg);
        -o-transform: rotate(-45deg);
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
    padding-top: 1.1rem;

    img {
      width: 14rem;
      margin: 0 auto;
    }
  }

  &__search {
    position: absolute;
    top: 1.6rem;
    right: 1.6rem;
    width: 1.6rem;
    height: 1.6rem;
  }
}
</style>