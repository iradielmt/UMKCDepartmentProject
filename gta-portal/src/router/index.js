import { createWebHistory, createRouter } from 'vue-router'
import Register from '@/components/Views/Register/Register'
import InfoPage from "@/components/Views/Info/InfoPage"
import HomePage from "@/components/Views/Home/HomePage"
import AppPage from "@/components/Views/Application/AppPage"
import StudentPage from "@/components/Views/Student/StudentPage"
import Admin from "@/components/Views/Admin/Admin"
import Login from "@/components/Views/Login/LoginPage"
const routes = [
    {
        path: "/",
        component: HomePage,
    },
    {
        path: "/info",
        component: InfoPage
    },
    {
        path: "/register",
        component: Register
    },
    {
        path: "/login",
        component: Login
    },
    {
        path: "/AppPage",
        component: AppPage
    } ,
    {
        path: "/student",
        component: StudentPage
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