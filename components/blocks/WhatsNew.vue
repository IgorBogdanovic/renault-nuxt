<template>
    <section class="b-whats-new">
        <div class="main-wrapper">
            <div class="inner-wrapper">
                <div class="b-whats-new__inner">
                    <h2 class='b-whats-new__title'><span class='cursive'>WHATS</span> <span class='bolder'>NEW</span></h2>
                    <div class="b-whats-new__top">
                        <div class="b-whats-new__top-left row">
                            <app-article-preview
                                :prev="previews[0]"
                                :thumbor="{ imgDesk : {width: 272, height: 224}, imgMob: {width: 156, height: 136}}"
                                :tag="tag"
                                :trim = "{ description: 100, title:45 }"
                                class="c-article-preview-square"
                            ></app-article-preview>
                            <app-article-preview
                                :prev="previews[1]"
                                :thumbor="{ imgDesk : {width: 272, height: 360}, imgMob: {width: 156, height: 276}}"
                                :tag="tag"
                                :trim = "{ description: 100, title:45 }"
                                class="c-article-preview-square"
                            ></app-article-preview>
                        </div>
                        <div class="b-whats-new__top-right row">
                            <app-article-preview
                                :prev="previews[2]"
                                :thumbor="{ imgDesk : {width: 272, height: 360}, imgMob: {width: 156, height: 276}}"
                                :tag="tag"
                                :trim = "{ description: 100, title:45 }"
                                class="c-article-preview-square"
                            ></app-article-preview>
                            <app-article-preview
                                :prev="previews[3]"
                                :thumbor="{ imgDesk : {width: 188, height: 264}, imgMob: {width: 156, height: 136}}"
                                :tag="tag"
                                :trim = "{ description: 100, title:45 }"
                                class="c-article-preview-square-sm"
                            ></app-article-preview>
                        </div>
                    </div>
                    <div class="b-whats-new__bottom">
                        <div class="b-whats-new__bottom-left row">
                            <app-article-preview
                                :prev="previews[4]"
                                :thumbor="{ imgDesk : {width: 272, height: 224}, imgMob: {width: 156, height: 136}}"
                                :tag="tag"
                                :trim = "{ description: 100, title:45 }"
                                class="c-article-preview-square"
                            ></app-article-preview>
                            <app-article-preview
                                :prev="previews[5]"
                                :thumbor="{ imgDesk : {width: 272, height: 224}, imgMob: {width: 156, height: 136}}"
                                :tag="tag"
                                :trim = "{ description: 100, title:45 }"
                                class="c-article-preview-square"
                            ></app-article-preview>
                        </div>
                        <div class="b-whats-new__bottom-right">
                            <app-yellow-slider :slider="yellowSlider"></app-yellow-slider>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import YellowSlider from '~/components/sliders/YellowSlider.vue'

    export default {
        props: ['previews', 'yellowSlider'],
        data() {
            return {
                tag: {
                    visible: true,
                    text: "What's new"
                }
            }
        },
        components: {
            appYellowSlider: YellowSlider
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
                margin-bottom: 2.2rem;

                @include breakpoint(desktop) {
                    width: 52%;
                    align-items: flex-start;
                    margin-bottom: 0.8rem;
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
