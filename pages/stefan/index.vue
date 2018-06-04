<template lang="html">
  <div class="b-articles-list-hero ">
      <div class="c-hero-article-wrapper">
          <div class="c-hero-article-wrapper__inner">
              <HeroArticlePreview/>
          </div>
      </div>
  </div>
</template>

<script>
import HeroArticlePreview from '~/components/articles/HeroArticlePreview.vue'

export default {
    components:{
        HeroArticlePreview
    }
}
</script>

<style scoped lang='scss'>
@import '~assets/scss/settings';
    .b-articles-list-hero{
        @include breakpoint(desktop){
            width: 100%;
            margin: 0 auto;
            max-width: 1440px;
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
</style>
