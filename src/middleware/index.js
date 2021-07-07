import store from '../store/index.js';
import Cookies from 'js-cookie';

export default function authAdmin({ to, next }) {
    let exceptRoute = ['Login'];
    let isExceptRoute = exceptRoute.includes(to.name);
    let token = Cookies.get('token');

    if (isExceptRoute && !token) {
      return next();
    } else if (to.name == 'Login' && token) {
        return next({ name: 'Home' });
    } else if (!token) {
        return next({ name: 'Login' });
    } else {
      store.dispatch('auth/fetchUser');

    return next();
    }
}
