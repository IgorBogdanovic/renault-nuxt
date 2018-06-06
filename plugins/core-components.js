import Vue from 'vue';

import Header from '~/components/Header.vue';
import Footer from '~/components/Footer.vue';
import ArticlePreview from '~/components/articles/ArticlePreview.vue';

Vue.component('AppHeader', Header);
Vue.component('AppFooter', Footer);
Vue.component('AppArticlePreview', ArticlePreview);
