<template lang="html">
  <div class="main-wrapper">
     <div class="inner-wrapper">
         <p>{{articlesList}}</p>
         <NewsOfTheWeek/>
         <HeroArticles/>
        <!-- Slider main container -->
        <div class="swiper-container">
            <!-- Additional required wrapper -->
            <div class="swiper-wrapper">
                <!-- Slides -->
                <div class="swiper-slide">
                    <div class="swiper-slide__media">
                        <img srcset="https://dummyimage.com/416x352/c9c9c9/000000.png" alt="…">
                    </div>
                    <div class="swiper-slide__content">
                          <h2 class='swiper-slide__content__title'>My Van & Traffic Regulation</h2>
                          <p class='swiper-slide__content__description'>
                              The UK boasts several ski resorts offering seasonal business opportunities to entrepreneurs on wheels. Here are a few..
                          </p>
                      </div>
                </div>
                <div class="swiper-slide">
                    <div class="swiper-slide__media">
                        <img srcset="https://dummyimage.com/416x352/c9c9c9/000000.png" alt="…">
                    </div>
                    <div class="swiper-slide__content">
                          <h2 class='swiper-slide__content__title'>My Van & Traffic Regulation</h2>
                          <p class='swiper-slide__content__description'>
                              The UK boasts several ski resorts offering seasonal business opportunities to entrepreneurs on wheels. Here are a few..
                          </p>
                      </div>
                </div>
                <div class="swiper-slide">
                    <div class="swiper-slide__media">
                        <img srcset="https://dummyimage.com/416x352/c9c9c9/000000.png" alt="…">
                    </div>
                    <div class="swiper-slide__content">
                          <h2 class='swiper-slide__content__title'>My Van & Traffic Regulation</h2>
                          <p class='swiper-slide__content__description'>
                              The UK boasts several ski resorts offering seasonal business opportunities to entrepreneurs on wheels. Here are a few..
                          </p>
                      </div>
                </div>
            </div>

            <div class="swiper-pagination"></div>

            <!-- If we need navigation buttons -->
            <div class="swiper-prev">⬅</div>
            <div class="swiper-next">⬅</div>
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
      loop: true,
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-next',
        prevEl: '.swiper-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
        formatFractionCurrent(num){
            if(num < 9){
                return '0'+num;
            }
            return num;
        },
        formatFractionTotal(num){
            if(num < 9){
                return '0'+num;
            }
            return num;
        },
        renderFraction(currentClass, totalClass) {
            return `<span class="${currentClass}" style="color:#ffcc33;"></span> / <span class="${totalClass}"></span>`;

        }

      },
    })
  }
}

</script>

<style scoped lang='scss'>
@import '~assets/scss/settings';
@import '~assets/scss/plugins/swiper-min';
    .swiper-container {
        width: 79%;
        margin-left:21%;
    }

    .swiper-wrapper{

    }
    .swiper-pagination{
        position: absolute;
        top:13.3rem;
        right:0;
        text-align: right;
        z-index: 100;
        padding-right: 6.1rem;
        @include fontSizeRem(15,15)

    }

    .swiper-prev{
        position: absolute;
        top: 13.3rem;
        right: 11.4rem;
        z-index: 100;
        @include fontSizeRem(15,15)
    }
    .swiper-next{
        transform: scaleX(-1);
        position: absolute;
        top: 13.3rem;
        right: 3.4rem;
        z-index: 100;
        @include fontSizeRem(15,15)
    }

    .swiper-slide{
        display: flex;
        box-sizing: border-box;

        @include breakpoint(desktop){
            flex-flow: row nowrap;
        }

        &__media{

            @include breakpoint(desktop){
                width:48%;
            }
        }

        &__content{
            padding-top: 4.2rem;
            padding: 12.9rem 3.4% 0;

            @include breakpoint(desktop){
                width:52%;
                padding: 12.9rem 3.9% 0;
            }

            &__title{
                font-family: 'Lato-Bold';
                line-height: 1.22;
                @include fontSizeRem(23,23)
                width:45%;
                @include breakpoint(desktop){
                    width:45%;
                }
            }
            &__description{
                @include fontSizeRem(14,14)
                width:81%;
                line-height: 1.55;
                padding-top: 1.3rem;
                color:$warm-grey;
                @include breakpoint(desktop){
                    width:81%;
                    padding-top: 1.3rem;
                }
            }
        }
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
