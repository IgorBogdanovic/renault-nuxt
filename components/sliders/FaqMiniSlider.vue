<template lang="html">
    <section class='b-faq-slider'>
        <slick ref="slickFaq" class='b-faq-slider-wrapper'
        :options="slickOptions"
        @afterChange="handleAfterChange">
            <div v-for="(item, index) in faqSlider" :key="index" class="b-hp-slider__slide">
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
          </div>
            <div class="swiper-container swiper-container-faq-mini">
                <div class="swiper-wrapper">

                </div>

                <div class="swiper-prev">⬅</div>
                <div class="swiper-next">⬅</div>
            </div>
        </slick>
    </section>

</template>

<script>
export default {
    props: ['faqSlider'],
    data () {
        return {
          slickOptions: {
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            arrows: false
          },
          activeSlide: 1,
          introCharLimit: 100
        }
    },
    methods: {
      next() {
        this.$refs.slickFaq.next();
      },
      prev() {
        this.$refs.slickFaq.prev();
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
  },
  created(){
      console.log(this.faqSlider);
  }
}
</script>

<style scoped lang='scss'>
@import '~assets/scss/settings';

.b-faq-slider-wrapper{
    position: relative;
    width:100%;
    margin: 0 auto;
    @include breakpoint(desktop){
        max-width:1100px;
        width:100%;
    }
    &::after{
        content:'';
        position: absolute;
        top: 9.8rem;
        left: 0;
        right: 0;
        background: $white-two;
        height: 26rem;
        @include breakpoint(desktop){
            top: auto;
            bottom: 0;
            height: 33.8rem;
        }
    }

}
.swiper{
    &-container{
        margin: 0 auto;
        width: 90%;
        @include breakpoint(desktop){
            width: 79%;
            margin-left:21%;
            padding-bottom: 6rem;
        }
    }
    &-pagination{
        position: absolute;
        top:32.3rem;
        left:2rem;
        text-align: left;
        z-index: 100;
        padding-right: 6.1rem;
        @include fontSizeRem(13,15);
        @include breakpoint(desktop){
            top:13.3rem;
            left:auto;
            right:0;
            text-align: right;
            z-index: 100;
        }
    }
    &-prev{
        position: absolute;
        top: 32.3rem;
        left: 0;
        z-index: 100;
        @include fontSizeRem(13,15);
        @include breakpoint(desktop){
            left:auto;
            top: 13.3rem;
            right: 11.4rem;
        }
    }
    &-next{
        transform: scaleX(-1);
        position: absolute;
        top: 32.3rem;
        left: 6rem;
        z-index: 100;
        @include fontSizeRem(12,15);
        @include breakpoint(desktop){
            left:auto;
            top: 13.3rem;
            right: 3.4rem;
        }
    }
}

.swiper-slide{
    display: block;
    box-sizing: border-box;

    @include breakpoint(desktop){
        display: flex;
        flex-flow: row nowrap;
    }
    &__media{
        width:100%;

        @include breakpoint(desktop){
            width:48%;
        }
        & img{
            box-shadow: 3px 15px 12px -9px rgba(0, 0, 0, 0.2);
            width: 100%;
            max-width: none;
        }
    }
    &__content{
        padding: 0.8rem 0 0;
        @include breakpoint(desktop){
            width:52%;
            padding: 12.9rem 3.9% 0;
        }
        &__title{
            font-family: 'Lato-Bold';
            line-height: 1.22;
            padding-bottom: 4rem;
            @include fontSizeRem(14,23);
            @include breakpoint(desktop){
                width:45%;
                padding-bottom: 0;
            }
        }
        &__description{
            display: none;
            @include fontSizeRem(14,14);
            line-height: 1.55;
            padding-top: 1.3rem;
            color:$warm-grey;
            @include breakpoint(desktop){
                display: block;
                width:81%;
                padding-top: 1.3rem;
            }
        }
    }
}
</style>
