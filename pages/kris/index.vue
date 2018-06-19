<template>
    <div>
        <!-- <app-pagination></app-pagination> -->
        <!-- <app-breadcrumbs></app-breadcrumbs> -->
        <!-- <app-social></app-social> -->
        <!-- <app-my-business></app-my-business> -->
        <!-- <app-editor></app-editor> -->
        <!-- <app-whats-new></app-whats-new> -->
        <app-most-read></app-most-read>
        <!-- <app-article-content :article="article" :slidersArr='slidersArr'></app-article-content> -->
        <!-- <p>{{slidersArr}}</p> -->
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
    import { sortSliders, cleanData } from '~/plugins/globalFunctions.js'

    export default {
        data() {
            return {
                article: [],
                slidersArr:[]
            }
        },
        asyncData(context) {
           return context.app.$api.get(context.app.$api.queries.article(36))
           .then( res => {
               //console.log(res);
               let returningObject = {};
               returningObject.article = res.data.data.nodes[0];
               returningObject.slidersArr = sortSliders( res.data.data.nodes[0].elements);
               returningObject.article.elements = cleanData( res.data.data.nodes[0].elements );

               return returningObject;
           })
        },
        // asyncData(context) {
        //     return context.app.$api.get(context.app.$api.queries.article(36))
        //     .then( res => {
        //         //console.log(res);
        //         return {
        //             article: res.data.data.nodes[0],
        //             slidersArr: sortSliders( res.data.data.nodes[0].elements),
        //         }
        //     })
        // },
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
            console.log(this.article)
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
