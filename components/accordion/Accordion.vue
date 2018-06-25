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
  data() {
    return {
      items: [
        {
          title: "Title 1",
          content:
            "Content 1 Adipisicing elit. Enim, eius quaerat Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, eius quaerat"
        },
        {
          title: "Title 2",
          content:
            "Content 2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, eius quaerat Enim, eius quaerat"
        },
        {
          title: "Title 3",
          content:
            "Content 3 Nana Batman Blah NananaM Ddipisicing elit. Enim, eius quaerat Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, eius quaerat"
        },
        {
          title: "Title 4",
          content:
            "Content 4 Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, eius quaerat"
        }
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
</style>
