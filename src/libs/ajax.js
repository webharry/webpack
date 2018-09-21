import axios from "axios"
import { router } from "@/router/index"
import Vue from "vue"
import { checkCookie } from "@/libs/util"

const vm = new Vue()

const ajax = axios.create()

ajax.defaults.timeout = 5000

// Add a request interceptor
ajax.interceptors.request.use(function (config) {
    if (!checkCookie()) {
        router.push({ path: "/login" })
    }
    return config
}, function (error) {
    return Promise.reject(error)
})

// Add a response interceptor
ajax.interceptors.response.use(function (response) {
    // 5000 服务器错误  1004 错误信息1  1000 信息不存在2 1200 用户未登录 1300 登录密码错误
    if (~[1200, 5000, 1004, 1000, 1300].indexOf(response.data.code)) {
        if (!document.querySelector(".ivu-message-notice")) {
            vm.$Message.error(response.data.msg)
        }
    }
    if (response.data.code === 1200) {
        router.push({ path: "/login" })
    }

    return response
}, function (error) {
    return Promise.reject(error)
})

export default ajax
