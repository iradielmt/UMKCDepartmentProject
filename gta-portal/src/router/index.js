import { createWebHistory, createRouter } from 'vue-router'
import Register from '@/components/Home/Register'
import InfoPage from "@/components/Home/InfoPage"
import HomePage from "@/components/Home/HomePage"
import AppPage from "@/components/Home/AppPage"
import Admin from "@/components/Views/Admin/Admin"
import Login from "@/components/Home/LoginPage"
const routes = [
    {
        path: "/",
        component: HomePage,
    },
    {
        path: "/InfoPage",
        component: InfoPage
    },
    {
        path: "/Register",
        component: Register
    },
    {
        path: "/HomePage",
        component: HomePage
    }
    ,
    {
        path: "/Login",
        component: Login
    },
    {
        path: "/AppPage",
        component: AppPage
    } ,
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