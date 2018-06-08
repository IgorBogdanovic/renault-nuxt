//import roots and  query strings from external js file
import { GQL, Queries } from './queries';

const apiFactory = axios => ({
    //define requests to use then in components
    get(query) {
        return axios.get( GQL + query )
            .catch((error) => {
                console.log(error);
            });
    },

    //global queries object ( strings )
    //access with $this.$api.queries.queryPropName Or  within asyncData context.app.$api.queries.queryPropName
    queries: Queries
});

/*
** Executed by ~/.nuxt/index.js with context given
** This method can be asynchronous
*/
export default ({ $axios }, inject) => {
    // Inject `api` key
    // -> app.$api
    // -> this.$api in vue components
    // -> this.$api in store actions/mutations
    const api = apiFactory($axios);
    inject("api", api);
};
