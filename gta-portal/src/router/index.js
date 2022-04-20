import { createWebHistory, createRouter } from 'vue-router'
import Register from '@/components/Views/Register/Register'
import InfoPage from "@/components/Views/Info/InfoPage"
import HomePage from "@/components/Views/Home/HomePage"
import AppPage from "@/components/Views/Application/AppPage"
import LoginPage from "@/components/Views/Login/LoginPage"
import StudentPage from "@/components/Views/Student/StudentPage"
import Admin from "@/components/Views/Admin/Admin"
// import store from "/src/store/store"
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
        component: LoginPage
    },
    {
        path: "/AppPage",
        component: AppPage,
        meta: {
            requiresAuth: true,
        },
    },
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

// router.beforeEach((to, from, next) => {
//     if (to.matched.some((route) => route.meta.requiresAuth) && store.state.user === null) {
//         next({name: 'login'});
//         return;
//     }
//     if (to.path === '/login' && store.state.user != null) {
//         next({name: 'student'});
//         return;
//     }
//     next();
// });

export default router;