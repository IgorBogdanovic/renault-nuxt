<template lang="html">
  <section class="b-articles-list-hero ">
      <div class="c-hero-article-wrapper">
          <div class="c-hero-article-wrapper__inner">
              <app-hero-article-preview
                :prev="previews[0]"
                :thumbor="{ imgDesk : {width: 652, height: 436}, imgMob: {width: 272, height: 160}}"
                :trim = "{ description: 100, title:45 }"
              />
          </div>
      </div>
      <div class="b-articles-list-hero__after-hero">
          <app-article-preview v-for='(item, index) in previews.slice(1,4)'
              :key="index"
              :prev="item"
              :thumbor="{ imgDesk : {width: 273, height: 227}, imgMob: {width: 132, height: 108}}"
              :tag="tag"
              :trim = "{ description: 100, title:45 }"
          ></app-article-preview>
      </div>
  </section>
</template>

<script>
import HeroArticlePreview from '~/components/articles/HeroArticlePreview.vue'

export default {
    props: ['previews'],
    data() {
        return {
            tag: {
                visible: false,
                text: ''
            }
        }
    },
    components:{
        AppHeroArticlePreview:HeroArticlePreview,
    },
}
</script>

<style scoped lang='scss'>
@import '~assets/scss/settings';
    .b-articles-list-hero{
        padding-top:4.4rem;
        margin-bottom: -1.7rem;
        @include breakpoint(desktop){
            width: 100%;
            margin: 0 auto;
            margin-bottom: -6.1rem;
            max-width: 1440px;
            padding-top:8.8rem;
        }

        &__after-hero{
            display: flex;
            flex-flow: row wrap;
            width: 72.4%;
            margin: 0 auto;
            justify-content: space-between;
            position: relative;
            top: -1.7rem;

            @include breakpoint(desktop){
                width: 61.3%;
                margin: 0 auto;
                max-width: 1100px;
                top: -6.1rem;
            }
        }
    }

    .c-hero-article-wrapper{
        margin: 0 auto;
        padding: 3.5rem 0;
        background: $white-two;

        @include breakpoint(desktop){
            width: 100%;
            margin: 0 auto;
            max-width: 1100px;
            padding: 9rem 0;
        }

        &__inner{
            width: 72.4%;
            margin: 0 auto;
            @include breakpoint(desktop){
                width: 84.4%;
            }
        }
    }

    .c-article-preview{
        width:48.3%;
        @include breakpoint(desktop){
            width: 31%;
        }
    }

</style>
