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
const getLoginImg=()=>{
    return request({
        url:'/api/sysUser/image',
        method:"post",
        responseType: 'blob'
    })
}

export {
    getLogin,     // 登录
    getLoginImg,     // 验证码
}