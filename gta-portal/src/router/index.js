import { createWebHistory, createRouter } from 'vue-router'
import Home from '@/components/Home/Home'
import Show from "@/components/Home/Show"
const routes = [
    {
        path: "/",
        component: Home,
    },
    {
        path: "/show",
        component: Show
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;