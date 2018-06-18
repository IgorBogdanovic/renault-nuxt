<template>
    <!-- check this class -->
    <div class="b-article-content b-article-content--portrait">
        <div class="main-wrapper">
            <div class="inner-wrapper">
                <div class="b-article-content__wrapper">
                    <div class="c-btn c-btn--yellow">{{ article.category[0].name }}</div>
                    <h1 class="b-article-content__title">{{ article.title }}</h1>
                    <div class="b-article-content__text">
                        <!-- check this class -->
                        <app-social></app-social>
                        <div class="b-article-content__text-wrap">
                            <p class="b-article-content__date">Friday 01 June 2018</p>
                            <p class="b-article-content__intro">{{ article.additional_fields.intro }}</p>
                            <div class="b-article-content__text-block">
                                <div v-for="(element, index) in article.elements" :key="index">
                                    <h2 v-if="element.data.heading_type === 'h2'">{{ element.data.text }}</h2>
                                    <h3 v-if="element.data.heading_type === 'h3'">{{ element.data.text }}</h3>
                                    <div v-if="element.type === 'text'" v-html="element.data.text" class="b-article-content__text-block-text"></div>
                                    <ul v-if="element.type === 'list'" class="b-article-content__text-block-list">
                                        <li v-for="(item, index) in element.data.listItems" :key="index">{{ item.content }}</li>
                                    </ul>
                                    <figure v-if="element.type === 'image'" class="b-article-content__text-block-img">
                                        <img :src="element.data.file.url" :alt="element.data.seoalt">
                                    </figure>
                                </div>
                                <!-- add arrows for slider-bottom -->
                                <div class="b-article-content__text-block-slider">
                                    <div class="swiper-container b-article-content__text-block-slider-top">
                                        <div class="swiper-wrapper">
                                            <div class="swiper-slide">
                                                <img src="https://dummyimage.com/752x432/4286f4/000000.png" alt="">
                                            </div>
                                            <div class="swiper-slide">
                                                <img src="https://dummyimage.com/752x432/f1f442/000000.png" alt="">
                                            </div>
                                            <div class="swiper-slide">
                                                <img src="https://dummyimage.com/752x432/be41f4/000000.png" alt="">
                                            </div>
                                            <div class="swiper-slide">
                                                <img src="https://dummyimage.com/752x432/8ff441/000000.png" alt="">
                                            </div>
                                            <div class="swiper-slide">
                                                <img src="https://dummyimage.com/752x432/222222/000000.png" alt="">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="swiper-container b-article-content__text-block-slider-bottom">
                                        <div class="swiper-wrapper">
                                            <div class="swiper-slide">
                                                <img src="https://dummyimage.com/86x76/4286f4/000000.png" alt="">
                                            </div>
                                            <div class="swiper-slide">
                                                <img src="https://dummyimage.com/86x76/f1f442/000000.png" alt="">
                                            </div>
                                            <div class="swiper-slide">
                                                <img src="https://dummyimage.com/86x76/be41f4/000000.png" alt="">
                                            </div>
                                            <div class="swiper-slide">
                                                <img src="https://dummyimage.com/86x76/8ff441/000000.png" alt="">
                                            </div>
                                            <div class="swiper-slide">
                                                <img src="https://dummyimage.com/86x76/222222/000000.png" alt="">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="b-article-content__text-block-slider-arrow">
                                        <div class="b-article-content__text-block-slider-arrow-left">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 51 51">
                                                <g id="arrow-left" transform="translate(-53 -380)">
                                                    <circle id="circle" cx="25.5" cy="25.5" r="25.5" class="cls-1" transform="translate(53 380)"/>
                                                    <g id="left-arrow" transform="translate(72 368.698)">
                                                        <g id="Group_9" data-name="Group 9" transform="translate(0 32.038)">
                                                            <path id="Path_15" d="M11.487 34.97H5.379v-2.688a.245.245 0 0 0-.417-.173L.071 37a.245.245 0 0 0 0 .346l4.89 4.888a.244.244 0 0 0 .173.071.241.241 0 0 0 .093-.019.245.245 0 0 0 .151-.226v-2.69h6.108a.244.244 0 0 0 .244-.244v-3.912a.244.244 0 0 0-.243-.244z" data-name="Path 15" transform="translate(0 -32.038)"/>
                                                        </g>
                                                    </g>
                                                </g>
                                            </svg>
                                        </div>
                                        <div class="b-article-content__text-block-slider-arrow-right">
                                            <svg viewBox="0 0 36 36">
                                                <g id="right-arrow" transform="translate(-256 -120)">
                                                    <circle id="circle" cx="18" cy="18" r="18" class="cls-1" transform="rotate(180 146 78)"/>
                                                    <g id="left-arrow" transform="rotate(180 138.921 70.588)">
                                                        <g id="Group_9" data-name="Group 9">
                                                            <path id="Path_15" d="M7.657 1.955H3.586V.163a.163.163 0 0 0-.278-.115L.048 3.305a.164.164 0 0 0 0 .231l3.26 3.259a.163.163 0 0 0 .115.048.161.161 0 0 0 .062-.012.163.163 0 0 0 .1-.15V4.886h4.072a.163.163 0 0 0 .163-.163V2.117a.163.163 0 0 0-.163-.162z" data-name="Path 15"/>
                                                        </g>
                                                    </g>
                                                </g>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="b-article-content__tags">
                                <ul>
                                    <li>Tags: </li>
                                    <li v-for="(category, index) in article.category" :key="index">
                                        <!-- set correct path -->
                                        <nuxt-link tag='a' to="/">{{ category.name }}</nuxt-link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Social from '~/components/Social.vue'
    import Swiper from 'swiper'

    export default {
        props: ['article'],
        data() {
            return {

            }
        },
        created() {
            // check this
            // console.log(this.article.created_at)
            // let date = new Date(this.article.created_at)
            // console.log(date.toDateString())
        },
        methods: {
            getDate() {
                let date = new Date(this.article.created_at)
            }
        },
        components: {
            appSocial: Social
        }
    }
</script>

<style lang="scss" scoped>
    @import '~assets/scss/settings';

    .b-article-content {
        &__wrapper {
            @include breakpoint(desktop) {
                width: 81.8rem;
            }

            & .c-btn {
                margin-bottom: 1.1rem;

                @include breakpoint(desktop) {
                    padding: 1.45rem 4.4rem;
                    margin-bottom: 2.4rem;
                }
            }
        }

        &__title {
            @include fontSizeRem(20, 54);
            @include lineHeightRem(21, 55);
            font-family: "Lato-Black";
            margin-bottom: 2.3rem;

            @include breakpoint(desktop) {
                margin-bottom: 9rem;
            }
        }
       
        &__text {
            @include breakpoint(desktop) {
                position: relative;
            }

            & .c-social {
                margin-bottom: 3.8rem;

                @include breakpoint(desktop) {
                    margin-bottom: 0;
                }

                &--vertical {   //check this
                    @include breakpoint(desktop) {
                        position: absolute;
                    }
                }
            }

            &-wrap {
                @include breakpoint(desktop) {
                    margin-left: 11.6rem;
                }
            }

            &-block {
                & h2,
                  h3 {
                    @include fontSizeRem(17, 18);
                    @include lineHeightRem(22, 24);
                    font-family: "Lato-Bold";
                    margin-bottom: 1.7rem;

                    @include breakpoint(desktop) {
                        margin-bottom: 2.7rem;
                    }
                }

                &-text {
                    @include fontSizeRem(14, 16);
                    @include lineHeightRem(21, 22);
                    margin-bottom: 1.8rem;
                    color: $dark-grey; //check

                    @include breakpoint(desktop) {
                        margin-bottom: 2.6rem;
                    }
                }

                &-img {
                    width: 100%;
                    margin-bottom: 2.3rem;

                    @include breakpoint(desktop) {
                        margin-bottom: 3.3rem;
                    }

                    & img {
                        width: 100%;
                    }
                }

                &-list {
                    margin-bottom: 2rem;

                    @include breakpoint(desktop) {
                        margin-bottom: 3rem;
                    }

                    & li {
                        @include fontSizeRem(14, 16);
                        @include lineHeightRem(22, 22);
                        color: $dark-grey;
                        margin-bottom: 1rem;

                        @include breakpoint(desktop) {
                            margin-bottom: 1.1rem;
                        }

                        &::before {
                            content: '';
                            display: inline-block;
                            width: 0.8rem;
                            height: 0.8rem;
                            border-radius: 50%;
                            background: $sun-yellow;
                            margin-right: 1.7rem;
                        }
                    }
                }

                &-slider {
                    position: relative;
                    width: 111%;
                    left: -5.5%;
                    margin-bottom: 3.2rem;

                    @include breakpoint(desktop) {
                        width: 100%;
                        left: auto;
                        position: static;
                        margin-bottom: 6.7rem;
                    }

                    &-top {
                        @include breakpoint(desktop) {
                            margin-bottom: 2.9rem;
                        }
                    }

                    & .swiper-container {
                        width: 100%;

                        & img {
                            width: 100%;
                        }
                    }

                    &-bottom {
                        display: none;

                        @include breakpoint(desktop) {
                            display: block;
                        }

                        &.swiper-container {
                            width: 66%;
                            height: 7.6rem;
                        }

                        & .swiper-slide {
                            width: 7.6rem;
                        }

                        & .swiper-slide-active {
                            box-sizing: border-box;
                            border: 0.3rem solid $sun-yellow;
                        }
                        
                    }
                    
                    

                    &-arrow {
                        position: absolute;
                        display: flex;
                        justify-content: space-between;
                        width: 100%;
                        left: 0;
                        top: 7.6rem;
                        z-index: 1;

                        @include breakpoint(desktop) {
                            display: none;
                        }

                        &-left {
                            width: 3.6rem;
                            height: 3.6rem;
                            margin-left: 2rem;
                            cursor: pointer;
                            outline: 0;
                        }

                        &-right {
                            width: 3.6rem;
                            height: 3.6rem;
                            margin-right: 2rem;
                            cursor: pointer;
                            outline: 0;
                        }

                        & svg {
                            width: 100%;
                            height: 100%;

                            & .cls-1 {
                                fill:$sun-yellow;
                            }
                        }
                    }
                }
            }
        }

        &__date {
            @include fontSizeRem(12, 12);
            color: #6e6e6e;
            margin-bottom: 1rem;

            @include breakpoint(desktop) {
                margin-bottom: 1.3rem;
            }
        }

        &__intro {
            @include fontSizeRem(14, 18);
            @include lineHeightRem(21, 26);
            font-family: "Lato-Black";
            margin-bottom: 2rem;

            @include breakpoint(desktop) {
                margin-bottom: 3.2rem;
            }
        }

        &__tags {
            padding-top: 0.7rem;

            @include breakpoint(desktop) {
                padding-top: 0;
            }

            & ul {
                & li {
                    @include fontSizeRem(12, 12);
                    color: $sun-yellow;
                    display: inline-block;
                    margin-right: 0.3rem;
                }
            }
        }

        &--portrait {
            & .b-article-content {
                &__wrapper {
                    @include breakpoint(desktop) {
                        margin-left: 28.2rem;
                        padding-left: 6.8rem;
                    }
                }

                &__text {
                    & .c-social {
                        @include breakpoint(desktop) {
                            margin-bottom: 3.9rem;
                        }
                    }
                    &-wrap {
                        @include breakpoint(desktop) {
                            margin-left: 0;
                        }
                    } 
                }

                &__title {
                    @include breakpoint(desktop) {
                        margin-bottom: 4.8rem;
                    }
                }
            }
        }
    }
</style>