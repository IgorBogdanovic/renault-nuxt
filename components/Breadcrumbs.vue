<template>
    <div class="main-wrapper">
        <div class="inner-wrapper">
            <!-- <p>{{ $route.name }}</p> -->
            <div class="c-breadcrumbs">
                <ul>
                    <li>
                        <!-- <a href="">Home</a>
                        <a href="">Business</a>
                        <a href="">Communication</a> -->
                        <!-- <nuxt-link v-for="(route, index) in $route.matched" :key="index" :to="{ path: $route.path }">
                            {{ route.name }}
                        </nuxt-link> -->
                        <!-- <nuxt-link v-for="(route, index) in names" :key="index" :to="{ path: $route.path }"> -->
                        <nuxt-link v-for="(name, index) in names" :key="index" :to="{ path: '/' + names[index - 1] + '/' + name }">
                            {{ name }}
                            <span>{{ '/' + names[index - 1] + '/' + name }}</span>
                        </nuxt-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                routes: '',
                names: []
            }
        },
        mounted() {
            for(var i = 0; i < this.$route.matched.length; i++) {
                console.log(this.$route.matched[i])
                // this.routes.push(this.$route.matched[i])
                this.routes = this.$route.matched[i]
            }
            console.log(this.routes)
            console.log(this.routes.name)
            this.names = this.routes.path.split('/');
            console.log(this.names)
            console.log(this.$route.path)
            // console.log(this.names.splice(1));
        }
    }
</script>

<style lang="scss" scoped>
    @import '~assets/scss/settings';

    .c-breadcrumbs {
        display: none;

        @include breakpoint(desktop) {
            display: block;
            padding-top: 3.7rem;
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

                & span {
                    color: red;
                }
            }
        }
    }
</style>
