// 判断用户是否登录
export const checkCookie = () => {
    let cookiesStr = document.cookie
    let cookieArr = []
    let cookie = {}
    if (cookiesStr.includes(";")) {
        cookieArr = cookiesStr.split(";")
    } else {
        cookieArr = [cookiesStr]
    }
    cookieArr.map((item) => {
        if (item.includes("=")) {
            let key = item.split("=")[0].replace(/\s/g, "")
            let value = item.split("=")[1]
            cookie[key] = value
        }
    })

    if (cookie.session) {
        return true
    }
    return false
}

// 过滤对象中的null,"",undefined,并返回一个新对象
export const dealObjectValue = (obj) => {
    var param = {}
    if (obj === null || obj === undefined || obj === "") return param
    for (var key in obj) {
        if (Object.prototype.toString.call(obj[key]) === "[object Object]") {
            param[key] = dealObjectValue(obj[key])
        } else if (obj[key] !== null && obj[key] !== undefined && obj[key] !== "") {
            param[key] = obj[key]
        }
    }
    return param
}
