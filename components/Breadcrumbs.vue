<template>
    <div class="main-wrapper inner-wrapper">
        <!-- <p>{{ $route.name }}</p> -->
        <div class="c-breadcrumbs">
            <ul>
                <li>
                    <a href="">Home</a>
                    <a href="">Business</a>
                    <a href="">Communication</a>
                    <!-- <nuxt-link v-for="(route, index) in $route.matched" :key="index" :to="{ name: route.name }">
                        {{ route.name }}
                    </nuxt-link> -->
                </li>
            </ul>
        </div>
        <nuxt-child/>
    </div>
</template>

<script>
    export default {

    }
</script>

<style lang="scss" scoped>
    @import '~assets/scss/settings';

    .c-breadcrumbs {
        display: none;

        @include breakpoint(desktop) {
            display: block;
        }

        & ul li {
            & a {
                @include fontSizeRem(0, 16);

                &::after {
                    content: ">";
                    display: inline-block;
                    margin: 0 0.25rem;
                }

                &:last-of-type {
                    &::after {
                        display: none;
                    }
                }
            }
        }
    }
</style>
