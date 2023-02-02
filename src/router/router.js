import {createRouter, createWebHistory} from "vue-router";
import StepPage from "@/pages/StepPage"
import MainPage from "@/pages/MainPage"

const routes = [
    {
        path: '/',
        component: MainPage
    },
    {
        path: '/step/:id',
        component: StepPage
    },
   
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router
