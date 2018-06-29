<template>
  <div class="p-live-news">
    <div class="main-wrapper">
      <div class="inner-wrapper">
        <app-breadcrumbs></app-breadcrumbs>
        <block-latest-news class="b-live-news" :previews="myBusiness">
          <template slot="block-title">
            <h1 class="b-live-news__title">LIVE NEWS</h1>
          </template>
        </block-latest-news>
        <app-pagination></app-pagination>
      </div>
      <app-most-read-slider :mostReadSlider="myVan"></app-most-read-slider>
    </div>
  </div>
</template>

<script>
import Breadcrumbs from "~/components/Breadcrumbs.vue";
import BlockLatestNews from "~/components/blocks/LatestNews.vue";
import Pagination from "~/components/Pagination.vue";
import MostReadSlider from "~/components/sliders/MostRead.vue";

export default {
  data() {
    return {
      results: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      searchTerm: "",
      tag: {
        visible: false,
        text: ""
      }
    };
  },
  asyncData(context) {
    return context.app.$api.get(context.app.$api.queries.homepage).then(res => {
      let tempObj = {};
      const homepage = res.data.data.nodes[0].elements;
      homepage.forEach(node => {
        if (node.data.item_name === "HP Slider") {
          tempObj.hpSlider = node.element_item.elements;
        }
        if (node.data.item_name === "HP Latest All") {
          tempObj.newsOfTheWeek = node.element_item.list_items;
        }
        if (node.data.item_name === "HP Latest My Van") {
          tempObj.myVan = node.element_item.list_items;
        }
        if (node.data.item_name === "HP Latest My Business") {
          tempObj.myBusiness = node.element_item.list_items;
        }
        if (node.data.item_name === "HP Latest FAQ") {
          tempObj.faq = node.element_item.list_items;
        }
        if (node.data.item_name === "HP Latest Whats New") {
          tempObj.whatsNew = node.element_item.list_items;
        }
        if (node.data.item_name === "HP My Community") {
          tempObj.myCommunity = node.element_item.list_items;
        }
        if (node.data.item_name === "HP Most Read") {
          tempObj.mostRead = node.element_item.list_items;
        }
      });
      return tempObj;
    });
  },
  components: {
    appBreadcrumbs: Breadcrumbs,
    BlockLatestNews: BlockLatestNews,
    appPagination: Pagination,
    AppMostReadSlider: MostReadSlider
  }
};
</script>

<style scoped lang='scss'>
@import "~assets/scss/settings";

.c-breadcrumbs {
  margin-bottom: 10.6rem;
}

.b-live-news__title {
  @include fontSizeRem(24, 71);
  font-family: "Lato-Black";
  text-align: center;
  margin-bottom: 4rem;
  @include breakpoint(desktop) {
    text-align: left;
    margin-left: 12rem;
    margin-bottom: -10rem;
  }
}
</style>
