import { createWebHistory, createRouter } from 'vue-router'
import Register from '@/components/Views/Register/Register'
import InfoPage from "@/components/Views/Info/InfoPage"
import HomePage from "@/components/Views/Home/HomePage"
import Login from "@/components/Views/Login/Login"
import AppPage from "@/components/Views/Application/AppPage"
import LoginPaje from "@/components/Views/Login/LoginPaje"

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
        path: "/LoginPaje",
        component: LoginPaje
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;