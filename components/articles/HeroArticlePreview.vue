<template lang="html">
    <nuxt-link tag='div' to='/' class="c-hero-article-preview">
        <div class="c-hero-article-preview__content">
            <h2 class='c-hero-article-preview__content__main-title'>MY <span>van</span></h2>
            <h3 class='c-hero-article-preview__content__subtitle'>10 Tips to Adjust Your Driving to Winter Conditions</h3>
            <p class='c-hero-article-preview__content__description'>Working through the winter? Visibility, temperature and weather can really make it harder to take your business on…</p>
        </div>
        <div class="c-hero-article-preview__media">
            <figure>
                <picture>
                    <source srcset="https://dummyimage.com/652x436/000000/fff.jpg" media="(min-width: 1024px)">
                    <img srcset="https://dummyimage.com/272x160/000000/fff.jpg" alt="…">
                </picture>
            </figure>
        </div>
    </nuxt-link>
</template>

<script>
export default {

}
</script>

<style scoped lang='scss'>
@import '~assets/scss/settings';
.c-hero-article-preview{
    display: block;

    @include breakpoint(desktop){
        display: flex;
        flex-flow:row nowrap;
    }

    &__content{
        width: 100%;
        background: $white;
        padding: 0.7rem 4.4% 2.5rem;
        @include breakpoint(desktop){
            padding: 3rem 3.4% 0;
            width:29.4%;
        }

        &__main-title{
            font-family: 'Lato-Black';
            @include fontSizeRem(22, 32);
            span{
                font-family: 'Airways';
                @include fontSizeRem(25, 32);
                @include breakpoint(mobile){
                    margin-left: 0.6rem;
                }
            }
        }

        &__subtitle{
            @include fontSizeRem(16, 28);
            font-family: 'Lato-Black';
            line-height: 1.19;
            padding-top: 1.7rem;

            @include breakpoint(desktop){
                padding: 6rem 5rem 0 0;
                line-height: 1.07;
            }
        }

        &__description{
            @include fontSizeRem(14, 14);
            display: none;
            color:$warm-grey;
            @include breakpoint(desktop){
                display: block;
                padding-top: 1.5rem;
                line-height: 1.5;
            }
        }
    }

    &__media{
        @include breakpoint(desktop){
            width:71.6%;
            padding-top: 0;
        }

        img{
            width:100%;
            max-width: none;
        }
    }
}

</style>
