<template>

  <section class="b-qa-list">

    <div class="main-wrapper">

      <div class="inner-wrapper">

        <div class="b-qa-list__inner">

          <h2 class='b-qa-list__title'>
            <span class="text--bolder">Q<span class='text--italic'>&</span>A</span>
            <br>
            <span class='text--regular'>list</span>
          </h2>
          
          <app-article-preview :prev="previews[0]" class="c-article-preview-landscape"/>

            <div class="row">
                <app-article-preview :prev="previews[1]" class="c-article-preview-portrait"/>
                <app-article-preview :prev="previews[2]" class="c-article-preview-portrait"/>
            </div>

            <button class="c-btn c-btn--yellow"><a href="/">slideshow</a></button>      
            <button class="c-btn c-btn--signUp"><a href="/">Sign Up</a></button>
            <button class="c-btn c-btn--logIn"><a href="/">Log in</a></button>      
    
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
          image: 'https://dummyimage.com/156x137/c9c9c9/000000.png',//mobile
//          image: "https://dummyimage.com/272x360/c9c9c9/000000.png",
          imageAlt: "some alt",
          tagged: false,
          tag: "MY BUSINESS",
          title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
          desc:
            "A mobile showroom for your business really isn’t so different from the tried and tested mobile retail outlet…"
        },
        {
          image: 'https://dummyimage.com/156x136/c9c9c9/000000.png',//mobile
//          image: "https://dummyimage.com/272x224/c9c9c9/000000.png",
          imageAlt: "some alt",
          tagged: false,
          tag: "MY BUSINESS",
          title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
          desc:
            "The UK boasts several ski resorts offering seasonal business opportunities to entrepreneurs on wheels. Here are a few.."
        },
        {
          image: 'https://dummyimage.com/156x136/c9c9c9/000000.png',//mobile
//          image: "https://dummyimage.com/492x400/c9c9c9/000000.png",
          imageAlt: "some alt",
          tagged: false,
          tag: "MY BUSINESS",
          title:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
          desc:
            "The UK tourism economy is undergoing a boom; employment-wise, it has been the fastest-growing sector in the country…"
        },
        {
          image: 'https://dummyimage.com/156x136/c9c9c9/000000.png',//mobile
//          image: "https://dummyimage.com/272x224/c9c9c9/000000.png",
          imageAlt: "some alt",
          tagged: false,
          tag: "MY BUSINESS",
          title: "Setting Up A Mobile Business in the Tourism Sector: Do’s and Don’ts",
          desc:
            "The process of writing an operations manual for your small business may sound dry, but once you get to grips with the…"
        },
        {
          image: 'https://dummyimage.com/156x136/c9c9c9/000000.png',//mobile
//          image: "https://dummyimage.com/272x360/c9c9c9/000000.png",
          imageAlt: "some alt",
          tagged: false,
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

.b-qa-list {
  
  &__inner {
    margin: 5rem auto;
  }

  &__title {
    margin-bottom: 6.2rem;
  }

  .c-article-preview-square {

    @include breakpoint(desktop) {
      width: 33%;
    }

  }

}

.c-article-preview-landscape {
    display: flex;
    margin-bottom: 8.8rem;
}

</style>