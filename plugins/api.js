import { GQL, Queries } from './queries';

const apiFactory = axios => ({
    get(query) {
        return axios.get( GQL + query )
            .catch((error) => {
                console.log(error);
            });
    },
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
