<template>
    <div class="page">
      <div :class="header">
        <div class="box" @click="change(close)">
          <div :class="line1"></div>
          <div :class="line2"></div>
          <div :class="line3"></div>
        </div>
      </div>
      <div :class="menu" v-if="show">
          <div class="options">
              <div class="optionText" @click="gotoHome">首页</div>
              <div class="optionText selectedOption" @click="gotoWenan">课程简介</div>
              <div class="optionText" @click="noGoto">学习里程</div>
              <div class="optionText" @click="noGoto">学员故事</div>
              <div class="optionText" @click="noGoto">关于我们</div>
              <div class="optionText" @click="noGoto">现在报名</div>
          </div>
          <div class="hot">HOT</div>
      </div>
      <div class="contain">
          <div class="title">
              你的基本信息
          </div>
          <div class="threeLine">
              <div class="redline lineColor1"></div>
              <div class="redline lineColor2"></div>
              <div class="redline lineColor3"></div>
          </div>
          <div class="question">
              姓名 ：
          </div>
          <input :value="name" class="aswerBox" type="text" @change="nameChange">
          <div class="question">
              你是 ：
          </div>
          <div class="radioBox">
                  <radio-group class="radio-group" @change="sexRadioChange">
                      <label class="radio" v-for="(sex, index) in sexs" :key="index">
                          <radio :value="sex.name" :checked="sex.checked"/> {{sex.value}}
                      </label>
                  </radio-group>  
          </div>
          <div class="question">
              你所在的学校或单位 ：
          </div>
          <input :value="college" @change="collegeChange" class="aswerBox" type="text">
          <div class="question">
              你所在的年级 ：
          </div>
          <div class="radioBox">
                  <radio-group class="radio-group" @change="gradeRadioChange">
                    <div class="radio" v-for="(grade, index) in grades" :key="index">
                      <label>
                        <radio :value="grade.name" :checked="grade.checked"/> {{grade.value}}
                      </label>
                    </div>
                  </radio-group>  
          </div>
          <div class="question">
              你所学的专业 ：
          </div>
          <input :value="major" @change="majorChange" class="aswerBox" type="text" >
          <div class="question">
              你正在使用的手机号码 ：
          </div>
          <input :value="phoneNum" @change="phoneNumChange" class="aswerBox" type="text">
          <div class="tip">
              非常重要，我们需要通过手机号码通知你申请结果
          </div>
          <div class="joinBtn" @click="nextPage">
              下一步
          </div>
      </div>
        
    </div>
</template>
<script>
import store from "@/store";
export default {
  data() {
    return {
      sexs: [{ name: "男生", value: "男生" }, { name: "女生", value: "女生" }],
      grades: [
        { name: "大一", value: "大一" },
        { name: "大二", value: "大二" },
        { name: "大三", value: "大三" },
        { name: "大四", value: "大四" },
        { name: "研究生", value: "研究生" },
        { name: "已毕业", value: "已毕业" }
      ],
      line1: "line",
      line2: "line",
      line3: "line",
      menu: "menu",
      header: "header",
      close: true,
      show: false,
      name: "",
      phoneNum: "",
      sex: "",
      grade: "",
      major: "",
      college: ""
    };
  },
  watch: {
    // sexs: function() {
    //   console.log(1);
    // }
  },
  mounted() {
    // setInterval(() => {
    //   console.log(store.state.checkResult);
    //   console.log(store.state.name,
    //   store.state.major,
    //   store.state.grade,
    //   store.state.sex,
    //   store.state.phoneNum,
    //   store.state.college,
    //   store.state.level,
    //   store.state.introduce,
    //   store.state.otherReason,);
    // }, 1000); 
    // console.log(this);
    this.name = store.state.name;
    this.major = store.state.major;
    this.college = store.state.college;
    this.phoneNum = store.state.phoneNum;
    for (let i = 0; i < this.sexs.length; i++) {
      if (store.state.sex == this.sexs[i].name) {
        // console.log("ok");
        // console.log(this.sexs[i]);
        this.sexs[i].checked = true;
      }
    }
    for (let i = 0; i < this.grades.length; i++) {
      if (store.state.grade == this.grades[i].name) {
        // console.log("ok");
        // console.log(this.grades[i]);
        this.grades[i].checked = true;
      }
    }
  },
  methods: {
    timeout() {
      return new Promise(resolve => {
        setTimeout(resolve, 300);
      });
    },
    async change(close) {
      this.close = !this.close;

      if (close) {
        this.line1 = "line one";
        this.line2 = "line two";
        this.line3 = "line three";
        this.header = "header2";
        this.show = !this.show;
        this.menu = "menu1 jumpDown";
      } else {
        this.line1 = "line2 one2";
        this.line2 = "line2 two2";
        this.line3 = "line2 three2";
        this.menu = "menu jumpUp";
        await this.timeout();
        this.show = !this.show;
        this.header = "header";
      }
    },
    nextPage() {
      let data = {};
      data.name = this.name;
      data.college = this.college;
      data.major = this.major;
      data.phoneNum = this.phoneNum;
      data.sex = this.sex;
      data.grade = this.grade;
      wx.navigateTo({
        url: "../wenjuan2/main"
      });

    },
    //将第一页的数据存入vuex
    nameChange(e) {
      store.commit('nameChange',e.target.value);
    },
    collegeChange(e) {
      store.commit('collegeChange',e.target.value);
    },
    majorChange(e) {
      store.commit('majorChange',e.target.value);
    },
    phoneNumChange(e) {
      store.commit('phoneNumChange',e.target.value);
    },
    sexRadioChange(e) {
      store.commit('sexRadioChange',e.target.value);
     
    },

    gradeRadioChange(e) {
      store.commit('gradeRadioChange',e.target.value);

    },
    async gotoHome() {
      this.line1 = "line2 one2";
      this.line2 = "line2 two2";
      this.line3 = "line2 three2";
      this.menu = "menu jumpUp";
      await this.timeout();
      this.show = !this.show;
      this.header = "header";
      //将close恢复初始值，防止动画混乱
      this.close = true;

      wx.redirectTo({
        url: '../home/main'
      });
    },
    async gotoWenan() {
      this.line1 = "line2 one2";
      this.line2 = "line2 two2";
      this.line3 = "line2 three2";
      this.menu = "menu jumpUp";
      await this.timeout();
      this.show = !this.show;
      this.header = "header";
      //将close恢复初始值，防止动画混乱
      this.close = true;

      wx.redirectTo({
        url: '../wenan/main'
      });
    },
    async noGoto() {
      this.line1 = "line2 one2";
      this.line2 = "line2 two2";
      this.line3 = "line2 three2";
      this.menu = "menu jumpUp";
      await this.timeout();
      this.show = !this.show;
      this.header = "header";
      //将close恢复初始值，防止动画混乱
      this.close = true;
    }
  }
};
</script>
<style scoped>
.page {
  display: flex;
  flex-direction: column;
}
.header {
  z-index: 11;
  height: 142rpx;
  width: 100vw;
  /* background-color: red; */
  box-shadow: 0 2rpx 150rpx 0 rgba(207, 207, 207, 0.7);
  position: fixed;
  background-color: #fff;
}
.header2 {
  z-index: 11;
  height: 142rpx;
  width: 100vw;
  /* background-color: red; */

  position: fixed;
  background-color: #fff;
}
.contain {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 193rpx;
  margin: 0 42rpx;
}
.title {
  font-size: 60rpx;
  font-weight: bold;
  margin-bottom: 20rpx;
}
.redline {
  height: 2rpx;
  width: 70rpx;
  margin-right: 10rpx;
  display: inline-block;
}
.lineColor1 {
  background-color: rgb(254, 36, 80);
  border-top: solid 4rpx rgb(254, 36, 80);
}
.lineColor2 {
  background-color: rgb(255, 199, 211);
  border-top: solid 4rpx rgb(255, 199, 211);
}
.lineColor3 {
  background-color: rgb(255, 199, 211);
  border-top: solid 4rpx rgb(255, 199, 211);
}
.question {
  margin-top: 70rpx;
  font-size: 40rpx;
  font-weight: bold;
}
.aswerBox {
  border-bottom: 1px solid rgb(207, 207, 207);
  width: 530rpx;
  margin-top: 30rpx;
  font-size: 36rpx;
}
.radioBox {
  margin-top: 30rpx;
  font-size: 32rpx;
  display: flex;
  /* margin-top: 20rpx; */
}
.radio {
  display: inline-block;
  width: 220rpx;
  /* margin-top: 20rpx; */
}
/* .gradeStyle{
    display: flex;
    justify-content: space-around;
} */
.tip {
  margin-top: 20rpx;
  color: rgb(254, 36, 80);
  font-size: 25rpx;
}
.joinBtn {
  height: 100rpx;
  width: 40vw;
  margin: auto;
  margin-top: 90rpx;
  margin-bottom: 70rpx;
  /* -webkit-linear-gradient: (top,rgb(255,50,98),rgb(50,255,228)); */
  /* -webkit-gradient:(linear, 0% 0%, 0% 100%, from(#ff6600), to(#339900));  */
  background: radial-gradient(
    at 5% 110%,
    rgb(252, 154, 174),
    rgb(255, 0, 51) 80%
  );
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100rpx;
  font-size: 45rpx;
  box-shadow: 0 25rpx 50rpx 0 rgba(254, 111, 140, 0.5);
}

@keyframes one {
  0% {
    width: 50rpx;
    background: red;
  }

  100% {
    width: 0px;
    background: red;
  }
}
@keyframes one2 {
  0% {
    width: 0px;
    background: red;
  }

  100% {
    width: 50rpx;
    background: red;
  }
}

@keyframes two {
  0% {
    width: 50rpx;
    background: red;
  }

  100% {
    width: 50rpx;
    background: red;
    -webkit-transform: rotate(135deg);
  }
}
@keyframes two2 {
  0% {
    width: 50rpx;
    background: red;
    -webkit-transform: rotate(135deg);
  }

  100% {
    width: 50rpx;
    background: red;
  }
}
@keyframes three {
  0% {
    width: 50rpx;
    background: red;
  }

  100% {
    width: 50rpx;
    background: red;
    transform: rotate(45deg) translate(-13rpx, -13rpx);
    /* -webkit-transform-origin: center; */
    /* -webkit-transform: translate(50px,50rpx); */
  }
}
@keyframes three2 {
  0% {
    width: 50rpx;
    background: red;
    transform: rotate(45deg) translate(-13rpx, -13rpx);
  }

  100% {
    width: 50rpx;
    background: red;
  }
}

.line {
  margin-top: 14rpx;
  width: 50rpx;
  height: 10rpx;
  background: red;
  color: #fff;
  border-radius: 8px;
}
.line2 {
  margin-top: 14rpx;
  width: 50rpx;
  height: 10rpx;
  background: white;
  color: #fff;
  border-radius: 8px;
}

.box {
  display: flex;
  flex-direction: column;
  width: 50rpx;
  margin: 50rpx 0rpx 0rpx 40rpx;
}

.one {
  animation: one 500ms ease 0.5ms forwards;
}
.one2 {
  animation: one2 500ms ease 0.5ms forwards;
}

.two {
  animation: two 500ms ease 0.5ms forwards;
}
.two2 {
  animation: two2 500ms ease 0.5ms forwards;
}

.three {
  animation: three 500ms ease 0.5ms forwards;
}
.three2 {
  animation: three2 500ms ease 0.5ms forwards;
}

.menu {
  z-index: 10;
  flex: 1;
  display: flex;

  flex-direction: column;
  justify-content: center;
  padding-top: 100rpx;
  height: 100%;
  width: 100%;
  position: fixed;
  background-color: rgb(255, 255, 255);
}
.menu1 {
  z-index: 10;
  flex: 1;
  display: flex;
  top: -5000rpx;
  flex-direction: column;
  justify-content: center;
  padding-top: 100rpx;
  height: 100%;
  width: 100%;
  position: fixed;
  background-color: rgb(255, 255, 255);
}
/* .menuTab-enter-active {
  animation: jumpDown .5s;
}
.menuTab-leave-active {
  animation: jumpDown .5s reverse;
} */

@keyframes jumpDown {
  0% {
    top: -1500rpx;
  }

  100% {
    top: 0rpx;
  }
}
@keyframes jumpUp {
  0% {
    top: 0rpx;
  }

  100% {
    top: -1500rpx;
  }
}
.jumpDown {
  animation: jumpDown 500ms ease 0.5ms forwards;
}

.jumpUp {
  animation: jumpUp 500ms ease 0.5ms forwards;
}
.optionText {
  display: flex;
  align-items: center;
  font-size: 40rpx;
  padding-left: 120rpx;
  height: 150rpx;
  width: 472rpx;
  font-weight: bold;
}
.selectedOption {
  background: radial-gradient(
    at 5% 110%,
    rgb(252, 154, 174),
    rgb(255, 0, 51) 80%
  );
  color: white;
}
.hot {
  font-size: 20rpx;
  color: white;
  width: 82rpx;
  height: 37rpx;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(254, 36, 80);
  border-radius: 37rpx;
  position: relative;
  bottom: 92rpx;
  left: 300rpx;
}
.options {
  z-index: 20;
}
</style>

