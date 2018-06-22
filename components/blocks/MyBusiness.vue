<template>
    <section class="b-my-business">
        <div class="main-wrapper">
            <div class="inner-wrapper">
                <div class="b-my-business__inner">
                    <h2 class='b-my-business__title'><span class='bolder'>MY</span><span class='regular'> BUSINESS</span></h2>
                    <div class="b-my-business__top">
                        <app-article-preview
                            :prev="previews[0]"
                            :thumbor="{ imgDesk : {width: 272, height: 360}, imgMob: {width: 160, height: 276}}"
                            :tag="tag"
                        ></app-article-preview>
                        <app-article-preview
                            :prev="previews[1]"
                            :thumbor="{ imgDesk : {width: 272, height: 224}, imgMob: {width: 156, height: 136}}"
                            :tag="tag"
                        ></app-article-preview>
                        <app-article-preview
                            :prev="previews[2]"
                            :thumbor="{ imgDesk : {width: 492, height: 400}, imgMob: {width: 336, height: 284}}"
                            :tag="tag"
                        ></app-article-preview>
                    </div>
                    <div class="b-my-business__bottom">
                        <app-article-preview 
                            :prev="previews[3]"
                            :thumbor="{ imgDesk : {width: 272, height: 224}, imgMob: {width: 160, height: 136}}"
                            :tag="tag"
                        ></app-article-preview>
                        <app-article-preview 
                            :prev="previews[4]"
                            :thumbor="{ imgDesk : {width: 272, height: 360}, imgMob: {width: 156, height: 276}}"
                            :tag="tag"
                        ></app-article-preview>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        props: ['previews'],
        data() {
            return {
                tag: {
                    visible: true,
                    text: 'My business'
                }
            }
        },
        mounted() {
            console.log(this.previews)
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