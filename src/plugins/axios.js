import axios from 'axios';
import Cookies from 'js-cookie';
import store from './../store';
import router from './../router';

axios.defaults.baseURL = process.env.VUE_APP_BACKEND_DOMAIN;
// Request interceptor
axios.interceptors.request.use(request => {
    let token = null;
    token = Cookies.get('token');

    request.headers.common['Access-Control-Allow-Origin'] = '*';
    request.headers.common['Access-Control-Allow-Methods'] = 'GET';

    if (token) {
        request.headers.common['Authorization'] = `Bearer ${token}`;
    }

    //   if (locale) {
    //     request.headers.common['Accept-Language'] = locale
    //   }

    return request;
});

// Response interceptor
axios.interceptors.response.use(response => {

    return response;
}, error => {
    if (error.response.status === 401) {
        store.dispatch('auth/logout');
        router.push('/login').catch((err)=>{console.log(err);});
    }
    return Promise.reject(error);
});

export default axios;
