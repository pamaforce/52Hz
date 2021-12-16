<template>
  <view class="index">
    <u-navbar safeAreaInsetTop :leftIcon="null" bgColor="#5cd7d4"> </u-navbar>
    <view class="top"
      ><image src="../../static/52hz.svg" class="text" mode="heightFix" /><view
        class="icon"
        ><view class="line__1"></view><view class="line__2"></view
        ><view class="line__3"></view></view
    ></view>
    <view
      class="wave_1"
      style="background-image: url(../../static/wave_1.svg)"
    ></view>
    <view
      class="wave_2"
      style="background-image: url(../../static/wave_2.svg)"
    ></view>
    <view
      class="wave_3"
      style="background-image: url(../../static/wave_3.svg)"
    ></view>
    <view class="waves">
      <my-wave
        class="wave"
        v-for="item in 35"
        :key="item"
        :style="'height:' + heights[item] + 'rpx'"
      />
    </view>
    <image src="../../static/btn.svg" class="btn" @click="toDo" />
  </view>
</template>

<script>
import myWave from "../../components/singleWave/index.vue";
export default {
  components: {
    myWave,
  },
  data() {
    return {
      title: "Hello",
      heights: [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      ],
    };
  },
  onLoad() {},
  methods: {
    toDo() {
      this.heights[6] = 32;
      this.heights.map((item, i, self) => {
        this.$set(self, i, item);
      });
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
  height: 100vh;
  padding: 0 32rpx;
  .top {
    width: 686rpx;
    display: flex;
    justify-content: space-between;
    .text {
      height: 96rpx;
    }
    .icon {
      height: 96rpx;
      width: 96rpx;
      padding: 18rpx 9rpx;
      box-sizing: border-box;
      cursor: pointer;
      .line__1,
      .line__2,
      .line__3 {
        width: 60rpx;
        height: 8rpx;
        margin: 9rpx;
        background-color: white;
        border-radius: 4rpx;
      }
    }
  }
  .wave_1 {
    width: 2400rpx;
    height: 200rpx;
    position: absolute;
    left: 0;
    top: 400rpx;
    background-repeat: repeat-x;
    animation: slideshow 10s linear infinite;
  }
  .wave_2 {
    width: 2400rpx;
    height: 200rpx;
    position: absolute;
    right: 0;
    top: 500rpx;
    background-repeat: repeat-x;
    animation: slideshow-reverse 10s linear infinite;
  }
  .wave_3 {
    width: 2400rpx;
    height: 1200rpx;
    position: absolute;
    left: 0;
    top: 600rpx;
    background-repeat: repeat-x;
    animation: slideshow 10s linear infinite;
  }
  .waves {
    width: 750rpx;
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
      transition: all 0.1s;
    }
  }
  .btn {
    width: 144rpx;
    height: 144rpx;
    position: absolute;
    left: 303rpx;
    bottom: 60rpx;
    bottom: calc(60rpx + constant(safe-area-inset-bottom));
    bottom: calc(60rpx + env(safe-area-inset-bottom));
    cursor: pointer;
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
</style>
