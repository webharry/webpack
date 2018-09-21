// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue"
import App from "./App"
import { router } from "./router/index"
import iView from "iview"
import "iview/dist/styles/iview.css"
import { checkCookie } from "./libs/util"

Vue.config.productionTip = false

Vue.use(iView)

router.beforeEach((to, from, next) => {
    // 如果没有cookie，一定未登录，跳转到登录页
    if (to.path !== "/login") {
        if (!checkCookie()) {
            next({ path: "/login" })
        } else {
            next()
        }
    } else {
        next()
    }
})

/* eslint-disable no-new */
new Vue({
    el: "#app",
    router,
    components: { App },
    template: "<App/>"
})
