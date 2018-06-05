<template>
    <div>
        <h1>kris</h1>
        <app-pagination></app-pagination>
        <app-breadcrumbs></app-breadcrumbs>
    </div>
</template>

<script>
    import Pagination from '~/components/Pagination.vue'
    import Breadcrumbs from '~/components/Breadcrumbs.vue'

    export default {
        components: {
            appPagination: Pagination,
            appBreadcrumbs: Breadcrumbs
        }
    }
</script>

<style>

</style>
