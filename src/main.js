import { createApp } from 'vue'
import {createRouter, createWebHistory} from 'vue-router'
import {routes} from './routes'

import {store} from './store/index'

const router = createRouter({
    routes,
    history:createWebHistory()
  })

import App from './App.vue'

const app = createApp(App)
app.use(router)
app.use(store)

app.mount('#app')

