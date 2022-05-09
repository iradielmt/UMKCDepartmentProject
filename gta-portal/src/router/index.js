import { createWebHistory, createRouter } from 'vue-router'
import Register from '@/components/Views/Register/Register'
import InfoPage from "@/components/Views/Info/InfoPage"
import HomePage from "@/components/Views/Home/HomePage"
import AppPage from "@/components/Views/Application/AppPage"
import LoginPage from "@/components/Views/Login/LoginPage"
import StudentPage from "@/components/Views/Student/StudentPage"
import Admin from "@/components/Views/Admin/Admin"
import Landing from "@/components/Views/Landing/Landing";
// import store from "/src/store/store"
const routes = [
    {
        path: "/",
        name: "home",
        component: HomePage,
    },
    {
        path: "/info",
        name: "info",
        component: InfoPage
    },
    {
        path: "/register",
        name: "register",
        component: Register
    },
    {
        path: "/login",
        name: "login",
        component: LoginPage
    },
    {
        path: "/AppPage",
        name: "apppage",
        component: AppPage,
        meta: {
            requiresAuth: true,
        },
    },
    {
        path:"/landing",
        name: "landing",
        component: Landing,
        meta: {
            requiresAuth: true,
        },
    },
    {
        path: "/student",
        name: "student",
        component: StudentPage,
        meta: {
            requiresAuth: true,
        },
    },
    {
        path: "/admin",
        component: Admin,
        name: "admin",
        meta: {
            requiresAuth: true,
        },
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

// router.beforeEach((to, from, next) => {
//     if (to.matched.some((route) => route.meta.requiresAuth) && store.state.user === null) {
//         next({name: 'login'});
//         return;
//     }
//     if (to.path === '/login' && store.state.user != null) {
//         next({name: 'landing'});
//         return;
//     }
//     next();
// });

export default router;