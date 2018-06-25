<template>

    <section class="shp__header">

        <div class="shp__header-image">

            <div class="shp__header-image__text">
                <a href="/"><button class="c-btn c-btn--yellow">MY BUSINESS</button></a>
                <h1 class="text--bolder shp__header-title">
                    Communication
                </h1>
            </div>

        </div>

        <div class="shp__header-text" >
            <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
        </div>

    </section>

</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang="scss">
@import "~assets/scss/settings";

.shp__header {
  position: relative;
  margin-bottom: 2.3rem;
  @include breakpoint(desktop) {
    margin-bottom: 3.7rem;
  }

  &-image {
    background: center no-repeat
        linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)),
      url("~static/images/shp__header-image.png");
    background-size: cover;
    height: 20rem;
    @include breakpoint(desktop) {
      width: 115.2rem;
      height: 60.8rem;
    }

    &__text {
      display: flex;
      flex-direction: column;
      height: 100%;
      justify-content: center;
      padding-left: 2rem;
      @include breakpoint(desktop) {
        padding-left: 16.65rem;
      }
    }
  }

  &-title {
    color: $white;
    @include fontSizeRem(24, 71);
    line-height: 1.08;
    text-transform: uppercase;
    margin: 1.1rem 0;
    @include breakpoint(desktop) {
      margin: 2.2rem 0;
      line-height: 0.94;
    }
  }

  &-text {
    width: 100%;
    padding: 2rem 1.9rem 1.6rem;
    background: $sun-yellow;
    @include fontSizeRem(16, 20);
    line-height: 1.5;
    @include breakpoint(desktop) {
      line-height: 1.4;
      width: 51.2rem;
      padding: 8.1rem 5.35rem;
      z-index: 2;
      position: absolute;
      right: 0;
      top: 12rem;
    }
  }
}
</style>