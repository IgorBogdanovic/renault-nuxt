<template>

<article class="accordion-wrapper">

  <app-accordion-element></app-accordion-element>
  <app-accordion-element></app-accordion-element>
  <app-accordion-element></app-accordion-element>
  
</article>

</template>

<script>
import AppAccordionElement from "~/components/accordion/AccordionElement.vue";

export default {
  created() {
    this.$api.get(this.$api.queries.test_node).then(res => {
      console.log(res);
    });
  },
  components: {
    AppAccordionElement
  }
};
</script>

<style lang="scss" scoped>
@import "~assets/scss/settings";
</style>
