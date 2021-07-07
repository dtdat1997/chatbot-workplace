import { LOGIN_SUCCESS, LOGOUT_SUCCESS } from './../mutation-types';
import Cookies from 'js-cookie';
import { login, fetchUser } from './../api.js';
export const state = {
    token: Cookies.get('token'),
    isLogged: !!Cookies.get('token'),
    user: {},
    loginRes: {},
    resetPasswordRes: {}
};

export const getters = {
    isLogged: state => state.isLogged,
    loginRes: state => state.loginRes,
    user: state => state.user
};

export const mutations = {
    [LOGIN_SUCCESS](state, data) {
        state.loginRes = data;
        if (!data.error) {
            Cookies.set('token', data.token);
            state.isLogged = true;
            state.user = data.user;
            console.log(data.data.user, data.token);
        }
    },
    [LOGOUT_SUCCESS](state) {
        Cookies.remove('token');
        state.isLogged = false;
    },
    fetchUser(state, data) {
        state.user = data;
    }
};

export const actions = {
    async fetchUser({commit}) {
        let data = await fetchUser();
        commit('fetchUser', data);
    },
    async login({commit}, params) {
        let data = await login(params);
        // todo login
        commit(LOGIN_SUCCESS, data);
    },
    async logout({commit}) {
        commit(LOGOUT_SUCCESS);
    }
};
