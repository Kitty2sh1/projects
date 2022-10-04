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
const getLoginImg=()=>{
    return request({
        url:'/api/sysUser/image',
        method:"post",
        responseType: 'blob'
    })
}
// 退出登录
const getLogout=()=>{
    return request({
        url:'/api/sysUser/loginOut',
        method:'POST'
    })
}

// 获取菜单列表
const getPermissionList=()=>{
    return request({
        url:'/api/sysUser/getPermissionList',
        method:'GET'
    })
}
export {
    getLogin,     // 登录
    getLoginImg,  // 验证码
    getLogout,    // 退出登录
    getPermissionList,  //获取菜单列表
}