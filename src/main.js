import { createApp } from 'vue'
import App from './App.vue'
import '../src/tailwind.css'
import router from './router'
import './style.css';

const app= createApp(App)
app.use(router)
app.mount('#app')
