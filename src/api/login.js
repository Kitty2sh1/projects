// 引入request文件
import request from "../utils/request"

const getLogin = (data) => {
    return request({
        url: "/api/user/login",
        method: "POST",
        data
    })
}

export default {
    getLogin
}