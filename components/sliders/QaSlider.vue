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
      
      <div class="swiper-wrapper">
        
        <div v-for="(slide, index) in slider" :key="index" class="swiper-slide">
          
          <img :src="slide.image" :alt="slide.imageAlt" class="swiper-slide__image">
          
          <h2 class='swiper-slide__title text--bolder'>{{ slide.title }}</h2>
          
          <p class='swiper-slide__description'>{{ slide.description }}</p>
          
        </div>
        
      </div>
      
      <div class="swiper-navigation">

        <div class="swiper-prev">⬅</div>
      
        <div class="swiper-pagination text--bold"></div>
      
        <div class="swiper-next" :style="{ transform: 'scaleX(-1)' }">⬅</div>
      
      </div>

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
          image: "https://dummyimage.com/416x352/cecece/000000.png",
          imageAlt: "some alt",
          title: "My Van & Traffic Regulation",
          description:
            "The UK boasts several ski resorts offering seasonal business opportunities to entrepreneurs on wheels. Here are a few.."
        },
        {
          image: "https://dummyimage.com/416x352/777777/000000.png",
          imageAlt: "some alt",
          title: "Second SLider",
          description:
            "Working through the winter? Visibility, temperature and weather can really make it harder to take your business on…"
        },
        {
          image: "https://dummyimage.com/416x352/c9c9c9/000000.png",
          imageAlt: "some alt",
          title: "Third Slider",
          description:
            "Working through the winter? Visibility, temperature and weather can really make it harder to take your business on…"
        }
      ]
    };
  },
  mounted() {
    var mySwiper = new Swiper(".swiper-container", {
      // Optional parameters
      loop: true,
      allowTouchMove: false,
      breakpoints: {
        768: {
          allowTouchMove: true
        }
      },
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
  height: 41.5rem;
  @include breakpoint(desktop) {
    width: 65.6rem;
    height: 69rem;
  }

  &__heading {
    margin-bottom: 11rem;
    padding: 0 5%;
    @include breakpoint(desktop) {
      padding: 0;
      margin-bottom: 13.8rem;
    }
  }

  &-wrapper {
    background-color: $white-two;
    height: 26rem;
    @include breakpoint(desktop) {
      height: 48.8rem;
    }
  }
}

.swiper {
  &-container {
    width: 33.6rem;
    top: -9.7rem;
    @include breakpoint(desktop) {
      width: 41.6rem;
    }
  }

  &-slide {
    &__image {
      width: 100%;
      margin-bottom: 0.9rem;
      @include breakpoint(desktop) {
        margin-bottom: 3.4rem;
      }
    }

    &__title {
      @include fontSizeRem(14, 23);
      line-height: 1.14;
      margin-bottom: 1.6rem;
      @include breakpoint(desktop) {
        width: 17.7rem;
        margin-bottom: 0.9rem;
      }
    }

    &__description {
      display: none;
      @include breakpoint(desktop) {
        max-width: 27.2rem;
        display: inline-block;
        font-size: 1.4rem;
        line-height: 1.5;
        color: $warm-grey;
      }
    }
  }

  &-navigation {
    @include breakpoint(desktop) {
      position: absolute;
      bottom: 9.5rem;
      right: 0;
      z-index: 999;
    }
  }

  &-pagination {
    @include fontSizeRem(12, 15);
    position: static;
    display: inline;
    margin: 0.8rem;
    color: $warm-grey;
  }

  &-prev,
  &-next {
    display: inline-block;
    font-size: 1rem;
    outline: 0;
    cursor: pointer;
  }
}
</style>