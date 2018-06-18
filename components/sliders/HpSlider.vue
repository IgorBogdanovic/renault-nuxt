<template>
  <section class="b-hp-slider full-width-wrapper">
    <slick ref="slick" class="b-hp-slider__container"
      :options="slickOptions">
      <div v-for="(item, index) in hpSlider" :key="index" class="b-hp-slider__slide">
        <div v-if="item.element_item.featured_image.length > 0">
          <div class="b-hp-slider__img" v-for="(img, index) in item.element_item.featured_image" :key="index">
            <img v-if="index === 0" :src="$thumbor(767, 409) + img.data.file.url" :alt="img.data.seoalt">
          </div>
        </div>
        <div v-else>
          <div v-for="(img, index) in item.element_item.images" :key="index">
            <img v-if="index === 0" :src="$thumbor(767, 409) + img.data.file.url" :alt="img.data.seoalt">
          </div>
        </div>
        <div class="b-hp-slider__info">
          <div class="b-hp-slider__tag" v-for="(category, index) in item.element_item.category" :key="index">
            <span>{{ category.name }}</span>
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
          arrows: false
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
  created() {
    // console.log(this.hpSlider);
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/settings';

.b-hp-slider {

  &__slide {
    position: relative;
    width: 100%;
    height: 20rem;
  }

  &__img {
    img {
      width: 100%;
      height: 100%;
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
