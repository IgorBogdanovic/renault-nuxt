<template>

<div class="qa-slider">
  <h2 class="qa-slider__heading">
    <span class="text--regular">Renault</span>
    <br>
    <span class="text--italic">Vu </span>
    <span class="text--bold">q&a</span>
  </h2>

  <div class="qa-slider-wrapper">
    
    <!-- Slider main container -->
    
    <div class="swiper-container">

    <!-- Additional required wrapper -->

            <div class="swiper-wrapper">

                <div v-for="(slide, index) in slider" :key="index" class="swiper-slide">

                  <img :src="slide.image" :alt="slide.imageAlt" class="swiper-slide__image">
                  
                  <h2 class='swiper-slide__title'>{{ slide.title }}</h2>
                  
                  <p class='swiper-slide__description'>{{ slide.description }}</p>
                    
                </div>
                
            </div>


    <div class="swiper-prev">⬅</div>

    <div class="swiper-pagination"></div>

    <div class="swiper-next">⬅</div>
    
  </div>
  
  </div>

</div>

</template>

<script>
import Swiper from "swiper";
export default {
  data() {
    return {
      slider: [
        {
          image: "https://dummyimage.com/428x424/555555/000000.png",
          imageAlt: "some alt",
          title: "My Van & Traffic Regulation",
          description:
            "Working through the winter? Visibility, temperature and weather can really make it harder to take your business on…"
        }
        // {
        //   image: "https://dummyimage.com/428x424/777777/000000.png",
        //   imageAlt: "some alt",
        //   title: "Second SLider",
        //   desc:
        //     "Working through the winter? Visibility, temperature and weather can really make it harder to take your business on…"
        // },
        // {
        //   image: "https://dummyimage.com/428x424/c9c9c9/000000.png",
        //   imageAlt: "some alt",
        //   title: "Third Slider",
        //   desc:
        //     "Working through the winter? Visibility, temperature and weather can really make it harder to take your business on…"
        // }
      ]
    };
  },
  mounted() {
    var mySwiper = new Swiper(".swiper-container", {
      // Optional parameters
      loop: true,
      // Navigation arrows
      navigation: {
        nextEl: ".swiper-next",
        prevEl: ".swiper-prev"
      },
      pagination: {
        el: ".swiper-pagination",
        type: "fraction",
        formatFractionCurrent(num) {
          if (num < 9) {
            return "0" + num;
          }
          return num;
        },
        formatFractionTotal(num) {
          if (num < 9) {
            return "0" + num;
          }
          return num;
        },
        renderFraction(currentClass, totalClass) {
          return `<span class="${currentClass}" style="color:#ffcc33;"></span> / <span class="${totalClass}"></span>`;
        }
      }
    });
  }
};
</script>

<style scoped lang='scss'>
@import "~assets/scss/settings";
@import "~assets/scss/plugins/swiper-min";

.qa-slider {
  width: 100%;

  &__heading {
    margin-bottom: 11rem;
    padding: 0 5%;
  }

  &-wrapper {
    background-color: $white-two;
  }
}

.swiper {
  &-container {
    width: 33.6rem;
    top: -9.7rem;
    @include breakpoint(desktop) {
    }
  }

  &-slide {
    &__image {
      margin-bottom: 0.9rem;
    }

    &__title {
      @include fontSizeRem(14, 0);
      font-family: "Lato-Black";
      line-height: 1.14;
      margin-bottom: 1.6rem;
    }

    &__description {
      display: none;
      @include breakpoint(desktop) {
        display: inline;
      }
    }
  }

  &-pagination {
    text-align: left;
    z-index: 100;
    @include fontSizeRem(15, 15);
    @include breakpoint(desktop) {
      top: 13.3rem;
      right: 0;
      text-align: right;
      z-index: 100;
    }
  }
  &-prev {
    left: 0;
    bottom: 0;
    display: inline-block;
    z-index: 100;
    @include fontSizeRem(15, 15);
  }
  &-next {
    display: inline-block;
    transform: scaleX(-1);
    top: 13.3rem;
    right: 3.4rem;
    z-index: 100;
    @include fontSizeRem(15, 15);
  }
}
</style>