<template lang="html">
    <!-- Slider main container -->
    <div class="swiper-container">
        <!-- Additional required wrapper -->
        <div class="swiper-wrapper">
            <!-- Slides -->
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
            <!-- <div class="swiper-slide">
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
            </div> -->
        </div>

        <div class="swiper-pagination"></div>

        <!-- If we need navigation buttons -->
        <div class="swiper-prev">⬅</div>
        <div class="swiper-next">⬅</div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped lang='scss'>
@import '~assets/scss/settings';
@import '~assets/scss/plugins/swiper-min';
.swiper{
    &-container{
        margin: 0 auto;
        @include breakpoint(desktop){
            width: 79%;
            margin-left:21%;
        }
    }
    &-pagination{
        position: absolute;
        top:13.3rem;
        right:0;
        text-align: right;
        z-index: 100;
        padding-right: 6.1rem;
        @include fontSizeRem(15,15);
        @include breakpoint(desktop){
            top:13.3rem;
            right:0;
            text-align: right;
            z-index: 100;
        }
    }
    &-prev{
        position: absolute;
        top: 13.3rem;
        right: 11.4rem;
        z-index: 100;
        @include fontSizeRem(15,15);
    }
    &-next{
        transform: scaleX(-1);
        position: absolute;
        top: 13.3rem;
        right: 3.4rem;
        z-index: 100;
        @include fontSizeRem(15,15);
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
    }
    &__content{
        padding: 2rem 2% 0;

        @include breakpoint(desktop){
            width:52%;
            padding: 12.9rem 3.9% 0;
        }
        &__title{
            font-family: 'Lato-Bold';
            line-height: 1.22;
            @include fontSizeRem(23,23);
            width:45%;
            @include breakpoint(desktop){
                width:45%;
            }
        }
        &__description{
            @include fontSizeRem(14,14);
            width:81%;
            line-height: 1.55;
            padding-top: 1.3rem;
            color:$warm-grey;
            @include breakpoint(desktop){
                width:81%;
                padding-top: 1.3rem;
            }
        }
    }
}
</style>
