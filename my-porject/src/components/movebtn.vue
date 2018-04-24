 <template>
   <div class="box" @click="change(close)">
        <div :class="line1"></div>
        <div :class="line2"></div>
        <div :class="line3"></div>
    </div>
 </template>
 <script>
export default {
  data() {
    return {
      line1: "line",
      line2: "line",
      line3: "line",
      close: true
    };
  },
  methods: {
    change(close) {
      this.close = !this.close;
      if (close) {
        this.line1 = "line one";
        this.line2 = "line two";
        this.line3 = "line three";
      } else {
        this.line1 = "line2 one2";
        this.line2 = "line2 two2";
        this.line3 = "line2 three2";
      }
    }
  }
};
</script>
 <style scoped>
@keyframes one {
  0% {
    width: 100px;
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
    width: 100px;
    background: red;
  }
}

@keyframes two {
  0% {
    width: 100px;
    background: red;
  }

  100% {
    width: 100px;
    background: red;
    -webkit-transform: rotate(135deg);
  }
}
@keyframes two2 {
  0% {
    width: 100px;
    background: red;
    -webkit-transform: rotate(135deg);
  }

  100% {
    width: 100px;
    background: red;
  }
}
@keyframes three {
  0% {
    width: 100px;
    background: red;
  }

  100% {
    width: 100px;
    background: red;
    transform: rotate(45deg) translate(-28px, -28px);
    /* -webkit-transform-origin: center; */
    /* -webkit-transform: translate(50px,100px); */
  }
}
@keyframes three2 {
  0% {
    width: 100px;
    background: red;
    transform: rotate(45deg) translate(-28px, -28px);
  }

  100% {
    width: 100px;
    background: red;
  }
}

.line {
  margin-top: 20px;
  width: 100px;
  height: 20px;
  background: red;
  color: #fff;
  border-radius: 8px;
}
.line2 {
  margin-top: 20px;
  width: 100px;
  height: 20px;
  background: white;
  color: #fff;
  border-radius: 8px;
}

.box {
  display: flex;
  flex-direction: column;
  width: 100px;
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
</style>
 
 