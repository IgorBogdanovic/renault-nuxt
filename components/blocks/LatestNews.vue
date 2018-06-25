<template>

  <section class="b-latest-news">

        <div class="b-latest-news__inner">

          <h2 class='b-latest-news__title'>
            <span class='text--italic'>Latest </span>
            <span class='text--bold'> news</span>
          </h2>

            <div class="row">

              <app-article-preview 
              :prev="previews[0]"
              :thumbor="{ imgDesk : {width: 272, height: 224}, imgMob: {width: 156, height: 136}}"
              :tag="tag"  class="c-article-preview-square"/>

              <app-article-preview 
              :prev="previews[1]"
              :thumbor="{ imgDesk : {width: 272, height: 224}, imgMob: {width: 156, height: 136}}"
              :tag="tag"  class="c-article-preview-square"/>
              
              <app-article-preview 
              :prev="previews[2]"
              :thumbor="{ imgDesk : {width: 492, height: 400}, imgMob: {width: 336, height: 284}}"
              :tag="tag" class="c-article-preview-square-lg"/>

          </div>
          
          <div class="row">
            
            <app-article-preview 
            :prev="previews[2]"
            :thumbor="{ imgDesk : {width: 492, height: 400}, imgMob: {width: 336, height: 284}}"
            :tag="tag" class="c-article-preview-square-lg"/>
            
            <app-article-preview 
            :prev="previews[0]"
            :thumbor="{ imgDesk : {width: 272, height: 224}, imgMob: {width: 156, height: 136}}"
            :tag="tag"  class="c-article-preview-square"/>
            
            <app-article-preview 
            :prev="previews[1]"
            :thumbor="{ imgDesk : {width: 272, height: 224}, imgMob: {width: 156, height: 136}}"
            :tag="tag"  class="c-article-preview-square"/>
            
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

.b-latest-news {
  &__inner {
    padding-top: 4.4rem;
    @include breakpoint(desktop) {
      margin-top: 11.2rem;
      padding-top: 3.6rem;
      border-top: 0.1rem solid $white-two;
    }
  }

  &__title {
    margin-bottom: 2.4rem;
    @include breakpoint(desktop) {
      margin-bottom: 5.4rem;
      display: inline-block;
    }
  }

  .c-article-preview {
    margin-bottom: 3.4rem;
  }
}
</style>