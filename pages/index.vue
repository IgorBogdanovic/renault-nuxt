<template>
  <div>
    <app-header></app-header>
    <app-hp-slider :hpSlider="hpSlider"></app-hp-slider>
    <app-my-business :previews="myBusiness"></app-my-business>
    <app-whats-new :previews="whatsNew" :yellowSlider="myCommunity"></app-whats-new>
    <app-footer></app-footer>
  </div>
</template>

<script>
  import HpSlider from '~/components/sliders/HpSlider.vue';
  import MyBusiness from '~/components/blocks/MyBusiness.vue';
  import WhatsNew from '~/components/blocks/WhatsNew.vue';

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
    // data () {
    //     return {
    //       hpSlider: []
    //     }
    // },
    // asyncData(context) {
    //   return context.app.$api.get(context.app.$api.queries.homepage)
    //     .then(res => {
    //       const homepage = res.data.data.nodes[0].elements;

    //       for (let node of homepage) {
    //         if (node.data.item_name === 'HP Slider') {
    //           return {
    //             hpSlider: node.element_item.elements
    //           }
    //         }
    //         // ... else if for rest of the blocks
    //       }
    //     })
    // },
    components: {
      AppHpSlider: HpSlider,
      AppMyBusiness: MyBusiness,
      AppWhatsNew: WhatsNew
    },
    // created() {
    //     return this.$api.get(this.$api.queries.homepage)
    //     .then( res => {
    //         console.log(res);
    //     })
    // }
  }
</script>

<style>

</style>