<template lang="html">
  <div class="p-search">
      <app-breadcrumbs></app-breadcrumbs>
      <div class="main-wrapper">
          <div class="inner-wrapper">
              <div class="c-search">
                  <div class="c-search__status">
                      <h4 v-if='results.length' class='c-search__status__success'>{{results.length}} results for:</h4>
                      <h4 v-else class='c-search__status__none'>Sorry, no results found today for:</h4>
                  </div>
                  <div class="c-search__form">
                      <input class='c-search__form__input' type="search" name="" :value="searchTerm" placeholder="Search here">
                      <div class="c-search__form__picto">
                          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                            viewBox="0 0 330 330" style="enable-background:new 0 0 330 330;" xml:space="preserve">
                            <path d="M325.606,304.394L223.328,202.117c16.707-21.256,26.683-48.041,26.683-77.111C250.011,56.077,193.934,0,125.005,0
                              C56.077,0,0,56.077,0,125.006C0,193.933,56.077,250.01,125.005,250.01c29.07,0,55.855-9.975,77.11-26.681l102.278,102.277
                              C307.322,328.536,311.161,330,315,330s7.678-1.464,10.606-4.394C331.465,319.749,331.465,310.251,325.606,304.394z M30,125.006
                              C30,72.619,72.619,30,125.005,30c52.387,0,95.006,42.619,95.006,95.005c0,52.386-42.619,95.004-95.006,95.004
                              C72.619,220.01,30,177.391,30,125.006z"/>
                          </svg>
                      </div>
                  </div>
              </div>
              <div class="b-search-result">
                  <app-article-preview v-for="(preview, index) in myBusiness"
                      :key = 'index'
                      :prev = "preview"
                      :thumbor = "{ imgDesk : {width: 200, height: 160}, imgMob: {width: 160, height: 136} }"
                      :tag = "tag"
                      :trim = "{ description: 100, title:45 }"
                  ></app-article-preview>
              </div>
          </div>
      </div>
      <app-pagination></app-pagination>
      <app-most-read-slider :mostReadSlider="myVan"></app-most-read-slider>
  </div>
</template>

<script>
import Breadcrumbs from '~/components/Breadcrumbs.vue'
import Pagination  from '~/components/Pagination.vue'
import MostReadSlider from '~/components/sliders/MostRead.vue';

export default {
    data(){
        return {
            results:[1,2,3,4,5,6,7,8,9,10],
            searchTerm:'',
            tag: {
                visible: false,
                text: ''
            },
        }
    },

    asyncData(context) {
      return context.app.$api.get(context.app.$api.queries.homepage)
        .then(res => {
          let tempObj = {}
          const homepage = res.data.data.nodes[0].elements
          homepage.forEach((node) => {
              if (node.data.item_name === 'HP Slider') {
                tempObj.hpSlider = node.element_item.elements
              }
              if (node.data.item_name === 'HP Latest All') {
                tempObj.newsOfTheWeek = node.element_item.list_items
              }
              if (node.data.item_name === 'HP Latest My Van') {
                tempObj.myVan = node.element_item.list_items
              }
              if (node.data.item_name === 'HP Latest My Business') {
                tempObj.myBusiness = node.element_item.list_items
              }
              if (node.data.item_name === 'HP Latest FAQ') {
                tempObj.faq = node.element_item.list_items
              }
              if (node.data.item_name === 'HP Latest Whats New') {
                tempObj.whatsNew = node.element_item.list_items
              }
              if (node.data.item_name === 'HP My Community') {
                tempObj.myCommunity = node.element_item.list_items
              }
              if (node.data.item_name === 'HP Most Read') {
                tempObj.mostRead = node.element_item.list_items
              }
          })
          return tempObj
        })
    },
    components: {
        appBreadcrumbs: Breadcrumbs,
        appPagination: Pagination,
        AppMostReadSlider: MostReadSlider,
    }
}

</script>

<style scoped lang='scss'>
@import '~assets/scss/settings';
.p-search{

}

.b-search-result{
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    margin-top: 6em;
}
.c-search{
    width: 80%;
    margin: 0 auto;
    margin-top: 2.5em;
    @include breakpoint(desktop){
        margin-top: 4rem;
    }
    &__status{
        @include fontSizeRem(22, 26);
        font-family: 'Lato-Bold';
        text-align: center;
        text-transform: uppercase;
        @include breakpoint(desktop){

        }
    }

    &__form{
        text-align: center;
        position: relative;
        padding-top: 1.5rem;
        @include breakpoint(desktop){
            padding-top: 2rem;
        }

        &__input{
            background: $white;
            border: 1px solid $sun-yellow;
            padding: 1.8rem 2%;
            padding-right: 6rem;
            @include fontSizeRem(30, 36);
            font-family: 'Lato';
            width: 100%;
        }

        &__picto{
            width: 2.5rem;
            height: 2.5rem;
            position: absolute;
            right: 3rem;
            bottom: 2.8rem;
            @include breakpoint(desktop){
                right: 3rem;
                bottom: 2.8rem;
            }
        }
    }
}


</style>
