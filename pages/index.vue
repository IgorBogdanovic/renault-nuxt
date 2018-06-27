<template>
  <div>
    <app-header></app-header>
    <app-hp-slider :hpSlider="hpSlider"></app-hp-slider>
    <app-voting></app-voting>
    <!-- <app-voted></app-voted> -->
    <app-news-of-the-week :previews='newsOfTheWeek'></app-news-of-the-week>
    <app-my-van :previews='myVan'></app-my-van>
    <app-my-business :previews="myBusiness"></app-my-business>
    <app-faq-slider :faqSlider='faq'></app-faq-slider>
    <app-whats-new :previews="whatsNew" :yellowSlider="myCommunity"></app-whats-new>
    <app-most-read-slider :mostReadSlider="myVan"></app-most-read-slider>
    <app-footer></app-footer>
  </div>
</template>

<script>
  import HpSlider       from '~/components/sliders/HpSlider.vue';
  import Voting         from '~/components/blocks/Voting.vue';
  import Voted          from '~/components/blocks/Voted.vue';
  import NewsOfTheWeek  from '~/components/blocks/NewsOfTheWeek.vue'
  import MyVan          from '~/components/blocks/MyVan.vue'
  import MyBusiness     from '~/components/blocks/MyBusiness.vue';
  import Faq            from '~/components/blocks/FAQSlider.vue'
  import WhatsNew       from '~/components/blocks/WhatsNew.vue';
  import MostReadSlider from '~/components/sliders/MostRead.vue';

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
          homepage.forEach((node) => {
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
          })
          return tempObj
        })
    },

    components: {
      AppHpSlider: HpSlider,
      AppVoting: Voting,
      AppVoted: Voted,
      AppNewsOfTheWeek: NewsOfTheWeek,
      AppMyVan: MyVan,
      AppMyBusiness: MyBusiness,
      AppFaqSlider: Faq,
      AppWhatsNew: WhatsNew,
      AppMostReadSlider: MostReadSlider,

    },

    created(){
        console.log(this.faq);
    }
  }
</script>

<style>

</style>
