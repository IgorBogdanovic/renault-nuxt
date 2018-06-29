<template>
  <main id="homepage">
    <div :class="{ 'js-active': hpSlider.nodeVisible }" :data-index="hpSlider.nodeId">
      <transition mode="out-in" name="slideUp">
        <app-hp-slider v-if="hpSlider.nodeVisible" :hpSlider="hpSlider.data"></app-hp-slider>
      </transition>
    </div>
    <app-voting></app-voting>
    <div :class="{ 'js-active': newsOfTheWeek.nodeVisible }" :data-index="newsOfTheWeek.nodeId">
      <transition mode="out-in" name="slideUp">
        <app-news-of-the-week v-if="newsOfTheWeek.nodeVisible" :previews='newsOfTheWeek.data'></app-news-of-the-week>
      </transition>
    </div>
    <div :class="{ 'js-active': myVan.nodeVisible }" :data-index="myVan.nodeId">
      <transition mode="out-in" name="slideUp">
        <app-my-van v-if="myVan.nodeVisible" :previews='myVan.data'></app-my-van>
      </transition>
    </div>
    <div :class="{ 'js-active': myBusiness.nodeVisible }" :data-index="myBusiness.nodeId">
      <transition mode="out-in" name="slideUp">
        <app-my-business v-if="myBusiness.nodeVisible" :previews="myBusiness.data"></app-my-business>
      </transition>
    </div>
    <div :class="{ 'js-active': faq.nodeVisible }" :data-index="faq.nodeId">
      <transition mode="out-in" name="slideUp">
        <app-faq-slider v-if="faq.nodeVisible" :faqSlider='faq.data'></app-faq-slider>
      </transition>
    </div>
    <div :class="{ 'js-active': whatsNew.nodeVisible }" :data-index="whatsNew.nodeId">
      <transition mode="out-in" name="slideUp">
        <app-whats-new v-if="whatsNew.nodeVisible" :previews="whatsNew.data" :yellowSlider="myCommunity.data"></app-whats-new>
      </transition>
    </div>
    <div :class="{ 'js-active': mostRead.nodeVisible }" :data-index="mostRead.nodeId">
      <transition mode="out-in" name="slideUp">
        <app-most-read-slider v-if="mostRead.nodeVisible" :mostReadSlider="myVan.data"></app-most-read-slider>
      </transition>
    </div>
  </main>
</template>

<script>
  import HpSlider       from '~/components/sliders/HpSlider.vue';
  import Voting         from '~/components/blocks/Voting.vue';
  import Voted          from '~/components/blocks/Voted.vue';
  import NewsOfTheWeek  from '~/components/blocks/NewsOfTheWeek.vue';
  import MyVan          from '~/components/blocks/MyVan.vue';
  import MyBusiness     from '~/components/blocks/MyBusiness.vue';
  import Faq            from '~/components/blocks/FAQSlider.vue';
  import WhatsNew       from '~/components/blocks/WhatsNew.vue';
  import MostReadSlider from '~/components/sliders/MostRead.vue';
  import { nodeVisiblity, blockScrollLoader } from '~/plugins/globalFunctions.js';

  export default {
    data () {
        return {
          hpSlider: {},
          newsOfTheWeek: {},
          myVan: {},
          myBusiness: {},
          faq: {},
          whatsNew: {},
          myCommunity: {}, //this is data for yellow slider inside whats new block
          mostRead: {}
        }
    },
    asyncData(context) {
      return context.app.$api.get(context.app.$api.queries.homepage)
        .then(res => {
          let tempObj = {
            hpSlider: {},
            newsOfTheWeek: {},
            myVan: {},
            myBusiness: {},
            faq: {},
            whatsNew: {},
            myCommunity: {},
            mostRead: {}
          };
          const homepage = res.data.data.nodes[0].elements;
          let counter = 0;
          homepage.forEach((node) => {
            switch (node.data.item_name) {
              case 'HP Slider':
                tempObj.hpSlider.data = node.element_item.elements;
                counter++;
                nodeVisiblity({
                  block: tempObj.hpSlider,
                  startLimit: 2,
                  counter: counter
                });
                break;
              case 'HP Latest All':
                tempObj.newsOfTheWeek.data = node.element_item.list_items;
                counter++;
                nodeVisiblity({
                  block: tempObj.newsOfTheWeek,
                  startLimit: 2,
                  counter: counter
                });
                break;
              case 'HP Latest My Van':
                tempObj.myVan.data = node.element_item.list_items;
                counter++;
                nodeVisiblity({
                  block: tempObj.myVan,
                  startLimit: 2,
                  counter: counter
                });
                break;
              case 'HP Latest My Business':
                tempObj.myBusiness.data = node.element_item.list_items;
                counter++;
                nodeVisiblity({
                  block: tempObj.myBusiness,
                  startLimit: 2,
                  counter: counter
                });
                break;
              case 'HP Latest FAQ':
                tempObj.faq.data = node.element_item.list_items;
                counter++;
                nodeVisiblity({
                  block: tempObj.faq,
                  startLimit: 2,
                  counter: counter
                });
                break;
              case 'HP Latest Whats New':
                tempObj.whatsNew.data = node.element_item.list_items;
                counter++;
                nodeVisiblity({
                  block: tempObj.whatsNew,
                  startLimit: 2,
                  counter: counter
                });
                break;
              case 'HP My Community':
                tempObj.myCommunity.data = node.element_item.list_items;
                break;
              case 'HP Most Read':
                tempObj.mostRead.data = node.element_item.list_items;
                counter++;
                nodeVisiblity({
                  block: tempObj.mostRead,
                  startLimit: 2,
                  counter: counter
                });
            }
          });
          counter = 0;
          return tempObj;
        })
    },
    components: {
      AppHpSlider: HpSlider,
      AppVoting: Voting,
      AppVoted: Voted,
      AppNewsOfTheWeek: NewsOfTheWeek,
      AppMyVan: MyVan,
      AppMyBusiness: MyBusiness,
      AppFaqSlider: Faq,
      AppWhatsNew: WhatsNew,
      AppMostReadSlider: MostReadSlider,

    },
    created(){
      // console.log(this.faq);
    },
    mounted() {
      // console.log(this.myVan);
      blockScrollLoader({
        vueCmp: this,
        el: document.getElementById('homepage'),
        triggerPrecent: 33
      });
    }
  }
</script>

<style>
  .slideUp-enter-active, .slideUp-leave-active {
    margin-top: initial;
    opacity: 1;
    transition: 1.5s ease;
  }

  .slideUp-enter, .slideUp-leave-to {
    margin-top: 10rem;
    opacity: 0;
  }
</style>
