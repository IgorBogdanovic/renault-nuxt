<template>
  <div>
    <app-header></app-header>
    <app-hp-slider :hpSlider="hpSlider"></app-hp-slider>
    <app-news-of-the-week :previews='newsOfTheWeek'></app-news-of-the-week>
    <app-my-van :previews='myVan'></app-my-van>
    <app-my-business :previews="myBusiness"></app-my-business>
    <app-faq :faqSlider='faq'></app-faq>
    <app-whats-new :previews="whatsNew" :yellowSlider="myCommunity"></app-whats-new>
    <app-footer></app-footer>
  </div>
</template>

<script>
  import HpSlider       from '~/components/sliders/HpSlider.vue';
  import NewsOfTheWeek  from '~/components/blocks/NewsOfTheWeek.vue'
  import MyVan          from '~/components/blocks/MyVan.vue'
  import MyBusiness     from '~/components/blocks/MyBusiness.vue';
  import Faq            from '~/components/blocks/FAQSlider.vue'
  import WhatsNew       from '~/components/blocks/WhatsNew.vue';

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
      AppNewsOfTheWeek: NewsOfTheWeek,
      AppMyVan: MyVan,
      AppMyBusiness: MyBusiness,
      AppFaq:Faq,
      AppWhatsNew: WhatsNew,

    },

    created(){
        console.log(this.faq);
    }
  }
</script>

<style>

</style>
