function page(path) {
    return () => import(`../views/${path}`).then((m) => m.default || m);
}

export default [
    {
        path: '/',
        name: 'Home',
        meta: {
            layout: 'AppLayout'
        },
        component: page('Home.vue')
    },
    {
        path: '/login',
        name: 'Login',
        meta: {
            layout: 'LoginLayout'
        },
        component: page('Login.vue')
    }
];
