<template lang="html">
    <section class="b-news-otw main-wrapper">
        <div class="b-news-otw__inner inner-wrapper">
            <h2 class='b-news-otw__title'><span class='bolder'>NEWS</span> <span class='cursive'>of the</span> <span class='regular'>WEEK</span></h2>
            <div class="b-news-otw__col-left">
                <app-article-preview
                    :prev="previews[0]"
                    :thumbor="{ imgDesk : {width: 200, height:264}, imgMob: {width: 156, height: 192}}"
                    :tag="tag"
                    :trim = "{ description: 100, title:45 }"
                ></app-article-preview>
                <app-article-preview
                    :prev="previews[1]"
                    :thumbor="{ imgDesk : {width: 344, height:456}, imgMob: {width: 160, height: 275}}"
                    :tag="tag"
                    :trim = "{ description: 100, title:45 }"
                ></app-article-preview>
            </div>
            <div class="b-news-otw__col-right">
                <app-article-preview
                    :prev="previews[2]"
                    :thumbor="{ imgDesk : {width: 492, height:400}, imgMob: {width: 336, height: 284}}"
                    :tag="tag"
                    :trim = "{ description: 100, title:45 }"
                ></app-article-preview>
                <app-article-preview
                     class='component--landscape'
                    :prev="previews[3]"
                    :thumbor="{ imgDesk : {width: 272, height:224}, imgMob: {width: 200, height: 164}}"
                    :tag="tag"
                    :trim = "{ description: 100, title:45 }"
                ></app-article-preview>
            </div>
        </div>
        <div class="b-news-otw__cta">
            <button type="button" name="button" class='c-btn'>See All</button>
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
                text: 'News of The Week'
            }
        }
    }
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/settings';
.b-news-otw{

    &__inner{
        position: relative;
        padding-top: 3.6rem;
        @include breakpoint(desktop){
            padding-top: 7.8rem;
            display: flex;
            flex-flow: row nowrap;
            justify-content: space-between;
        }
    }

    &__title{
        position: absolute;
        top:3.2rem;
        left:1.9rem;
        @include breakpoint(desktop){
            top:21rem;
            left:0;
        }

        & .bolder{
            @include fontSizeRem(22, 32);
            font-family: 'Lato-Black';
        }
        & .cursive{
            @include fontSizeRem(22, 32);
            font-family: 'Airways';
            margin-left:1rem;
            @include breakpoint(desktop){

            }
        }
        & .regular{
            @include fontSizeRem(22, 32);
            display: block;
        }
    }

    &__col-left{

        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        align-items: flex-start;

        @include breakpoint(desktop){
            padding-top: 13.6rem;
            width:52.3%;

        }

        & .c-article-preview{
            width: 47%;
            @include breakpoint(desktop){
                width: 60%;
            }

            &:nth-child(1){
                margin-top: 7.7rem;
                @include breakpoint(desktop){
                    margin-top:19.2rem;
                    width: 34.6%;
                }
            }
        }
    }
    &__col-right{

        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
        padding-top: 2.9rem;
        @include breakpoint(desktop){
            width:45%;
            padding-top: 0;
        }

        & .c-article-preview{
            @include breakpoint(desktop){}
            &:nth-child(1){
                width:100%;
                @include breakpoint(desktop){

                }
            }
        }
    }

    &__cta{
        padding-top: 4.4rem;
        text-align: center;
        @include breakpoint(desktop){
            padding-top: 8rem;
        }
    }
    //LANDSCAPE COMPONENT SCSS STYLES ARE IN CHILD COMP - ArticlePreview.vue

}

</style>
