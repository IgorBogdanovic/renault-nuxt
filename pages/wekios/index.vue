<template>
  <div class="page"> 
      <app-footer/>
  </div>
</template>

<script>
import AppFooter from "~/components/Footer.vue";

export default {
  created() {
    this.$api.get(this.$api.queries.test_node).then(res => {
      console.log(res);
    });
  },
  components: {
    AppFooter
  }
};

</script>

<style lang="scss" scoped>

@import '~assets/scss/settings';
.page {
  color: $white;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>
