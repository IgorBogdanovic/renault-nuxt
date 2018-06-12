<template lang="html">
  <section class='b-faq'>
      <h2 class='b-faq__title'>FAQ</h2>
      <FaqMiniSlider/>
  </section>
</template>

<script>
import FaqMiniSlider from '~/components/sliders/FaqMiniSlider.vue'

export default {

    components:{
        FaqMiniSlider
    }
}
</script>

<style scoped lang='scss'>
@import '~assets/scss/settings';
.b-faq{
    width:100%;
    margin: 0 auto;
    position: relative;
    @include breakpoint(desktop){
        max-width:1100px;
        width:100%;
        border-top: 2px solid $white-two;
        padding-top: 8.5rem;
    }

    &__title{
        font-family: 'Lato-Bold';
        @include fontSizeRem(22,32);
        padding-bottom: 3.4rem;
        padding-left: 1.8rem;

        @include breakpoint(desktop){
            padding-bottom: 0;
            padding-left: 0;
            top:8.1rem;
            position: absolute;
        }
    }
}

</style>
