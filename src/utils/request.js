// 引入axios
import axios from "axios"
// 提示
import { Loading } from "element-ui";

// 创建axios实例
const instance = axios.create({
    baseURL: process.env.VUE_BASE_API,  //基准地址
    timeout: 3000  //超时时间
});

var loading;
// 拦截器
// 添加请求拦截器
instance.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    loading = Loading.service({
        lock: true,
        text: '拼命加载中...',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
    })
    return config;
}, function (error) {
    // 对请求错误做些什么
    loading.close()
    return Promise.reject(error);
});

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    loading.close()
    return response;
}, function (error) {
    // 对响应错误做点什么
    loading.close()
    return Promise.reject(error);
});
export default instance;