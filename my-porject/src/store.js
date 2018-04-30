import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    checkResult: [],
    name: "",
    sex:"",
    grade: "",
    college: "",
    major: "",
    phoneNum :""
  },
  mutations: {
    changeCheckResult: (state, payload) => {
      state.checkResult = payload;
    },
    firstPageData: (state, payload) => {
      state.name = payload.name;
      state.sex = payload.sex;
      state.grade = payload.grade;
      state.college = payload.college;
      state.major = payload.major;
      state.phoneNum = payload.phoneNum;
    },
  },
//   actions: {
//     async changeSth ({ state, commit }, payload) {
//       const result= await axios();
//       commit('changeCheckResult', result);
//     }
//   }
})

export default store
