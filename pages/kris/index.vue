<template>
    <div>
        <h1>kris</h1>
        <app-pagination></app-pagination>
        <app-breadcrumbs></app-breadcrumbs>
        <app-social></app-social>
    </div>
</template>

<script>
    import Pagination from '~/components/Pagination.vue'
    import Breadcrumbs from '~/components/Breadcrumbs.vue'
    import Social from '~/components/Social.vue'

    export default {
        components: {
            appPagination: Pagination,
            appBreadcrumbs: Breadcrumbs,
            appSocial: Social
        }
    }
</script>

<style>

</style>
