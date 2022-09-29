import routers from "./router"
import store from "./store"


// 页面鉴权
routers.beforeEach((to,from,next)=>{
    const token=store.state.token
    // 存在token
    if(token){
        if(to.path=='/login'){
            next(from.path)
        }else{
            next()
        }
    }else{
        // 不存在token
        if(to.path=='/login'){
            next()
        }else{
            next('/login')
        }
    }
})