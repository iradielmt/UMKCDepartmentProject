import { createWebHistory, createRouter } from 'vue-router'
import Home from '@/components/Views/Home/Home'
import Show from "@/components/Views/Home/Show"
import Admin from "@/components/Views/Home/Admin-landing-page/Admin"
const routes = [
    {
        path: "/",
        component: Home,
    },
    {
        path: "/show",
        component: Show
    },
    {
        path: "/admin",
        component: Admin
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;