<template>
  <div class="page">
    <div class="main-wrapper">
      <shp-header></shp-header>
      <shp-faq-header></shp-faq-header>
      <div class="inner-wrapper">
        <app-accordion/>
        <br>
        <block-more-qa :previews="myBusiness"></block-more-qa>
        <br><br><br>
        <block-latest-news :previews="newsOfTheWeek"></block-latest-news>
        <br><br><br>
        <block-editors-picks :previews="myBusiness"></block-editors-picks>
        <br><br><br>
        <block-qa-list :previews="whatsNew"></block-qa-list>
      </div>
      <div class="inner-wrapper--full">
        <qa-slider></qa-slider>
      </div>
    </div>
  </div>
</template>

<script>
import ShpHeader from "~/components/page__headers/ShpHeader.vue";
import ShpFaqHeader from "~/components/page__headers/ShpFaqHeader.vue";
import AppHeader from "~/components/Header.vue";
import AppAccordion from "~/components/accordion/Accordion.vue";
import BlockMoreQa from "~/components/blocks/MoreQa.vue";
import BlockLatestNews from "~/components/blocks/LatestNews.vue";
import BlockEditorsPicks from "~/components/blocks/EditorsPicks.vue";
import BlockQaList from "~/components/blocks/QaList.vue";
import QaSlider from "~/components/sliders/QaSlider.vue";

export default {
  data() {
    return {
      newsOfTheWeek: [],
      myBusiness: [],
      whatsNew: []
    };
  },
  asyncData(context) {
    return context.app.$api.get(context.app.$api.queries.homepage).then(res => {
      let tempObj = {};
      const homepage = res.data.data.nodes[0].elements;
      homepage.forEach(node => {
        if (node.data.item_name === "HP Latest All") {
          tempObj.newsOfTheWeek = node.element_item.list_items;
        }
        if (node.data.item_name === "HP Latest My Business") {
          tempObj.myBusiness = node.element_item.list_items;
        }
        if (node.data.item_name === "HP Latest Whats New") {
          tempObj.whatsNew = node.element_item.list_items;
        }
      });
      return tempObj;
    });
  },
  created() {
    this.$api.get(this.$api.queries.test_node).then(res => {
      console.log(res);
    });
  },
  components: {
    ShpHeader,
    ShpFaqHeader,
    AppHeader,
    AppAccordion,
    BlockMoreQa,
    BlockLatestNews,
    BlockEditorsPicks,
    BlockQaList,
    QaSlider
  }
};
</script>

<style lang="scss" scoped>
@import "~assets/scss/settings";

.page {
  background-color: $white;
  color: $black;
}

h2 {
  color: red;
}
</style>
