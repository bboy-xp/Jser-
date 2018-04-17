<template>
    <div class="page">
        <div class="header"></div>
        <div class="contain">
            <div class="title">
                你的基本信息
            </div>
            <div class="threeLine">
                <div class="line lineColor1"></div>
                <div class="line lineColor2"></div>
                <div class="line lineColor3"></div>
            </div>
            <div class="question">
                你对计算机操作的熟练程度是？
            </div>
            <div class="radioBox">
                    <radio-group class="radio-group" @change="radioChange">
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
                <input class="aswerBox" type="text">
            </div>
            <div class="question">
                介绍一下你自己，说说你的兴趣爱好以及在大学的理想和成就<span class="note">（140字以上）</span>
            </div>
            <textarea class="introduce" maxlength="400"></textarea>
            <div class="joinBtn">
                下一步
            </div>
        </div>
        
    </div>
</template>
<script>
export default {
    data () {
        return {
            levels: [
                {name: 'level', value: '纯小白基本只会开机'},
                {name: 'level', value: '会基本的文档，表格，PPT的编辑操作', checked: 'true'},
                {name: 'level', value: '熟练使用Office、Adobe等软件'},
                {name: 'level', value: '上天入地，无所不能'},
            ],
            reasons: [
                {name: 'reason', value: '想提升自己的职业技能'},
                {name: 'reason', value: '想从事互联网相关工作', checked: 'true'},
                {name: 'reason', value: '对互联网、电子产品有浓厚兴趣'},
                {name: 'reason', value: '想认识更多兴趣相投的校友'},
                {name: 'reason', value: '我还有其他的原因*'},
            ]
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
  padding-top: 51rpx;
  margin: 0 42rpx;
}
.title {
  font-size: 60rpx;
  font-weight: bold;
  margin-bottom: 20rpx;
}
.line{
    height: 2rpx;
    width: 70rpx;
    margin-right: 10rpx;
    display: inline-block;
}
.lineColor1{
    background-color: rgb(254, 36, 80);
    border-top: solid 4rpx rgb(254, 36, 80);
}
.lineColor2{
    background-color: rgb(254, 36, 80);
    border-top: solid 4rpx rgb(254, 36, 80);
}
.lineColor3{
    background-color: rgb(255, 199, 211);
    border-top: solid 4rpx rgb(255, 199, 211);
}
.question{
    margin-top: 70rpx;
    font-size: 38rpx;
    font-weight: bold;
}
.aswerBox{
    border-bottom: 1px solid rgb(207, 207, 207);
    width: 530rpx;
    margin: auto;
    margin-top: 30rpx;
    
}
.radioBox{
    margin-top: 30rpx;
}
/* .gradeStyle{
    display: flex;
    justify-content: space-around;
} */
.tip{
    margin-top: 20rpx;
    color: rgb(254, 36, 80);
    font-size: 25rpx;
}
.joinBtn{
  height: 100rpx;
  width: 40vw;
  margin: auto;
  margin-top: 90rpx;
  margin-bottom: 70rpx;
  /* -webkit-linear-gradient: (top,rgb(255,50,98),rgb(50,255,228)); */
  /* -webkit-gradient:(linear, 0% 0%, 0% 100%, from(#ff6600), to(#339900));  */
  background: -webkit-gradient(linear, 0% 80%, 40% 0%,from(rgb(252,154,174)), to(rgb(255,0,51)));
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100rpx;
  font-size: 45rpx;
  box-shadow: 0 25rpx 50rpx 0 rgba(254, 111, 140, 0.5) 
}
.radioStyle{
    display: block;
    margin-top: 30rpx;
    font-size: 30rpx;
    color: rgb(74, 74, 74);
}
.checkboxStyle{
    display: block;
    margin-top: 30rpx;
    font-size: 30rpx;
    color: rgb(74, 74, 74);
}
.note{
    font-size: 32rpx;
    color: rgb(155, 155, 155);
}
.introduce{
    height: 340rpx;
    width: 666rpx;
    margin-top: 30rpx;
    border: 2rpx solid rgb(214, 214, 214);
    border-radius: 28rpx;
    padding: 10rpx;
    font-size: 30rpx;
    
}
</style>

