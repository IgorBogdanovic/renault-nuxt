<template>
    <section class="b-editor">
        <div class="main-wrapper">
            <div class="inner-wrapper">
                <div class="b-editor__inner">
                    <h2 class='b-editor__title'><span class='bolder'>EDITOR</span> <span class='cursive'>&#39;s </span> <span class='regular'>PICKS</span></h2>
                    <div class="b-editor__left">
                        <app-article-preview :prev="previews[0]"></app-article-preview>
                        <app-article-preview :prev="previews[1]" class="component--landscape component--landscape--reverse"></app-article-preview>
                    </div>
                    <div class="b-editor__right">
                        <app-article-preview v-for="(preview, index) in previews.slice(2,4)" :key="index" :prev="preview"></app-article-preview>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                previews: [
                    {
                        // image: 'https://dummyimage.com/336x284/c9c9c9/000000.png',//mobile
                        image: 'https://dummyimage.com/492x400/c9c9c9/000000.png',
                        imageAlt: 'some alt',
                        tagged: true,
                        tag: 'MY BUSINESS',
                        title: '5 Novel Ideas for A Food Truck',
                        desc: 'UK foodies have officially embraced street-food culture, but that doesn’t make it easier to know where to start…'
                    },
                    {
                        // image: 'https://dummyimage.com/200x164/c9c9c9/000000.png',//mobile
                        image: 'https://dummyimage.com/272x224/c9c9c9/000000.png',
                        imageAlt: 'some alt',
                        tagged: true,
                        tag: 'MY BUSINESS',
                        title: '5 Things to Know to Drive Around London',
                        desc: 'London traffic congestion is well-known, as is the growing array of measures aiming to reduce it. Here are 5…'
                    },
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
                    }
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '~assets/scss/settings';

    .b-editor {
        &__inner {
            padding-top: 2.4rem;

            @include breakpoint(desktop) {
                display: flex;
                justify-content: space-between;
                position: relative;
                padding-top: 14rem;
            }
        }

        &__title {
            margin-bottom: 2.7rem;
            @include fontSizeRem(22, 32);

            @include breakpoint(desktop) {
                position: absolute;
                top: 4.2rem;
                left: 0;
            }

            & .bolder{
                font-family: 'Lato-Black';
            }

            & .cursive{
                font-family: 'Airways';
                @include fontSizeRem(25, 32);
                margin-left: 0.6rem;
            }

            & .regular{
                display: block;
                margin-top: 0.2rem;
            }
        }

        &__left {
            @include breakpoint(desktop) {
                width: 44.55%;
            }

            & .c-article-preview {
                margin-bottom: 3.4rem;

                @include breakpoint(desktop) {
                    margin-bottom: 8.5rem;
                }

                &:nth-of-type(2) {
                    @include breakpoint(desktop) {
                        margin-bottom: 0;
                    }
                }
            }
        }

        &__right {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;

            @include breakpoint(desktop) {
                width: 52.55%;
                padding-top: 13.5rem;
            }

            & .c-article-preview {
                width: 46.7%;

                @include breakpoint(desktop) {
                    width: 34.6%;
                }

                &:nth-of-type(2) {
                    width: 47.5%;

                    @include breakpoint(desktop) {
                        width: 59.7%;
                    }
                }
            }
        }
    }
</style>