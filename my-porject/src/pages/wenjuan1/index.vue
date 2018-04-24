<template>
    <div class="page">
        <div class="header">
        <div class="box" @click="change(close)">
          <div :class="line1"></div>
          <div :class="line2"></div>
          <div :class="line3"></div>
        </div>
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
            <input class="aswerBox" type="text">
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
            <input class="aswerBox" type="text"  value="东北农业大学" onfocus="if(value=='东北农业大学'){value=''}" onblur="if(value==''){value='东北农业大学'}">
            <div class="question">
                你所在的年级 ：
            </div>
            <div class="radioBox">
                    <radio-group class="radio-group" @change="gradeRadioChange">
                        <label class="radio" v-for="(grade, index) in grades" :key="index">
                            <radio :value="grade.name" :checked="grade.checked"/> {{grade.value}}
                        </label>
                    </radio-group>  
            </div>
            <div class="question">
                你所学的专业 ：
            </div>
            <input class="aswerBox" type="text"  value="电气信息自动化" onfocus="if(value=='电气信息自动化'){value=''}" onblur="if(value==''){value='电气信息自动化'}">
            <div class="question">
                你正在使用的手机号码 ：
            </div>
            <input class="aswerBox" type="text">
            <div class="tip">
                非常重要，我们需要通过手机号码通知你申请结果
            </div>
            <div class="joinBtn">
                下一步
            </div>
        </div>
        
    </div>
</template>
<script>
export default {
  data() {
    return {
      sexs: [
        { name: "sex", value: "男生", checked: "true" },
        { name: "sex", value: "女生" }
      ],
      grades: [
        { name: "grade", value: "大一", checked: "true" },
        { name: "grade", value: "大二" },
        { name: "grade", value: "大三" },
        { name: "grade", value: "大四" },
        { name: "grade", value: "研究生" },
        { name: "grade", value: "已毕业" }
      ],
      line1: "line",
      line2: "line",
      line3: "line",
      close: true
    };
  },
  methods: {
    change(close) {
      this.close = !this.close;
      if (close) {
        this.line1 = "line one";
        this.line2 = "line two";
        this.line3 = "line three";
      } else {
        this.line1 = "line2 one2";
        this.line2 = "line2 two2";
        this.line3 = "line2 three2";
      }
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
  height: 142rpx;
  width: 100vw;
  /* background-color: red; */
  box-shadow: 0 2rpx 150rpx 0 rgba(207, 207, 207, 0.7);
}
.contain {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 51rpx;
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
}
.radioBox {
  margin-top: 30rpx;
  font-size: 32rpx;
  display: flex;
  /* margin-top: 20rpx; */
}
.radio {
    margin-right: 100rpx;
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

</style>

