import Vue from 'vue'
import Vuex from 'vuex'

const Fly = require('flyio');
const fly = new Fly();

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    openId:'',
    checkResult: [],
    name: "",
    sex: "",
    grade: "",
    college: "",
    major: "",
    phoneNum: "",
    level: "",
    introduce: "",
    otherReason: "",
  },
  getters: {
    // showInput(state) {
    //   console.log('触发 showInput() getters');
    //   const findResult = state.checkResult.find((e) => {
    //     if (e === 'reason4') {
    //       return e;
    //     }
    //   });

    //   return findResult ? true : false;
    // }
  },
  mutations: {
    openIdChange: (state, payload) => {
      state.openId = payload;
    },
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
    changeShowInput(state, payload) {
      state.showInput = payload;
    }
  },
  actions: {
    async submit({ state }) {
      // const result= await axios();
      // commit('changeCheckResult', result);
      const data = {
        openId: state.openId,
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
      console.log(data);
      // const result = await fly.post('http://sxp.topsxp.top:7001/postUsermsg', data);
      const result = await fly.post('http://hook.feit.me/postUsermsg', data);
      if(result.data == 'ok'){
        wx.showModal({
          title: '提示',
          content: '提交成功',
          showCancel: false,
          success: function (res) {
            wx.redirectTo({
              url: '../home/main'
            });
          }
        });
      }
      // console.log('走到这里了');
      // console.log(result);
    }
  }
})

export default store
