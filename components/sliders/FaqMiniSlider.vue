<template lang="html">
    <div class='b-faq-slider-wrapper'>
        <!-- Slider main container -->
        <div class="swiper-container swiper-container-faq-mini">
            <!-- Additional required wrapper -->
            <div class="swiper-wrapper">
                <!-- Slides -->
                <div class="swiper-slide">
                    <div class="swiper-slide__media">
                        <img srcset="https://dummyimage.com/336x281/c9c9c9/000000.png" alt="…">
                    </div>
                    <div class="swiper-slide__content">
                          <h2 class='swiper-slide__content__title'>My Van & Traffic Regulation</h2>
                          <p class='swiper-slide__content__description'>
                              The UK boasts several ski resorts offering seasonal business opportunities to entrepreneurs on wheels. Here are a few..
                          </p>
                      </div>
                </div>
                <div class="swiper-slide">
                    <div class="swiper-slide__media">
                        <img srcset="https://dummyimage.com/416x352/c9c9c9/000000.png" alt="…">
                    </div>
                    <div class="swiper-slide__content">
                          <h2 class='swiper-slide__content__title'>My Van & Traffic Regulation</h2>
                          <p class='swiper-slide__content__description'>
                              The UK boasts several ski resorts offering seasonal business opportunities to entrepreneurs on wheels. Here are a few..
                          </p>
                      </div>
                </div>
                <div class="swiper-slide">
                    <div class="swiper-slide__media">
                        <img srcset="https://dummyimage.com/416x352/c9c9c9/000000.png" alt="…">
                    </div>
                    <div class="swiper-slide__content">
                          <h2 class='swiper-slide__content__title'>My Van & Traffic Regulation</h2>
                          <p class='swiper-slide__content__description'>
                              The UK boasts several ski resorts offering seasonal business opportunities to entrepreneurs on wheels. Here are a few..
                          </p>
                      </div>
                </div>
            </div>

            <div class="swiper-pagination"></div>

            <!-- If we need navigation buttons -->
            <div class="swiper-prev">⬅</div>
            <div class="swiper-next">⬅</div>
        </div>
    </div>

</template>

<script>
export default {

}
</script>

<style scoped lang='scss'>
@import '~assets/scss/settings';
@import '~assets/scss/plugins/swiper-min';
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
            padding-bottom: 30rem;
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
