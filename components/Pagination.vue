<template>
    <div class="main-wrapper inner-wrapper">
        <div class="c-pagination">
            <ul class="c-pagination__list">
                <!-- show if active page is more than 1. -->
                <li :class="{ 'is-hidden' : isHidden }">
                    <a href="" class="c-pagination__first">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31 31">
                            <g id="two-arrows" transform="translate(-792 -3036)">
                                <g id="Group_67" data-name="Group 67" transform="translate(-38)">
                                    <circle id="circle" cx="15.5" cy="15.5" r="15.5" class="cls-1" transform="rotate(180 430.5 1533.5)"/>
                                    <g id="left-arrow" transform="rotate(180 422.366 1544.651)">
                                        <g id="Group_9" data-name="Group 9" transform="translate(0 32.038)">
                                            <path id="Path_15" d="M11.487 34.97H5.379v-2.688a.245.245 0 0 0-.417-.173L.071 37a.245.245 0 0 0 0 .346l4.89 4.888a.244.244 0 0 0 .173.071.241.241 0 0 0 .093-.019.245.245 0 0 0 .151-.226v-2.69h6.108a.244.244 0 0 0 .244-.244v-3.912a.244.244 0 0 0-.243-.244z" data-name="Path 15" transform="translate(0 -32.038)"/>
                                        </g>
                                    </g>
                                    <g id="left-arrow-2" data-name="left-arrow" transform="rotate(180 429.366 1544.651)">
                                        <g id="Group_9-2" data-name="Group 9" transform="translate(0 32.038)">
                                            <path id="Path_15-2" d="M11.487 34.97H5.379v-2.688a.245.245 0 0 0-.417-.173L.071 37a.245.245 0 0 0 0 .346l4.89 4.888a.244.244 0 0 0 .173.071.241.241 0 0 0 .093-.019.245.245 0 0 0 .151-.226v-2.69h6.108a.244.244 0 0 0 .244-.244v-3.912a.244.244 0 0 0-.243-.244z" data-name="Path 15" transform="translate(0 -32.038)"/>
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </svg>
                    </a>
                </li>
                <!-- show if active page is more than 1. -->
                <li :class="{ 'is-hidden' : isHidden }">
                    <a href="" class="c-pagination__previous">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31 31">
                            <g id="arrow" transform="translate(-753 -3036)">
                                <circle id="circle" cx="15.5" cy="15.5" r="15.5" class="cls-1" transform="rotate(180 392 1533.5)"/>
                                <g id="Group_9" data-name="Group 9" transform="rotate(180 387.5 1528.632)">
                                    <path id="Path_15" d="M11.487 34.97H5.379v-2.688a.245.245 0 0 0-.417-.173L.071 37a.245.245 0 0 0 0 .346l4.89 4.888a.244.244 0 0 0 .173.071.241.241 0 0 0 .093-.019.245.245 0 0 0 .151-.226v-2.69h6.108a.244.244 0 0 0 .244-.244v-3.912a.244.244 0 0 0-.243-.244z" data-name="Path 15" transform="translate(0 -32.038)"/>
                                </g>
                            </g>
                        </svg>
                    </a>
                </li>
                <!-- list of all pages, max 6 -->
                <!-- if all four buttons are visible, show only four numbers -->
                <!-- page currently active has 'is-active-page' class -->
                <li v-for="(number, index) in numbers" :key="index">
                    <a href="" :class="{ 'is-active-page': isActivePage}">{{ number }}</a>
                </li>
                <!-- hide if active page is the last one -->
                <li>
                    <a href="" class="c-pagination__next">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31 31">
                            <g id="arrow" transform="translate(-753 -3036)">
                                <circle id="circle" cx="15.5" cy="15.5" r="15.5" class="cls-1" transform="rotate(180 392 1533.5)"/>
                                <g id="Group_9" data-name="Group 9" transform="rotate(180 387.5 1528.632)">
                                    <path id="Path_15" d="M11.487 34.97H5.379v-2.688a.245.245 0 0 0-.417-.173L.071 37a.245.245 0 0 0 0 .346l4.89 4.888a.244.244 0 0 0 .173.071.241.241 0 0 0 .093-.019.245.245 0 0 0 .151-.226v-2.69h6.108a.244.244 0 0 0 .244-.244v-3.912a.244.244 0 0 0-.243-.244z" data-name="Path 15" transform="translate(0 -32.038)"/>
                                </g>
                            </g>
                        </svg>
                    </a>
                </li>
                <!-- hide if active page is the last one -->
                <li>
                    <a href="" class="c-pagination__last">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31 31">
                            <g id="two-arrows" transform="translate(-792 -3036)">
                                <g id="Group_67" data-name="Group 67" transform="translate(-38)">
                                    <circle id="circle" cx="15.5" cy="15.5" r="15.5" class="cls-1" transform="rotate(180 430.5 1533.5)"/>
                                    <g id="left-arrow" transform="rotate(180 422.366 1544.651)">
                                        <g id="Group_9" data-name="Group 9" transform="translate(0 32.038)">
                                            <path id="Path_15" d="M11.487 34.97H5.379v-2.688a.245.245 0 0 0-.417-.173L.071 37a.245.245 0 0 0 0 .346l4.89 4.888a.244.244 0 0 0 .173.071.241.241 0 0 0 .093-.019.245.245 0 0 0 .151-.226v-2.69h6.108a.244.244 0 0 0 .244-.244v-3.912a.244.244 0 0 0-.243-.244z" data-name="Path 15" transform="translate(0 -32.038)"/>
                                        </g>
                                    </g>
                                    <g id="left-arrow-2" data-name="left-arrow" transform="rotate(180 429.366 1544.651)">
                                        <g id="Group_9-2" data-name="Group 9" transform="translate(0 32.038)">
                                            <path id="Path_15-2" d="M11.487 34.97H5.379v-2.688a.245.245 0 0 0-.417-.173L.071 37a.245.245 0 0 0 0 .346l4.89 4.888a.244.244 0 0 0 .173.071.241.241 0 0 0 .093-.019.245.245 0 0 0 .151-.226v-2.69h6.108a.244.244 0 0 0 .244-.244v-3.912a.244.244 0 0 0-.243-.244z" data-name="Path 15" transform="translate(0 -32.038)"/>
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </svg>
                    </a>
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
                numbers: [1, 2, 3, 4, 5, 6]
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '~assets/scss/settings';

    .c-pagination {

        @include breakpoint(desktop) {
            width: 23.3%;
            margin: 0 auto;
        }

        & ul {

            & li {
                display: inline-block;

                & a {
                    display: block;
                    color: $black;
                    @include fontSizeRem(16, 16);
                    width: 3.1rem;
                    height: 3.1rem;
                    line-height: 3.1rem;
                    text-align: center;
                    border-radius: 50%;

                    &.is-active-page {
                        background: $white-two;
                    }
                }

                &.is-hidden {
                    display: none;
                }
            }
        } 

        &__first,
        &__previous,
        &__next,
        &__last {
            & svg {
                .cls-1 {
                    fill:#f6f6f6
                }
            }
        }

        &__first {
            & svg {
                transform: rotate(180deg);
            }
        }

        &__previous {
            & svg {
                transform: rotate(180deg);
            }
        }
    }
</style>