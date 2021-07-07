import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Meta from 'vue-meta';
import i18n from './plugins/i18n';
import BootstrapVue from 'bootstrap-vue';
import Cookies from 'js-cookie';

import AppLayout from './layouts/AppLayout.vue';
import LoginLayout from './layouts/LoginLayout.vue';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fas);
library.add(fab);
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.component('AppLayout', AppLayout);
Vue.component('LoginLayout', LoginLayout);

Vue.config.productionTip = false;
Vue.use(Meta);
Vue.use(BootstrapVue);

Vue.config.productionTip = false;

// vee validate
// load validate language
import { loadVeeValidate } from './plugins/vee-validate.js';
loadVeeValidate(Cookies.get('locale') || process.env.VUE_APP_I18N_LOCALE);

new Vue({
    router,
    store,
    i18n,
    render: h => h(App)
}).$mount('#app');
