<template>
	<nuxt-link tag='article' to='/' class="c-article-preview">
		<figure class="c-article-preview__image">
			<div v-if="prev.featured_image.length > 0">
				<div v-for="(img, index) in prev.featured_image" :key="index">
					<hide-at :breakpoints="{medium: 768}" breakpoint="mediumAndAbove">
						<img v-if="index === 0" :src="$thumbor(thumbor.imgMob.width, thumbor.imgMob.height) + img.data.file.url" :alt="img.data.seoalt">
					</hide-at>
					<show-at :breakpoints="{medium: 768}" breakpoint="mediumAndAbove">
						<img v-if="index === 0" :src="$thumbor(thumbor.imgDesk.width, thumbor.imgDesk.height) + img.data.file.url" :alt="img.data.seoalt">
					</show-at>
				</div>
			</div>
			<div v-else>
				<div v-for="(img, index) in prev.images" :key="index">
					<hide-at :breakpoints="{medium: 768}" breakpoint="mediumAndAbove">
						<img v-if="index === 0" :src="$thumbor(thumbor.imgMob.width, thumbor.imgMob.height) + img.data.file.url" :alt="img.data.seoalt">
					</hide-at>
					<show-at :breakpoints="{medium: 768}" breakpoint="mediumAndAbove">
						<img v-if="index === 0" :src="$thumbor(thumbor.imgDesk.width, thumbor.imgDesk.height) + img.data.file.url" :alt="img.data.seoalt">
					</show-at>
				</div>
			</div>
			<span v-if="tag.visible" class="c-article-preview__tag">{{ tag.text }}</span>
		</figure>
		<div class="c-article-preview__content">
			<h4 v-if="prev.title" class="c-article-preview__title">{{ introCut(prev.title, trim.title)}}</h4>
			<p v-if="prev.additional_fields.intro" class="c-article-preview__desc">{{ introCut(prev.additional_fields.intro, trim.description) }}</p>
		</div>
	</nuxt-link>
</template>

<script>
import { introCut } from "~/plugins/globalFunctions.js";
import { showAt, hideAt } from "vue-breakpoints";

export default {
  props: ["prev", "tag", "thumbor", "trim"],
  components: { hideAt, showAt },
  methods: {
    introCut
  }
};
</script>

<style lang="scss" scoped>
@import "~assets/scss/settings";

.c-article-preview {
  cursor: pointer;
  transition: all 0.35s ease;
  &:hover {
    transform: translateY(-5px);
  }

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
    font-family: "Lato-Bold";
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
    font-family: "Lato-Black";
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
      padding-top: 0.5rem;
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
    font-family: "Lato";

    @include breakpoint(desktop) {
      font-family: "Lato-Bold";
    }
  }
}

.c-article-preview.component--landscape {
  display: flex;
  flex-flow: row nowrap;

  @include breakpoint(desktop) {
  }

  .c-article-preview {
    &__image {
      width: 60%;
      margin-bottom: 0;
    }
    &__content {
      width: 40%;
    }
  }

  &--reverse {
    flex-flow: row-reverse nowrap;
  }
}

.b-news-otw {
  .c-article-preview.component--landscape {
    display: flex;
    flex-flow: row nowrap;
    padding-top: 1.7rem;
    @include breakpoint(desktop) {
      padding-top: 9.7rem;
    }

    .c-article-preview {
      &__image {
        width: 59.5%;
        margin-bottom: 0;
        @include breakpoint(desktop) {
          width: 55.2%;
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

// Stari Zakomentarisan //

// .b-editor {
//     & .c-article-preview.component--landscape {
//         justify-content: space-between;

//         & .c-article-preview__image {
//             @include breakpoint(desktop) {
//                 width: 55.6%;
//             }
//         }

//         & .c-article-preview__content {
//             padding: 0 0.5rem;

//             @include breakpoint(desktop) {
//                 padding: 0;
//                 width: 40%;
//                 margin-top: -0.5rem;
//             }
//         }
//     }
// }

////////////////////////////////////////
//// EDITORS NEWS BLOCK - SHP PAGE ////
//////////////////////////////////////

.c-article-preview-square-lg--text-left {
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;

  .c-article-preview__image {
    margin-bottom: 0;
    width: 20rem;
    @include breakpoint(desktop) {
      width: 27.2rem;
    }
  }

  .c-article-preview__content {
    width: 12.6rem !important;
    @include breakpoint(desktop) {
      width: 18.6rem !important;
    }
  }
}

.b-most-read {
  .c-article-preview {
    &__title {
      display: none;
    }
    &__desc {
      display: block;
      color: $black;
      font-family: "Lato-Bold";
      @include fontSizeRem(14, 14);
      //line-height: 1.36;
    }
    &__image {
      margin-bottom: 0.7rem;
      @include breakpoint(desktop) {
        margin-bottom: 0.7rem;
      }
    }
  }
}

///////////////////////////////////////
///// Q&A LIST BLOCK - SHP PAGE //////
/////////////////////////////////////

.b-qa-list {
  .c-article-preview-square.padded {
    background-color: $white-two;
    @include breakpoint(desktop) {
      width: 34.5rem;
    }

    .c-article-preview__image {
      width: 100%;
      margin-bottom: 0;
      margin-top: -6.4rem;
      @include box-shadow;
      @include breakpoint(desktop) {
        width: 23.2rem;
        margin-top: -10rem;
      }
    }

    .c-article-preview__content {
      padding: 2rem 1.7rem 1.6rem;
      @include breakpoint(desktop) {
        width: 22rem;
      }
    }
  }

  .c-article-preview-landscape--desk.padded {
    @include breakpoint(desktop) {
      width: 60.5rem;
      display: flex;
      justify-content: flex-start;
      align-items: flex-end;
      padding-bottom: 3.3rem;

      .c-article-preview__image {
        width: 46%;
        margin-bottom: 0;
        margin-top: -3.3rem;
        @include breakpoint(desktop) {
          width: 23.2rem;
          margin-left: 6.4rem;
        }
      }

      .c-article-preview__content {
        width: 49%;
        padding-left: 5%;
      }
    }
  }
}

///////////////////////////////////////
// MORE QA BLOCK - ARTICLE FAQ PAGE //
/////////////////////////////////////

.b-more-qa {
  // Shorter Landscape Article Preview

  .c-article-preview-landscape {
    width: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    background-color: $white-two;
    padding: 0 1.9rem 1.9rem 1.2rem;
    margin-bottom: 3.3rem;
    @include breakpoint(desktop) {
      align-items: flex-start;
      width: 26.7rem;
      padding: 0 1.6rem 1.6rem 2.4rem;
    }

    .c-article-preview__image {
      margin-top: -1.7rem;
      margin-bottom: 0;
      width: 11.2rem;
      @include breakpoint(desktop) {
        width: 7.2rem;
      }
    }

    .c-article-preview__content {
      width: 17.6rem;
      margin-top: 2rem;
      @include breakpoint(desktop) {
        width: 14.4rem;
        margin-top: 1.6rem;

        h4 {
          font-size: 1.4rem;
        }

        p {
          font-size: 0;
          padding: 0;
        }
      }
    }
  }

  // Wider Landscape Article Preview //

  .c-article-preview-landscape--lg {
    padding: 0 1.9rem 3.6rem 1.2rem;
    @include breakpoint(desktop) {
      width: 63.5rem;
      padding: 0 2.8rem 5rem 5.6rem;
    }

    .c-article-preview__image {
      width: 16.1rem;
      margin-top: -2.8rem;
      @include breakpoint(desktop) {
        width: 33.4rem;
        margin-top: -12.8rem;
      }
    }
    .c-article-preview__content {
      margin-top: 2.5rem;
      width: 13.1rem;
      @include breakpoint(desktop) {
        margin-top: 4.8rem;
        width: 19.2rem;

        p {
          font-size: 1.4rem;
        }
      }
    }
  }
}
.b-search-result{
    .c-article-preview{
        width:47%;
        @include breakpoint(desktop) {
            width:24%;
        }
    }
}
</style>
