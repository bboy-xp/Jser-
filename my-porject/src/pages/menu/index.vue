<template>
    <div class="page">
        <div class="header"></div>
        <div class="contain">
            <div class="options" v-for="(option, index) in options" :key="index">
                <div class="optionText">{{option.value}}</div>
            </div>
            <div class="hot">HOT</div>
        </div>
        
    </div>
</template>
<script>
export default {
    data () {
        return {
            options: [
                {name: 'option', value: '首页'},
                {name: 'option', value: '课程简介'},
                {name: 'option', value: '学习里程'},
                {name: 'option', value: '学员故事'},
                {name: 'option', value: '关于我们'},
                {name: 'option', value: '现在报名'},
            ],
            
        }
    },
    methods: {

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
  background-color: red;
  box-shadow: 0 2rpx 150rpx 0 rgba(207, 207, 207, 0.7);
}
.contain {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 100rpx;
  
}
.optionText{
  display: flex;
  align-items: center;
  font-size: 40rpx;
  padding-left: 120rpx;
  height: 150rpx;
  width: 522rpx;
  font-weight: bold;
}
.selectedOption{
  background: radial-gradient(at 5% 110%,rgb(252,154,174), rgb(255,0,51) 80%); 
  color: white;
}
.hot{
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
</style>

