<template>

	<section class="b-latest-news">

		<div class="b-latest-news__inner">

			<slot name="block-title">
				<h2 class='b-latest-news__title'>
					<span class='text--italic'>Latest</span>
					<span class='text--bold'>news</span>
				</h2>
			</slot>

			<div class="row row--first">

				<app-article-preview :prev="previews[0]" :thumbor="{ imgDesk : {width: 272, height: 224}, imgMob: {width: 156, height: 136}}" :tag="tag" class="c-article-preview-square" :trim="{ description: 100, title:45 }" />

				<app-article-preview :prev="previews[1]" :thumbor="{ imgDesk : {width: 272, height: 224}, imgMob: {width: 156, height: 136}}" :tag="tag" class="c-article-preview-square" :trim="{ description: 100, title:45 }" />

				<app-article-preview :prev="previews[2]" :thumbor="{ imgDesk : {width: 492, height: 400}, imgMob: {width: 336, height: 284}}" :tag="tag" class="c-article-preview-square-lg" :trim="{ description: 100, title:45 }" />

			</div>

			<div class="row row--second">

				<app-article-preview :prev="previews[2]" :thumbor="{ imgDesk : {width: 492, height: 400}, imgMob: {width: 336, height: 284}}" :tag="tag" class="c-article-preview-square-lg" :trim="{ description: 100, title:45 }" />

				<app-article-preview :prev="previews[0]" :thumbor="{ imgDesk : {width: 272, height: 224}, imgMob: {width: 156, height: 136}}" :tag="tag" class="c-article-preview-square" :trim="{ description: 100, title:45 }" />

				<app-article-preview :prev="previews[1]" :thumbor="{ imgDesk : {width: 272, height: 224}, imgMob: {width: 156, height: 136}}" :tag="tag" class="c-article-preview-square" :trim="{ description: 100, title:45 }" />
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
        visible: true,
        text: "My business"
      }
    };
  }
};
</script>

<style lang="scss" scoped>
@import "~assets/scss/settings";

.b-latest-news {
  &__inner {
    padding-top: 4.4rem;
    color: $black;
    @include breakpoint(desktop) {
      padding-top: 3.6rem;
    }
  }

  &__title {
    margin-bottom: 2.4rem;
    @include breakpoint(desktop) {
      margin-bottom: 5.4rem;
      display: inline-block;
    }
  }
}

.c-article-preview {
  margin-bottom: 3.6rem;
}

.b-live-news {
  .row--first {
    margin-bottom: calc(3.4rem - 3.6rem);
    @include breakpoint(desktop) {
    }
  }
  .row--second {
    margin-bottom: calc(7.1rem - 3.6rem);
    @include breakpoint(desktop) {
      margin-bottom: calc(9rem - 3.6rem);
    }
  }
}
</style>
