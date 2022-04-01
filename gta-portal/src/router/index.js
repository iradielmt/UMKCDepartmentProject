import { createWebHistory, createRouter } from 'vue-router'
import Home from '@/components/Home/Home'
import Show from "@/components/Home/Show"
import HomePage from "@/components/Home/HomePage"
const routes = [
    {
        path: "/",
        component: HomePage,
    },
    {
        path: "/show",
        component: Show
    },
    {
        path: "/homePage",
        component: Home
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;