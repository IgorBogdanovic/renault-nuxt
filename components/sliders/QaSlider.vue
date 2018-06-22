<template>
    <div class="c-qa-slider__underlay">
        <div class="c-qa-slider">
            <slick ref="slick" :options="slickOptions" @afterChange="handleAfterChange">
                <div v-for="(slide, index) in slider" :key="index">
                    <div class="c-qa-slider__wrapper">
                        <div class="c-qa-slider__image">
                            <img :src="slide.image" :alt="slide.imageAlt">
                        </div>
                        <div class="c-qa-slider__body">
                            <h4 class="c-qa-slider__body__title">{{ slide.title }}</h4>
                            <p class="c-qa-slider__body__description">{{ slide.description }}</p>
                            <div class="c-qa-slider__counter">
                                <span @click="prev()">
                                    <svg viewBox="0 0 11.732 10.264">
                                        <path d="M11.487 2.932H5.379V.244a.245.245 0 0 0-.417-.173L.071 4.962a.245.245 0 0 0 0 .346l4.89 4.888a.244.244 0 0 0 .173.071.241.241 0 0 0 .093-.019.245.245 0 0 0 .151-.226v-2.69h6.108a.244.244 0 0 0 .244-.244V3.176a.244.244 0 0 0-.243-.244z"
                                            data-name="Path 15" />
                                    </svg>
                                </span>
                                <div class="c-qa-slider__counter-num">
                                    <span class="current">
                                        <span v-if="activeSlide < 10">0</span>{{ activeSlide }}</span>
                                    <span>&#47;</span>
                                    <span class="total">
                                        <span v-if="slider.length < 10">0</span>{{ slider.length }}</span>
                                </div>
                                <span @click="next()">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11.079 9.693">
                                        <path d="M.231 6.924h5.768v2.538a.231.231 0 0 0 .394.163l4.619-4.614a.232.232 0 0 0 0-.327L6.394.068a.231.231 0 0 0-.163-.067.228.228 0 0 0-.088.018.231.231 0 0 0-.144.212v2.54H.231A.231.231 0 0 0 0 3.002v3.692a.231.231 0 0 0 .231.23z"
                                            data-name="Path 15" />
                                    </svg>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </slick>
        </div>
    </div>
</template>

<script>
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
      ],
      slickOptions: {
        slidesToShow: 1,
        arrows: false,
        autoplay: false,
        autoplaySpeed: 3000
      },
      activeSlide: 1
    };
  },
  methods: {
    next() {
      this.$refs.slick.next();
    },
    prev() {
      this.$refs.slick.prev();
    },
    reInit() {
      this.$nextTick(() => {
        this.$refs.slick.reSlick();
      });
    },
    handleAfterChange(event, slick, currentSlide) {
      this.activeSlide = currentSlide + 1;
    }
  }
};
</script>

<style scoped lang='scss'>
@import "~assets/scss/settings";

.c-qa-slider__underlay {
  background-color: $white-two;
  height: 26rem;
  position: relative;
  @include breakpoint(desktop) {
    height: 48.8rem;
    width: 65.6rem;
  }
}

.c-qa-slider {
  width: 33.6rem;
  position: absolute;
  left: 0;
  right: 0;
  margin: -9.7rem auto;
  @include breakpoint(desktop) {
    width: 41.6rem;
  }

  &__wrapper {
    position: relative;
  }

  &__image {
    margin-bottom: 0.9rem;
    @include breakpoint(desktop) {
      margin-bottom: 3.5rem;
    }
  }

  &__body {
    color: $warm-grey;
    position: relative;

    &__title {
      @include fontSizeRem(14, 23);
      font-family: "Lato-Black";
      margin-bottom: 1.6rem;
      color: $black;
    }

    &__description {
      @include fontSizeRem(0, 14);
    }

    &__title,
    &__description {
      @include breakpoint(desktop) {
        width: 27rem;
      }
    }
  }

  &__counter {
    @include fontSizeRem(12, 15);
    font-family: "Lato-Bold";
    color: $warm-grey;
    width: 8rem;
    display: flex;
    justify-content: space-between;
    @include breakpoint(desktop) {
      position: absolute;
      top: 0;
      right: 0;
      width: 9.5rem;
    }

    & svg {
      width: 1.17rem;
      height: 1.03rem;
      cursor: pointer;
    }

    &-num {
      & .current {
        color: $sun-yellow;
      }
    }
  }
}
</style>