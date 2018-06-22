<template lang="html">
  <div class="main-wrapper">
     <div class="inner-wrapper">
         <!-- <NewsOfTheWeek :latestArray = 'latestArray' />
         <HeroArticles/> -->
     </div>
      <!-- <app-faq/> -->
  </div>
</template>

<script>
import NewsOfTheWeek from '~/components/blocks/NewsOfTheWeek.vue'
import HeroArticles  from '~/components/blocks/HeroArticles.vue'
import AppFaq        from '~/components/blocks/FAQSlider.vue'


export default {
  data () {
      return {
        hpSlider: [],
        newsOfTheWeek: [],
        myVan: [],
        myBusiness: [],
        faq: [],
        whatsNew: [],
        myCommunity: [], //this is data for yellow slider inside whats new block
        mostRead: []
      }
  },
  asyncData(context) {
    return context.app.$api.get(context.app.$api.queries.homepage)
      .then(res => {
        let tempObj = {}
        const homepage = res.data.data.nodes[0].elements
        console.log('HOMEPAGE');
        console.log(homepage);
        for (let node of homepage) {
          if (node.data.item_name === 'HP Slider') {
            tempObj.hpSlider = node.element_item.elements
          }
          if (node.data.item_name === 'HP Latest All') {
            tempObj.newsOfTheWeek = node.element_item.list_items
          }
          if (node.data.item_name === 'HP Latest My Van') {
            tempObj.myVan = node.element_item.list_items
          }
          if (node.data.item_name === 'HP Latest My Business') {
            tempObj.myBusiness = node.element_item.list_items
          }
          if (node.data.item_name === 'HP Latest FAQ') {
            tempObj.faq = node.element_item.list_items
          }
          if (node.data.item_name === 'HP Latest Whats New') {
            tempObj.whatsNew = node.element_item.list_items
          }
          if (node.data.item_name === 'HP My Community') {
            tempObj.myCommunity = node.element_item.list_items
          }
          if (node.data.item_name === 'HP Most Read') {
            tempObj.mostRead = node.element_item.list_items
          }
        }
        return tempObj
      })
  },
  components:{
        NewsOfTheWeek,
        HeroArticles,
        AppFaq,
  },

  created(){
      console.log();
  }
}

</script>

<style scoped lang='scss'>
@import '~assets/scss/settings';

    .b-articles-list-hero{
        @include breakpoint(desktop){
            width: 100%;
            margin: 0 auto;
            max-width: 1440px;
        }

        &__after-hero{
            display: flex;
            flex-flow: row wrap;
            width: 72.4%;
            margin: 0 auto;
            justify-content: space-between;
            position: relative;
            top: -1.7rem;

            @include breakpoint(desktop){
                width: 61.3%;
                margin: 0 auto;
                max-width: 1100px;
                top: -6.1rem;
            }
        }
    }

    .c-hero-article-wrapper{
        margin: 0 auto;
        padding: 3.5rem 0;
        background: $white-two;

        @include breakpoint(desktop){
            width: 100%;
            margin: 0 auto;
            max-width: 1100px;
            padding: 9rem 0;
        }

        &__inner{
            width: 72.4%;
            margin: 0 auto;
            @include breakpoint(desktop){
                width: 84.4%;
            }
        }
    }

    .c-article-preview{
        width:48.3%;
        @include breakpoint(desktop){
            width: 31%;
        }
    }

</style>
