<template>
  <section class="container">
    <div>
      <app-logo/>
      <h1 class="title">
        renault-nuxt
      </h1>
      <h2 class="subtitle">
        Renault Nuxt.js-CMS project
      </h2>
      <div class="links">
        <button class="c-btn"><a href="wekios/cgu" target="_blank">Cgu</a></button>
          <br>
          <button class="c-btn"><a href="wekios/t&c" target="_blank">Terms & Conditions</a></button>
          <br>
          <button class="c-btn"><a href="all-tags" target="_blank">All Tags</a></button>
          <br>
      </div>
    </div>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'

export default {
  created() {
    this.$api.get(this.$api.queries.test_node)
    .then(res => {
      console.log(res);
    });
  },
  components: {
    AppLogo
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
