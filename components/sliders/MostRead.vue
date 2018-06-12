<template>
    <div class="b-most-read">
        <div class="b-most-read__back"></div>
        <div class="main-wrapper">
            <div class="inner-wrapper">
                <h2 class='b-most-read__title'><span class='cursive'>PLUS</span> <span class='bolder'>LUS</span></h2>
                <div class="b-most-read__mobile">
                    <app-article-preview v-for="(preview, index) in previews.slice(0,4)" :key="index" :prev="preview" class="c-article-preview c-article-preview-mr c-article-preview--most-read"></app-article-preview>
                </div>
                <div class="b-most-read__desk">
                    <div class="swiper-container swiper-container-most-read">
                        <div class="swiper-wrapper">
                            <app-article-preview v-for="(preview, index) in previews" :key="index" :prev="preview" class="swiper-slide c-article-preview c-article-preview-mr c-article-preview--most-read"></app-article-preview>
                        </div>
                    </div>
                    <div class="b-most-read__arrow">
                        <div class="b-most-read__arrow-left">
                            <svg viewBox="0 0 51 51">
                                <g id="arrow" transform="translate(-168 -6093)">
                                    <g id="arrow-2" data-name="arrow" transform="rotate(180 253 6443)">
                                        <g id="circle" class="cls-1" transform="rotate(180 169 3396.5)">
                                            <circle cx="25.5" cy="25.5" r="25.5" class="cls-3"/>
                                            <circle cx="25.5" cy="25.5" r="25" class="cls-4"/>
                                        </g>
                                        <g id="left-arrow" transform="rotate(180 158.971 3402.019)">
                                            <g id="Group_9" data-name="Group 9" transform="translate(0 32.038)">
                                                <path id="Path_15" d="M10.848 34.807H5.08v-2.538a.231.231 0 0 0-.394-.163L.067 36.72a.232.232 0 0 0 0 .327l4.618 4.616a.231.231 0 0 0 .163.067.228.228 0 0 0 .088-.018.231.231 0 0 0 .144-.212v-2.54h5.768a.231.231 0 0 0 .231-.231v-3.692a.231.231 0 0 0-.231-.23z" class="cls-2" data-name="Path 15" transform="translate(0 -32.038)"/>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                        </div>
                        <div class="b-most-read__arrow-right">
                            <svg viewBox="0 0 51 51">
                                <g id="arrow" transform="translate(-1217 -6093)">
                                    <g id="circle" class="cls-1" transform="rotate(180 634 3072)">
                                        <circle cx="25.5" cy="25.5" r="25.5" class="cls-3"/>
                                        <circle cx="25.5" cy="25.5" r="25" class="cls-4"/>
                                    </g>
                                    <g id="right-arrow" transform="rotate(180 623.971 3077.519)">
                                        <g id="Group_9" data-name="Group 9" transform="translate(0 32.038)">
                                            <path id="Path_15" d="M10.848 34.807H5.08v-2.538a.231.231 0 0 0-.394-.163L.067 36.72a.232.232 0 0 0 0 .327l4.618 4.616a.231.231 0 0 0 .163.067.228.228 0 0 0 .088-.018.231.231 0 0 0 .144-.212v-2.54h5.768a.231.231 0 0 0 .231-.231v-3.692a.231.231 0 0 0-.231-.23z" class="cls-2" data-name="Path 15" transform="translate(0 -32.038)"/>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import ArticlePreview from '~/components/articles/ArticlePreview.vue'
    import Swiper from 'swiper'

    export default {
        data() {
            return {
                previews: [
                    {
                        // image: 'https://dummyimage.com/160x137/c9c9c9/000000.png',//mobile
                        image: 'https://dummyimage.com/200x160/c9c9c9/000000.png',
                        imageAlt: 'some alt',
                        tagged: false,
                        tag: '',
                        title: 'Whether you are interested in this activity as an entrepreneur or...',
                        desc: false
                    },
                    {
                        // image: 'https://dummyimage.com/160x137/c9c9c9/000000.png',//mobile
                        image: 'https://dummyimage.com/200x160/c9c9c9/000000.png',
                        imageAlt: 'some alt',
                        tagged: false,
                        tag: '',
                        title: 'Whether you are interested in this activity as an entrepreneur or...',
                        desc: false
                    },
                    {
                        // image: 'https://dummyimage.com/160x137/c9c9c9/000000.png',//mobile
                        image: 'https://dummyimage.com/200x160/c9c9c9/000000.png',
                        imageAlt: 'some alt',
                        tagged: false,
                        tag: '',
                        title: 'Whether you are interested in this activity as an entrepreneur or...',
                        desc: false
                    },
                    {
                        // image: 'https://dummyimage.com/160x137/c9c9c9/000000.png',//mobile
                        image: 'https://dummyimage.com/200x160/c9c9c9/000000.png',
                        imageAlt: 'some alt',
                        tagged: false,
                        tag: '',
                        title: 'Whether you are interested in this activity as an entrepreneur or...',
                        desc: false
                    },
                    {
                        // image: 'https://dummyimage.com/160x137/c9c9c9/000000.png',//mobile
                        image: 'https://dummyimage.com/200x160/c9c9c9/000000.png',
                        imageAlt: 'some alt',
                        tagged: false,
                        tag: '',
                        title: 'Whether you are interested in this activity as an entrepreneur or...',
                        desc: false
                    }
                ]
            }
        },
        mounted() {
            var mySwiper = new Swiper ('.swiper-container-most-read', {
                loop: true,
                slidesPerView: 4,
                spaceBetween: 33,
                navigation: {
                    nextEl: '.b-most-read__arrow-right',
                    prevEl: '.b-most-read__arrow-left',
                }
            })
        }
    }
</script>

<style lang="scss" scoped>
    @import '~assets/scss/settings';
    @import '~assets/scss/plugins/swiper-min';

    .b-most-read {
        margin-top: 5.2rem;
        padding: 2.4rem 0 1.8rem;
        background: $white-two;

        @include breakpoint(desktop) {
            position: relative;
            background: transparent;
            margin-top: 6.1rem;
            padding: 0;
        }

        &__back {
            display: none;

            @include breakpoint(desktop) {
                display: block;
                background: $white-two;
                height: 26.9rem;
                position: absolute;
                width: 100%;
                top: 14.7rem;
                left: 0;
            }
            
        }

        &__title {
            margin-bottom: 3.4rem;
            @include fontSizeRem(22, 32);

            @include breakpoint(desktop) {
                margin-bottom: 3.6rem;
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

        &__mobile {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;

            @include breakpoint(desktop) {
                display: none;
            }

            & .c-article-preview {
                margin-bottom: 2.6rem;
            }
        }

        &__desk {
            @include breakpoint(mobile) {
                display: none;
            }
            position: relative;
        }

        & .swiper-container {
            width: 81.4%;
        }

        &__arrow {
            position: absolute;
            top: 15.8rem;
            left: 0;
            width: 100%;
            display: flex;
            justify-content: space-between;

            &-left {
                width: 5.1rem;
                height: 5.1rem;
                cursor: pointer;
                outline: none;
            }

            &-right {
                width: 5.1rem;
                height: 5.1rem;
                cursor: pointer;
                outline: none;
            }

            & svg {
                .cls-1,.cls-4{fill:none}
                .cls-1{stroke:#7e7e7e}
                .cls-2{fill:#7e7e7e;stroke:#707070}
                .cls-3{stroke:none}
            }
        }
    }
</style>