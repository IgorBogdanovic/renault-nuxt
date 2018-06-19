<template lang="html">
  <div class="p-all-tags main-wrapper">
      <div class="inner-wrapper">
          <div class="bread-crumbs">
              home/alltags
          </div>
          <h1 class='page-title'>ALL TAGS</h1>
          <div class="b-all-tags-atlas">
              <tags-atlas v-for="(item,index) in sortedArray" :key='index' :inicial='item[0][0]' :listOfTags='item'></tags-atlas>
          </div>
      </div>
  </div>
</template>

<script>
import TagsAtlas from '~/components/tags/TagsAtlas.vue'
import { sortArrayByAlphabet } from '~/plugins/globalFunctions'

export default {
    data(){
        return{
            sortedArray:[]
        }
    },
    asyncData(context) {
      return context.app.$api.get(context.app.$api.queries.allTagsNames)
      .then( res => {
          return {
              //retrun reMaped array ( sort all tag names in one array )
              sortedArray:sortArrayByAlphabet( res.data.data.tags.map( item => item.name ) )
          }
      })
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
