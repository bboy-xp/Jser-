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
import store from "@/store";
const Fly = require("flyio");
const fly = new Fly();

export default {
  data() {
    return {};
  },

  async mounted() {
    // setInterval(() => {
    //   console.log(store.state);

    // }, 1000);
    // const that = this;
    // console.log(111);
    const getOpenId = function () {
      return new Promise((resolve, reject) => {
        wx.login({
          success: function(res) {
            if (res.code) {
              // console.log("登录成功返回的CODE：" + res.code);
              wx.request({
                url: "https://api.weixin.qq.com/sns/jscode2session",
                data: {
                  //小程序唯一标识
                  appid: "wxa65b857e40095d0e", //小程序的 app secret
                  secret: "40030bc4b3d3af6bafb81ff33c459a50",
                  grant_type: "authorization_code",
                  js_code: res.code
                },
                method: "GET",
                header: { "content-type": "application/json" },
                success: async function(openIdRes) {
                  // console.info("登录成功返回的openId：" + openIdRes.data.openid);
                  const openId = openIdRes.data.openid;
                  store.commit("openIdChange", openId);
                  // console.log(openId);
                  // console.log(store.state.openId);
                  // const result = await fly.post('http://sxp.topsxp.top:7001/getUsermsg',{openId: openId});
                  
                  // const result = await fly.post(
                  //   "http://127.0.0.1:7001/getUsermsg",
                  //   { openId: openId }
                  // );
  
                  // console.log(result.data);
                  const data = result.data;
                  // console.log(data.name);

                  // store.commit("changeCheckResult", data.reason);
                  // store.commit("nameChange", data.name);
                  // store.commit("sexRadioChange", data.sex);
                  // store.commit("gradeRadioChange", data.grade);
                  // store.commit("collegeChange", data.college);
                  // store.commit("majorChange", data.major);
                  // store.commit("phoneNumChange", data.phoneNum);
                  // store.commit("levelRadioChange", data.level);
                  // store.commit("introduceChange", data.introduce);
                  // store.commit("otherReasonChange", data.otherReason);
                  resolve(openId);
                }
              });
            } else {
              resolve("获取用户openId失败");
            }
          }
        });
      });
    }
    
    // console.log(await getOpenId());
    await getOpenId();
    // console.log(store.state);
  },
  methods: {
    gotoJoin() {
      wx.redirectTo({
        url: "../wenan/main"
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

