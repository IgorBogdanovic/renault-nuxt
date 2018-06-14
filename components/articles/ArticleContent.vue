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