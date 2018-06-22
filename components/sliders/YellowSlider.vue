<template>
    <div class="c-yellow-slider">
        <slick ref="slick" :options="slickOptions" @afterChange="handleAfterChange">
            <div v-for="(slide, index) in slider" :key="index">
                <div class="c-yellow-slider__wrapper">
                    <div v-if="slide.featured_image.length > 0" class="c-yellow-slider__image">
                        <img :src="$thumbor(428, 424) + slide.featured_image[0].data.file.url" :alt="slide.featured_image[0].data.seoalt">
                    </div>
                    <div v-else class="c-yellow-slider__image">
                        <div v-for="(img, index) in slide.images" :key="index">
                            <img v-if="index === 0" :src="$thumbor(428, 424) + img.data.file.url" :alt="img.data.seoalt">
                        </div>
                    </div>
                    <div class="c-yellow-slider__body">
                        <h2><span class="bolder">MY</span><span class="cursive"> van</span></h2>
                        <h4>{{ introCut(slide.title, titleCharLimit) }}</h4>
                        <p>{{ introCut(slide.additional_fields.intro, introCharLimit) }}</p>
                        <button class="c-btn">See all</button>
                    </div>
                </div>
            </div>
        </slick>
        <div class="c-yellow-slider__counter">
            <span @click="prev()">
                <svg viewBox="0 0 11.732 10.264">
                    <path d="M11.487 2.932H5.379V.244a.245.245 0 0 0-.417-.173L.071 4.962a.245.245 0 0 0 0 .346l4.89 4.888a.244.244 0 0 0 .173.071.241.241 0 0 0 .093-.019.245.245 0 0 0 .151-.226v-2.69h6.108a.244.244 0 0 0 .244-.244V3.176a.244.244 0 0 0-.243-.244z" data-name="Path 15"/>
                </svg>
            </span>
            <div class="c-yellow-slider__counter-num">
                <span class="current"><span v-if="activeSlide < 10">0</span>{{ activeSlide }}</span>
                <span>&#47;</span>
                <span class="total"><span v-if="slider.length < 10">0</span>{{ slider.length }}</span>
            </div>
            <span @click="next()">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11.079 9.693">
                    <path d="M.231 6.924h5.768v2.538a.231.231 0 0 0 .394.163l4.619-4.614a.232.232 0 0 0 0-.327L6.394.068a.231.231 0 0 0-.163-.067.228.228 0 0 0-.088.018.231.231 0 0 0-.144.212v2.54H.231A.231.231 0 0 0 0 3.002v3.692a.231.231 0 0 0 .231.23z" data-name="Path 15"/>
                </svg>
            </span>
        </div>
    </div>
</template>

<script>
    import { introCut } from '~/plugins/globalFunctions.js'

    export default {
        props: ['slider'],
        data() {
            return {
                slickOptions: {
                    slidesToShow: 1,
                    arrows: false,
                    autoplay: true,
                    autoplaySpeed: 3000
                },
                activeSlide: 1,
                titleCharLimit: 40,
                introCharLimit: 127
            }
        },
        methods: {
            next() {
                this.$refs.slick.next();
            },
            prev() {
                this.$refs.slick.prev();
            },
            reInit() {
                this.$nextTick(() => {
                    this.$refs.slick.reSlick();
                });
            },
            handleAfterChange(event, slick, currentSlide) {
                this.activeSlide = currentSlide + 1;
            },
            introCut
        }
    }
</script>

<style lang="scss" scoped>
    @import '~assets/scss/settings';

    .c-yellow-slider {
        width: 49.2rem;
        height: 48.8rem;
        border: 3.2rem solid $sun-yellow;
        position: relative;
        display: none;

        @include breakpoint(desktop) {
            display: block;
        }

        &__wrapper {
            position: relative;
        }

        &__image {
            & img {
                width: 100%;
            }
        }

        &__body {
            position: absolute;
            top: 2.8rem;
            left: 3rem;
            color: $white;
            width: 51%;

            & h2 {
                margin-bottom: 3.9rem;
                @include fontSizeRem(0, 32);

                & .bolder {
                    font-family: 'Lato-Black';
                }

                & .cursive {
                    font-family: 'Airways';
                }
            }

            & h4 {
                font-family: 'Lato-Black';
                @include fontSizeRem(0, 28);
                @include lineHeightRem(0, 30);
                margin-bottom: 1.4rem;
            }

            & p {
                @include fontSizeRem(0, 14);
                @include lineHeightRem(0, 21);
                margin-bottom: 4.4rem;
            }

            & .c-btn {
                margin: 0;
                padding: 1.2rem 4.6rem;
            }
        }

        &__counter {
            @include fontSizeRem(0, 15);
            font-family: "Lato-Bold";
            color: $white;
            position: absolute;
            top: 3rem;
            right: 3.2rem;
            width: 9.5rem;
            display: flex;
            justify-content: space-between;

            & svg {
                width: 1.17rem;
                height: 1.03rem;
                cursor: pointer;
            }

            &-num {
                & .current {
                    color: $sun-yellow;
                }
            }
        }
    }
</style>