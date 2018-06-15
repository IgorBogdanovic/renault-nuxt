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

        <app-article-preview :prev="previews[0]" class="c-article-preview-landscape padded float-right" />

      </div>

      <div class="row">

        <app-article-preview :prev="previews[1]" class="c-article-preview-square padded" />
        <app-article-preview :prev="previews[2]" class="c-article-preview-square padded" />
        <app-article-preview :prev="previews[3]" class="c-article-preview-square padded" />
        <app-article-preview :prev="previews[0]" class="c-article-preview-square c-article-preview-landscape--desk padded"
        />

      </div>

      <div class="row">

        <app-article-preview :prev="previews[1]" class="c-article-preview-square padded" />
        <app-article-preview :prev="previews[1]" class="c-article-preview-square padded" />
        <app-article-preview :prev="previews[1]" class="c-article-preview-square padded" />
        <app-article-preview :prev="previews[0]" class="c-article-preview-square c-article-preview-landscape--desk padded float-right" />


      </div>

    </div>
  </section>

</template>

<script>
import ArticlePreview from "~/components/articles/ArticlePreview.vue";

export default {
  data() {
    return {
      previews: [
        {
          image: "https://dummyimage.com/232x200/c9c9c9/000000.png", //mobile
          //          image: "https://dummyimage.com/272x360/c9c9c9/000000.png",
          imageAlt: "some alt",
          tagged: false,
          tag: "MY BUSINESS",
          title: "Lorem Ipsum is simply dummy text of the printing ",
          desc:
            "A mobile showroom for your business really isn’t so different from the tried and tested mobile retail outlet…"
        },
        {
          image: "https://dummyimage.com/232x200/c9c9c9/000000.png", //mobile
          //          image: "https://dummyimage.com/272x224/c9c9c9/000000.png",
          imageAlt: "some alt",
          tagged: false,
          tag: "MY BUSINESS",
          title: "PRVI Ipsum is simply dummy text of the printing ",
          desc:
            "The UK boasts several ski resorts offering seasonal business opportunities to entrepreneurs on wheels. Here are a few.."
        },
        {
          image: "https://dummyimage.com/232x200/c9c9c9/000000.png", //mobile
          //          image: "https://dummyimage.com/492x400/c9c9c9/000000.png",
          imageAlt: "some alt",
          tagged: false,
          tag: "MY BUSINESS",
          title: " DRUGI Ipsum is simply dummy text of the printing ",
          desc:
            "The UK tourism economy is undergoing a boom; employment-wise, it has been the fastest-growing sector in the country…"
        },
        {
          image: "https://dummyimage.com/156x136/c9c9c9/000000.png", //mobile
          //          image: "https://dummyimage.com/492x400/c9c9c9/000000.png",
          imageAlt: "some alt",
          tagged: false,
          tag: "MY BUSINESS",
          title: "TRECI Ipsum is simply dummy text of the printing ",
          desc:
            "The UK tourism economy is undergoing a boom; employment-wise, it has been the fastest-growing sector in the country…"
        }
      ]
    };
  },
  components: {
    appArticlePreview: ArticlePreview
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