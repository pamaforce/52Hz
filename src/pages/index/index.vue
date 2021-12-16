<template>
  <view class="index">
    <u-navbar safeAreaInsetTop bgColor="#5cd7d4"
      ><template slot="left"><view></view></template
    ></u-navbar>
    <view class="top"
      ><image src="../../static/52hz.svg" class="text" mode="heightFix" /><view
        class="icon"
        @click="toChange"
        ><view :class="'lines line__1--statue' + pageStatue"></view
        ><view :class="'lines line__2--statue' + pageStatue"></view
        ><view :class="'lines line__3--statue' + pageStatue"></view></view
    ></view>
    <view class="wave_1"></view>
    <view class="wave_2"></view>
    <view class="wave_3"></view>
    <view class="waves">
      <view
        class="wave"
        v-for="item in 35"
        :key="item"
        :style="'height:' + heights[item] + 'rpx'"
      ></view>
    </view>
    <image src="../../static/btn.svg" class="btn" @click="toDo" />
  </view>
</template>

<script>
export default {
  data() {
    return {
      title: "Hello",
      pageStatue: 1,
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
      this.rate = this.rate === 1 ? 2 : 1;
      if (this.rate === 1) {
        this.heights.map((item, i, self) => {
          this.$set(self, i, 0);
        });
      }
    },
    toChange() {
      this.pageStatue++;
      if (this.pageStatue === 4) this.pageStatue = 1;
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
        top: 18rpx;
        left: 9rpx;
        width: 38rpx;
        transform: rotate(-30deg);
      }
      .line__2--statue2 {
        top: 24rpx;
        left: 12rpx;
        width: 50rpx;
      }
      .line__3--statue2 {
        top: 32rpx;
        left: 9rpx;
        width: 38rpx;
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
  .wave_1 {
    width: 2400rpx;
    height: 200rpx;
    position: absolute;
    left: 0;
    top: 400rpx;
    background-image: url("~@/static/wave_1.png");
    background-repeat: repeat-x;
    animation: slideshow 10s linear infinite;
  }
  .wave_2 {
    width: 2400rpx;
    height: 200rpx;
    position: absolute;
    right: 0;
    top: 500rpx;
    background-image: url("~@/static/wave_2.png");
    background-repeat: repeat-x;
    animation: slideshow-reverse 10s linear infinite;
  }
  .wave_3 {
    width: 2400rpx;
    height: 1200rpx;
    position: absolute;
    left: 0;
    top: 600rpx;
    background-image: url("~@/static/wave_3.png");
    background-repeat: repeat-x;
    animation: slideshow 10s linear infinite;
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
