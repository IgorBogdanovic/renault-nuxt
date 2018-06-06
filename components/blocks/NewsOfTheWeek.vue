<template lang="html">
    <section class="b-news-otw">
        <div class="b-news-otw__inner">
            <h2 class='b-news-otw__title'><span class='bolder'>NEWS</span> <span class='cursive'>of the</span> <span class='regular'>WEEK</span></h2>
            <div class="b-news-otw__col-left">
                <article-preview v-for="(preview, index) in previews.slice(0,2)" :key="index" :prev="preview"></article-preview>
            </div>
            <div class="b-news-otw__col-right">
                <article-preview  :prev="previews[2]"></article-preview>
                <article-preview  :prev="previews[3]"  class='component--landscape'></article-preview>
            </div>
        </div>
        <div class="b-news-otw__cta">
            <button type="button" name="button" class='c-btn'>See All</button>
        </div>
    </section>
</template>

<script>
import ArticlePreview from '~/components/articles/ArticlePreview.vue'

export default {
    data() {
        return {
            previews: [
                {
                    // image: 'https://dummyimage.com/156x192/c9c9c9/000000.png',//mobile
                    image: 'https://dummyimage.com/200x264/c9c9c9/000000.png',
                    imageAlt: 'some alt',
                    tagged: true,
                    tag: 'MY BUSINESS',
                    title: 'From Start-up to Growth: What to Expect When Business Picks Up',
                    desc: 'Starting your own small business can be all-consuming in terms of time and attention, leaving you unprepared for a…'
                },
                {
                    // image: 'https://dummyimage.com/160x275/c9c9c9/000000.png',//mobile
                    image: 'https://dummyimage.com/344x456/c9c9c9/000000.png',
                    imageAlt: 'some alt',
                    tagged: true,
                    tag: 'MY BUSINESS',
                    title: 'How to Set Up a Mobile Showroom',
                    desc: 'A mobile showroom for your business really isn’t so different from the tried and tested mobile retail outlet...'
                },
                {
                    // image: 'https://dummyimage.com/336x284/c9c9c9/000000.png',//mobile
                    image: 'https://dummyimage.com/492x400/c9c9c9/000000.png',
                    imageAlt: 'some alt',
                    tagged: true,
                    tag: 'other tag',
                    title: '5 Novel Ideas for A Food Truck',
                    desc: 'UK foodies have officially embraced street-food culture, but that doesn’t make it easier to know where to start…'
                },
                {
                    // image: 'https://dummyimage.com/200x164/c9c9c9/000000.png',//mobile
                    image: 'https://dummyimage.com/272x224/c9c9c9/000000.png',
                    imageAlt: 'some alt',
                    tagged: true,
                    tag: 'fan',
                    title: '5 Things to Know to Drive Around London',
                    desc: 'London traffic congestion is well-known, as is the growing array of measures aiming to reduce it. Here are 5…'
                }
            ]
        }
    },
    components: {
        ArticlePreview
    }
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/settings';
.b-news-otw{

    &__inner{
        position: relative;
        padding-top: 3.6rem;
        @include breakpoint(desktop){
            padding-top: 7.8rem;
            display: flex;
            flex-flow: row nowrap;
            justify-content: space-between;
        }
    }

    &__title{
        position: absolute;
        top:3.2rem;
        left:0;
        @include breakpoint(desktop){
            top:21rem;
        }

        & .bolder{
            @include fontSizeRem(22, 32);
            font-family: 'Lato-Black';
        }
        & .cursive{
            @include fontSizeRem(22, 32);
            font-family: 'Airways';
            margin-left:1rem;
            @include breakpoint(desktop){

            }
        }
        & .regular{
            @include fontSizeRem(22, 32);
            display: block;
        }
    }

    &__col-left{

        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;

        @include breakpoint(desktop){
            padding-top: 13.6rem;
            width:52.3%;

        }

        & .c-article-preview{
            width: 47%;
            @include breakpoint(desktop){
                width: 60%;
            }

            &:nth-child(1){
                padding-top: 7.7rem;
                @include breakpoint(desktop){
                    padding-top:19.2rem;
                    width: 34.6%;
                }
            }
        }
    }
    &__col-right{

        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
        padding-top: 2.9rem;
        @include breakpoint(desktop){
            width:45%;
            padding-top: 0;
        }

        & .c-article-preview{
            @include breakpoint(desktop){}
            &:nth-child(1){
                width:100%;
                @include breakpoint(desktop){

                }
            }
        }
    }

    &__cta{
        padding-top: 4.4rem;
        @include breakpoint(desktop){
            padding-top: 8rem;
        }
    }
    //LANDSCAPE COMPONENT SCSS STYLES ARE IN CHILD COMP - ArticlePreview.vue

}

</style>
