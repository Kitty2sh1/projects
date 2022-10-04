import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import { getLogin, getLogout } from '@/api/login'
import { setToken, getToken, removeToken } from '@/utils/storage'
// import { Message } from 'element-ui'

import Menu from "./modules/menu"
import getters from "./getters"


export default new Vuex.Store({
  
  state: {
    token: getToken() || "",
    user: ""
  },
  getters: {
    token(state) {
      return state.token
    }
  },
  getters,
  mutations: {
    SET_TOKEN(state, obj) {
      state.token = obj.token
      setToken(obj.token)
    },
    REMOVE_TOKEN(state) {
      removeToken()
    }
  },
  actions: {
    // 登录接口
    async queryLogin({ commit }, str) {
      try {
        const response = await getLogin(str)
        console.log(response);
        commit('SET_TOKEN', response.data)
        return response.data.token
      } catch (error) {
        console.log(error.message);
      }
    },
    // 退出登录
    async queryLogout({ commit }) {
      try {
        const response = await getLogout()
        console.log(response);
        commit('REMOVE_TOKEN')
        return response
      } catch (error) {
        console.log(error.message);
      }
    }
  },
  modules: {
    Menu
  }
})
