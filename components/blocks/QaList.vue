<template>

  <section class="b-qa-list">

    <div class="b-qa-list__inner">

      <h2 class='b-qa-list__title'>
        <span class="text--bolder">Q
          <span class='text--italic'>&</span>A</span>
        <br>
        <span class='text--regular'>list</span>
      </h2>

      <div class="row">

        <app-article-preview 
        :prev="previews[0]"
        :thumbor="{ imgDesk : {width: 232, height: 200}, imgMob: {width: 156, height: 137}}"
        :trim= "{ description: 100, title:45 }"
        :tag="tag" class="c-article-preview-landscape padded float-right"/>

      </div>

      <div class="row">

        <app-article-preview 
        :prev="previews[1]"
        :thumbor="{ imgDesk : {width: 232, height: 200}, imgMob: {width: 156, height: 137}}"
        :trim= "{ description: 100, title:45 }"
        :tag="tag" class="c-article-preview-square padded" />

        <app-article-preview 
        :prev="previews[2]" 
        :thumbor="{ imgDesk : {width: 232, height: 200}, imgMob: {width: 156, height: 137}}"
        :trim= "{ description: 100, title:45 }"
        :tag="tag" class="c-article-preview-square padded" />

        <app-article-preview 
        :prev="previews[3]" 
        :thumbor="{ imgDesk : {width: 232, height: 200}, imgMob: {width: 156, height: 137}}"
        :trim= "{ description: 100, title:45 }"
        :tag="tag" class="c-article-preview-square padded" />

        <app-article-preview 
        :prev="previews[0]" 
        :thumbor="{ imgDesk : {width: 232, height: 200}, imgMob: {width: 156, height: 137}}"
        :trim= "{ description: 100, title:45 }"
        :tag="tag" class="c-article-preview-square c-article-preview-landscape--desk padded"
        />

      </div>

      <div class="row">

        <app-article-preview 
        :prev="previews[3]" 
        :thumbor="{ imgDesk : {width: 232, height: 200}, imgMob: {width: 156, height: 137}}"
        :trim= "{ description: 100, title:45 }"
        :tag="tag" class="c-article-preview-square padded" />

        <app-article-preview 
        :prev="previews[2]" 
        :thumbor="{ imgDesk : {width: 232, height: 200}, imgMob: {width: 156, height: 137}}"
        :trim= "{ description: 100, title:45 }"
        :tag="tag" class="c-article-preview-square padded" />

        <app-article-preview 
        :prev="previews[1]" 
        :thumbor="{ imgDesk : {width: 232, height: 200}, imgMob: {width: 156, height: 137}}"
        :trim= "{ description: 100, title:45 }"
        :tag="tag" class="c-article-preview-square padded" />

        <app-article-preview 
        :prev="previews[0]" 
        :thumbor="{ imgDesk : {width: 232, height: 200}, imgMob: {width: 156, height: 137}}"
        :trim= "{ description: 100, title:45 }"
        :tag="tag" class="c-article-preview-square c-article-preview-landscape--desk padded float-right" />


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

.b-qa-list {
  &__inner {
    margin: 5rem auto;
  }

  &__title {
    margin-bottom: 6.2rem;
    @include breakpoint(desktop) {
      margin-bottom: 0;
    }
  }

  .c-article-preview {
    margin-bottom: 8.8rem;
    @include breakpoint(desktop) {
      margin-bottom: 10.8rem;
    }
  }

  .c-article-preview-landscape {
    @include breakpoint(desktop) {
      margin-bottom: 17.2rem;
    }
  }

  .c-article-preview-square {
    @include breakpoint(desktop) {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
  }

  .c-article-preview-landscape--desk {
    @include breakpoint(desktop) {
      width: 60.5rem;
      justify-content: flex-start;
      align-items: flex-end;
      padding-bottom: 3.3rem;
      margin-bottom: 17.2rem;

      .c-article-preview__image {
        width: 46%;
        margin-bottom: 0;
        margin-top: -3.3rem;
      }

      .c-article-preview__content {
        width: 49%;
        padding-left: 5%;
      }
    }
  }

  .float-right {
    @include breakpoint(desktop) {
      margin-left: calc(111rem - 60.5rem);
    }
  }
}
</style>