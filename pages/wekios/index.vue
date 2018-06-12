<template>
  <div class="page">
    <app-header/>
    <div class="main-wrapper">
      <div class="inner-wrapper">
        <app-accordion/>
        <h2>Latest News Block</h2>
        <block-latest-news/>
        <hr>
        <h2>Latest News Block End</h2>
        <hr>
        <block-qa-list/>
      </div>
      <qa-slider/>
    </div>
    <app-footer/>
  </div>
</template>

<script>
import AppHeader from "~/components/Header.vue";
import AppAccordion from "~/components/Accordion.vue";
import BlockLatestNews from "~/components/blocks/LatestNews.vue";
import BlockQaList from "~/components/blocks/QaList.vue";
import QaSlider from "~/components/sliders/QaSlider.vue";
import AppFooter from "~/components/Footer.vue";

export default {
  created() {
    this.$api.get(this.$api.queries.test_node).then(res => {
      console.log(res);
    });
  },
  components: {
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
@import "~assets/scss/plugins/swiper-min";
.page {
  background-color: $white;
  color: $black;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

h2 {
  color: red;
}
</style>
