<template>
  <view class="index">
    <u-navbar safeAreaInsetTop bgColor="#5cd7d4"
      ><template slot="left"><view></view></template
    ></u-navbar>
    <view class="top"
      ><image
        :src="
          pageStatue === 0
            ? require('../../static/login.svg')
            : pageStatue === 1
            ? require('../../static/52hz.svg')
            : pageStatue === 2
            ? require('../../static/more.svg')
            : pageStatue === 3
            ? require('../../static/past.svg')
            : pageStatue === 4
            ? require('../../static/tota.svg')
            : pageStatue === 5
            ? require('../../static/congratulate.svg')
            : pageStatue === 6
            ? require('../../static/totaagain.svg')
            : require('../../static/52hz.svg')
        "
        class="text"
        mode="heightFix" /><view
        class="icon"
        @click="toChange"
        v-show="pageStatue !== 0"
        ><view :class="'lines line__1--statue' + pageStatue"></view
        ><view :class="'lines line__2--statue' + pageStatue"></view
        ><view :class="'lines line__3--statue' + pageStatue"></view></view
    ></view>
    <view :class="'theWave wave_1--statue' + pageStatue"></view>
    <view :class="'theWave wave_2--statue' + pageStatue"></view>
    <view :class="'theWave wave_3--statue' + pageStatue"></view>
    <image
      class="btnText text_1"
      src="../../static/btn_1.svg"
      mode="heightFix"
      v-show="tempStatue"
    />
    <image
      class="btnText text_2"
      src="../../static/btn_2.svg"
      mode="heightFix"
      v-show="tempStatue"
    /><image
      class="btnText text_3"
      src="../../static/btn_3.svg"
      mode="heightFix"
      v-show="tempStatue"
    />
    <input
      type="text"
      placeholder="天外天账号"
      class="account"
      :value="account"
      placeholder-style="color:#1C2550;opacity:0.7"
      v-if="pageStatue === 0"
    />
    <input
      type="password"
      placeholder="密码"
      class="password"
      :value="password"
      placeholder-style="color:#5CD7D4;opacity:0.7"
      v-if="pageStatue === 0"
    />
    <u-button
      :plain="true"
      text="登录"
      loadingText="登录中"
      :loading="loginLoading"
      :disabled="loginLoading"
      :custom-style="btnStyle"
      @click="toLogin"
      v-if="pageStatue === 0"
    ></u-button>
    <image
      src="../../static/whale.svg"
      class="whale_1"
      v-show="pageStatue === 1"
    />
    <image
      src="../../static/whale_1.svg"
      class="whale_2"
      v-show="pageStatue === 1"
    />
    <view class="waves" v-if="pageStatue === 1">
      <view
        class="wave"
        v-for="item in 35"
        :key="item"
        :style="'height:' + heights[item] + 'rpx'"
      ></view>
    </view>
    <image
      src="../../static/btn.svg"
      class="btn"
      @click="toDo"
      v-show="pageStatue === 1"
    />
    <image
      class="copyright"
      src="../../static/right.svg"
      mode="heightFix"
      v-show="tempStatue"
    />
  </view>
</template>

<script>
export default {
  data() {
    return {
      title: "Hello",
      pageStatue: 0,
      password: "",
      account: "",
      loginLoading: false,
      heights: [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      ],
      ranges: [
        [6, 12],
        [3, 8],
        [5, 9],
        [3, 7],
        [1, 4],
        [1, 3],
        [1, 2],
        [2, 5],
        [1, 3],
        [1, 2],
        [3, 6],
        [1, 4],
        [2, 5],
        [1, 3],
      ],
      rate: 1,
      tempStatue: false,
      btnStyle: {
        position: "relative",
        left: "50%",
        top: "800rpx",
        transform: "translateX(-50%)",
        width: "180rpx",
        height: "80rpx",
        borderRadius: "24rpx",
        margin: "0",
        border: "1px solid #5CD7D4",
        boxSizing: "border-box",
        backgroundColor: "#1C2550",
        color: "#5CD7D4",
      },
    };
  },
  created() {
    setInterval(() => {
      for (let i = 0; i < this.rate * 7; i++) {
        this.$set(
          this.heights,
          17 - i,
          12 *
            this.rate *
            (Math.floor(
              Math.random() * (this.ranges[i][1] - this.ranges[i][0])
            ) +
              this.ranges[i][0])
        );
        this.$set(
          this.heights,
          17 + i,
          12 *
            this.rate *
            (Math.floor(
              Math.random() * (this.ranges[i][1] - this.ranges[i][0])
            ) +
              this.ranges[i][0])
        );
      }
    }, 200);
  },
  methods: {
    toDo() {
      // this.rate = this.rate === 1 ? 2 : 1;
      // if (this.rate === 1) {
      //   this.heights.map((item, i, self) => {
      //     this.$set(self, i, 0);
      //   });
      // }
    },
    toChange() {
      this.pageStatue++;
      if (this.pageStatue === 3) this.pageStatue = 1;
      if (this.pageStatue === 2) {
        setTimeout(() => {
          this.tempStatue = true;
        }, 1000);
      } else {
        this.tempStatue = false;
      }
    },
    toLogin() {
      this.loginLoading = true;
      setTimeout(() => {
        this.loginLoading = false;
        this.pageStatue = 1;
      }, 2000);
    },
  },
};
</script>

<style scope lang='scss'>
.index {
  background-color: #5cd7d4;
  position: relative;
  overflow: hidden;
  width: 100vw;
  max-width: 400px;
  margin: 0 auto;
  height: 100vh;
  padding: 0 32rpx;
  box-sizing: border-box;
  .top {
    width: 100%;
    display: flex;
    justify-content: space-between;
    .text {
      height: 96rpx;
    }
    .icon {
      width: 70rpx;
      height: 56rpx;
      box-sizing: border-box;
      position: relative;
      margin: 20rpx 0;
      .lines {
        position: absolute;
        width: 56rpx;
        height: 8rpx;
        background-color: white;
        border-radius: 4rpx;
        transition: all 1s;
      }
      .line__1--statue1 {
        top: 9rpx;
        left: 9rpx;
      }
      .line__2--statue1 {
        top: 25rpx;
        left: 9rpx;
      }
      .line__3--statue1 {
        top: 41rpx;
        left: 9rpx;
      }
      .line__1--statue2 {
        top: 15rpx;
        left: 9rpx;
        width: 36rpx;
        transform: rotate(-30deg);
      }
      .line__2--statue2 {
        top: 24rpx;
        left: 9rpx;
        height: 9rpx;
      }
      .line__3--statue2 {
        top: 35rpx;
        left: 9rpx;
        width: 36rpx;
        transform: rotate(30deg);
      }

      .line__1--statue3 {
        top: 25rpx;
        left: 9rpx;
        transform: rotate(45deg);
      }
      .line__2--statue3 {
        top: 25rpx;
        width: 0;
        left: 28rpx;
      }
      .line__3--statue3 {
        top: 25rpx;
        left: 9rpx;
        transform: rotate(-45deg);
      }
    }
  }
  .btnText {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    height: 72rpx;
  }
  .text_1 {
    top: 500rpx;
  }
  .text_2 {
    top: 750rpx;
  }
  .text_3 {
    top: 1000rpx;
  }
  .account {
    position: absolute;
    top: 500rpx;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    width: 480rpx;
    height: 80rpx;
    border: 1px solid #1c2550;
    border-radius: 24rpx;
    color: #1c2550;
  }
  .password {
    position: absolute;
    top: 750rpx;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    width: 480rpx;
    height: 80rpx;
    border: 1px solid #5cd7d4;
    border-radius: 24rpx;
    color: #5cd7d4;
  }
  .theWave {
    width: 2400rpx;
    height: 200rpx;
    height: 1200rpx;
    position: absolute;
    background-repeat: repeat-x;
    transition: all 1s;
  }
  .wave_1--statue0,
  .wave_1--statue2 {
    left: 0;
    top: 400rpx;
    background-image: url("~@/static/wave_1.png");
    animation: slideshow 15s linear infinite;
  }
  .wave_2--statue0,
  .wave_2--statue2 {
    right: 0;
    top: 650rpx;
    background-image: url("~@/static/wave_2.png");
    animation: slideshow-reverse 15s linear infinite;
  }
  .wave_3--statue0,
  .wave_3--statue2 {
    left: 0;
    top: 900rpx;
    background-image: url("~@/static/wave_3.png");
    animation: slideshow 15s linear infinite;
  }
  .wave_1--statue1 {
    left: 0;
    top: 400rpx;
    background-image: url("~@/static/wave_1.png");
    animation: slideshow 15s linear infinite;
  }
  .wave_2--statue1 {
    right: 0;
    top: 500rpx;
    background-image: url("~@/static/wave_2.png");
    animation: slideshow-reverse 15s linear infinite;
  }
  .wave_3--statue1 {
    left: 0;
    top: 600rpx;
    background-image: url("~@/static/wave_3.png");
    animation: slideshow 15s linear infinite;
  }
  .whale_1 {
    position: absolute;
    top: 720rpx;
    width: 140rpx;
    height: 140rpx;
    left: 15rpx;
    animation: whaleMove 10s ease-in-out infinite;
  }
  .whale_2 {
    position: absolute;
    top: 770rpx;
    width: 110rpx;
    height: 110rpx;
    left: 0;
    animation: subWhaleMove 10s ease-in-out infinite;
  }
  .waves {
    width: 100%;
    height: 250rpx;
    position: absolute;
    left: 0;
    bottom: 240rpx;
    bottom: calc(240rpx + constant(safe-area-inset-bottom));
    bottom: calc(240rpx + env(safe-area-inset-bottom));
    display: flex;
    justify-content: space-around;
    align-items: center;
    .wave {
      width: 12rpx;
      min-height: 12rpx;
      border-radius: 6rpx;
      background-color: rgba(92, 215, 212, 0.4);
      transition: all 0.5s;
    }
  }
  .btn {
    width: 144rpx;
    height: 144rpx;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 60rpx;
    bottom: calc(60rpx + constant(safe-area-inset-bottom));
    bottom: calc(60rpx + env(safe-area-inset-bottom));
  }
  .copyright {
    height: 24rpx;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 60rpx;
    bottom: calc(60rpx + constant(safe-area-inset-bottom));
    bottom: calc(60rpx + env(safe-area-inset-bottom));
  }
}
@keyframes slideshow {
  0% {
    left: 0;
  }
  100% {
    left: -800rpx;
  }
}
@keyframes slideshow-reverse {
  0% {
    right: 0;
  }
  100% {
    right: -800rpx;
  }
}
@keyframes whaleMove {
  0% {
    left: 15rpx;
    transform: rotateY(90deg);
  }
  10% {
    left: 45rpx;
    transform: rotateY(0);
  }
  40% {
    left: 565rpx;
    transform: rotateY(0);
  }
  50% {
    left: 595rpx;
    transform: rotateY(90deg);
  }
  60% {
    left: 565rpx;
    transform: rotateY(180deg);
  }
  90% {
    left: 45rpx;
    transform: rotateY(180deg);
  }
  100% {
    left: 15rpx;
    transform: rotateY(90deg);
  }
}
@keyframes subWhaleMove {
  0% {
    left: 0rpx;
    transform: rotateY(90deg);
  }
  5% {
    left: 30rpx;
    transform: rotateY(0);
  }
  45% {
    left: 610rpx;
    transform: rotateY(0);
  }
  50% {
    left: 640rpx;
    transform: rotateY(90deg);
  }
  55% {
    left: 610rpx;
    transform: rotateY(180deg);
  }
  95% {
    left: 30rpx;
    transform: rotateY(180deg);
  }
  100% {
    left: 0rpx;
    transform: rotateY(90deg);
  }
}
</style>
