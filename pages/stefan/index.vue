<template lang="html">
  <div class="main-wrapper">
     <div class="inner-wrapper">
         <NewsOfTheWeek/>
         <HeroArticles/>
        <!-- Slider main container -->
        <div class="swiper-container">
            <!-- Additional required wrapper -->
            <div class="swiper-wrapper">
                <!-- Slides -->
                <div class="swiper-slide">Slide 1</div>
                <div class="swiper-slide">Slide 2</div>
                <div class="swiper-slide">Slide 3</div>
                ...
            </div>
            <!-- If we need pagination -->
            <div class="swiper-pagination"></div>

            <!-- If we need navigation buttons -->
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>

            <!-- If we need scrollbar -->
            <div class="swiper-scrollbar"></div>
        </div>
     </div>
  </div>
</template>

<script>
import NewsOfTheWeek from '~/components/blocks/NewsOfTheWeek.vue'
import HeroArticles  from '~/components/blocks/HeroArticles.vue'
import Swiper        from 'swiper'; //npm module

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
  },

  mounted(){
      var mySwiper = new Swiper ('.swiper-container', {
      // Optional parameters
      direction: 'vertical',
      loop: true,

      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
      },

      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      // And if we need scrollbar
      scrollbar: {
        el: '.swiper-scrollbar',
      },
    })
  }
}

</script>

<style scoped lang='scss'>
@import '~assets/scss/settings';
@import '~assets/scss/plugins/swiper-min';
        .swiper-container {
            width: 600px;
            height: 300px;
        }
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
