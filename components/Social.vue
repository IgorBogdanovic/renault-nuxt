<template>
    <!-- if page is 'article-portrait' remove 'c-social-vertical' class -->
    <div class="c-social">
        <div class="c-social__back"></div>
        <div class="c-social__icons">
            <a href="" class="c-social__icons-mail">
                <svg viewBox="0 0 17.523 13.143">
                    <g id="mail" transform="translate(-186 -1257)">
                        <path id="Path_32" d="M17.524 71.6a2.171 2.171 0 0 1-.281 1.054l-5.533-6.188 5.473-4.788a2.174 2.174 0 0 1 .341 1.164zm-8.762-4.01l7.615-6.663a2.163 2.163 0 0 0-1.044-.276H2.19a2.155 2.155 0 0 0-1.043.276zm2.123-.4l-1.763 1.541a.55.55 0 0 1-.721 0l-1.763-1.544-5.6 6.27a2.164 2.164 0 0 0 1.155.337h13.14a2.164 2.164 0 0 0 1.155-.337zM.341 61.678A2.175 2.175 0 0 0 0 62.842V71.6a2.164 2.164 0 0 0 .281 1.054l5.532-6.192z" class="cls-1" data-name="Path 32" transform="translate(186 1196.349)"/>
                    </g>
                </svg>
            </a>
            <a href="" class="c-social__icons-tw">
                <svg viewBox="0 0 18.999 15.433">
                    <g id="twitter" transform="translate(-185 -1173)">
                        <path id="Path_31" d="M19 59.267a7.783 7.783 0 0 1-2.238.614 3.914 3.914 0 0 0 1.713-2.155 7.858 7.858 0 0 1-2.475.946 3.9 3.9 0 0 0-6.641 3.553 11.065 11.065 0 0 1-8.033-4.072 3.9 3.9 0 0 0 1.206 5.2 3.9 3.9 0 0 1-1.765-.489v.049a3.9 3.9 0 0 0 3.126 3.822 3.948 3.948 0 0 1-1.027.137 3.741 3.741 0 0 1-.734-.072 3.9 3.9 0 0 0 3.64 2.707 7.82 7.82 0 0 1-4.84 1.666A8.284 8.284 0 0 1 0 71.12a11.017 11.017 0 0 0 5.974 1.754 11.012 11.012 0 0 0 11.09-11.089l-.013-.5A7.783 7.783 0 0 0 19 59.267z" class="cls-1" data-name="Path 31" transform="translate(184.999 1115.559)"/>
                    </g>
                </svg>
            </a>
            <a href="" class="c-social__icons-fb">
                <svg viewBox="0 0 8.101 17.36">
                    <path id="Facebook" d="M116.447 3.363v2.39H114.7v2.923h1.751v8.685h3.6V8.676h2.414s.226-1.4.336-2.934h-2.736v-2a.849.849 0 0 1 .78-.7h1.96V0h-2.665c-3.782 0-3.693 2.926-3.693 3.363z" class="cls-1" transform="translate(-114.696 -.001)"/>
                </svg>
            </a>
        </div>
    </div>
</template>

<script>
    export default {

    }
</script>

<style lang="scss" scoped>
    @import '~assets/scss/settings';

    .c-social {
        width: 28.2rem;
        height: 8rem;
        padding-top: 2.7rem;

        &__back {
            width: 100%;
            height: 100%;
            background: $white-two;
        }

        &__icons {
            display: flex;
            justify-content: space-between;
            position: relative;
            top: -8rem;
            width: 21.9rem;
            margin: 0 auto;

            & a {
                border: 0.1rem solid $sun-yellow;
                display: block;
                width: 5.3rem;
                height: 5.3rem;
                line-height: 6rem;
                background: $white;
                text-align: center;

                & svg {
                    .cls-1 {
                        fill: $sun-yellow;
                    }
                }
            }

            &-mail {
                & svg {
                    width: 1.75rem;
                    height: 1.31rem;
                }
            }

            &-tw {
                & svg {
                    width: 1.9rem;
                    height: 1.54rem;
                }
            }

            &-fb {
                & svg {
                    width: 0.81rem;
                    height: 1.74rem;
                }
            }
        }

        &--vertical {
            @include breakpoint(desktop) {
                height: 28.2rem;
                width: 8rem;
                padding-top: 0;
                padding-left: 2.7rem;
            }

            & .c-social__icons {
                @include breakpoint(desktop) {
                    width: 5.3rem;
                    height: 21.9rem;
                    flex-direction: column-reverse;
                    top: -25.1rem;
                    right: 2.7rem;
                }
                

                & a {
                    @include breakpoint(desktop) {
                        margin-bottom: 2.65rem;
                    }
                    
                    &:first-of-type {
                        @include breakpoint(desktop) {
                            margin-bottom: 0;
                        }
                    }
                }
            }
        }
    }
</style>
