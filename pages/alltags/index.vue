<template lang="html">
  <div class="p-all-tags main-wrapper">
      <div class="inner-wrapper">
          <div class="bread-crumbs">
              home/alltags
          </div>
          <h1 class='page-title'>ALL TAGS</h1>
          <div class="b-all-tags-atlas">
              <tags-atlas v-for="(item,index) in items" :key='index' :inicial='item'></tags-atlas>
          </div>
      </div>
  </div>
</template>

<script>
import TagsAtlas from '~/components/TagsAtlas.vue'

export default {
    data(){
        return{
            items:['A','B','C','D','E','F','G','H'],
        }
    },
    created() {
        this.$api.get(this.$api.queries.test_node)
            .then(res => { console.log(res) });
    },

    components: {
        TagsAtlas
    }
}
</script>

<style scoped lang='scss'>
@import '~assets/scss/settings';
.p-all-tags{
    & .b-all-tags-atlas{
        width: 100%;
        margin: 0 auto;
        margin-top: 4.8rem;
        display: inline-flex;
        flex-flow: row wrap;
        justify-content: space-between;
    }

    .page-title{
        @include fontSizeRem(38.67, 44.3);
        font-family: 'Lato-Black';
        color:$black;
        font-weight: 900;
        text-align: center;
        margin-top: 4.8rem;
    }
}

</style>
