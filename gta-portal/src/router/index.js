import { createWebHistory, createRouter } from 'vue-router'
import Register from '@/components/Home/Register'
import InfoPage from "@/components/Home/InfoPage"
import HomePage from "@/components/Home/HomePage"
import LoginPage from "@/components/Home/LoginPage"
import AppPage from "@/components/Home/AppPage"

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
        path: "/AppPage",
        component: AppPage
    } ,
    {
        path: "/LoginPage",
        component: LoginPage
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;