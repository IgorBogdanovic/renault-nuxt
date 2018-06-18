<template lang="html">
  <div class="main-wrapper">
     <div class="inner-wrapper">
         <!-- <p>{{articlesList}}</p> -->
         <NewsOfTheWeek/>
         <HeroArticles/>
     </div>
      <app-faq/>
  </div>
</template>

<script>
import NewsOfTheWeek from '~/components/blocks/NewsOfTheWeek.vue'
import HeroArticles  from '~/components/blocks/HeroArticles.vue'
import AppFaq        from '~/components/blocks/FAQSlider.vue'


export default {

    data() {
        return {
            articlesList:[],
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
        HeroArticles,
        AppFaq,
  },
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
