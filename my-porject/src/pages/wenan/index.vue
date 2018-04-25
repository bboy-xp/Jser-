<template>
  <div class="page">
      <div :class="header">
        <div class="box" @click="change(close, show)" >
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
              <div @click="gotoJoin" class="optionText">现在报名</div>
          </div>
          <div class="hot">HOT</div>
      </div>
      <div class="contain">
          <div class="title">
              学习最实用的互联网工具
          </div>
          <div class="text">
            在Jser你将从基本的HTML、CSS的网页语言开始学习，并掌握当下最主流的编程语言JavaScript，以及jQuery、Vue.js等实用框架来打造高级前端界面。最后你将学习到Node.js、Mongo数据库等后端知识，打造属于你的应用程序！
            <a class="link" href="http://">了解详细学习里程...</a>
          </div>
          <img src="../../../static/pic/1.png" class="pic">
          <div class="title">
            突破传统的教学方式
          </div>
          <div class="text">
            知识是无尽的，所以Jser不会单方面灌输知识、更不会手把手教你敲代码，而是通过实战项目培养你独立解决问题的能力。在Jser你不需要背诵任何课本，也不需要经历任何考试，你的创造力和学习能力是评价你的唯一标准！
          </div>
          <img src="../../../static/pic/2.png" class="pic">
          <div class="title">
            结交志同道合的伙伴
          </div>
          <div class="text">
            在Jser你会遇到校园内的技术高手、创业青年和设计大神，你有机会与他们一起合作项目、切磋技术，共同提升能力。在Jser你还能拓展你的未来职业交际圈，获得更多实习及工作机会！
            <a class="link" href="http://">了解更多有趣的学员故事...</a>
          </div>
          <img src="../../../static/pic/3.png" class="pic">
          <div class="title">
            为你量身定做的学习社区
          </div>
          <div class="text">
            Jser俱乐部的所有成员和学员每天都在由我们独立开发的Jim上答疑解惑、交流心得、共享实用资源和工作机会。Jim学习社区就像Jser俱乐部的线上大本营，每个Jser成员都在这里见证你的成长！
            <a class="link" href="http://">现在加入我们的社区...</a>
          </div>
          <img src="../../../static/pic/4.png" class="pic">
          <div class="title">
            先人一步打造你的职业简历
          </div>
          <div class="text">
            Jser的学员简历系统会记录你在Jser进步的每一个脚步，并把你所有的实战项目、开发经历整合成属于你的个人简历，让你为职场做好充分准备！
          </div>
          <img src="../../../static/pic/5.png" class="pic specialPic">
          <div class="joinBtn" @click="gotoJoin">
            现在申请        训练营
          </div>
      </div>
      
  </div>
</template>
<script>
export default {
  data() {
    return {
      line1: "line",
      line2: "line",
      line3: "line",
      menu: "menu",
      header: "header",
      close: true,
      show: false
    };
  },
  methods: {
    timeout() {
      return new Promise(resolve => {
        setTimeout(resolve, 300);
      })
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
    gotoJoin() {
      wx.navigateTo({
        url: '../wenjuan1/main'
      });
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
  text-align: center;
  padding-top: 193rpx;
  margin: 0 105rpx;
  /* -webkit-filter: blur(10px); */
}
.title {
  font-size: 47rpx;
  font-weight: bold;
}
.text {
  margin-top: 20rpx;
  margin-bottom: 50rpx;
  font-size: 31rpx;
  line-height: 48rpx;
  color: rgb(51, 51, 51);
  font-weight: thin;
  text-align: justify;
}
.link {
  display: inline;
  color: rgb(254, 36, 80);
  text-decoration-line: underline;
}
.pic {
  height: 293rpx;
  width: 390rpx;
  margin: auto;
  margin-bottom: 80rpx;
}
.specialPic {
  margin-bottom: 270rpx;
}
.joinBtn {
  height: 100rpx;
  width: 72vw;
  margin: auto;
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
  position: fixed;
  bottom: 70rpx;
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
  box-shadow: 0 2rpx 150rpx 0 rgba(207, 207, 207, 0.7);
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
  box-shadow: 0 2rpx 150rpx 0 rgba(207, 207, 207, 0.7);
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

