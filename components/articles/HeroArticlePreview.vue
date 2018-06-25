<template lang="html">
    <nuxt-link tag='div' to='/' class="c-hero-article-preview">
        <div class="c-hero-article-preview__content">
            <h2 class='c-hero-article-preview__content__main-title'>MY <span>van</span></h2>
            <h3 class='c-hero-article-preview__content__subtitle' v-if="prev.title" >{{prev.title}}</h3>
            <p class='c-hero-article-preview__content__description' v-if="prev.additional_fields.intro" >{{ introCut( prev.additional_fields.intro, introCharLimit ) }}</p>
        </div>
        <div class="c-hero-article-preview__media" v-if="prev.featured_image.length > 0">
            <figure  v-for="(img, index) in prev.featured_image" :key="index">
                <img v-if="index === 0" class="u-only-mob" :src="$thumbor(thumbor.imgMob.width, thumbor.imgMob.height) + img.data.file.url" :alt="img.data.seoalt">
                <img v-if="index === 0" class="u-only-desktop" :src="$thumbor(thumbor.imgDesk.width, thumbor.imgDesk.height) + img.data.file.url" :alt="img.data.seoalt">
            </figure>
        </div>
        <div class="c-hero-article-preview__media" v-else>
            <figure  v-for="(img, index) in prev.images" :key="index">
                <img v-if="index === 0" class="u-only-mob" :src="$thumbor(thumbor.imgMob.width, thumbor.imgMob.height) + img.data.file.url" :alt="img.data.seoalt">
                <img v-if="index === 0" class="u-only-desktop" :src="$thumbor(thumbor.imgDesk.width, thumbor.imgDesk.height) + img.data.file.url" :alt="img.data.seoalt">
            </figure>
        </div>
    </nuxt-link>
</template>

<script>
import { introCut } from '~/plugins/globalFunctions.js';

export default {
    props:['prev', 'thumbor'],
    data() {
        return {
            introCharLimit: 80
        }
    },
    methods: {
        introCut
    },
    created(){
        console.log(this.prev);
    },
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
