import { createApp } from 'vue'
import App from '@/App.vue'
import router from "./router"

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/js/dist/dropdown.js'

createApp(App).use(router).mount('#app');