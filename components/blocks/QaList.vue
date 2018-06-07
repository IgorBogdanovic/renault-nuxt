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
          
          
          <div class="row">
            
            <app-article-preview :prev="previews[0]" class="c-article-preview-landscape padded"/>
            
            </div>

            <div class="row">

            <app-article-preview :prev="previews[1]" class="c-article-preview-square padded"/>
            <app-article-preview :prev="previews[2]" class="c-article-preview-square padded"/>
            <app-article-preview :prev="previews[3]" class="c-article-preview-square padded"/>
            <app-article-preview :prev="previews[0]" class="c-article-preview-square c-article-preview-landscape--desk padded"/>

            
            </div>

            <div class="row">
              
            <app-article-preview :prev="previews[1]" class="c-article-preview-square padded"/>
            <app-article-preview :prev="previews[1]" class="c-article-preview-square padded"/>
            <app-article-preview :prev="previews[1]" class="c-article-preview-square padded"/>
            <app-article-preview :prev="previews[0]" class="c-article-preview-square c-article-preview-landscape--desk padded"/>


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
          title: "PRVI  xt of the printing and typesetting industry. Lorem Ipsum has been",
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
            " DRUGI t of the printing and typesetting industry. Lorem Ipsum has been",
          desc:
            "The UK tourism economy is undergoing a boom; employment-wise, it has been the fastest-growing sector in the country…"
        },
        {
          image: 'https://dummyimage.com/156x136/c9c9c9/000000.png',//mobile
//          image: "https://dummyimage.com/492x400/c9c9c9/000000.png",
          imageAlt: "some alt",
          tagged: false,
          tag: "MY BUSINESS",
          title:
            "TRECI um has been",
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
  }

  .c-article-preview-square {
    margin: 5rem 0;
  }
  
  .c-article-preview-landscape--desk {
    @include breakpoint(desktop) {
      width: 60.5rem;
      justify-content: flex-start;
      align-items: flex-end;
      padding-bottom: 3.3rem;
      
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

}

</style>