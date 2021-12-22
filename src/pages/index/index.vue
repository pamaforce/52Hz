<template>
  <view class="index">
    <u-navbar safeAreaInsetTop bgColor="#ffffff00"
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
    <view
      :class="
        'theWave wave_1--statue' +
        pageStatue +
        (pageStatue === 4 ? ' up-class' : '')
      "
    ></view>
    <view
      v-show="pageStatue === 3 || pageStatue === 2"
      :class="'theSubWave subWave_1--statue' + pageStatue"
    ></view>
    <view
      :class="
        'theWave wave_2--statue' +
        pageStatue +
        (pageStatue === 4 ? ' up-class' : '')
      "
    ></view>
    <view
      :class="
        'theWave wave_3--statue' +
        pageStatue +
        (pageStatue === 4 ? ' up-class' : '')
      "
    ></view>
    <image
      :class="'btnText text_1' + (pageStatue === 2 ? ' show-class' : '')"
      src="../../static/btn_1.svg"
      mode="heightFix"
      @click="pageStatue = 3"
      v-show="pageStatue === 2 || tempStatue"
    />
    <image
      :class="'btnText text_2' + (pageStatue === 2 ? ' show-class' : '')"
      src="../../static/btn_2.svg"
      mode="heightFix"
      v-show="pageStatue === 2 || tempStatue"
    /><image
      :class="'btnText text_3' + (pageStatue === 2 ? ' show-class' : '')"
      src="../../static/btn_3.svg"
      mode="heightFix"
      @click="pageStatue = 0"
      v-show="pageStatue === 2 || tempStatue"
    />
    <input
      type="text"
      placeholder="天外天账号"
      class="account"
      :value="account"
      placeholder-style="color:#1C2550;opacity:0.7;font-weight:500"
      v-if="pageStatue === 0"
    />
    <input
      type="text"
      placeholder="密码"
      class="password"
      :value="password"
      placeholder-style="color:#5CD7D4;opacity:0.7;font-weight:500"
      v-if="pageStatue === 0"
      :password="isPassword"
    />
    <image
      v-if="pageStatue === 0"
      :src="
        isPassword
          ? require('../../static/eye.svg')
          : require('../../static/eye-off.svg')
      "
      class="eye"
      @click="isPassword = !isPassword"
    />
    <u-button
      text="登录"
      loadingText="登录中"
      :loading="loginLoading"
      :disabled="loginLoading"
      :custom-style="btnStyle"
      @click="toLogin"
      v-if="pageStatue === 0"
    ></u-button>
    <view class="protocol" v-if="pageStatue === 0"
      ><image
        :src="
          checked
            ? require('../../static/checked.svg')
            : require('../../static/check.svg')
        "
        class="check"
        @click="checked = !checked" />
      <image
        src="../../static/protocol.svg"
        class="protocolText"
        mode="heightFix"
    /></view>
    <image
      src="../../static/whale.svg"
      :class="
        'whale_1' +
        (pageStatue === 1 || (pageStatue === 4 && !tempStatue_2)
          ? ''
          : ' hide-class')
      "
    />
    <image
      src="../../static/whale_1.svg"
      :class="
        'whale_2' +
        (pageStatue === 1 || (pageStatue === 4 && !tempStatue_2)
          ? ''
          : ' hide-class')
      "
    />
    <u-transition :show="pageStatue === 1" mode="fade">
      <view class="waves">
        <view
          class="wave"
          v-for="(item, i) in 35"
          :key="i"
          :style="'height:' + heights[i] + 'rpx'"
        ></view>
      </view>
    </u-transition>
    <u-transition :show="pageStatue === 4 && tempStatue_2" mode="zoom-in">
      <view class="waves-pro">
        <view
          class="wave"
          v-for="(item, i) in 35"
          :key="i"
          :style="'height:' + heights[i] + 'rpx'"
        ></view>
      </view>
    </u-transition>
    <image
      :src="
        pageStatue === 1
          ? require('../../static/btn.svg')
          : pageStatue === 4
          ? require('../../static/send.svg')
          : require('../../static/btn.svg')
      "
      class="btn"
      @click="toDo"
      v-show="pageStatue === 1 || pageStatue === 4"
    />
    <image
      :class="'copyright' + (pageStatue === 2 ? ' show-class' : '')"
      src="../../static/right.svg"
      mode="heightFix"
      v-show="pageStatue === 2 || tempStatue"
    />
    <view :class="'down' + (pageStatue === 4 ? ' down-normal' : '')">
      <input class="name" @input="getPerson" :value="thePerson" />
      <image src="../../static/toyou.svg" class="toYou" mode="heightFix" />
      <view class="textContent">
        <textarea
          style="width: 100%; height: 100%; z-index: 11"
          @input="refreshWave(2)"
          :value="theText"
          maxlength="1000"
          :show-confirm-bar="false"
        />
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      title: "Hello",
      pageStatue: 1,
      password: "",
      account: "",
      thePerson: "",
      theText: "",
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
      isPassword: true,
      rate: 1,
      tempStatue: false,
      tempStatue_2: false,
      checked: false,
      timer: null,
      btnStyle: {
        position: "relative",
        left: "50%",
        top: "800rpx",
        transform: "translateX(-50%)",
        width: "200rpx",
        height: "80rpx",
        borderRadius: "24rpx",
        margin: "0",
        border: "1px solid #5CD7D4",
        boxSizing: "border-box",
        backgroundColor: "#5CD7D4",
        color: "#1C2550",
        fontWeight: "700",
      },
    };
  },
  created() {
    this.timer = setInterval(() => {
      this.refreshWave(1);
    }, 200);
  },
  methods: {
    toDo() {
      if (this.pageStatue === 1) {
        this.pageStatue = 4;
        clearInterval(this.timer);
        setTimeout(() => {
          this.tempStatue_2 = true;
        }, 500);
      }
      // this.rate = this.rate === 1 ? 2 : 1;
      // if (this.rate === 1) {
      //   this.heights.map((item, i, self) => {
      //     this.$set(self, i, 0);
      //   });
      // }
    },
    getPerson(val) {
      this.refreshWave(2);
      this.throttle(this.allQueryData, null, 1000, val.detail.value);
    },
    toChange() {
      if (this.pageStatue === 1) {
        this.pageStatue = 2;
        setTimeout(() => {
          if (this.pageStatue === 2) this.tempStatue = true;
        }, 1000);
      } else if (this.pageStatue === 2) {
        this.pageStatue = 1;
        this.tempStatue = false;
      } else if (this.pageStatue === 3) {
        this.pageStatue = 2;
        setTimeout(() => {
          if (this.pageStatue === 2) this.tempStatue = true;
        }, 1000);
      } else if (this.pageStatue === 4) {
        this.heights.map((item, i, self) => {
          this.$set(self, i, 0);
        });
        this.timer = setInterval(() => {
          this.refreshWave(1);
        }, 200);
        this.pageStatue = 1;
        this.tempStatue_2 = false;
      }
    },
    toLogin() {
      this.loginLoading = true;
      setTimeout(() => {
        this.loginLoading = false;
        this.pageStatue = 1;
      }, 2000);
    },
    refreshWave(rate) {
      for (let i = 0; i < rate * 7; i++) {
        this.$set(
          this.heights,
          17 - i,
          12 *
            rate *
            (Math.floor(
              Math.random() * (this.ranges[i][1] - this.ranges[i][0])
            ) +
              this.ranges[i][0])
        );
        this.$set(
          this.heights,
          17 + i,
          12 *
            rate *
            (Math.floor(
              Math.random() * (this.ranges[i][1] - this.ranges[i][0])
            ) +
              this.ranges[i][0])
        );
      }
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
  max-width: 450px;
  margin: 0 auto;
  height: 100vh;
  padding: 0 32rpx;
  box-sizing: border-box;
  .top {
    width: 100%;
    display: flex;
    justify-content: space-between;
    .text {
      z-index: 10;
      height: 96rpx;
    }
    .icon {
      width: 70rpx;
      height: 56rpx;
      box-sizing: border-box;
      position: relative;
      margin: 20rpx 0;
      z-index: 10;
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
      .line__1--statue3,
      .line__1--statue2 {
        top: 15rpx;
        left: 9rpx;
        width: 36rpx;
        transform: rotate(-30deg);
      }
      .line__2--statue3,
      .line__2--statue2 {
        top: 24rpx;
        left: 9rpx;
        height: 9rpx;
      }
      .line__3--statue3,
      .line__3--statue2 {
        top: 35rpx;
        left: 9rpx;
        width: 36rpx;
        transform: rotate(30deg);
      }
      .line__1--statue4 {
        top: 25rpx;
        left: 9rpx;
        transform: rotate(45deg);
      }
      .line__2--statue4 {
        top: 25rpx;
        width: 0;
        left: 28rpx;
      }
      .line__3--statue4 {
        top: 25rpx;
        left: 9rpx;
        transform: rotate(-45deg);
      }
    }
  }
  .up-class {
    transition: all 0.5s ease-in !important;
    top: -100vh !important;
  }
  .hide-class {
    transition: all 0.5s ease-in !important;
    opacity: 0 !important;
  }
  .show-class {
    transition: all 0.5s ease-in !important;
    opacity: 1 !important;
  }
  .btnText {
    position: absolute !important;
    left: 50%;
    transform: translateX(-50%);
    height: 72rpx;
    opacity: 0;
  }
  .text_1 {
    top: 500rpx !important;
  }
  .text_2 {
    top: 750rpx !important;
  }
  .text_3 {
    top: 1000rpx !important;
  }
  .account {
    position: absolute;
    top: 500rpx;
    left: 50%;
    transform: translateX(-50%);
    width: 480rpx;
    height: 80rpx;
    border: none;
    border-radius: 24rpx;
    color: #1c2550;
  }
  .password {
    position: absolute;
    top: 750rpx;
    left: 50%;
    transform: translateX(calc(-50% - 40rpx));
    width: 400rpx;
    height: 80rpx;
    border: none;
    border-radius: 24rpx;
    color: #5cd7d4;
  }
  .eye {
    position: absolute;
    top: 766rpx;
    left: 50%;
    transform: translateX(calc(-50% + 200rpx));
    width: 48rpx;
    height: 48rpx;
  }
  .theWave {
    width: 2880rpx;
    height: 1200rpx;
    position: absolute;
    background-repeat: repeat-x;
    transition: all 1s;
  }
  .theSubWave {
    width: 2400rpx;
    height: 800rpx;
    position: absolute;
    background-repeat: repeat-x;
    transition: transform 1s;
    right: 50%;
    top: 600rpx;
    background-image: url("~@/static/wave_1.png");
  }
  .subWave_1--statue3 {
    transform: translateX(-50%);
    top: 400rpx;
  }
  .wave_1--statue0,
  .wave_1--statue2 {
    left: 0;
    top: 400rpx;
    height: 1600rpx;
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
  .wave_1--statue1,
  .wave_1--statue4 {
    left: 0;
    top: 400rpx;
    height: 1600rpx;
    background-image: url("~@/static/wave_1.png");
    animation: slideshow 15s linear infinite;
  }
  .wave_1--statue4 {
    top: 400rpx;
    height: 1200rpx;
    background-image: url("~@/static/wave_1.png");
    animation: slideshow 15s linear infinite;
  }
  .wave_2--statue1,
  .wave_2--statue4 {
    right: 0;
    top: 500rpx;
    background-image: url("~@/static/wave_2.png");
    animation: slideshow-reverse 15s linear infinite;
  }
  .wave_3--statue1,
  .wave_3--statue4 {
    left: 0;
    top: 600rpx;
    background-image: url("~@/static/wave_3.png");
    animation: slideshow 15s linear infinite;
  }
  .wave_1--statue3 {
    left: 50%;
    transform: translateX(-50%);
    top: 300rpx;
    height: 1600rpx;
    background-image: url("~@/static/wave_1.png");
  }
  .wave_2--statue3 {
    right: 0;
    top: 100vh;
    background-image: url("~@/static/wave_2.png");
  }
  .wave_3--statue3 {
    right: 0;
    top: 100vh;
    background-image: url("~@/static/wave_3.png");
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
    z-index: 9;
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
  .waves-pro {
    width: 100%;
    height: 250rpx;
    position: absolute;
    z-index: 9;
    left: 0;
    top: 800rpx;
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
    z-index: 12;
  }
  .copyright {
    height: 24rpx;
    position: absolute !important;
    left: 50%;
    transform: translateX(-50%);
    bottom: 60rpx;
    bottom: calc(60rpx + constant(safe-area-inset-bottom));
    bottom: calc(60rpx + env(safe-area-inset-bottom));
    opacity: 0;
  }
  .down {
    position: relative;
    top: 100vh;
    width: 100%;
    height: 100%;
    overflow: hidden;
    transition: all 0.5s ease-in;
    background-color: #5cd7d4;
    .name {
      position: absolute;
      top: 20rpx;
      left: 0;
      background-color: white;
      width: 300rpx;
      padding: 0 30rpx;
      height: 64rpx;
      border-radius: 32rpx;
    }
    .toYou {
      position: absolute;
      top: 110rpx;
      left: 0;
      height: 36rpx;
    }
    .textContent {
      position: absolute;
      padding: 20rpx;
      top: 170rpx;
      left: 0;
      bottom: 260rpx;
      box-sizing: border-box;
      bottom: calc(260rpx + constant(safe-area-inset-bottom));
      bottom: calc(260rpx + env(safe-area-inset-bottom));
      width: 100%;
      height: 700rpx;
      background-color: #fff;
      border-radius: 0px 24rpx 24rpx 24rpx;
    }
  }
  .down-normal {
    top: 0rpx;
  }
  .protocol {
    display: flex;
    justify-content: center;
    position: absolute;
    width: calc(100% - 64rpx);
    bottom: 60rpx;
    bottom: calc(60rpx + constant(safe-area-inset-bottom));
    bottom: calc(60rpx + env(safe-area-inset-bottom));
    .check {
      width: 30rpx;
      height: 30rpx;
      margin-right: 10rpx;
    }
    .protocolText {
      height: 30rpx;
      z-index: 10;
    }
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
    left: calc(100% - 185rpx);
    transform: rotateY(0);
  }
  50% {
    left: calc(100% - 155rpx);
    transform: rotateY(90deg);
  }
  60% {
    left: calc(100% - 185rpx);
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
    left: calc(100% - 140rpx);
    transform: rotateY(0);
  }
  50% {
    left: calc(100% - 110rpx);
    transform: rotateY(90deg);
  }
  55% {
    left: calc(100% - 140rpx);
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
