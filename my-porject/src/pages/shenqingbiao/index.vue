<template>
  <div class="page">
      <img src="../../../static/pic/bg1.png" class="bg">
      <!-- <div class="header"></div> -->
      <div class="contain">
          <div class="text1">现在申请</div>
          <div class="text2">apply now</div>
          <div class="text3">Jser 俱乐部</div>
          <div class="down">
              <img src="../../../static/pic/down.png" alt="" class="downPic">
          </div>
          <div class="text4">请认真填写每个问题<br>我们的工作人员会尽快与您取得联系</div>
      </div>
      
  </div>
</template>
<script>
export default {
  data() {
    return {
      
    };
  },
  mounted() {},
  methods: {}
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
  /* justify-content: center; */
  align-items: center;
  text-align: center;
  padding-top: 51rpx;
  /* background: blue; */
}

.text1 {
  color: white;
  margin-top: 62rpx;
  font-size: 40rpx;
  letter-spacing: 37.5rpx;
}
.text2 {
  margin-top: 1rpx;
  letter-spacing: 14.6rpx;
  font-size: 25rpx;
}
.text3 {
  color: white;
  margin-top: 294rpx;
  font-size: 60rpx;
}
.down {
  margin-top: 211.4rpx;
  height: 126rpx;
  width: 126rpx;
  border-radius: 126rpx;
  border: 6rpx solid white;
  box-shadow: 0 20rpx 40rpx 0 rgba(0, 0, 0, 0.56);
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(155, 155, 155, 0.65);
}
.downPic {
  height: 70rpx;
  width: 70rpx;
}
.text4 {
  margin-top: 179rpx;
  color: white;
  font-size: 30rpx;
  letter-spacing: 6rpx;
  line-height: 50rpx;
}

@keyframes movement {
  0% {
    margin-left: 0;
  }
  100% {
    margin-left: -150vw;
  }
}

.bg {
  filter: brightness(0.7);
  position: absolute;
  z-index: -1;
  height: 100vh;
  width: 250vw;
  /* left: -100vw; */
  animation: movement 25s linear alternate infinite;
}
</style>

