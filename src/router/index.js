
const routes = [
    {
        path: '/',
        name: 'index',
        component: () => import('../views/index.vue')
    },
    {
        path: '/home',
        name: 'home',
        label: '首页',
        component: () => import('../views/home.vue')
    },
    {
        path: '/portfolio',
        name: 'portfolio',
        label: '作品',
        component: () => import('../views/portfolio.vue')
    },
    {
        path: '/about',
        name: 'about',
        label: '关于',
        component: () => import('../views/about.vue')
    },
]

export default routes