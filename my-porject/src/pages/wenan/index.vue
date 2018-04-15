<template>
  <div class="page">
      <div class="header"></div>
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
          <div class="joinBtn">
            现在申请        训练营
          </div>
      </div>
      
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.page {
  display: flex;
  flex-direction: column;
}
.header {
  height: 142rpx;
  width: 100vw;
  background-color: red;
  box-shadow: 0 2rpx 150rpx 0 rgba(207, 207, 207, 0.7);
}
.contain {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  padding-top: 51rpx;
  margin: 0 105rpx;
}
.title {
  font-size: 47rpx;
  font-weight: 500;
}
.text {
  margin-top: 20rpx;
  margin-bottom: 50rpx;
  font-size: 31rpx;
  line-height: 48rpx;
  color: rgb(51, 51, 51);
  font-weight: thin;
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
.specialPic{
  margin-bottom: 270rpx;
}
.joinBtn{
  height: 100rpx;
  width: 72vw;
  margin: auto;
  /* -webkit-linear-gradient: (top,rgb(255,50,98),rgb(50,255,228)); */
  /* -webkit-gradient:(linear, 0% 0%, 0% 100%, from(#ff6600), to(#339900));  */
  background: -webkit-gradient(linear, 0% 80%, 40% 0%,from(rgb(252,154,174)), to(rgb(255,0,51)));
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100rpx;
  font-size: 45rpx;
  position: fixed;
  bottom: 70rpx;
  box-shadow: 0 25rpx 50rpx 0 rgba(254, 111, 140, 0.5) 
}
</style>

