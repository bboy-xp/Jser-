import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    checkResult: [],
  },
  mutations: {
    changeCheckResult: (state, payload) => {
      state.checkResult = payload;
    }
  },
  actions: {
    async changeSth ({ state, commit }, payload) {
      const result= await axios();
      commit('changeCheckResult', result);
    }
  }
})

export default store
