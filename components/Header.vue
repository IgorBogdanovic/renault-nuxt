<template>
  <nav class="b-nav">
    <div class="b-nav__hamburger u-only-mob">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
@import '~assets/scss/settings';

.b-nav {
  width: 100%;
  height: 4.4rem;
  background-color: #000;

  &__hamburger {
    display: inline-block;
    width: 3rem;
    height: 2.5rem;
    position: absolute;
    top: 2.2rem;
    right: 2rem;
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
      height: 0.3rem;
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
        top: 1.1rem;
      }
      &:nth-child(4) {
        top: 2.2rem;
      }
    }

    &.is-active span {
      &:nth-child(1) {
        top: 1.1rem;
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
        top: 1.1rem;
        width: 0%;
        left: 50%;
      }
    }
  }
}
</style>