<template>
    <div class="main-wrapper inner-wrapper">
        <div class="c-pagination">
            <ul class="c-pagination__list">
                <!-- show if active page is more than 1. -->
                <li :class="{ 'is-hidden' : isHidden }">
                    <a href="" class="c-pagination__first">
                        <svg viewBox="0 0 491.858 491.858">
                            <g>
                                <path d="M222.97,114.836c7.426,0,13.445,6.02,13.445,13.445v235.295c0,7.425-6.019,13.445-13.445,13.445L4.482,256.011
                                    c0,0-10.084-10.084,0-20.166C14.565,225.76,222.97,114.836,222.97,114.836z"/>
                                <path d="M478.411,114.835c7.426,0,13.447,6.02,13.447,13.447v235.294c0,7.426-6.02,13.447-13.447,13.447l-218.487-121.01
                                    c0,0-10.084-10.084,0-20.167C270.008,225.76,478.411,114.835,478.411,114.835z"/>
                            </g>
                        </svg>
                    </a>
                </li>
                <!-- show if active page is more than 1. -->
                <li :class="{ 'is-hidden' : isHidden }">
                    <a href="" class="c-pagination__previous">
                        <svg width="44.307px" height="44.306px" viewBox="0 0 443.307 443.306">
                            <g>
                                <path d="M415.934,212.799L36.788,2.097C32.411-0.377,28.65-0.661,25.51,1.242c-3.14,1.902-4.708,5.328-4.708,10.276V431.78
                                    c0,4.952,1.569,8.381,4.708,10.284c3.14,1.902,6.901,1.622,11.278-0.855l379.146-210.703c4.381-2.478,6.571-5.434,6.571-8.856
                                    C422.505,218.224,420.314,215.274,415.934,212.799z"/>
                            </g>
                        </svg>
                    </a>
                </li>
                <!-- list of all pages, for mobile max 3, for desktop max 9 -->
                <!-- for mobile, if first and previous buttons are visible, show only one number -->
                <!-- page currently active has 'is-active-page' class -->
                <li v-for="(number, index) in numbers" :key="index">
                    <a href="" class="c-pagination__link" :class="{ 'is-active-page': isActivePage}">{{ number }}</a>
                </li>
                <!-- hide if active page is the last one -->
                <li>
                    <a href="" class="c-pagination__next">
                        <svg width="44.307px" height="44.306px" viewBox="0 0 443.307 443.306">
                            <g>
                                <path d="M415.934,212.799L36.788,2.097C32.411-0.377,28.65-0.661,25.51,1.242c-3.14,1.902-4.708,5.328-4.708,10.276V431.78
                                    c0,4.952,1.569,8.381,4.708,10.284c3.14,1.902,6.901,1.622,11.278-0.855l379.146-210.703c4.381-2.478,6.571-5.434,6.571-8.856
                                    C422.505,218.224,420.314,215.274,415.934,212.799z"/>
                            </g>
                        </svg>
                    </a>
                </li>
                <!-- hide if active page is the last one -->
                <li>
                    <a href="" class="c-pagination__last">
                        <svg viewBox="0 0 491.858 491.858">
                            <g>
                                <path d="M222.97,114.836c7.426,0,13.445,6.02,13.445,13.445v235.295c0,7.425-6.019,13.445-13.445,13.445L4.482,256.011
                                    c0,0-10.084-10.084,0-20.166C14.565,225.76,222.97,114.836,222.97,114.836z"/>
                                <path d="M478.411,114.835c7.426,0,13.447,6.02,13.447,13.447v235.294c0,7.426-6.02,13.447-13.447,13.447l-218.487-121.01
                                    c0,0-10.084-10.084,0-20.167C270.008,225.76,478.411,114.835,478.411,114.835z"/>
                            </g>
                        </svg>
                    </a>
                </li>
            </ul>
            <ul>
                <li v-for="(highNumber, index) in highNumbers" :key="index">
                    <a href="">{{ highNumber }}</a>
                </li> 
            </ul>
        </div>
        
    </div>
</template>

<script>
    export default {
        data() {
            return {
                isHidden: true,
                isActivePage: false,
                numbers: [1, 2, 3],
                highNumbers: [20, 30, 40, 50]
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '~assets/scss/settings';

    .c-pagination {
        margin-left: 0.9rem;

        @include breakpoint(desktop) {
            width: 53.2%;
            margin: 20rem auto;
        }

        & ul {
            position: relative;

            & li {
                display: inline-block;

                & a {
                    display: block;
                    color: $black;
                    @include fontSizeRem(19, 17); //check with design
                    width: 4.48rem;
                    height: 4.48rem;
                    line-height: 4.48rem;
                    text-align: center;
                    border-radius: 50%;

                    @include breakpoint(desktop) {
                        width: 4.34rem;
                        height: 4.34rem;
                        line-height: 4.34rem;
                    }

                    &.is-active-page {
                        background: $white-two;
                    }
                }

                &.is-hidden {
                    display: none;

                    @include breakpoint(desktop) {
                        display: inline-block;
                        visibility: hidden;
                    }
                }
            }

            & + ul {
                display: flex;
                justify-content: space-around;
                padding: 3.2rem 1.3rem 0 1.7rem;

                @include breakpoint(desktop) {
                    padding: 0rem 17.5rem;
                }
            }
        } 

        &__link {
            margin-right: 1.8rem;

            @include breakpoint(desktop) {
                margin-right: -0.8rem;
            }
        }

        &__first,
        &__previous,
        &__next,
        &__last {
            background: $white-two;
            position: absolute;
            top: 0;

            @include breakpoint(desktop) {
                position: static;
            }
        }

        &__first {
            left: 0;

            & svg {
                width: 1.4rem;
            }
        }

        &__previous {
            left: 6.3rem;

            @include breakpoint(desktop) {
                margin-right: 2.6rem;
                margin-left: 1.8rem;
            }

            & svg {
                width: 0.7rem;
                height: 1rem;
                transform: rotate(180deg);

                @include breakpoint(desktop) {
                    margin-bottom: 0.1rem;
                }
            }
        }

        &__next {
            right: 8.2rem;

            @include breakpoint(desktop) {
                margin-left: 3rem;
                margin-right: 1.8rem;
            }

            & svg {
                width: 0.7rem;
                height: 1rem;

                @include breakpoint(desktop) {
                    margin-bottom: 0.1rem;
                }
            }
        }

        &__last {
            right: 0.4rem;

            & svg {
                width: 1.4rem;
                transform: rotate(180deg);
            }
        }
    }
</style>