<template lang="html">
  <div class="main-wrapper">
     <div class="inner-wrapper">
         <p>{{articlesList}}</p>
         <NewsOfTheWeek/>
         <HeroArticles/>
     </div>
  </div>
</template>

<script>
import NewsOfTheWeek from '~/components/blocks/NewsOfTheWeek.vue'
import HeroArticles  from '~/components/blocks/HeroArticles.vue'

export default {
    data() {
        return {
            articlesList:[],
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
    asyncData(context) {
      return context.app.$api.get(context.app.$api.queries.allArticles)
      .then( res => {
          console.log(res);
          return {
             articlesList:res.data.data.nodes
          }
      })
  },

  components:{
        NewsOfTheWeek,
        HeroArticles
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
