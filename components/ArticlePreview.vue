<template>

    <article class="o-article-preview">
        <figure class="o-article-preview__image">
            <img src="https://dummyimage.com/344x456/c9c9c9/000000.png" alt="">
            <span class="o-article-preview__tag" v-if="tagged">my business</span>
        </figure>

        <p class="o-article-preview__title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <p class="o-article-preview__desc" v-if="desc">All work and no play make Jack a dull boy, all work and no play
            make Jack a dull boy, all work and no play make Jack a dull boy, all work and no play make Jack a dull boy,
            all work and no play make Jack a dull boy, all work and no play make Jack a dull boy, all work and no play
            make Jack a dull boy...
        </p>
    </article>

</template>

<script>
export default {
    data: function() {
        return {
            tagged: true,
            desc: false
            // desc: winWidth() < 768 ? false : true
        };
    },
    // computed: {
    //     winWidth() {
    //         if (process.browser) {
    //             if (window.innerWidth > 767) this.desc = true;
    //         }
    //         return true;
    //     }
    // }
    // methods: {
    //     winWidth() {
    //         if (process.browser) {
    //             if (window.innerWidth > 767) this.desc = true;
    //         }
    //     }
    // }
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/settings';

.o-article-preview {
    &__image {
        position: relative;
        margin-bottom: 0.9rem;
        @include breakpoint(desktop) {
            margin-bottom: 3rem;
        }

        & img {
            width: 100%;
        }

    }

    &__tag {
        position: absolute;
        bottom: 0;
        left: 0;
        font-size: 0.8rem;
        font-family: 'Lato-Bold';
        text-align: center;
        text-transform: uppercase;
        width: 8.8rem;
        height: 2.8rem;
        line-height: 2.8rem;
        background: $sun-yellow;
        @include breakpoint(desktop) {
            font-size: 1.2rem;
            width: 13.6rem;
            height: 4rem;
            line-height: 4rem;
        }

    }

    &__title {
        font-size: 1.4rem;
        font-family: 'Lato-Black';
        color: $black;
        font-weight: 900;
        line-height: 1.14;
        @include breakpoint(desktop) {
            font-size: 1.8rem;
            margin-bottom: 1rem;
        }
    }
}

</style>
