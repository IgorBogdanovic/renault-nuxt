import Vuex from 'vuex';

const createStore = () => {
  return new Vuex.Store({
    state: {
      navigation: [],

      // nav top articles simulation => still not ready on backend
      articlesSim: [
        {
          image: 'https://dummyimage.com/64x50/000/fff.png',
          text: 'Proin rhoncus eros ac ante pellentesque, id lobortis turpis'
        },
        {
          image: 'https://dummyimage.com/64x50/000/fff.png',
          text: 'Proin rhoncus eros ac ante pellentesque, id lobortis turpis'
        },
        {
          image: 'https://dummyimage.com/64x50/000/fff.png',
          text: 'Vivamus a tincidunt massa, id molestie lacus.'
        },
        {
          image: 'https://dummyimage.com/64x50/000/fff.png',
          text: 'Vivamus a tincidunt massa, id molestie lacus.'
        }
      ]
    },
    mutations: {
      setNavigation (state, navArray) {
        state.navigation = navArray;
      }
    },
    actions: {
      nuxtServerInit ({ commit }, context) {
        return context.app.$api.get(context.app.$api.queries.nav)
          .then(res => {
            commit('setNavigation', res.data.data.navigation);
          });
      }
    }
  });
};

export default createStore;
