import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router/index.js'

import App from './App.vue'

const pinia = createPinia()

import './index.css'
createApp(App).use(router).use(pinia).mount('#app')


