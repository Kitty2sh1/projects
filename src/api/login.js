// 引入request文件
import request from "../utils/request"

// 登录
const getLogin = (data) => {
    return request({
        url: "/api/user/login",
        method: "POST",
        data
    })
}
// 验证码
const getImage=()=>{
    return request({
        url:"/api/sysUser/image",
        method:"POST",
        responseType: 'blob'
    })
}

export default {
    getLogin,     // 登录
    getImage,     // 验证码
}