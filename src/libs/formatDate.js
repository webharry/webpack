/* 时间格式化的函数
    @param time : 传入的时间，可以为字符串或时间戳
    @param type : 转换后的格式
        date:   yyyy-MM-dd
        time:   HH:mm:ss
        date:   yyyy-MM-dd HH:mm:ss
    @param mark : 当包含date模块时，年月日之间的分割符
 */
export const timeFormat = (time, type, mark) => {
    if (!time) {
        return ""
    }
    let date = new Date(time)
    let year = date.getFullYear()
    let month = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1
    let day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate()
    let hour = date.getHours() < 10 ? "0" + date.getHours() : date.getHours()
    let minute = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()
    let seconds = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds()

    let dateStr = year + "-" + month + "-" + day
    let timeStr = hour + ":" + minute + ":" + seconds
    let hourStr = hour + ":" + minute

    if (mark !== undefined) {
        dateStr = year + mark + month + mark + day
    }
    switch (type) {
    case "date":
        return dateStr
    case "time":
        return timeStr
    case "hour":
        return hourStr
    case "datetime":
    default:
        return dateStr + " " + timeStr
    }
}

export const timeGreet = (time) => {
    let date = new Date(time)
    let hour = date.getHours()

    if (0 <= hour && hour < 6) {
        return "Good night"
    } else if (6 <= hour && hour < 12) {
        return "Good morning"
    } else if (12 <= hour && hour < 19) {
        return "Good afternoon"
    } else if (19 <= hour && hour < 23) {
        return "Good evening"
    } else {
        return "Good night"
    }
}
