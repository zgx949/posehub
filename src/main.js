import { createApp } from 'vue'
import router from './router/index.js'
import './style.css'
import App from './App.vue'
import 'vant/lib/index.css'
import { Button, Tabbar, TabbarItem } from 'vant'

const app = createApp(App)
app.use(router)
app.use(Button).use(Tabbar).use(TabbarItem)
app.mount('#app')
