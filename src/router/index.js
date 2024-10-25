
const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('../views/home.vue')
    },
    {
        path: '/portfolio',
        name: 'portfolio',
        component: () => import('../views/portfolio.vue')
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('../views/about.vue')
    },
]

export default routes