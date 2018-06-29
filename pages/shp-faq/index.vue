<template>

    <div class="p-shp-faq">

        <div class="main-wrapper">

            <shp-faq-header></shp-faq-header>

            <div class="inner-wrapper">

                <app-breadcrumbs></app-breadcrumbs>

                <block-qa-list :previews="whatsNew"></block-qa-list>

            </div>

            <app-most-read-slider :mostReadSlider="myVan"></app-most-read-slider>

        </div>

    </div>

</template>

<script>
import ShpFaqHeader from "~/components/page__headers/ShpFaqHeader.vue";
import Breadcrumbs from "~/components/Breadcrumbs.vue";
import BlockQaList from "~/components/blocks/QaList.vue";
import Pagination from "~/components/Pagination.vue";
import MostReadSlider from "~/components/sliders/MostRead.vue";

export default {
  data() {
    return {
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
    ShpFaqHeader: ShpFaqHeader,
    appBreadcrumbs: Breadcrumbs,
    BlockQaList: BlockQaList,
    appPagination: Pagination,
    AppMostReadSlider: MostReadSlider
  }
};
</script>

<style scoped lang='scss'>
@import "~assets/scss/settings";

.shp-faq__header {
    margin-bottom: 2rem;
}


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
