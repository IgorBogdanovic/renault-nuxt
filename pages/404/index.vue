<template>

  <div class="p-static p-404">

    <div class="c-404">

      <div class="c-404-wrapper">
        <p class="c-404__heading text--bolder">Take another
          <span>road</span>
        </p>
        <img src="~static/images/404-van.png" alt="van" class="c-404__van">
      </div>

      <button href="localhost:3000" class="c-btn c-btn--404">
        <a href="http://localhost:3000/">back to homepage</a>
      </button>

    </div>

  </div>

</template>

<script>
export default {
  data() {
    return {
      navigation: []
    };
  },
  asyncData(context) {
    return context.app.$api.get(context.app.$api.queries.nav).then(res => {
      console.log(res);
      return {
        navigation: res.data.data.navigation
      };
    });
  }
};
</script>

<style lang="scss" scoped>
@import "~assets/scss/settings";

.p-404 {
  margin-top: 6rem;
  margin-bottom: 7.6rem;
  text-align: center;
  display: flex;
  justify-content: center;
  @include breakpoint(desktop) {
    margin-bottom: 14.4rem;
  }
}

.c-404 {
  width: 26rem;
  @include breakpoint(desktop) {
    width: 99rem;
  }

  &-wrapper {
    position: relative;
    text-align: center;
    margin-bottom: 5.4rem;
    @include breakpoint(desktop) {
      margin-bottom: 10.5rem;
    }
  }

  &__heading {
    @include fontSizeRem(17, 68);
    letter-spacing: -0.025em;
    color: $sun-yellow;
    position: absolute;
    z-index: -1;
    top: -0.9rem;
    left: 1.5rem;
    @include breakpoint(desktop) {
      top: -4.2rem;
      left: 4rem;
    }

    span {
      @include fontSizeRem(35, 132.1);
      vertical-align: text-top;
    }
  }
}

.c-btn--404 {
  font-size: 1.2rem;
  line-height: 3;
}
</style>