import { createWebHistory, createRouter } from 'vue-router'
import LoginPage from '@/components/Views/LoginPage'
import RegistrationPage from '@/components/Views/Home/RegistrationPage'
import Show from "@/components/Views/Home/Show"
import Admin from "@/components/Views/Admin/Admin"
const routes = [
    {
        path: "/login",
        component: LoginPage
    },
    {
        path: "/register",
        component: RegistrationPage,
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