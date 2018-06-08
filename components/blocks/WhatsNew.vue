<template>
    <section class="b-whats-new">
        <div class="main-wrapper">
            <div class="inner-wrapper">
                <div class="b-whats-new__inner">
                    <h2 class='b-whats-new__title'><span class='cursive'>WHATS</span> <span class='bolder'>NEW</span></h2>
                    <div class="b-whats-new__top">
                        <div class="b-whats-new__top-left row">
                            <app-article-preview v-for="(preview, index) in previews.slice(0,2)" :key="index" :prev="preview" class="c-article-preview-square"></app-article-preview>
                        </div>
                        <div class="b-whats-new__top-right row">
                            <app-article-preview :prev="previews[2]" class="c-article-preview-square"></app-article-preview>
                            <app-article-preview :prev="previews[3]" class="c-article-preview-square-sm"></app-article-preview>
                        </div>
                    </div>
                    <div class="b-whats-new__bottom">
                        <div class="b-whats-new__bottom-left row">
                            <app-article-preview v-for="(preview, index) in previews.slice(4,6)" :key="index" :prev="preview" class="c-article-preview-square"></app-article-preview>
                        </div>
                        <div class="b-whats-new__bottom-right">

                        </div>
                    </div>
                </div>
            </div>
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
                        image: 'https://dummyimage.com/156x136/c9c9c9/000000.png',//mobile
                        // image: 'https://dummyimage.com/272x224/c9c9c9/000000.png',
                        imageAlt: 'some alt',
                        tagged: true,
                        tag: 'WHAT’S NEW',
                        title: 'Kangoo-off: Kangoo vs New Kangoo Z. E. 33',
                        desc: 'If you need a compact van, you may have considered the Renault Kangoo. You might also ask yourself whether the...'
                    },
                    {
                        image: 'https://dummyimage.com/156x276/c9c9c9/000000.png',//mobile
                        // image: 'https://dummyimage.com/272x360/c9c9c9/000000.png',
                        imageAlt: 'some alt',
                        tagged: true,
                        tag: 'WHAT’S NEW',
                        title: '10 things you need to know about the Kangoo Z.E. 33',
                        desc: 'An electric-powered van has compelling advantages for entrepreneurs seeking the ideal small business transport. For…'
                    },
                    {
                        image: 'https://dummyimage.com/156X276/c9c9c9/000000.png',//mobile
                        // image: 'https://dummyimage.com/272x360/c9c9c9/000000.png',
                        imageAlt: 'some alt',
                        tagged: true,
                        tag: 'WHAT’S NEW',
                        title: '[VIDEO] Meet DJ BBQ, the first food truck with loud music and fireworks!',
                        desc: 'Meet DJ BBQ, proud owner of a customised Renault Master van which might be the most distinctive ever. Already a media…'
                    },
                    {
                        image: 'https://dummyimage.com/156x136/c9c9c9/000000.png',//mobile
                        // image: 'https://dummyimage.com/188x264/c9c9c9/000000.png',
                        imageAlt: 'some alt',
                        tagged: true,
                        tag: 'WHAT’S NEW',
                        title: '5 cool storage accessories for your van',
                        desc: 'You’ve managed to choose the van that’s right for you, figured how to finance your business van..'
                    },
                    {
                        image: 'https://dummyimage.com/156x136/c9c9c9/000000.png',//mobile
                        // image: 'https://dummyimage.com/272x224/c9c9c9/000000.png',
                        imageAlt: 'some alt',
                        tagged: true,
                        tag: 'WHAT’S NEW',
                        title: '[VIDEO] Discover the Formula One logistics partnership',
                        desc: 'Renault has been flying its flag in the rarefied atmosphere of the world of Formula One racing since 1977. This is…'
                    },
                    {
                        image: 'https://dummyimage.com/156x136/c9c9c9/000000.png',//mobile
                        // image: 'https://dummyimage.com/272x224/c9c9c9/000000.png',
                        imageAlt: 'some alt',
                        tagged: true,
                        tag: 'WHAT’S NEW',
                        title: '10 things you need to know about the Renault Trafic',
                        desc: 'The UK boasts several ski resorts offering seasonal business opportunities to entrepreneurs on wheels. Here are a few..'
                    }
                ]
            }
        },
        components: {
            appArticlePreview: ArticlePreview
        }
    }
</script>

<style lang="scss" scoped>
    @import '~assets/scss/settings';

    .b-whats-new {
        padding-top: 4.8rem;

        @include breakpoint(desktop) {
            padding-top: 5.2rem;
        }

        &__title {
            margin-bottom: 3rem;
            @include fontSizeRem(22, 32);

            @include breakpoint(desktop) {
                display: inline-block;
                margin-bottom: 5.1rem;
            }

            & .bolder{
                font-family: 'Lato-Black';
            }

            & .cursive{
                font-family: 'Airways';
                @include fontSizeRem(25, 32);
                display: block;
            }
        }

        &__top {
            @include breakpoint(desktop) {
                display: flex;
                justify-content: space-between;
                margin-bottom: 3.3rem;
            }
            &-left {
                margin-bottom: 0.8rem;

                @include breakpoint(desktop) {
                    width: 52%;
                    align-items: flex-start;
                }
            }
            
            &-right {
                margin-bottom: 2.1rem;

                @include breakpoint(desktop) {
                    width: 45%;
                    align-items: flex-start;
                    margin-top: -11.2rem;
                }
            }
        }

        &__bottom {
            @include breakpoint(desktop) {
                display: flex;
                justify-content: space-between;
            }

            &-left {
                @include breakpoint(desktop) {
                    width: 52.2%;
                    align-items: unset;
                }

                & .c-article-preview {
                    &:nth-of-type(1) {
                        @include breakpoint(desktop) {
                            margin-top: -13.6rem
                        }
                    }
                }
            }
        }
    }
</style>