<template>
  <div>
    <app-header></app-header>
    <app-hp-slider :hpSlider="homepage.hpSlider"></app-hp-slider>
    <section class="temp"></section>
  </div>
</template>

<script>
import HpSlider from '~/components/sliders/HpSlider.vue';

export default {
  data () {
      return {
        homepage: {
          hpSlider: []
        }
      }
  },
  asyncData(context) {
    return context.app.$api.get(context.app.$api.queries.homepage)
      .then(res => {
        const hp = res.data.data.nodes[0].elements;

        for (let node of hp) {
          if (node.data.item_name === 'HP Slider') {
            return {
              homepage: { hpSlider: node.element_item.elements }
            }
          }
        }
      })
  },
  components: {
    AppHpSlider: HpSlider
  },
  created() {
    console.log(this.homepage.hpSlider);
  }
}
</script>

<style>
.temp {
  height: 300vh;
  background-color: beige;
}
</style>
