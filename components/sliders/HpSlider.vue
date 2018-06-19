<template>
  <section class="b-hp-slider full-width-wrapper">
    <slick ref="slick" class="b-hp-slider__container"
      :options="slickOptions">
      <div v-for="(item, index) in hpSlider" :key="index" class="b-hp-slider__slide">
        <div v-if="item.element_item.featured_image.length > 0">
          <div class="b-hp-slider__img" v-for="(img, index) in item.element_item.featured_image" :key="index">
            <img v-if="index === 0" class="u-only-mob" :src="$thumbor(767, 409) + img.data.file.url" :alt="img.data.seoalt">
            <img v-if="index === 0" class="u-only-desktop" :src="$thumbor(1920, 955) + img.data.file.url" :alt="img.data.seoalt">
          </div>
        </div>
        <div v-else>
          <div v-for="(img, index) in item.element_item.images" :key="index">
            <img v-if="index === 0" class="u-only-mob" :src="$thumbor(767, 409) + img.data.file.url" :alt="img.data.seoalt">
            <img v-if="index === 0" class="u-only-desktop" :src="$thumbor(1920, 955) + img.data.file.url" :alt="img.data.seoalt">
          </div>
        </div>
        <div class="b-hp-slider__info">
          <div class="b-hp-slider__tag" v-for="(category, index) in item.element_item.category" :key="index">
            <span>{{ category.name }}</span>
          </div>
          <h1 class="b-hp-slider__heading">{{ item.element_item.title }}</h1>
          <p class="b-hp-slider__txt u-only-desktop">{{ item.element_item.additional_fields.intro }}</p>
          <div class="b-hp-slider__counter">
            <span class="b-hp-slider__counter-span b-hp-slider__counter-span--white"><span v-if="index + 1 < 10">0</span>{{ index + 1 }}</span>
            <span class="b-hp-slider__counter-span b-hp-slider__counter-span--yellow">/<span v-if="hpSlider.length < 10">0</span>{{ hpSlider.length }}</span>
          </div>
        </div>
      </div>
    </slick>
  </section>
</template>

<script>
export default {
  props: ['hpSlider'],
  data () {
      return {
        slickOptions: {
          // infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          ifDesktop: false
        },
      }
  },
  methods: {
    // next() {
    //   this.$refs.slick.next();
    // },
    // prev() {
    //   this.$refs.slick.prev();
    // },
    reInit() {
      this.$nextTick(() => {
          this.$refs.slick.reSlick();
      });
    }
  },
  beforeMount() {
    if (window.innerWidth > 767) {
      this.ifDesktop = true;
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/settings';

.b-hp-slider {

  &__container {
    width: 100%;
    height: 20rem;

    @include breakpoint(desktop) {
      height: 71.6rem;
    }
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
    margin-top: 2.8rem;

    @include breakpoint(desktop) {
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
}
</style>
