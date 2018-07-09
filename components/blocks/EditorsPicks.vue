<template>

  <section class="b-editors-picks">

    <div class="b-editors-picks__inner">

      <h2 class='b-editors-picks__title'>
        <span class="text--bolder">EDITOR </span>
        <span class='text--italic'>'s</span>
        <br>
        <span class='text--bold'> news</span>
      </h2>

      <div class="container">

        <div class="row row--column">

          <app-article-preview :prev="previews[2]" :thumbor="{ imgDesk : {width: 492, height: 400}, imgMob: {width: 336, height: 284}}" :tag="tag" class="c-article-preview-square-lg" :trim="{ description: 100, title:45 }" />

          <app-article-preview :prev="previews[1]" :thumbor="{ imgDesk : {width: 272, height: 224}, imgMob: {width: 200, height: 164}}" :tag="tag" class="c-article-preview-square-lg c-article-preview-square-lg--text-left" :trim="{ description: 100, title:37 }" />

        </div>

        <div class="row">

          <app-article-preview :prev="previews[2]" :thumbor="{ imgDesk : {width: 200, height: 264}, imgMob: {width: 156, height: 192}}" :tag="tag" class="c-article-preview-portrait" :trim="{ description: 100, title:45 }" />

          <app-article-preview :prev="previews[0]" :thumbor="{ imgDesk : {width: 344, height: 456}, imgMob: {width: 160, height: 275}}" :tag="tag" class="c-article-preview-portrait-lg" :trim="{ description: 100, title:45 }" />

        </div>

      </div>

    </div>

  </section>

</template>

<script>
export default {
  props: ["previews"],
  data() {
    return {
      tag: {
        visible: true,
        text: "My business"
      }
    };
  }
};
</script>

<style lang="scss" scoped>
@import "~assets/scss/settings";

.b-editors-picks {
  &__inner {
    padding-top: 4.4rem;
    @include breakpoint(desktop) {
      padding-top: 3.6rem;
    }
  }

  &__title {
    margin-bottom: 2.4rem;

    @include breakpoint(desktop) {
      margin-bottom: 16.5em;
    }
  }
}

.c-article-preview {
  margin-bottom: 3.6rem;
}

@include breakpoint(desktop) {
  .container {
    display: flex;
    justify-content: space-between;
  }

  .row {
    width: 52%;
    align-items: flex-start;
  }

  .row--column {
    flex-direction: column;
    width: 44.7%;
  }

  .c-article-preview-square-lg {
    margin-top: -13.6rem;
    margin-bottom: 22rem;
  }

  .c-article-preview-square--text-left {
    margin-bottom: 0;
  }
}

</style>