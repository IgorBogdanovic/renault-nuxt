<template>
  <div class="page">
      <app-header :nav="navigation"/>
      <!-- 404 Page -->

      <div class="p-static p-404">

          <div class="container">

              <div class="c-404">
                  <p class="c-404__heading text--bolder">Take another <span>road</span></p>
                  <img src="~static/images/404-van.png" alt="van" class="c-404__van">
              </div>

              <button href="localhost:3000" class="c-btn c-btn--404"><a href="http://localhost:3000/">back to homepage</a></button>

          </div>

      </div>
          
      <!-- 404 Page End-->
      <app-footer/>
  </div>
</template>

<script>
export default {
  data () {
      return {
        navigation: []
      }
  },
  asyncData(context) {
    return context.app.$api.get(context.app.$api.queries.nav)
    .then(res => {
      console.log(res);
      return {
        navigation: res.data.data.navigation
      }
    })
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/scss/settings";

.p-404 {
  margin-top: 6rem;
  margin-bottom: 7.6rem;
  @include breakpoint(desktop) {
    margin-top: 8rem;
    margin-bottom: 14.4rem;
  }
}

.c-404 {
  position: relative;
  text-align: center;
  margin-bottom: 5rem;
  @include breakpoint(desktop) {
    margin-bottom: 8rem;
  }

  &__heading {
    @include fontSizeRem(23.4, 68);
    letter-spacing: -0.025em;
    color: $sun-yellow;
    position: absolute;
    z-index: -1;
    top: -1.4rem;
    left: 1.5rem;
    @include breakpoint(desktop) {
      top: -3.7rem;
      left: 8rem;
    }

    span {
      @include fontSizeRem(45.9, 132.1);
      vertical-align: text-top;
    }
  }
}

.c-btn--404 {
  font-size: 1.2rem;
  line-height: 3;
}
</style>