import { createWebHistory, createRouter } from 'vue-router'
import LoginPage from '@/components/Views/Login/LoginPage'
import RegistrationPage from '@/components/Views/Home/RegistrationPage'
import Show from "@/components/Views/Home/Show"
import StudentPage from '@/components/Views/Student/StudentPage'
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
        path: "/student",
        component: StudentPage
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;