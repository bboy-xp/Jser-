<template>
  <div class="page">
      <div class="order">
              <div class="week">
                <div class="time" v-for="week in weeks" :key="week">{{week.msg}}</div>
              </div>
              <div class="times">
                <div v-for="(day, index) in days" class="time origin" :class="{ selected: state[index] }" @click="selected(index)" :key="index">{{day.time}}</div>
              </div>
      </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      days: [
        { num: 1 ,time: '11:00'},
        { num: 2 ,time: '11:00'},
        { num: 3 ,time: '11:00'},
        { num: 4 ,time: '11:00'},
        { num: 5 ,time: '11:00'},
        { num: 6 ,time: '11:00'},
        { num: 7 ,time: '11:00'},
        { num: 8 ,time: '20:00'},
        { num: 9 ,time: '20:00'},
        { num: 10 ,time: '20:00'},
        { num: 11 ,time: '20:00'},
        { num: 12 ,time: '20:00'},
        { num: 13 ,time: '20:00'},
        { num: 14 ,time: '20:00'}
      ],
      weeks: [
        { msg: "星期一" },
        { msg: "星期二" },
        { msg: "星期三" },
        { msg: "星期四" },
        { msg: "星期五" },
        { msg: "星期六" },
        { msg: "星期日" }
      ],
      state: [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false
      ]
    };
  },
  mounted() {},
  computed: {
    // bakgrdColor() {
    //   return this.state;
    // }
  },
  methods: {
    selected(index) {
      this.state[index] = !this.state[index];
      this.state = [...this.state];
    }
  }
};
</script>
<style scoped>
.page {
  display: flex;
  flex-direction: column;
  padding-top: 50rpx;
}

.order {
  display: flex;
  flex-direction: column;
}
.times {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20rpx;
  flex-wrap: wrap;
}
.time {
  height: 20vh;
  width: 14%vw;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20rpx;
}
.week {
  height: 20vh;
  width: 14%vw;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20rpx;
  font-size: 35rpx;
}
.origin {
  background-color: rgb(241, 62, 30);
}
.selected {
  background-color: rgb(30, 146, 241);
}
</style>

