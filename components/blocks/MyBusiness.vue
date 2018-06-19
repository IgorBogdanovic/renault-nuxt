<template>
    <section class="b-my-business">
        <div class="main-wrapper">
            <div class="inner-wrapper">
                <div class="b-my-business__inner">
                    <h2 class='b-my-business__title'><span class='bolder'>MY</span><span class='regular'> BUSINESS</span></h2>
                    <div class="b-my-business__top">
                        <app-article-preview v-for="(preview, index) in previews.slice(0,3)" :key="index" :prev="preview"></app-article-preview>
                    </div>
                    <div class="b-my-business__bottom">
                        <app-article-preview :prev="previews[3]"></app-article-preview>
                        <app-article-preview :prev="previews[4]"></app-article-preview>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    // import ArticlePreview from '~/components/articles/ArticlePreview.vue'

    export default {
        data() {
            return {
                previews: [
                    {
                        // image: 'https://dummyimage.com/160x275/c9c9c9/000000.png',//mobile
                        image: 'https://dummyimage.com/272x360/c9c9c9/000000.png',
                        imageAlt: 'some alt',
                        tagged: true,
                        tag: 'MY BUSINESS',
                        title: 'How to Set Up a Mobile Showroom',
                        desc: 'A mobile showroom for your business really isn’t so different from the tried and tested mobile retail outlet…'
                    },
                    {
                        // image: 'https://dummyimage.com/156x136/c9c9c9/000000.png',//mobile
                        image: 'https://dummyimage.com/272x224/c9c9c9/000000.png',
                        imageAlt: 'some alt',
                        tagged: true,
                        tag: 'MY BUSINESS',
                        title: '5 Novel Ideas for A Food Truck',
                        desc: 'The UK boasts several ski resorts offering seasonal business opportunities to entrepreneurs on wheels. Here are a few..'
                    },
                    {
                        // image: 'https://dummyimage.com/336x284/c9c9c9/000000.png',//mobile
                        image: 'https://dummyimage.com/492x400/c9c9c9/000000.png',
                        imageAlt: 'some alt',
                        tagged: true,
                        tag: 'MY BUSINESS',
                        title: 'Setting Up A Mobile Business in the Tourism Sector: Do’s and Don’ts',
                        desc: 'The UK tourism economy is undergoing a boom; employment-wise, it has been the fastest-growing sector in the country…'
                    },
                    {
                        // image: 'https://dummyimage.com/160x136/c9c9c9/000000.png',//mobile
                        image: 'https://dummyimage.com/272x224/c9c9c9/000000.png',
                        imageAlt: 'some alt',
                        tagged: true,
                        tag: 'MY BUSINESS',
                        title: 'Writing an Operations Manual for Your Small Business',
                        desc: 'The process of writing an operations manual for your small business may sound dry, but once you get to grips with the…'
                    },
                    {
                        // image: 'https://dummyimage.com/156x276/c9c9c9/000000.png',//mobile
                        image: 'https://dummyimage.com/272x360/c9c9c9/000000.png',
                        imageAlt: 'some alt',
                        tagged: true,
                        tag: 'MY BUSINESS',
                        title: 'How to Attract New Customers',
                        desc: 'Whether you’re operating a large delivery van fleet or running your electrical business from a single Kangoo, you’ll…'
                    }
                ]
            }
        },
        components: {
            // appArticlePreview: ArticlePreview
        }
    }
</script>

<style lang="scss" scoped>
    @import '~assets/scss/settings';

    .b-my-business {

        &__inner {
            padding-top: 4.4rem;

            @include breakpoint(desktop) {
                margin-top: 11.2rem;
                padding-top: 3.6rem;
                border-top: 0.1rem solid $white-two;
            }
        }

        &__title {
            margin-bottom: 2.4rem;
            @include fontSizeRem(22, 32);

            @include breakpoint(desktop) {
                margin-bottom: 5.4rem;
                display: inline-block;
            }

            & .bolder{
                font-family: 'Lato-Black';
                display: block;
            }
        }

        &__top {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;

            & .c-article-preview {
                width: 47.7%;

                @include breakpoint(desktop) {
                    width: 24.6%;
                }

                &:nth-of-type(2) {
                    width: 46.3%;

                    @include breakpoint(desktop) {
                        width: 24.7%;
                        padding-bottom: 14rem;
                    }
                }

                &:nth-of-type(3) {
                    width: 100%;
                    padding-top: 2.2rem;

                    @include breakpoint(desktop) {
                        width: 44.9%;
                        padding-top: 0;
                        position: relative;
                        top: -17.6rem;
                    }
                }
            }
        }

        &__bottom {
            display: flex;
            justify-content: space-between;

            @include breakpoint(desktop) {
                margin-left: 27.4%;
                margin-right: 20.2%;
                margin-top: -14rem;
            }

            & .c-article-preview {
                width: 47.7%;
                padding-top: 2.7rem;

                @include breakpoint(desktop) {
                    width: 47.3%;
                    padding-top: 0;
                }

                &:nth-of-type(2) {
                    width: 46.3%;

                    @include breakpoint(desktop) {
                        width: 47.1%;
                    }
                }
            }
        }
    }
</style>