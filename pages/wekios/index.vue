<template>
  <div class="page">
    <app-header/>
    <app-accordion/>
    <app-footer/>
  </div>
</template>

<script>
import AppHeader from "~/components/Header.vue";
import AppAccordion from "~/components/Accordion.vue";
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
    AppFooter
  }
};
</script>

<style lang="scss" scoped>
@import "~assets/scss/settings";
.page {
  color: $white;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
