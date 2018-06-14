<template>

<article class="accordion-wrapper">

  <app-accordion-element :title="item.title"
      :content="item.content"
      v-for="(item, index) in items"
      :active="index === activeLiIndex"
      :index="index" 
      :key="item.title"
      @newactive="activeLiIndex = $event"
      ></app-accordion-element>
  
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
  data() {
    return {
      items: [
        { title: "Title 1", content: "Content 1" },
        { title: "Title 2", content: "Content 2" },
        { title: "Title 3", content: "Content 3" },
        { title: "Title 4", content: "Content 4" }
      ],
      activeLiIndex: null
    };
  },
  methods: {
    activate() {
      console.log("howdy");
    }
  },
  components: {
    AppAccordionElement
  }
};
</script>

<style lang="scss" scoped>
@import "~assets/scss/settings";
.accordion-wrapper {
  margin-top: 10rem;
}
</style>
