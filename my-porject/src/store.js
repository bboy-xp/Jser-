import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    checkResult: [],
    name: "",
    sex: "",
    grade: "",
    college: "",
    major: "",
    phoneNum: "",
    level: "",
    introduce: "",
    otherReason: ""

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
    secondPageData: (state, payload) => {
      state.level = payload.level;
      state.introduce = payload.introduce;
      state.otherReason = payload.otherReason;
    }
  },
  actions: {
    async submit({ state }) {
      // const result= await axios();
      // commit('changeCheckResult', result);
      const data = {
        reason: state.checkResult,
        name: state.name,
        sex: state.sex,
        grade: state.grade,
        college: state.college,
        major: state.major,
        phoneNum: state.phoneNum,
        level: state.level,
        introduce: state.introduce,
        otherReason:state.otherReason
      }
      console.log('走到这里了');
      const result = await fly.post('http://127.0.0.1:7001/postUsermsg', data);
      console.log(result);
    }
  }
})

export default store
