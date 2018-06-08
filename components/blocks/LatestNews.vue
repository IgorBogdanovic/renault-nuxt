<template>

  <section class="b-latest-news">

    <div class="main-wrapper">

      <div class="inner-wrapper">

        <div class="b-latest-news__inner">

          <h2 class='b-latest-news__title'>
            <span class='text--italic'>Latest </span>
            <span class='text--bold'> news</span>
          </h2>

            <div class="row">

              <app-article-preview v-for="(preview, index) in previews.slice(0,2)" 
              :key="index" :prev="preview" class="c-article-preview-square"/>

            <app-article-preview :prev="previews[2]" class="c-article-preview-square-lg"/>

          </div>
          
<<<<<<< HEAD
          <div class="row">

            <app-article-preview :prev="previews[3]" class="c-article-preview-square-lg"/>
            <app-article-preview :prev="previews[4]" class="c-article-preview-square"/>
            <app-article-preview :prev="previews[5]" class="c-article-preview-square"/>
            
=======
          <div class="row--desktop">
            <app-article-preview :prev="previews[3]" class="article-preview-square-lg"/>

          <div class="row">
            <app-article-preview :prev="previews[4]" class="article-preview-square"/>
            <app-article-preview :prev="previews[5]" class="article-preview-square"/>
          </div>
>>>>>>> c4a9a0b9f3f5ae85602c597a762d079c33f940e1
          </div>

        </div>

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
          image: 'https://dummyimage.com/156x136/c9c9c9/000000.png',//mobile
//          image: "https://dummyimage.com/272x360/c9c9c9/000000.png",
          imageAlt: "some alt",
          tagged: true,
          tag: "MY BUSINESS",
          title: "5 Novel Ideas For A Food Truck",
          desc:
            "A mobile showroom for your business really isn’t so different from the tried and tested mobile retail outlet…"
        },
        {
          image: 'https://dummyimage.com/156x136/c9c9c9/000000.png',//mobile
//          image: "https://dummyimage.com/272x224/c9c9c9/000000.png",
          imageAlt: "some alt",
          tagged: true,
          tag: "MY BUSINESS",
          title: "5 Novel Ideas for A Food Truck",
          desc:
            "The UK boasts several ski resorts offering seasonal business opportunities to entrepreneurs on wheels. Here are a few.."
        },
        {
          image: 'https://dummyimage.com/336x284/c9c9c9/000000.png',//mobile
//          image: "https://dummyimage.com/492x400/c9c9c9/000000.png",
          imageAlt: "some alt",
          tagged: true,
          tag: "MY BUSINESS",
          title:
            "Setting Up A Mobile Business in the Tourism Sector: Do’s and Don’ts",
          desc:
            "The UK tourism economy is undergoing a boom; employment-wise, it has been the fastest-growing sector in the country…"
        },
        {
          image: 'https://dummyimage.com/336x284/c9c9c9/000000.png',//mobile
//          image: "https://dummyimage.com/272x224/c9c9c9/000000.png",
          imageAlt: "some alt",
          tagged: true,
          tag: "MY BUSINESS",
          title: "Setting Up A Mobile Business in the Tourism Sector: Do’s and Don’ts",
          desc:
            "The process of writing an operations manual for your small business may sound dry, but once you get to grips with the…"
        },
        {
          image: 'https://dummyimage.com/156x136/c9c9c9/000000.png',//mobile
//          image: "https://dummyimage.com/272x360/c9c9c9/000000.png",
          imageAlt: "some alt",
          tagged: true,
          tag: "MY BUSINESS",
          title: "5 Novel Ideas for A Food Truck",
          desc:
            "Whether you’re operating a large delivery van fleet or running your electrical business from a single Kangoo, you’ll…"
        },
        {
          image: 'https://dummyimage.com/156x136/c9c9c9/000000.png',//mobile
//          image: "https://dummyimage.com/272x360/c9c9c9/000000.png",
          imageAlt: "some alt",
          tagged: true,
          tag: "MY BUSINESS",
          title: "5 Novel Ideas for A Food Truck",
          desc:
            "Whether you’re operating a large delivery van fleet or running your electrical business from a single Kangoo, you’ll…"
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

.b-latest-news {
  &__inner {
    padding-top: 4.4rem;
    
    @include breakpoint(desktop) {
      margin-top: 11.2rem;
      padding-top: 3.6rem;
      border-top: 0.1rem solid $white-two;
    }
  }

  &__title {
    margin-bottom: 2.4rem;

    @include breakpoint(desktop) {
      margin-bottom: 5.4rem;
      display: inline-block;
    }
  }

<<<<<<< HEAD
  .c-article-preview {
    margin-bottom: 3.4rem;
  }

}
=======
  .row {
    display: flex;
    width: 100%;
    justify-content: space-between;
>>>>>>> c4a9a0b9f3f5ae85602c597a762d079c33f940e1

    @include breakpoint(desktop) {
      width: 47%;
    }
  }

  .row--desktop {
    
    @include breakpoint(desktop) {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
    }
  }
  
  .article-preview-square {
    width: 47.7%;
  }

  .article-preview-square-lg {
    width: 100%;
    
    @include breakpoint(desktop) {
      width: 47.7%;
    }
  }
}
</style>
