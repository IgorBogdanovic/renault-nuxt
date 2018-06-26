<template>

    <section class="b-more-qa">

        <div class="b-more-qa__inner">


            <div class="row">

                <h2 class='b-more-qa__title'>
                    <span class="text--regular">more</span>
                    <br>
                    <span class="text--bolder">Q&A</span>
                </h2>

                <app-article-preview :prev="previews[1]" :thumbor="{ imgDesk : {width: 334, height: 344}, imgMob: {width: 161, height: 136}}"
                    :tag="tag" class="c-article-preview-landscape c-article-preview-landscape--lg" />

                <div class="col">
                    
                    <app-article-preview :prev="previews[0]" :thumbor="{ imgDesk : {width: 72, height: 72}, imgMob: {width: 112, height: 92}}"
                    :tag="tag" class="c-article-preview-landscape" />
                    
                    <app-article-preview :prev="previews[2]" :thumbor="{ imgDesk : {width: 72, height: 72}, imgMob: {width: 112, height: 92}}"
                    :tag="tag" class="c-article-preview-landscape" />
                    
                    <app-article-preview :prev="previews[0]" :thumbor="{ imgDesk : {width: 72, height: 72}, imgMob: {width: 112, height: 92}}"
                    :tag="tag" class="c-article-preview-landscape" />
                    
                </div>

            </div>

<div class="row">

            <app-article-preview :prev="previews[0]" :thumbor="{ imgDesk : {width: 72, height: 72}, imgMob: {width: 112, height: 92}}"
                :tag="tag" class="c-article-preview-landscape" />

            <app-article-preview :prev="previews[2]" :thumbor="{ imgDesk : {width: 72, height: 72}, imgMob: {width: 112, height: 92}}"
                :tag="tag" class="c-article-preview-landscape" />

            <app-article-preview :prev="previews[0]" :thumbor="{ imgDesk : {width: 72, height: 72}, imgMob: {width: 112, height: 92}}"
                :tag="tag" class="c-article-preview-landscape" />
</div>

<div class="row">

                <app-article-preview :prev="previews[0]" :thumbor="{ imgDesk : {width: 72, height: 72}, imgMob: {width: 112, height: 92}}"
                :tag="tag" class="c-article-preview-landscape" />

            <app-article-preview :prev="previews[2]" :thumbor="{ imgDesk : {width: 72, height: 72}, imgMob: {width: 112, height: 92}}"
                :tag="tag" class="c-article-preview-landscape" />

            <app-article-preview :prev="previews[0]" :thumbor="{ imgDesk : {width: 72, height: 72}, imgMob: {width: 112, height: 92}}"
                :tag="tag" class="c-article-preview-landscape" />

</div>

        </div>

    </section>

</template>

<script>
export default {
  props: ["previews"],
  data() {
    return {
      tag: {
        visible: false,
        text: ""
      }
    };
  }
};
</script>

<style lang="scss" scoped>
@import "~assets/scss/settings";

.b-more-qa {
  &__title {
    margin-bottom: 5rem;
    @include breakpoint(desktop) {
      margin-bottom: 0;
    }
  }
}

.col {
  width: 100%;
}

@include breakpoint(desktop) {
  .row {
    align-items: flex-start;
    justify-content: flex-end;
  }

  .col {
    width: inherit;
  }

  .c-article-preview-landscape {
    margin-left: 1.6rem;
  }

  .c-article-preview-landscape--lg {
    margin: 0 2.4rem 3.2rem 6.3em;
  }
}
</style>