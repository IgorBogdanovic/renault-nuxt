<template lang="html">
  <section class="b-articles-list-hero ">
      <div class="c-hero-article-wrapper">
          <div class="c-hero-article-wrapper__inner">
              <HeroArticlePreview/>
          </div>
      </div>
      <div class="b-articles-list-hero__after-hero">
          <ArticlePreview v-for='(item, index) in previews' :key="index" :prev="item" />
      </div>
  </section>
</template>

<script>
import HeroArticlePreview from '~/components/articles/HeroArticlePreview.vue'
import ArticlePreview from '~/components/articles/ArticlePreview.vue'

export default {
    data() {
        return {
            previews: [
                {
                    image: 'https://dummyimage.com/132x108/c9c9c9/000000.png',
                    imageAlt: 'some alt',
                    tagged: false,
                    tag: 'my business',
                    title: 'Turning Your Van into A Seasonal Ski-Resort Minibus',
                    desc: 'All work and no play make Jack a dull boy, all work and no play make Jack a dull boy, all work and no play make Jack a dull boy, all work and no play make Jack a dull boy, all work and no play make Jack a dull boy, all work and no play make Jack a dull boy, all work and no play make Jack a dull boy...'
                },
                {
                    image: 'https://dummyimage.com/132x108/c9c9c9/000000.png',
                    imageAlt: 'some alt',
                    tagged: false,
                    tag: 'tag',
                    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
                    desc: 'All work and no play make Jack a dull boy, all work and no play make Jack a dull boy, all work and no play make Jack a dull boy, all work and no play make Jack a dull boy, all work and no play make Jack a dull boy...'
                },
                {
                    image: 'https://dummyimage.com/132x108/c9c9c9/000000.png',
                    imageAlt: 'some alt',
                    tagged: false,
                    tag: 'other tag',
                    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                    desc: 'All work and no play make Jack a dull boy, all work and no play make Jack a dull boy, all work and no play make Jack a dull boy...'
                }
            ]
        }
    },

    components:{
        HeroArticlePreview,
        ArticlePreview
    }
}
</script>

<style scoped lang='scss'>
@import '~assets/scss/settings';
    .b-articles-list-hero{
        padding-top:4.4rem;
        @include breakpoint(desktop){
            width: 100%;
            margin: 0 auto;
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
