import Vue from "vue"
import Router from "vue-router"
import Main from "@/page/Main.vue"

Vue.use(Router)

export const router = new Router({
    routes: [
        {
            path: "/login",
            name: "login",
            component: () => import("@/page/login.vue")
        },
        {
            path: "/",
            name: "main",
            component: Main,
            children: [
                {
                    path: "business",
                    name: "business",
                    component: () => import("@/page/business/index.vue")
                },
                {
                    path: "*",
                    redirect: { name: "business" }
                }
            ]
        }
    ]
})
