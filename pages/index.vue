<template>
  <div>
    <app-header :nav="navigation"></app-header>
    <section class="temp"></section>
    <app-footer></app-footer>
  </div>
</template>

<script>
export default {
  data () {
      return {
        navigation: []
      }
  },
  asyncData(context) {
    return context.app.$api.get(context.app.$api.queries.nav)
    .then(res => {
      console.log(res);
      return {
        navigation: res.data.data.navigation
      }
    })
  }
}
</script>

<style>
.temp {
  height: 300vh;
  background-color: beige;
}
</style>
