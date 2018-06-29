<template>
  <div>
    <app-article-header></app-article-header>
  </div>
</template>

<script>
import HpSlider from '~/components/sliders/HpSlider.vue';
import ArticleContent from '~/components/articles/ArticleContent.vue'
import ArticleHeader from '~/components/page__headers/ArticleHeader.vue'

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
    AppArticleContent: ArticleContent,
    AppArticleHeader: ArticleHeader
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
