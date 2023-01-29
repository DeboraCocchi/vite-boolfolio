import { createApp } from 'vue'
import './styles/style.scss'
import {router} from './router'
import App from './App.vue'


createApp(App).use(router).mount('#app')
