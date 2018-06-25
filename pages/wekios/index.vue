<template>
  <div class="page">
    <div class="main-wrapper">
      <shp-header></shp-header>
      <shp-faq-header></shp-faq-header>
      <div class="inner-wrapper">
        <app-accordion/>
        <block-latest-news :previews="newsOfTheWeek"></block-latest-news>
        <hr>
        <block-qa-list :previews="whatsNew"></block-qa-list>
      </div>
      <div class="inner-wrapper--full">
        <qa-slider></qa-slider>
      </div>
    </div>
    <app-footer/>
  </div>
</template>

<script>
import ShpHeader from "~/components/page__headers/ShpHeader.vue";
import ShpFaqHeader from "~/components/page__headers/ShpFaqHeader.vue";
import AppHeader from "~/components/Header.vue";
import AppAccordion from "~/components/accordion/Accordion.vue";
import BlockLatestNews from "~/components/blocks/LatestNews.vue";
import BlockQaList from "~/components/blocks/QaList.vue";
import QaSlider from "~/components/sliders/QaSlider.vue";
import AppFooter from "~/components/Footer.vue";

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
    BlockLatestNews,
    BlockQaList,
    QaSlider,
    AppFooter
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
