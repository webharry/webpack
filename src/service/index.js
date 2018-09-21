import ajax from "@/libs/ajax"
import qs from "qs"

const basePath = "/path"
const path2Path = "/path2"

// 登录
export const login = function (data) {
    return new Promise((resolve, reject) => {
        ajax({
            method: "post",
            headers: {
                "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                "X-Requested-With": "XMLHttpRequest"
            },
            data: qs.stringify(data),
            url: `${basePath}/login`
        }).then(res => {
            if (res.status === 200) {
                resolve(res)
            }
        })
    })
}

// 登出
export const logout = function (data) {
    return new Promise((resolve, reject) => {
        ajax({
            method: "post",
            headers: {
                "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                "X-Requested-With": "XMLHttpRequest"
            },
            data: qs.stringify(data),
            url: `${basePath}/logout`
        }).then(res => {
            if (res.status === 200) {
                resolve(res)
            }
        })
    })
}

// 登录转态判断接口
export const checkLogin = function (params) {
    return new Promise((resolve, reject) => {
        ajax({
            method: "get",
            headers: {
                "X-Requested-With": "XMLHttpRequest"
            },
            params,
            url: `${path2Path}/checkLogin`
        }).then(res => {
            if (res.status === 200) {
                resolve(res.data)
            }
        })
    })
}

// 获取数据列表
export const getDisplayList = function (params) {
    return new Promise((resolve, reject) => {
        ajax({
            method: "get",
            headers: {
                "X-Requested-With": "XMLHttpRequest"
            },
            params,
            url: `${path2Path}/data`
        }).then(res => {
            if (res.status === 200) {
                resolve(res.data)
            }
        })
    })
}
