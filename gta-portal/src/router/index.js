// import Vue from "vue";
// import Router from "vue-router";
import { createWebHistory, createRouter } from 'vue-router'
import LoginPage from '@/components/Views/LoginPage'
import RegistrationPage from '@/components/Views/Home/RegistrationPage'
import Show from "@/components/Views/Home/Show"

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
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
