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
              <div class="optionText">首页</div>
              <div class="optionText selectedOption">课程简介</div>
              <div class="optionText">学习里程</div>
              <div class="optionText">学员故事</div>
              <div class="optionText">关于我们</div>
              <div @click="gotoHome" class="optionText">现在报名</div>
          </div>
          <div class="hot">HOT</div>
      </div>
        <div class="contain">
            <div class="title">
                让我们更了解你
            </div>
            <div class="threeLine">
                <div class="redline lineColor1"></div>
                <div class="redline lineColor2"></div>
                <div class="redline lineColor3"></div>
            </div>
            <div class="question">
                你对计算机操作的熟练程度是？
            </div>
            <div class="radioBox">
                    <radio-group class="radio-group" @change="levelRadioChange">
                        <label class="radio radioStyle" v-for="(level, index) in levels" :key="index">
                            <radio :value="level.name" :checked="level.checked"/> {{level.value}}
                        </label>
                    </radio-group>  
            </div>
            <div class="question">
                你参加Jser训练营的原因是？
            </div>
            <div class="checkBox">
                <checkbox-group class="checkbox-group" @change="checkboxChange">
                    <label class="checkbox checkboxStyle" v-for="(reason, index) in reasons" :key="index">
                        <checkbox :value="reason.name" :checked="reason.checked"/> {{reason.value}}
                    </label>
                </checkbox-group> 
                <input v-model="otherReason" class="aswerBox" type="text">
            </div>
            <div class="question">
                介绍一下你自己，说说你的兴趣爱好以及在大学的理想和成就<span class="note">（140字以上）</span>
            </div>
            <textarea v-model="introduce" class="introduce" maxlength="400"></textarea>
            <div class="joinBtn" @click="submit">
                提交
            </div>
        </div>
        
    </div>
</template>
<script>
import store from '@/store';

export default {
  data() {
    return {
      levels: [
        { name: "level0", value: "纯小白基本只会开机" },
        { name: "level1", value: "会基本的文档，表格，PPT的编辑操作" },
        { name: "level2", value: "熟练使用Office、Adobe等软件" },
        { name: "level3", value: "上天入地，无所不能" }
      ],
      reasons: [
        { name: "reason0", value: "想提升自己的职业技能" },
        { name: "reason1", value: "想从事互联网相关工作" },
        { name: "reason2", value: "对互联网、电子产品有浓厚兴趣" },
        { name: "reason3", value: "想认识更多兴趣相投的校友" },
        { name: "reason4", value: "我还有其他的原因*" }
      ],
      line1: "line",
      line2: "line",
      line3: "line",
      menu: "menu",
      header: "header",
      close: true,
      show: false,
      otherReason: "",
      introduce: "",
      level: "",
      reasonArr: []
    };
  },
  mounted() {
    // setInterval(() => {
    //   console.log(store.state.checkResult);
    //   console.log(store.state.name,
    //   store.state.major,
    //   store.state.grade,
    //   store.state.sex,
    //   store.state.  phoneNum,
    //   store.state.college);
    // }, 1000); 
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
    levelRadioChange(e) {
      this.level = e.target.value;
      switch (e.target.value) {
        case "level0":
          this.$set(this.levels, 0, { name: "level0", value: "纯小白基本只会开机", checked: true });
          this.$set(this.levels, 1, { name: "level1", value: "会基本的文档，表格，PPT的编辑操作", checked: false });
          this.$set(this.levels, 2, { name: "level2", value: "熟练使用Office、Adobe等软件", checked: false });
          this.$set(this.levels, 3, { name: "level3", value: "上天入地，无所不能", checked: false });
          break;
        case "level1":
          this.$set(this.levels, 0, { name: "level0", value: "纯小白基本只会开机", checked: false });
          this.$set(this.levels, 1, { name: "level1", value: "会基本的文档，表格，PPT的编辑操作", checked: true });
          this.$set(this.levels, 2, { name: "level2", value: "熟练使用Office、Adobe等软件", checked: false });
          this.$set(this.levels, 3, { name: "level3", value: "上天入地，无所不能", checked: false });
          break;
        case "level2":
          this.$set(this.levels, 0, { name: "level0", value: "纯小白基本只会开机", checked: false });
          this.$set(this.levels, 1, { name: "level1", value: "会基本的文档，表格，PPT的编辑操作", checked: false });
          this.$set(this.levels, 2, { name: "level2", value: "熟练使用Office、Adobe等软件", checked: true });
          this.$set(this.levels, 3, { name: "level3", value: "上天入地，无所不能", checked: false });
          break;
        case "level3":
          this.$set(this.levels, 0, { name: "level0", value: "纯小白基本只会开机", checked: false });
          this.$set(this.levels, 1, { name: "level1", value: "会基本的文档，表格，PPT的编辑操作", checked: false });
          this.$set(this.levels, 2, { name: "level2", value: "熟练使用Office、Adobe等软件", checked: false });
          this.$set(this.levels, 3, { name: "level3", value: "上天入地，无所不能", checked: true });
          break;
      }
    },
    checkboxChange(e) {
      store.commit('changeCheckResult', e.target.value);
      // store.dispatch('changeSth', data)
    },
    submit() {
      var data = {
        level: this.level,
        introduce: this.introduce,
        otherReason: this.otherReason
      } 
      data.name = store.state.name;
      data.sex = store.state.sex;
      data.grade = store.state.grade;
      data.major = store.state.major;
      data.college = store.state.college;
      data.phoneNum = store.state.phoneNum;
      data.reason = store.state.checkResult;
      console.log(data);
      // localStorage.data = JSON.stringify(data);
      // console.log(localStorage.data);
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
  background-color: rgb(254, 36, 80);
  border-top: solid 4rpx rgb(254, 36, 80);
}
.lineColor3 {
  background-color: rgb(255, 199, 211);
  border-top: solid 4rpx rgb(255, 199, 211);
}
.question {
  margin-top: 70rpx;
  font-size: 38rpx;
  font-weight: bold;
}
.aswerBox {
  border-bottom: 1px solid rgb(207, 207, 207);
  width: 530rpx;
  margin: auto;
  margin-top: 30rpx;
}
.radioBox {
  margin-top: 30rpx;
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
.radioStyle {
  display: block;
  margin-top: 30rpx;
  font-size: 30rpx;
  color: rgb(74, 74, 74);
}
.checkboxStyle {
  display: block;
  margin-top: 30rpx;
  font-size: 30rpx;
  color: rgb(74, 74, 74);
}
.note {
  font-size: 32rpx;
  color: rgb(155, 155, 155);
}
.introduce {
  height: 340rpx;
  width: 640rpx;
  margin-top: 30rpx;
  border: 2rpx solid rgb(214, 214, 214);
  border-radius: 28rpx;
  padding: 10rpx;
  font-size: 30rpx;
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

