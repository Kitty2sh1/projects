import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import { getLogin } from '@/api/login'
import { setToken, getToken } from '@/utils/storage'

export default new Vuex.Store({
  state: {
    token: getToken() || "",
    user:""
  },
  getters: {
    token(state){
      return state.token
    }
  },
  mutations: {
    SET_TOKEN(state, obj) {
      state.token = obj.token
      setToken(obj.token)
    }
  },
  actions: {
    // 登录接口
    async queryLogin({ commit }, str) {
      try {
        const response = await getLogin(str)
        console.log(response);
        commit('SET_TOKEN', response.data)
      } catch (error) {
        console.log(error.message);
      }
    },
  },
  modules: {
  }
})
