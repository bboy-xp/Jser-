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
                姓名 ：
            </div>
            <input class="aswerBox" type="text">
            <div class="question">
                你是 ：
            </div>
            <div class="radioBox">
                    <radio-group class="radio-group" @change="radioChange">
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
                    <radio-group class="radio-group" @change="radioChange">
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
    data () {
        return {
            sexs: [
                {name: 'sex', value: '男生', checked: 'true'},
                {name: 'sex', value: '女生'},
            ],
            grades: [
                {name: 'grade', value: '大一', checked: 'true'},
                {name: 'grade', value: '大二'},
                {name: 'grade', value: '大三'},
                {name: 'grade', value: '大四'},
                {name: 'grade', value: '研究生'},
                {name: 'grade', value: '已毕业'}
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
    background-color: rgb(255, 199, 211);
    border-top: solid 4rpx rgb(255, 199, 211);
}
.lineColor3{
    background-color: rgb(255, 199, 211);
    border-top: solid 4rpx rgb(255, 199, 211);
}
.question{
    margin-top: 70rpx;
    font-size: 40rpx;
    font-weight: bold;
}
.aswerBox{
    border-bottom: 1px solid rgb(207, 207, 207);
    width: 530rpx;
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
</style>

