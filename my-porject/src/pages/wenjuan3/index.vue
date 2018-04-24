<template>
    <div class="page">
        <div class="header"></div>
        <div class="contain">
            <div class="title">
                一切就绪
            </div>
            <div class="threeLine">
                <div class="line lineColor"></div>
                <div class="line lineColor"></div>
                <div class="line lineColor"></div>
            </div>
            <div class="question">
                预约公开课
            </div>
            <div class="text">
                申请已准备就绪，我们已经收到你的申请表！你可以选择以下日期和时间来预约试听Jser的公开课。
            </div>
            <div class="calendar">
                日历
            </div>
            <div class="order1">
                <div class="orderTime1">09:30</div>
                <div class="date">
                    <div class="day">三月七日</div>
                    <div class="weekday">周三</div>
                </div>
                <div class="select">
                    选择
                </div>
            </div>
            <div class="order2">
                <div class="orderTime2">18:30</div>
                <div class="date">
                    <div class="day cardStyle">三月七日</div>
                    <div class="weekday cardStyle">周三</div>
                </div>
                <div class="select">
                    预约
                </div>
            </div>
            <div class="question">
                加入本期训练营微信群组
            </div>
            <div class="text">
                准备好认识你的新同学了吗，长摁二维码加入Jser预报名群，与准新学员一同交流。
            </div>
            <div class="imgs">
                <img class="QRcode" src="" alt="">
                <img class="jserPic" src="../../../static/pic/2.png" alt="">
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
.lineColor{
    background-color: rgb(254, 36, 80);
    border-top: solid 4rpx rgb(254, 36, 80);
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
  background: radial-gradient(at 5% 110%,rgb(252,154,174), rgb(255,0,51) 80%); 
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
.text{
    color: rgb(74, 74, 74);
    font-size: 28rpx;
    margin-top: 30rpx;
    line-height: 48rpx;
}
.calendar{
    width: 100%;
    height: 513rpx;
    background-color: rgb(254, 36, 80);
    margin-top: 30rpx;
}
.order1{
    width: 100%;
    height: 130rpx;
    margin-top: 30rpx;
    border-radius: 30rpx;
    display: flex;
    align-items: center;
    box-shadow: 0 20rpx 30rpx 0 rgba(207, 196, 196, 0.3);
}
.order2{
    width: 100%;
    height: 130rpx;
    margin-top: 30rpx;
    border-radius: 30rpx;
    display: flex;
    align-items: center;
    box-shadow: 0 20rpx 30rpx 0 rgba(254, 36, 80, 0.2);
    background: radial-gradient(at 5% 110%,rgb(252,154,174), rgb(255,0,51) 80%); 
}
.date{
    display: flex;
    flex-direction: column;
    font-size: 20rpx;
    color: rgb(155, 155, 155);
    margin-left: 15rpx;

}
.orderTime1{
    font-size: 50rpx;
    margin-left: 40rpx;

}
.orderTime2{
    font-size: 50rpx;
    margin-left: 40rpx;
    color: white;

}
.cardStyle{
    color: white;
}
.select{
    height: 58rpx;
    width: 151rpx;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 30rpx;
    color: rgb(254, 36, 80);
    margin: 0 31rpx 0 auto;
    background-color: white;
    border-radius: 58rpx;
}
.imgs{
    display: flex;
    padding: 60rpx 47rpx 90rpx 47rpx;
}
.QRcode{
    height: 210rpx;
    width: 210rpx;
}
.jserPic{
    height: 242rpx;
    width: 302rpx;
    margin-left: 60rpx;
}
</style>

