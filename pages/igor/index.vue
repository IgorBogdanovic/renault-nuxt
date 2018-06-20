<template>
  <div>
    <app-header></app-header>
    <!-- <app-hp-slider :hpSlider="homepage.hpSlider"></app-hp-slider> -->
    <app-article-content :article="article"></app-article-content>
    <!-- <section class="temp"></section> -->
  </div>
</template>

<script>
import HpSlider from '~/components/sliders/HpSlider.vue';
import ArticleContent from '~/components/articles/ArticleContent.vue'

export default {
  data () {
      return {
        homepage: {
          hpSlider: []
        },
        article: []
      }
  },
  // asyncData(context) {
  //   return context.app.$api.get(context.app.$api.queries.homepage)
  //     .then(res => {
  //       const hp = res.data.data.nodes[0].elements;

  //       for (let node of hp) {
  //         if (node.data.item_name === 'HP Slider') {
  //           return {
  //             homepage: { hpSlider: node.element_item.elements }
  //           }
  //         }
  //       }
  //     })
  // },
  asyncData(context) {
    return context.app.$api.get(context.app.$api.queries.article(36))
    .then( res => {
      //console.log(res);
      return {
        article: res.data.data.nodes[0],
      }
    })
  },
  components: {
    AppHpSlider: HpSlider,
    AppArticleContent: ArticleContent
  },
  created() {
    console.log(this.article);
  }
}
</script>

<style>
.temp {
  height: 300vh;
  background-color: beige;
}
</style>
