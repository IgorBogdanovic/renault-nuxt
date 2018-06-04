<template>

    <nuxt-link tag='article' to='/' class="c-article-preview">
        <figure class="c-article-preview__image">
            <img :src="prev.image" :alt="prev.imageAlt">
            <span v-if="prev.tagged" class="c-article-preview__tag">{{ prev.tag }}</span>
        </figure>
        <div class="c-article-preview__content">
            <h4 v-if="prev.title" class="c-article-preview__title">{{ prev.title }}</h4>
            <p v-if="prev.desc" class="c-article-preview__desc">{{ prev.desc }}</p>
        </div>
    </nuxt-link>

</template>

<script>
export default {
    props: ['prev']
//     data: function() {
//         return {
//             tagged: true,
//             desc: false
//         };
//     },
//     mounted() {
//         this.winWidth();
//     },
//     methods: {
//         winWidth() {
//             if (process.browser) {
//                 if (window.innerWidth > 767) this.desc = true;
//             }
//         }
//     }
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/settings';

.c-article-preview {

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
            line-height: 1.28;
        }
    }

    &__desc {
        display: none;
        @include breakpoint(desktop) {
            display: block;
            font-size: 1.4rem;
            line-height: 1.5;
            color: $warm-grey;
            padding-top: .5rem;
        }
    }
}

.c-article-preview.component--landscape{
    display: flex;
    flex-flow: row nowrap;

    @include breakpoint(desktop) {

    }

    .c-article-preview {
        &__image {
            width:50%
        }
        &__content {
            width: 50%;
        }
    }

    &--reverse{
        flex-flow: row-reverse nowrap;
    }

}

</style>
