import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createRouter, createMemoryHistory } from 'vue-router'
import routes from './router/index'
import App from './App.vue'

const pinia = createPinia()
const router = createRouter({
    history: createMemoryHistory(),
    routes
})
const app = createApp(App)
app.use(pinia)
app.use(router)
app.mount('#app')