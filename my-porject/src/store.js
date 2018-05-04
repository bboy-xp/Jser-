import Vue from 'vue'
import Vuex from 'vuex'

const Fly = require('flyio');
const fly = new Fly();

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
    nameChange: (state, payload) => {
      state.name = payload;
    },
    collegeChange: (state, payload) => {
      state.college = payload;
    },
    majorChange: (state, payload) => {
      state.major = payload;
    },
    phoneNumChange: (state, payload) => {
      state.phoneNum = payload;
    },
    sexRadioChange: (state, payload) => {
      state.sex = payload;
    },
    gradeRadioChange: (state, payload) => {
      state.grade = payload;
    },
    changeCheckResult: (state, payload) => {
      state.checkResult = payload;
    },
    // firstPageData: (state, payload) => {
    //   state.name = payload.name;
    //   state.sex = payload.sex;
    //   state.grade = payload.grade;
    //   state.college = payload.college;
    //   state.major = payload.major;
    //   state.phoneNum = payload.phoneNum;
    // },
    levelRadioChange: (state, payload) => {
      state.level = payload;
    },
    introduceChange: (state, payload) => {
      state.introduce = payload;
    },
    otherReasonChange: (state, payload) => {
      state.otherReason = payload;
    },
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
      const result = await fly.post('http://127.0.0.1:7001/postUsermsg', data);
      if(result.data == 'ok'){
        wx.showModal({
          title: '提示',
          content: '提交成功',
          showCancel: false
        })
      }
      // console.log('走到这里了');
      // console.log(result);
    }
  }
})

export default store
