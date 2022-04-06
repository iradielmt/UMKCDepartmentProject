import { createApp } from 'vue'
// import Vue from 'vue';
import App from '@/App.vue'
import router from "./router"
import store from '/src/store/store.js';
import Axios from 'axios';

import 'bootstrap/dist/css/bootstrap.css';

// Vue.config.productionTip = false;
// set auth header
Axios.defaults.headers.common['Authorization'] = `Bearer ${store.state.token}`;

createApp(App).use(router).use(store).mount('#app');