<template lang="html">
    <div class='b-faq-slider'>
        <slick ref="slickFaq" class='b-faq-slider-wrapper'
        :options="slickOptions"
        @afterChange="handleAfterChange">
            <div v-for="(item, index) in faqSlider" :key="index" class="b-faq-slider__slide">
              <div v-if="item.featured_image.length > 0" class="b-faq-slider__slide__media" v-for="(img, index) in item.featured_image" :key="index">
                  <img v-if="index === 0" class="u-only-mob" :src="$thumbor(336, 281) + img.data.file.url" :alt="img.data.seoalt">
                  <img v-if="index === 0" class="u-only-desktop" :src="$thumbor(416, 352) + img.data.file.url" :alt="img.data.seoalt">
              </div>
              <div v-else class="b-faq-slider__slide__media" v-for="(img, index) in item.images" :key="index">
                  <img v-if="index === 0" class="u-only-mob" :src="$thumbor(336, 281) + img.data.file.url" :alt="img.data.seoalt">
                  <img v-if="index === 0" class="u-only-desktop" :src="$thumbor(416, 352) + img.data.file.url" :alt="img.data.seoalt">
              </div>
              <div class="b-faq-slider__slide__content">
                 <h2 class='b-faq-slider__slide__content__title'>My Van & Traffic Regulation</h2>
                 <p class='b-faq-slider__slide__content__description'>
                     The UK boasts several ski resorts offering seasonal business opportunities to entrepreneurs on wheels. Here are a few..
                 </p>
             </div>
          </div>
        </slick>
        <div class="b-faq-slider__counter">
          <span class="b-faq-slider__counter-span b-faq-slider__counter-span--yellow"><span v-if="activeSlide < 10">0</span>{{ activeSlide }}</span>
          <span class="b-faq-slider__counter-span">/<span v-if="faqSlider.length < 10">0</span>{{ faqSlider.length }}</span>
        </div>
        <div class="b-faq-slider__controls">
            <div class="b-faq-slider__controls__prev">⬅</div>
            <div class="b-faq-slider__controls__next">⬅</div>
        </div>
    </div>

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
            autoplay: false,
            autoplaySpeed: 2000,
            arrows: true,
            prevArrow:('.b-faq-slider__controls__prev'),
            nextArrow:('.b-faq-slider__controls__next')
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
}
</script>

<style scoped lang='scss'>
@import '~assets/scss/settings';

.b-faq-slider{
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
        z-index: -1;
        @include breakpoint(desktop){
            height: 33.8rem;
            top: 7rem;
            bottom: 0;
        }
    }

    &-wrapper{
        margin: 0 auto;
        width: 90%;
        @include breakpoint(desktop){
            width: 79%;
            margin-left:21%;
            padding-bottom: 6rem;
        }
    }

}
.b-faq-slider__slide{
    display: block;
    box-sizing: border-box;

    @include breakpoint(desktop){
        // display: flex;
        // flex-flow: row nowrap;
    }
    &__media{
        width:100%;

        @include breakpoint(desktop){
            width:48%;
            display: inline-block;
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
            width: 52%;
            padding: 12.7rem 3.6% 0;
            vertical-align: top;
            display: inline-block;
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
.b-faq-slider__controls{
     position: absolute;
     z-index: 100;
     left: 2rem;
     bottom: 24px;
     @include fontSizeRem(13,13);
     @include breakpoint(desktop){
         right: 12.8rem;
         top: 13.5rem;
         bottom:auto;
         left: auto;
     }
    &__prev{
       position: absolute;
       top:0;
       left: 0;
    }
    &__next{
        transform: scaleX(-1);
        position: absolute;
        top:0;
        left: 6rem;
        @include breakpoint(desktop){
            left:8.2rem;
        }
    }
}

.b-faq-slider__counter{
    position: absolute;
    top:32.3rem;
    left:4rem;
    text-align: left;
    z-index: 100;
    @include fontSizeRem(13,15);
    @include breakpoint(desktop){
        top:13.3rem;
        left:auto;
        right:6.1rem;
        text-align: right;
        z-index: 100;
    }

    &-span--yellow{
        color:$sun-yellow;
    }
}


</style>
