<template>
    <nuxt-link tag='article' to='/' class="c-article-preview">
        <figure class="c-article-preview__image">
            <div v-if="prev.featured_image.length > 0">
                <div v-for="(img, index) in prev.featured_image" :key="index">
                    <img v-if="index === 0" class="u-only-mob" :src="$thumbor(thumbor.imgMob.width, thumbor.imgMob.height) + img.data.file.url" :alt="img.data.seoalt">
                    <img v-if="index === 0" class="u-only-desktop" :src="$thumbor(thumbor.imgDesk.width, thumbor.imgDesk.height) + img.data.file.url" :alt="img.data.seoalt">
                </div>
            </div>
            <div v-else>
                <div v-for="(img, index) in prev.images" :key="index">
                    <img v-if="index === 0" class="u-only-mob" :src="$thumbor(thumbor.imgMob.width, thumbor.imgMob.height) + img.data.file.url" :alt="img.data.seoalt">
                    <img v-if="index === 0" class="u-only-desktop" :src="$thumbor(thumbor.imgDesk.width, thumbor.imgDesk.height) + img.data.file.url" :alt="img.data.seoalt">
                </div>
            </div>
            <span v-if="tag.visible" class="c-article-preview__tag">{{ tag.text }}</span>
        </figure>
        <div class="c-article-preview__content">
            <h4 v-if="prev.title" class="c-article-preview__title">{{ prev.title }}</h4>
            <p v-if="prev.additional_fields.intro" class="c-article-preview__desc">{{ introCut(prev.additional_fields.intro, introCharLimit) }}</p>
        </div>
    </nuxt-link>
</template>

<script>
export default {
    props: ['prev', 'tag', 'thumbor'],
    data() {
        return {
            introCharLimit: 115
        }
    },
    methods: {
        introCut(text, charAllowed) {
            if (text.length > charAllowed) {
                var textCuted = text.slice(0, charAllowed);
            } else return text;

            const wordsArray = textCuted.split(" ");
            wordsArray.pop();
            var textShort = "";
            for (let word of wordsArray) {
                textShort += word + " ";
            }   
            return textShort + "...";
        }
    }
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

.c-article-preview--most-read {
    & .c-article-preview__image {
        @include breakpoint(desktop) {
            margin-bottom: 1.9rem;
        }
    }
    
    & .c-article-preview__title {
        @include fontSizeRem(14, 14);
        font-family: 'Lato';
        
        @include breakpoint(desktop) {
            font-family: 'Lato-Bold';
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
            width:60%;
            margin-bottom: 0;
        }
        &__content {
            width: 40%;
        }
    }

    &--reverse{
        flex-flow: row-reverse nowrap;
    }

}

.b-news-otw{
    .c-article-preview.component--landscape{
        display: flex;
        flex-flow: row nowrap;
        padding-top:1.7rem;
        @include breakpoint(desktop) {
            padding-top:9.7rem;
        }

        .c-article-preview {
            &__image {
                width:59.5%;
                margin-bottom: 0;
                @include breakpoint(desktop) {
                    width:55.2%;
                }
            }
            &__content {
                width: 38.8%;
                padding: 0 3%;
                @include breakpoint(desktop) {
                    padding: 0;
                    padding-left: 6%;
                    width: 42.5%;
                }
            }
        }
    }
}

.b-editor {
    & .c-article-preview.component--landscape {
        justify-content: space-between;

        & .c-article-preview__image {
            @include breakpoint(desktop) {
                width: 55.6%;
            }
        }

        & .c-article-preview__content {
            padding: 0 0.5rem;

            @include breakpoint(desktop) {
                padding: 0;
                width: 40%;
                margin-top: -0.5rem;
            }
        }
    }
}
</style>
