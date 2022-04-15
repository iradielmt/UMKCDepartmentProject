import { createApp } from 'vue'
import App from '@/App.vue'
import router from "./router"

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/js/src/dropdown';
import 'bootstrap/js/src/button';
import 'src/assets/style.css';

createApp(App).use(router).mount('#app');