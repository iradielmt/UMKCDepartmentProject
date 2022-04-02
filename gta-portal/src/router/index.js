import { createWebHistory, createRouter } from 'vue-router'
import Home from '@/components/Home/Home'
import Show from "@/components/Home/Show"
import InfoPage from "@/components/Home/InfoPage"
const routes = [
    {
        path: "/",
        component: InfoPage,
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