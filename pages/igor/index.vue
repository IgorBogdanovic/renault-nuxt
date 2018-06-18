<template>
  <div>
    <app-header></app-header>
    <app-slick-test></app-slick-test>
    <section class="temp"></section>
  </div>
</template>

<script>
import SlickTest from '~/components/slickTest.vue';

export default {
  data () {
      return {
        // hpSlider: []
      }
  },
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
  //       }
  //     })
  // },
  components: {
    AppSlickTest: SlickTest
  },
  created() {
    // console.log(this.hpSlider);
  }
}
</script>

<style>
.temp {
  height: 300vh;
  background-color: beige;
}
</style>
