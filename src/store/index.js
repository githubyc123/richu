import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  //状态值
  state: {
    wd:''
  },
  //修改状态值
  mutations: {
    updateUser(state,wd){
      state.wd=wd
    }
  },
  //异步操作
  actions: {},
  //计算属性
  getters:{},
  //拆分合并
  modules: {},
})
