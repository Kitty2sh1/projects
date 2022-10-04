import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  // 登录页面
  {
    path: "/login",
    name: "login",
    component: () => import('../views/Login')
  },
  {
    path: "/",
    name: "index",
    redirect:'/home',
    component: () => import('../layout'),
    children: [
      {
        path:'/home',
        name:'home',
        component:()=>import('../layout/home')
      },
      // 系统管理
      {
        path: "system",
        name: "system",
        component: () => import('../views/system'),
        children: [
          {
            path: "departmentList",
            name: "departmentList",
            component: () => import('../views/system/children/department'),
            meta: {
              title: '机构管理'
            }
          },
          {
            path: "menuList",
            name: "menuList",
            component: () => import('../views/system/children/menuList'),
            meta: {
              title: '权限管理'
            }
          },
          {
            path: "roleList",
            name: "roleList",
            component: () => import('../views/system/children/roleList'),
            meta: {
              title: '角色管理'
            }
          },
          {
            path: "userList",
            name: "userList",
            component: () => import('../views/system/children/userList'),
            meta: {
              title: '用户管理'
            }
          }
        ]
      },
      // 商品管理
      {
        path: "goods",
        name: "goods",
        component: () => import('../views/goods'),
        children: [
          {
            path: "goodCategory",
            name: "goodCategory",
            component: () => import('../views/goods/children/goodCategory'),
            meta: {
              title: '分类管理'
            }
          },
          {
            path: "goodsBrand",
            name: "goodsBrand",
            component: () => import('../views/goods/children/goodsBrand'),
            meta: {
              title: '品牌管理'
            }
          }
        ]
      },
      // 系统工具
      {
        path: "systenConfig",
        name: "systenConfig",
        component: () => import('../views/systenConfig'),
        children: [
          {
            path: "systemCode",
            name: "systemCode",
            component: () => import('../views/systenConfig/children/systemCode'),
            meta: {
              title: '日志管理'
            }
          },
          {
            path: "document",
            name: "document",
            component: () => import('../views/systenConfig/children/document'),
            meta: {
              title: '接口文档'
            }
          }
        ]
      }
    ]
  },
]

const router = new VueRouter({
  routes
})

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch(err => err)
}


export default router
