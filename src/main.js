import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'animate.css'

// ✅ Import AOS
import AOS from 'aos'
import 'aos/dist/aos.css'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

// ✅ Init AOS
AOS.init()

app.mount('#app')
