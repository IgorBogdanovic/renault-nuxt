<template>
  <section class="b-hp-slider full-width-wrapper">
    <slick ref="slick" class="b-hp-slider__container"
      :options="slickOptions"
      @afterChange="handleAfterChange">
      <div v-for="(item, index) in hpSlider" :key="index" class="b-hp-slider__slide">
        <div v-if="item.element_item.featured_image.length > 0">
          <div class="b-hp-slider__img" v-for="(img, index) in item.element_item.featured_image" :key="index">
            <img v-if="index === 0" class="u-only-mob" :src="$thumbor(767, 409) + img.data.file.url" :alt="img.data.seoalt">
            <img v-if="index === 0" class="u-only-desktop" :src="$thumbor(1920, 955) + img.data.file.url" :alt="img.data.seoalt">
          </div>
        </div>
        <div v-else>
          <div class="b-hp-slider__img" v-for="(img, index) in item.element_item.images" :key="index">
            <img v-if="index === 0" class="u-only-mob" :src="$thumbor(767, 409) + img.data.file.url" :alt="img.data.seoalt">
            <img v-if="index === 0" class="u-only-desktop" :src="$thumbor(1920, 955) + img.data.file.url" :alt="img.data.seoalt">
          </div>
        </div>
        <div class="b-hp-slider__info">
          <div class="b-hp-slider__tag" v-for="(category, index) in item.element_item.category" :key="index">
            <span>{{ category.name }}</span>
          </div>
          <h1 class="b-hp-slider__heading">{{ item.element_item.title }}</h1>
          <p class="b-hp-slider__txt u-only-desktop">{{ introCut(item.element_item.additional_fields.intro, introCharLimit) }}</p>
        </div>
      </div>
    </slick>
    <div class="b-hp-slider__counter">
      <span class="b-hp-slider__counter-span b-hp-slider__counter-span--yellow"><span v-if="activeSlide < 10">0</span>{{ activeSlide }}</span>
      <span class="b-hp-slider__counter-span b-hp-slider__counter-span--white">/<span v-if="hpSlider.length < 10">0</span>{{ hpSlider.length }}</span>
    </div>
    <div class="b-hp-slider__arrow b-hp-slider__arrow--right u-only-desktop" @click="next">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 51 51">
        <g id="arrow-right" transform="translate(-1360 -385)">
            <circle id="circle" cx="25.5" cy="25.5" r="25.5" class="cls-1" transform="rotate(180 705.5 218)"/>
            <g id="left-arrow" transform="rotate(180 695.471 223.519)">
                <g id="Group_9" data-name="Group 9" transform="translate(0 32.038)">
                    <path id="Path_15" d="M10.848 34.807H5.08v-2.538a.231.231 0 0 0-.394-.163L.067 36.72a.232.232 0 0 0 0 .327l4.618 4.616a.231.231 0 0 0 .163.067.228.228 0 0 0 .088-.018.231.231 0 0 0 .144-.212v-2.54h5.768a.231.231 0 0 0 .231-.231v-3.692a.231.231 0 0 0-.231-.23z" data-name="Path 15" transform="translate(0 -32.038)"/>
                </g>
            </g>
        </g>
    </svg>
    </div>
    <div class="b-hp-slider__arrow b-hp-slider__arrow--left u-only-desktop" @click="prev">
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
  </section>
</template>

<script>
export default {
  props: ['hpSlider'],
  data () {
      return {
        slickOptions: {
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: false,
          autoplaySpeed: 2000,
          arrows: false
        },
        activeSlide: 1,
        introCharLimit: 100
      }
  },
  methods: {
    next() {
      this.$refs.slick.next();
    },
    prev() {
      this.$refs.slick.prev();
    },
    handleAfterChange(event, slick, currentSlide) {
      this.activeSlide = currentSlide + 1;
    },
    introCut(text, charAllowed) {
      if (text.length > charAllowed) {
        var textCuted = text.slice(0, charAllowed);
      } else return text;

      const wordsArray = textCuted.split(" ");
      wordsArray.pop();
      var textShort = "";
      for (let word of wordsArray) {
        textShort += word + " ";
      }
      return textShort + "...";
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/settings';

.b-hp-slider {
  position: relative;

  &__container {
    width: 100%;
  }

  &__slide {
    position: relative;
  }

  &__img {
    img {
      width: 100%;
      height: 100%;
    }
  }

  &__info {
    @include absolute('center-horizontal');
    top: 14%;
    width: 100%;
    padding: 0 2rem;

    @include breakpoint(desktop) {
      top: 27%;
      padding: 0 21rem;
    }
  }

  &__tag {
    font-family: 'Lato-Bold';
    @include fontSizeRem(8, 12);
    @include lineHeightRem(28, 40);
    text-transform: uppercase;
    background-color: $sun-yellow;
    display: inline-block;
    padding: 0 1.9rem;

    @include breakpoint(desktop) {
      padding: 0 3rem;
    }
  }

  &__heading {
    font-family: 'Lato-Black';
    @include fontSizeRem(24, 71);
    @include lineHeightRem(26, 67);
    text-transform: uppercase;
    color: $white;
    margin-top: 1.4rem;

    @include breakpoint(desktop) {
      margin-top: 4rem;
    }
  }

  &__txt {
    @include breakpoint(desktop) {
      font-family: 'Lato-Bold';
      @include fontSizeRem(0, 35);
      @include lineHeightRem(0, 37);
      color: $white;
      margin-top: 2.5rem;
    }
  }

  &__counter {
    position: absolute;
    bottom: 3.8rem;
    left: 2rem;

    @include breakpoint(desktop) {
      bottom: 9.8rem;
      left: 20.8rem;
    }

    &-span {
      font-family: 'Lato-Bold';
      @include fontSizeRem(12, 20);

      &--white {
        color: $white;
      }

      &--yellow {
        color: $sun-yellow;
      }
    }
  }

  &__arrow {
    cursor: pointer;
    @include absolute('center-vertical');
    width: 5.1rem;
    height: 5.1rem;

    .cls-1 {
      fill: $sun-yellow;
    }

    &--right {
      right: 3rem;
    }
    &--left {
      left: 3rem;
    }
  }
}
</style>
