<template>
  <div class="page">
      <!-- <image src="../../../static/pic/bg1.png" class="bg"> -->
      <img src="/static/pic/bg1.png" class="bg">
      <!-- <div class="header"></div> -->
      <div class="contain">
          <div class="text1">三个月的蜕变<br>成为一名开发者</div>
          <div class="btnBox" @click="gotoJoin">
            了解更多
          </div>
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
  methods: {
    gotoJoin() {
      wx.redirectTo({
        url: '../wenan/main'
      });
    }
  }
};
</script>
<style scoped>
.page {
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.contain {
  width: 100vw;
  height: 100vh;
  flex: 1;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  text-align: center;
  /* background: blue; */
}

.text1 {
  color: white;
  margin-top: 472rpx;
  font-size: 70rpx;
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
  z-index: -100;
  height: 100vh;
  width: 250vw;
  /* left: -100vw; */
  animation: movement 25s linear alternate infinite;
}
.btnBox {
  height: 100rpx;
  width: 282rpx;
  margin: 401rpx 0 75rpx 0;
  border: 4rpx solid white;
  border-radius: 100rpx;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 35rpx;
  font-weight: bold;
}
</style>

