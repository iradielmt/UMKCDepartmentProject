import { createApp } from 'vue'
import App from '@/App.vue'
import router from "./router"

import 'bootstrap/dist/css/bootstrap.css';
<style> @import 'src/assets/style.css'; </style>

createApp(App).use(router).mount('#app');