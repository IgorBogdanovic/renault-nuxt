<template>
  <section class="b-hp-slider full-width-wrapper">
    <!-- <div class="b-hp-slider__container swiper-container">
      <div class="b-hp-slider__wrapper swiper-wrapper">
        <div v-for="(item, index) in hpSlider" :key="index" class="b-hp-slider__slide swiper-slide">
          checks for featured_image
          <div v-if="item.element_item.featured_image.length > 0">
            <div class="b-hp-slider__img" v-for="(img, index) in item.element_item.featured_image" :key="index">
              <img v-if="index === 0" :src="img.data.file.url" :alt="img.data.seoalt">
            </div>
          </div>
          if there is no featured_image, takes image from article that it leads to
          <div v-else>
            <div v-for="(img, index) in item.element_item.images" :key="index">
              <img v-if="index === 0" :src="img.data.file.url" :alt="img.data.seoalt">
            </div>
          </div>
          <div class="b-hp-slider__info">
            <div class="b-hp-slider__tag" v-for="(category, index) in item.element_item.category" :key="index">
              <span>{{ category.name }}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="b-hp-slider__pagination swiper-pagination"></div>
    </div> -->
  </section>
</template>

<script>
export default {
  props: ['hpSlider'],
  data () {
      return {
      }
  },
  created() {
    console.log(this.hpSlider);
  },
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/settings';

.b-hp-slider {

  &__img {
    img {
      width: 100%;
      height: 20rem;
    }
  }

  &__info {
    font-family: 'Lato-Bold';
    @include fontSizeRem(8, 12);
    @include lineHeightRem(37, 15);
    text-transform: uppercase;
    @include absolute('center-horizontal');
    background-color: $sun-yellow;
  }
}
</style>
