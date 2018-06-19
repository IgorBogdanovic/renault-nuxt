<template>
    <div>
        <!-- <app-pagination></app-pagination> -->
        <!-- <app-breadcrumbs></app-breadcrumbs> -->
        <!-- <app-social></app-social> -->
        <!-- <app-my-business></app-my-business> -->
        <!-- <app-editor></app-editor> -->
        <!-- <app-whats-new></app-whats-new> -->
        <app-most-read></app-most-read>
        <!-- <app-article-content :article="article" :slides='slides'></app-article-content> -->
        <!-- <p>{{slides}}</p> -->
    </div>
</template>

<script>
    import Pagination from '~/components/Pagination.vue'
    import Breadcrumbs from '~/components/Breadcrumbs.vue'
    import Social from '~/components/Social.vue'
    import MyBusiness from '~/components/blocks/MyBusiness.vue'
    import Editor from '~/components/blocks/Editor.vue'
    import WhatsNew from '~/components/blocks/WhatsNew.vue'
    import MostRead from '~/components/sliders/MostRead.vue'
    import ArticleContent from '~/components/articles/ArticleContent.vue'

    export default {
        data() {
            return {
                article: [],
                slider:[],
                slides:[]

            }
        },
        asyncData(context) {
            return context.app.$api.get(context.app.$api.queries.article(36))
            .then( res => {
                console.log(res);
                return {
                    article: res.data.data.nodes[0],
                    slider: res.data.data.nodes[0].elements,
                }
            })
        },

        methods:{
            sortSliders(arr){
                let rArr = [];
                let temp = [];
                arr.map( (acc, cur) => {
                  if( acc.type ==='slider_image'){
                    temp.push(acc);
                    return cur;
                  }else{
                  	if(temp.length){
                    	rArr.push(temp);
                      //console.log(rArr)
                        temp = [];
                        return cur;
                    }else{
                    return cur;
                    }
                  }
  	           });
               return rArr;
           }
       },
        // created() {
        //     return this.$api.get(this.$api.queries.oneArticle)
        //     .then( res => {
        //         console.log(res);
        //         return {
        //             //articlesList:res.data.data.nodes
        //         }
        //     })
        // },
        mounted() {
            this.slides = this.sortSliders(this.slider)
        },
        components: {
            appPagination: Pagination,
            appBreadcrumbs: Breadcrumbs,
            appSocial: Social,
            appMyBusiness: MyBusiness,
            appEditor: Editor,
            appWhatsNew: WhatsNew,
            appMostRead: MostRead,
            appArticleContent: ArticleContent
        }
    }
</script>

<style>

</style>
