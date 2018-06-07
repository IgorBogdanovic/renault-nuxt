<template>
    <div>
        <!-- <app-pagination></app-pagination>
        <app-breadcrumbs></app-breadcrumbs>
        <app-social></app-social> -->
        <app-my-business></app-my-business>
        <app-editor></app-editor>
    </div>
</template>

<script>
    import Pagination from '~/components/Pagination.vue'
    import Breadcrumbs from '~/components/Breadcrumbs.vue'
    import Social from '~/components/Social.vue'
    import MyBusiness from '~/components/blocks/MyBusiness.vue'
    import Editor from '~/components/blocks/Editor.vue'

    export default {
        components: {
            appPagination: Pagination,
            appBreadcrumbs: Breadcrumbs,
            appSocial: Social,
            appMyBusiness: MyBusiness,
            appEditor: Editor
        }
    }
</script>

<style>

</style>
