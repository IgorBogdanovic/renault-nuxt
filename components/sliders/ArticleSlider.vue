<template>
  <div class="b-article-content__text-block-slider">
    <slick ref="slickTop"
        class="b-article-content__text-block-slider-top"
        :options="slickOptionsTop"
        @beforeChange="handleBeforeChange">
        <div v-for="(slide, index) in sliderArray" :key="index">
            <img class="u-only-mob" :src="$thumbor(767, 409) + slide.file.url" :alt="slide.seoalt">
            <img class="u-only-desktop" :src="$thumbor(752, 432) + slide.file.url" :alt="slide.seoalt">
        </div>
    </slick>
    <slick ref="slickBottom"
        class="b-article-content__text-block-slider-bottom"
        :options="slickOptionsBottom"
        @beforeChange="handleBeforeChange">
        <div v-for="(slide, index) in sliderArray" :key="index">
            <img :src="$thumbor(86, 76) + slide.file.url" :alt="slide.seoalt">
        </div>
    </slick>
    <div class="b-article-content__text-block-slider-arrow b-article-content__text-block-slider-arrow--left" @click="prev">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 51 51">
            <g id="arrow-left" transform="translate(-53 -380)">
                <circle id="circle" cx="25.5" cy="25.5" r="25.5" class="cls-1" transform="translate(53 380)"/>
                <g id="left-arrow" transform="translate(72 368.698)">
                    <g id="Group_9" data-name="Group 9" transform="translate(0 32.038)">
                        <path id="Path_15" d="M11.487 34.97H5.379v-2.688a.245.245 0 0 0-.417-.173L.071 37a.245.245 0 0 0 0 .346l4.89 4.888a.244.244 0 0 0 .173.071.241.241 0 0 0 .093-.019.245.245 0 0 0 .151-.226v-2.69h6.108a.244.244 0 0 0 .244-.244v-3.912a.244.244 0 0 0-.243-.244z" data-name="Path 15" transform="translate(0 -32.038)"/>
                    </g>
                </g>
            </g>
        </svg>
    </div>
    <div class="b-article-content__text-block-slider-arrow b-article-content__text-block-slider-arrow--right" @click="next">
        <svg viewBox="0 0 36 36">
            <g id="right-arrow" transform="translate(-256 -120)">
                <circle id="circle" cx="18" cy="18" r="18" class="cls-1" transform="rotate(180 146 78)"/>
                <g id="left-arrow" transform="rotate(180 138.921 70.588)">
                    <g id="Group_9" data-name="Group 9">
                        <path id="Path_15" d="M7.657 1.955H3.586V.163a.163.163 0 0 0-.278-.115L.048 3.305a.164.164 0 0 0 0 .231l3.26 3.259a.163.163 0 0 0 .115.048.161.161 0 0 0 .062-.012.163.163 0 0 0 .1-.15V4.886h4.072a.163.163 0 0 0 .163-.163V2.117a.163.163 0 0 0-.163-.162z" data-name="Path 15"/>
                    </g>
                </g>
            </g>
        </svg>
    </div>
  </div>
</template>

<script>
export default {
  props: ['sliderArray'],
  data() {
    return {
      slickOptionsTop: {
        slidesToShow: 1,
        arrows: false,
        fade: true
      },
      slickOptionsBottom: {
        slidesToShow: this.sliderArray.length - 1,
        slidesToScroll: 1,
        arrows: false,
        centerMode: true,
        variableWidth: true,
        focusOnSelect: true
      }
    }
  },
  methods: {
    next() {
      if (window.innerWidth < 768) {
        this.$refs.slickTop.next();
      } else {
        this.$refs.slickBottom.next();
      }
    },
    prev() {
      if (window.innerWidth < 768) {
        this.$refs.slickTop.prev();
      } else {
        this.$refs.slickBottom.prev();
      }
    },
    handleBeforeChange(event, slick, currentSlide, nextSlide) {
      const slider = event.currentTarget;
      if (slider.classList.contains('b-article-content__text-block-slider-top')) {
        this.$refs.slickBottom.goTo(nextSlide, false);
      } else if (slider.classList.contains('b-article-content__text-block-slider-bottom')) {
        this.$refs.slickTop.goTo(nextSlide, false);
      } else return;
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/settings';

.b-article-content__text-block-slider {
  position: relative;
  width: 111%;
  left: -5.5%;
  margin-bottom: 3.2rem;

  @include breakpoint(desktop) {
    width: 100%;
    left: auto;
    margin-bottom: 6.7rem;
  }

  &-top {
    @include breakpoint(desktop) {
      margin-bottom: 2.9rem;
    }
  }

  &-bottom {
    display: none;

    @include breakpoint(desktop) {
      display: block;
      width: 66.5%;
      margin-left: 17%;

      /deep/ .slick-slide {
        margin: 0 .8rem;
      }

      /deep/ .slick-current {
        position: relative;

        &:before {
          position: absolute;
          content: '';
          left: 0;
          right: 0;
          top: 0;
          bottom: 0;
          border: 3px solid $sun-yellow;
          z-index: 0;
        }
      }
    }
  }

  &-arrow {
    cursor: pointer;
    @include absolute('center-vertical');
    width: 3.6rem;
    height: 3.6rem;

    @include breakpoint(desktop) {
      width: 5rem;
      height: 5rem;
      top: 93%;
    }

    &--left {
      left: 2rem;

      @include breakpoint(desktop) {
        left: 4.8rem;
      }
    }

    &--right {
      right: 2rem;

      @include breakpoint(desktop) {
        right: 4.8rem;
      }
    }

    & svg {
      width: 100%;
      height: 100%;

      & .cls-1 {
        fill:$sun-yellow;
      }
    }
  }
}
</style>
