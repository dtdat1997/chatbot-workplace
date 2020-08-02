import Cookies from 'js-cookie';
import { SET_LOCALE } from './../mutation-types.js';

export const state = {
    locales: [
        'vi',
        'en'
    ],
    locale: Cookies.get('locale') ? Cookies.get('locale') : process.env.VUE_APP_I18N_LOCALE
};

export const getters = {
    locale: state => state.locale,
    locales: state => state.locales
};

export const mutations = {
    [SET_LOCALE](state, locale) {
        state.locale = locale;
    }
};

export const actions = {
    setLocale({commit}, locale) {
        commit(SET_LOCALE, locale);
        Cookies.set('locale', locale, {expires: 365});
    }
};
