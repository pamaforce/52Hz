<template>
  <scroll-view
    :scroll-y="tempStatue_4"
    :scroll-top="scrollTop"
    scroll-anchoring
    class="scroll"
  >
    <view
      class="index"
      :style="
        (tempStatue_4 ? 'background-color:#52b4ce;' : 'overflow-y:hidden;') +
        (pageStatue === 4 && tempStatue_5 ? 'background-color:#FF97A1;' : '')
      "
    >
      <view class="dialogBack" v-show="tempStatue_4" ref="top"> </view>
      <u-navbar safeAreaInsetTop bgColor="#ffffff00 !important"
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
              ? tempStatue_5
                ? require('../../static/congratulate.svg')
                : personalStatue === 0
                ? require('../../static/tota.svg')
                : require('../../static/h' + hour + '.svg')
              : pageStatue === 5
              ? require('../../static/about.svg')
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
        :style="(tempStatue_4 ? 'height:800rpx;' : '')+(tempStatue_8?'z-index:-1;':'')"
      ></view>
      <view
        v-show="pageStatue === 3 || pageStatue === 2 || pageStatue === 5"
        :class="'theSubWave subWave_1--statue' + pageStatue"
      ></view>
      <view
        :class="
          'theWave wave_2--statue' +
          pageStatue +
          (pageStatue === 4 ? ' up-class' : '')
        "
        :style="tempStatue_8?'z-index:-1;':''"
        v-show="!tempStatue_4 || !tempStatue_3"
      ></view>
      <view
        :class="
          'theWave wave_3--statue' +
          pageStatue +
          (pageStatue === 4 ? ' up-class' : '')
        "
        :style="tempStatue_8?'z-index:-1;':''"
        v-show="!tempStatue_4 || !tempStatue_3"
      ></view>
      <image src="../../static/whale_1.svg" :class="'aboutWhale'+(tempStatue_7 ? ' textShow' : '')" 
        v-show="pageStatue === 5 || tempStatue_6">
      <image src="../../static/aboutText.svg" :class="'aboutText'+(tempStatue_7 ? ' textShow' : '')+(windowStatue?' h5Top':'')" mode="widthFix"
        v-show="pageStatue === 5 || tempStatue_6">
      <view
        :class="'anchorBar' + (tempStatue_3 ? ' anchorBarShow' : '')"
        v-show="pageStatue === 3 || tempStatue_4"
      ></view>
      <image
        :class="'anchor' + (tempStatue_3 ? ' anchorShow' : '')"
        src="../../static/anchor.svg"
        v-show="pageStatue === 3 || tempStatue_4"
      />
      <view
        :class="
          'subAnchorBar offset-1' + (tempStatue_3 ? ' subAnchorBarShow' : '')
        "
        v-show="pageStatue === 3 || tempStatue_4"
      ></view>
      <image
        :class="'subAnchor offset-1' + (tempStatue_3 ? ' subAnchorShow' : '')"
        src="../../static/anchor.svg"
        v-show="pageStatue === 3 || tempStatue_4"
      />
      <view
        :class="
          'subAnchorBar offset-2' + (tempStatue_3 ? ' subAnchorBarShow' : '')
        "
        v-show="pageStatue === 3 || tempStatue_4"
      ></view>
      <image
        :class="'subAnchor offset-2' + (tempStatue_3 ? ' subAnchorShow' : '')"
        src="../../static/anchor.svg"
        v-show="pageStatue === 3 || tempStatue_4"
      />
      <view
        :class="
          'subAnchorBar offset-3' + (tempStatue_3 ? ' subAnchorBarShow' : '')
        "
        v-show="pageStatue === 3 || tempStatue_4"
      ></view>
      <image
        :class="'subAnchor offset-3' + (tempStatue_3 ? ' subAnchorShow' : '')"
        src="../../static/anchor.svg"
        v-show="pageStatue === 3 || tempStatue_4"
      />
      <view
        :class="
          'subAnchorBar offset-4' + (tempStatue_3 ? ' subAnchorBarShow' : '')
        "
        v-show="pageStatue === 3 || tempStatue_4"
      ></view>
      <image
        :class="'subAnchor offset-4' + (tempStatue_3 ? ' subAnchorShow' : '')"
        src="../../static/anchor.svg"
        v-show="pageStatue === 3 || tempStatue_4"
      />
      <text
        :class="'date' + (tempStatue_3 ? ' textShow' : '')"
        v-show="pageStatue === 3 || tempStatue_4"
        >{{ today }}</text
      >
      <text
        :class="'days' + (tempStatue_3 ? ' textShow' : '')"
        v-show="pageStatue === 3 || tempStatue_4"
        >{{
          personalStatue === 0
            ? "您还没有进行告白哦~"
            : "和 " + vuex_object + " 告白的第" + day + "天"
        }}</text
      >
      <text
        :class="'wait' + (tempStatue_3 ? ' textShow' : '')"
        v-show="pageStatue === 3 || tempStatue_4"
        v-if="personalStatue === 1"
        >也有在认真等待Ta的告白……</text
      >
      <view
        class="dialog"
        v-show="pageStatue === 3 || tempStatue_4"
        v-if="personalStatue !== 0"
        :style="personalStatue===1?'margin-top:460rpx':''"
      >
        <view :class="'dialogContent' + (tempStatue_3 ? ' textShow' : '')">
          <view v-for="(item, i) in messageList" :key="i"
            ><text style="font-weight: 700" v-if="item.pursuit===vuex_user&&(!messageList[i-1]||messageList[i-1].pursuit!==item.pursuit)">{{ vuex_object }} 对我说</text
            ><text style="font-weight: 700" v-if="item.pursuit!==vuex_user&&(!messageList[i-1]||messageList[i-1].pursuit!==item.pursuit)">我对 {{vuex_object}} 说</text
            ><view class="detail" :style="item.pursuit===vuex_user?'border-radius: 0px 18rpx 18rpx 18rpx;':''"><text user-select selectable style="width:100%;display:inline-block;white-space: pre-wrap; word-wrap: break-word;word-break:break-word;height: auto;">{{ item.addition }}</text></view></view
          ></view
        ></view
      >
      <u-button
        text="我还想说"
        :custom-style="moreBtnStyle"
        v-if="pageStatue === 3 && personalStatue !== 0"
        @click="toDo"
      ></u-button>
      <image
        :class="'btnText text_1' + (tempStatue ? ' show-class' : '')"
        src="../../static/btn_1.svg"
        mode="heightFix"
        @click="toPast"
        v-show="pageStatue === 2 || tempStatue"
      />
      <image
        :class="'btnText text_2' + (tempStatue ? ' show-class' : '')"
        src="../../static/btn_2.svg"
        mode="heightFix"
        @click="toAbout"
        v-show="pageStatue === 2 || tempStatue"
      /><image
        :class="'btnText text_3' + (tempStatue ? ' show-class' : '')"
        src="../../static/btn_3.svg"
        mode="heightFix"
        @click="toLogout"
        v-show="pageStatue === 2 || tempStatue"
      />
      <input
        type="text"
        placeholder="天外天账号/学号"
        class="account"
        v-model="account"
        placeholder-style="color:#1C2550;opacity:0.7;font-weight:400"
        v-if="pageStatue === 0"
      />
      <input
        type="text"
        placeholder="密码"
        class="password"
        v-model="password"
        placeholder-style="color:#5CD7D4;opacity:0.7;font-weight:400"
        v-if="pageStatue === 0"
        @confirm="toLogin"
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
        v-show="personalStatue === 2"
        :src="
          genderMe === genderTa
            ? require('../../static/whale_1.svg')
            : require('../../static/whale_2.svg')
        "
        :class="
          'whale_2' +
          (pageStatue === 1 || (pageStatue === 4 && !tempStatue_2)
            ? ''
            : ' hide-class')
        "
      />
      <u-transition
        :show="pageStatue === 1"
        mode="fade"
        v-if="personalStatue !== 0"
      >
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
            :style="
              'height:' +
              heights[i] +
              'rpx;' +
              (tempStatue_5 ? 'background-color:#FF97A166;' : '')
            "
          ></view>
        </view>
      </u-transition>
      <image
        :src="
          pageStatue === 1
            ? require('../../static/btn.svg')
            : pageStatue === 4
            ? tempStatue_5
              ? require('../../static/sendPro.svg')
              : require('../../static/send.svg')
            : require('../../static/btn.svg')
        "
        class="btn"
        @click="toDo"
        v-if="pageStatue === 1 || pageStatue === 4"
      />
      <image
        :class="'copyright' + (tempStatue ? ' show-class' : '')"
        src="../../static/right.svg"
        mode="heightFix"
        v-show="pageStatue === 2 || tempStatue"
      />
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
          @click="toProtocol"
      /></view>
      <view
        :class="'down' + (pageStatue === 4 ? ' down-normal' : '')"
        v-if="!tempStatue_4"
        :style="
          pageStatue === 4 && tempStatue_5 ? 'background-color:#FF97A1;' : ''
        "
      >
        <input
          class="name"
          @input="getValue_thePerson"
          v-model="thePerson"
          :disabled="personalStatue !== 0"
          placeholder="Ta 的学号或姓名"
        />
        <image
          :src="
            tempStatue_5
              ? require('../../static/toyou.svg')
              : personalStatue === 0
              ? require('../../static/toyou.svg')
              : require('../../static/totaagain.svg')
          "
          class="toYou"
          mode="heightFix"
        />
        <view
          class="textContent"
          :style="tempStatue_5 ? 'border-radius: 24rpx 24rpx 0px 24rpx;' : ''"
        >
          <u--textarea
          style="z-index:11;background-color:#ffffff00;padding:0"
          height="640rpx"
          fixed
          count
          v-model="theText"
          maxlength="250"
          border="none"
          confirmType=""
          :show-confirm-bar="false"
          @input="getValue_theText"
          ></u--textarea>
        </view>
      </view>
    </view>
    <u-notify
      ref="uNotify"
      style="max-width: 450px !important; margin: 0 auto"
    ></u-notify>
    <u-popup :show="popupShow" mode="center" @close="popupShow=false" bgColor="transparent">
        <view class="popup">
            <image src="../../static/aboutText.svg" class="popupText" mode="widthFix"/>
        </view>
	</u-popup>
    <u-modal :show="dialogShow" :closeOnClickOverlay="true" showCancelButton content="确认是Ta了就不能反悔了哦~" style="text-align:center" @confirm="toConfirm" @cancel="dialogShow=false"></u-modal>
  </scroll-view>
</template>

<script>
const { aplus_queue } = window;
aplus_queue.push({
  action: "aplus.sendPV",
  arguments: [{ is_auto: false }],
});
import {
  loginTwt,
  getConfession,
  getUserByUserNumber,
  getUserByName,
  addConfession,
  getConfessionByPursuit,
  getUserByToken,
} from "../../api/index";
export default {
  data() {
    return {
      windowStatue: false,
      popupShow: false,
      sendLoading: false,
      personalStatue: 0,
      scrollTop: 0,
      title: "Hello",
      pageStatue: 1,
      password: "",
      account: "",
      thePerson: "",
      theText: "",
      loginLoading: false,
      dialogShow: false,
      genderMe: "",
      genderTa: "",
      thatDay: "",
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
      messageList: [],
      isPassword: true,
      rate: 1,
      tempStatue: false,
      tempStatue_2: false,
      tempStatue_3: false,
      tempStatue_4: false,
      tempStatue_5: false,
      tempStatue_6: false,
      tempStatue_7: false,
      tempStatue_8: false,
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
      moreBtnStyle: {
        position: "fixed",
        left: "50%",
        bottom: "50rpx",
        bottom: "calc(50rpx + constant(safe-area-inset-bottom))",
        bottom: "calc(50rpx + env(safe-area-inset-bottom))",
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
  onLoad(options) {
    if (!this.vuex_token) {
      this.popupShow = true;
    }
    if (options.token) {
      this.$u.vuex("vuex_token", options.token);
      this.getInfo(0);
      this.timer = setInterval(() => {
        this.refreshWave(this.personalStatue);
      }, 200);
    }
    if (window) {
      this.windowStatue = true;
    }
  },
  created() {
    if (window) {
      window.addEventListener(
        "touchmove",
        function (e) {
          let target = e.target;
          if (target && target.tagName === "TEXTAREA") {
            e.stopPropagation();
          }
        },
        true
      );
    }
    if (this.vuex_token) {
      this.getInfo(0);
    } else {
      this.pageStatue = 0;
    }
    this.timer = setInterval(() => {
      this.refreshWave(this.personalStatue);
    }, 200);
  },
  computed: {
    today() {
      let date = new Date();
      return `${(date.getFullYear() + "").slice(2, 4)}/${
        date.getMonth() + 1 < 10
          ? "0" + (date.getMonth() + 1)
          : date.getMonth() + 1
      }/${date.getDate() < 10 ? "0" + date.getDate() : date.getDate()}`;
    },
    hour() {
      let d = new Date().getHours();
      if (d >= 0 && d < 6) return 0;
      else if (d >= 6 && d < 8) return 1;
      else if (d >= 8 && d < 11) return 2;
      else if (d >= 11 && d < 13) return 3;
      else if (d >= 13 && d < 17) return 4;
      else if (d >= 17 && d < 19) return 5;
      else if (d >= 19 && d < 24) return 6;
    },
    day() {
      let minus = new Date() - new Date(this.thatDay.replaceAll("-", "/"));
      return Math.ceil(minus / 86400000);
    },
  },
  methods: {
    initVuex() {
      this.$u.vuex("vuex_token", "");
      this.$u.vuex("vuex_user", "");
      this.$u.vuex("vuex_object", "");
      this.$u.vuex("vuex_objectNo", "");
    },
    toLogout() {
      this.toast("ヾ(￣▽￣)Bye~Bye~");
      this.pageStatue = 0;
      this.initVuex();
    },
    toDo() {
      if (this.pageStatue === 1) {
        this.pageStatue = 4;
        clearInterval(this.timer);
        setTimeout(() => {
          this.tempStatue_2 = true;
        }, 500);
        setTimeout(() => {
          if (this.pageStatue === 4) this.tempStatue_8 = true;
        }, 1000);
      } else if (this.pageStatue === 3) {
        if (document) {
          document.body.scrollTop = 0;
        } else {
          this.goTop();
        }
        setTimeout(() => {
          this.tempStatue_3 = false;
          this.tempStatue_4 = false;
          setTimeout(() => {
            this.pageStatue = 4;
            this.tempStatue = true;
            clearInterval(this.timer);
            setTimeout(() => {
              if (this.pageStatue === 4) this.tempStatue_8 = true;
              this.tempStatue_2 = true;
            }, 500);
          }, 500);
        }, 10);
      } else if (this.pageStatue === 4) {
        if (this.tempStatue_5) {
          this.heights.map((item, i, self) => {
            this.$set(self, i, 0);
          });
          this.timer = setInterval(() => {
            this.refreshWave(this.personalStatue);
          }, 200);
          this.tempStatue_8 = false;
          this.pageStatue = 1;
          this.tempStatue_2 = false;
          setTimeout(() => {
            if (this.pageStatue !== 4) this.tempStatue_5 = false;
          }, 1000);
          return;
        }
        if (this.sendLoading) {
          this.toast("正在发送哦~");
          return;
        }
        if (!this.thePerson) {
          this.toast("请输入Ta的学号或姓名哦~");
          return;
        }
        if (!this.theText) {
          this.toast("对Ta说点什么吧~");
          return;
        }
        if (this.personalStatue === 0) {
          this.dialogShow = true;
        } else {
          this.toConfirm();
        }
      }
    },
    sortByTime(arr) {
      let compare = (property) => {
        return function (a, b) {
          return (
            new Date(a[property].replaceAll("-", "/")) -
            new Date(b[property].replaceAll("-", "/"))
          );
        };
      };
      arr.sort(compare("date"));
    },
    toConfirm() {
      this.dialogShow = false;
      this.sendLoading = true;
      let personList = [];
      if (/^\d{10}$/.test(this.thePerson)) {
        getUserByUserNumber({ userNumber: this.thePerson })
          .then(({ result: res }) => {
            if (res.length === 0) {
              this.toast("我们也没能找到Ta，检查一下信息吧~");
              this.sendLoading = false;
            } else {
              if (res.length === 1 && res[0].userNumber === this.vuex_user) {
                this.toast("嘻嘻，知道你喜欢自己啦~");
                this.sendLoading = false;
              } else {
                for (let i = 0; i < res.length; i++) {
                  if (res[i].userNumber !== this.vuex_user) {
                    personList.push(res[i].userNumber);
                  }
                }
                this.sendMsg(personList);
              }
            }
          })
          .catch(() => {
            this.toast("寻找Ta遇到问题了，请联系管理员~");
            this.sendLoading = false;
          });
      } else {
        getUserByName({ userName: this.thePerson })
          .then(({ result: res }) => {
            if (res.length === 0) {
              this.toast("我们也没能找到Ta，检查一下信息吧~");
              this.sendLoading = false;
            } else {
              if (res.length === 1 && res[0].userNumber === this.vuex_user) {
                this.toast("嘻嘻，知道你喜欢自己啦~");
                this.sendLoading = false;
              } else {
                for (let i = 0; i < res.length; i++) {
                  if (res[i].userNumber !== this.vuex_user) {
                    personList.push(res[i].userNumber);
                  }
                }
                this.sendMsg(personList);
              }
            }
          })
          .catch(() => {
            this.toast("寻找Ta遇到问题了，请联系管理员~");
            this.sendLoading = false;
          });
      }
    },
    sendMsg(val) {
      let promiseArr = [];
      let add0 = (x) => (x < 10 ? "0" + x : x);
      let date = new Date();
      let now =
        date.getFullYear() +
        "-" +
        add0(date.getMonth() + 1) +
        "-" +
        add0(date.getDate()) +
        " " +
        add0(date.getHours()) +
        ":" +
        add0(date.getMinutes()) +
        ":" +
        add0(date.getSeconds());
      for (let i = 0; i < val.length; i++) {
        promiseArr.push(
          addConfession({
            token: this.vuex_token,
            confessionName: "-",
            pursuit: val[i],
            content: "-",
            addition: this.theText,
            date: now,
          })
        );
      }
      Promise.all(promiseArr)
        .then((res) => {
          let flag = true;
          for (let i = 0; i < res.length; i++) {
            if (res[i].code !== 0) {
              flag = false;
            }
          }
          if (flag) {
            if (this.personalStatue === 0)
              this.toast("告白成功，等待好消息吧！");
            else this.toast("我们已为您精准送达~");
            this.theText = "";
            this.toChange();
            getConfession({ token: this.vuex_token }).then(
              ({ result: res }) => {
                this.messageList = res;
                if (res.length === 0) {
                  this.personalStatue = 0;
                } else {
                  if (res[0].isMatch === 1) {
                    this.personalStatue = 2;
                    getConfessionByPursuit({
                      pursuit: res[0].pursuit,
                      token: this.vuex_token,
                    }).then(({ result: res }) => {
                      this.messageList.push(...res);
                      this.sortByTime(this.messageList);
                    });
                  } else {
                    this.personalStatue = 1;
                  }
                  this.thatDay = res[0].date;
                  this.$u.vuex("vuex_objectNo", res[0].pursuit);
                  getUserByUserNumber({ userNumber: res[0].pursuit }).then(
                    ({ result: res }) => {
                      if (res.length > 0) {
                        this.genderTa = res[0].gender;
                        this.$u.vuex("vuex_object", res[0].userName);
                        this.thePerson = res[0].userName;
                      } else {
                        this.$u.vuex("vuex_object", "");
                        this.thePerson = "";
                      }
                    }
                  );
                }
              }
            );
          } else {
            if (this.personalStatue === 0)
              this.toast("告白可能失败了，请重试~");
            else this.toast("好像没能为您送达消息……");
          }
          this.sendLoading = false;
        })
        .catch(() => {
          if (this.personalStatue === 0) this.toast("告白可能失败了，请重试~");
          else this.toast("好像没能为您送达消息……");
          this.sendLoading = false;
        });
    },
    toProtocol() {
      uni.$u.route({
        url: "pages/protocol/index",
      });
    },
    getValue_theText() {
      this.refreshWave(2);
    },
    getValue_thePerson() {
      this.refreshWave(2);
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
      } else if (this.pageStatue === 3 || this.pageStatue === 5) {
        setTimeout(() => {
          this.pageStatue = 2;
        }, 10);
        this.tempStatue_7 = false;
        this.tempStatue_3 = false;
        setTimeout(() => {
          this.tempStatue_4 = false;
          this.tempStatue_6 = false;
          if (this.pageStatue === 2) this.tempStatue = true;
        }, 1000);
      } else if (this.pageStatue === 4) {
        this.heights.map((item, i, self) => {
          this.$set(self, i, 0);
        });
        this.timer = setInterval(() => {
          this.refreshWave(this.personalStatue);
        }, 200);
        this.tempStatue_8 = false;
        this.pageStatue = 1;
        this.tempStatue_2 = false;
        if (this.tempStatue_5)
          setTimeout(() => {
            if (this.pageStatue !== 4) this.tempStatue_5 = false;
          }, 1000);
      }
    },
    toast(msg) {
      this.$refs.uNotify.show({
        message: msg,
        duration: 2000,
        safeAreaInsetTop: true,
        top: "0rpx",
      });
    },
    toLogin() {
      if (!this.checked) {
        this.toast("请您先阅读我们的隐私政策，同意后方可登录哦~");
        return;
      }
      if (!this.account) {
        this.toast("请输入您的天外天账号哦~");
        return;
      }
      if (!this.password) {
        this.toast("请输入您的密码哦~");
        return;
      }
      this.loginLoading = true;
      loginTwt({ account: this.account, password: this.password })
        .then(({ result: res }) => {
          this.genderMe = res.gender;
          this.$u.vuex("vuex_token", res.token);
          this.$u.vuex("vuex_user", res.userNumber);
          this.getInfo(0);
        })
        .catch(() => {
          this.initVuex();
          this.toast("账号或密码错误，再仔细检查一下吧！");
          this.loginLoading = false;
          this.password = "";
        });
    },
    getInfo(val) {
      getUserByToken({ token: this.vuex_token }).then(({ result: res }) => {
        this.genderMe = res;
      });
      getConfession({ token: this.vuex_token })
        .then(({ result: res }) => {
          this.messageList = res;
          if (res.length === 0) {
            this.personalStatue = 0;
          } else {
            if (res[0].isMatch === 1) {
              this.personalStatue = 2;
              getConfessionByPursuit({
                pursuit: res[0].pursuit,
                token: this.vuex_token,
              }).then(({ result: res }) => {
                this.messageList.push(...res);
                this.sortByTime(this.messageList);
              });
            } else {
              this.personalStatue = 1;
            }
            this.thatDay = res[0].date;
            this.$u.vuex("vuex_objectNo", res[0].pursuit);
            getUserByUserNumber({ userNumber: res[0].pursuit }).then(
              ({ result: res }) => {
                if (res.length > 0) {
                  this.genderTa = res[0].gender;
                  this.$u.vuex("vuex_object", res[0].userName);
                  this.thePerson = res[0].userName;
                } else {
                  this.$u.vuex("vuex_object", "Ta");
                  this.thePerson = "Ta";
                }
              }
            );
          }
          if (val === 0) {
            this.toast("登录成功");
            this.pageStatue = 1;
            this.loginLoading = false;
          }
          //if (this.personalStatue === 2) {//恭喜文案
          //this.pageStatue = 4;
          //this.tempStatue_5 = true;
          //} else {
          // this.pageStatue = 1;
          //}
        })
        .catch(() => {
          this.toast("非常抱歉，获取用户信息失败，请联系管理员解决！");
          if (val === 0) {
            this.initVuex();
            this.loginLoading = false;
            this.password = "";
          }
        });
    },
    toPast() {
      this.pageStatue = 3;
      this.tempStatue = false;
      this.getInfo();
      setTimeout(() => {
        if (this.pageStatue === 3) {
          this.tempStatue_3 = true;
          this.tempStatue_4 = true;
        }
      }, 1000);
    },
    toAbout() {
      this.pageStatue = 5;
      this.tempStatue = false;
      setTimeout(() => {
        if (this.pageStatue === 5) {
          this.tempStatue_7 = true;
          this.tempStatue_6 = true;
        }
      }, 1000);
    },
    goTop() {
      this.scrollTop = 1;
      setTimeout(() => {
        this.scrollTop = 0;
      }, 0);
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
  onShareAppMessage() {
    uni.share({
      provider: "weixin",
      scene: "WXSceneSession",
      type: 5,
      imageUrl: "~@/static/whale_1.svg",
      miniProgram: {
        id: "wx2d5a5e1a4179f15c",
        path: "pages/index/index",
        type: 0,
        webUrl: "https://52hz.twt.edu.cn",
      },
    });
  },
  onShareTimeline() {
    uni.share({
      provider: "weixin",
      scene: "WXSceneSession",
      type: 5,
      imageUrl: "~@/static/whale_1.svg",
      miniProgram: {
        id: "wx2d5a5e1a4179f15c",
        path: "pages/index/index",
        type: 0,
        webUrl: "https://52hz.twt.edu.cn",
      },
    });
  },
};
</script>

<style scope lang='scss'>
.scroll {
  height: 100vh !important;
  overflow: hidden !important;
  box-sizing: border-box !important;
  font-family: Product Sans !important;
  max-width: 450px;
  margin: 0 auto;
}
.index {
  background-color: #5cd7d4;
  position: relative;
  width: 100vw;
  max-width: 450px;
  margin: 0 auto;
  min-height: 100vh;
  padding: 0 32rpx;
  box-sizing: border-box;
  padding-bottom: 0;
  overflow-x: hidden;
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
      .line__1--statue5,
      .line__1--statue3,
      .line__1--statue2 {
        top: 15rpx;
        left: 9rpx;
        width: 36rpx;
        transform: rotate(-30deg);
      }
      .line__2--statue5,
      .line__2--statue3,
      .line__2--statue2 {
        top: 24rpx;
        left: 9rpx;
        height: 9rpx;
      }
      .line__3--statue5,
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
    top: 751rpx !important;
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
    top: 751rpx;
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
  .anchorBar {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    background-color: #00284c;
    border-radius: 5rpx;
    width: 10rpx;
    height: 60rpx;
    top: 300rpx;
    opacity: 0;
    transition: all 0.1s ease-in;
  }
  .anchorBarShow {
    transition: all 0.5s ease-in !important;
    height: 116rpx !important;
    opacity: 1 !important;
  }
  .anchor {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 64rpx;
    height: 64rpx;
    top: 354rpx;
    opacity: 0;
    transition: all 0.1s ease-in;
  }
  .anchorShow {
    transition: all 0.5s ease-in !important;
    top: 410rpx !important;
    opacity: 1 !important;
  }
  .subAnchorBar {
    position: absolute;
    left: 50%;
    background-color: #00284c;
    border-radius: 5rpx;
    width: 6rpx;
    height: 35rpx;
    top: 300rpx;
    opacity: 0;
    transition: all 0.1s ease-in;
  }
  .subAnchorBarShow {
    transition: all 0.5s ease-in !important;
    height: 85rpx !important;
    opacity: 1 !important;
  }
  .subAnchor {
    position: absolute;
    left: 50%;
    width: 36rpx;
    height: 36rpx;
    top: 330rpx;
    opacity: 0;
    transition: all 0.1s ease-in;
  }
  .subAnchorShow {
    transition: all 0.5s ease-in !important;
    top: 380rpx !important;
    opacity: 1 !important;
  }
  .offset-1 {
    transform: translateX(calc(-50% - 320rpx));
  }
  .offset-2 {
    transform: translateX(calc(-50% - 160rpx));
  }
  .offset-3 {
    transform: translateX(calc(-50% + 160rpx));
  }
  .offset-4 {
    transform: translateX(calc(-50% + 320rpx));
  }
  .date {
    position: absolute;
    top: 480rpx;
    left: 50%;
    transform: translateX(-50%);
    font-size: 48rpx;
    font-weight: 700;
    color: #00284c;
    opacity: 0;
    transition: all 0.1s ease-in;
  }
  .days {
    position: absolute;
    top: 550rpx;
    left: 50%;
    transform: translateX(-50%);
    font-size: 32rpx;
    font-weight: 700;
    text-align: center;
    width: 100%;
    color: #00284c;
    opacity: 0;
    transition: all 0.1s ease-in;
  }
  .wait {
    position: absolute;
    top: 594rpx;
    left: 50%;
    transform: translateX(-50%);
    font-size: 32rpx;
    font-weight: 700;
    text-align: center;
    width: 100%;
    color: #00284c;
    opacity: 0;
    transition: all 0.1s ease-in;
  }
  .textShow {
    transition: opacity 1s ease-in !important;
    opacity: 1 !important;
  }
  .aboutWhale {
    width: 144rpx;
    height: 144rpx;
    position: absolute;
    top: 400rpx;
    left: 50%;
    transform: translateX(-50%);
    transition: all 0.1s ease-in;
    opacity: 0;
  }
  .aboutText {
    width: calc(100% - 64rpx);
    position: absolute;
    top: 580rpx;
    left: 50%;
    transform: translateX(-50%);
    transition: all 0.1s ease-in;
    opacity: 0;
  }
  .dialog {
    position: relative;
    margin-top: 420rpx;
    width: 100%;
    margin-bottom: 240rpx;
    margin-bottom: calc(240rpx + constant(safe-area-inset-bottom));
    margin-bottom: calc(240rpx + env(safe-area-inset-bottom));
    border-radius: 32rpx;
  }
  .dialogBack {
    position: absolute;
    top: 0;
    left: 0;
    height: 500rpx;
    width: 100vw;
    background-color: #5cd7d4;
  }
  .dialogContent {
    width: calc(100% - 64rpx);
    padding: 32rpx;
    box-sizing: border-box;
    margin: 0 32rpx;
    margin-bottom: 240rpx;
    margin-bottom: calc(240rpx + constant(safe-area-inset-bottom));
    margin-bottom: calc(240rpx + env(safe-area-inset-bottom));
    border-radius: 32rpx;
    background-color: #00284c;
    opacity: 0;
    transition: opacity 0.1s ease-in;
    color: #fff;
    font-size: 28rpx;
    .detail {
      color: black;
      background-color: #fff;
      padding: 16rpx;
      border-radius: 18rpx 18rpx 0 18rpx;
      margin-top: 10rpx;
      margin-bottom: 20rpx;
    }
  }
  .theWave {
    width: 3840rpx;
    height: 1100rpx;
    position: absolute;
    transition: all 1s;
    background-size: auto 100%;
  }
  .theSubWave {
    width: 3840rpx;
    height: 800rpx;
    position: absolute;
    background-repeat: repeat-x;
    transition-property: transform, top;
    transition-duration: 1s;
    right: 50%;
    top: 500rpx;
  }
  .subWave_1--statue3 {
    transform: translateX(-50%);
    top: 400rpx;
    background-image: url("~@/static/wave_1.png");
  }
  .subWave_1--statue5 {
    right: 0;
    transform: translateX(50%);
    top: 400rpx;
    background-image: url("~@/static/wave_2.png");
  }
  .wave_1--statue0,
  .wave_1--statue2 {
    left: 0;
    top: 400rpx;
    height: 1600rpx;
    background-image: url("~@/static/wave_1.png");
    animation: slideshow 15s linear infinite;
    background-size: 3840rpx 1600rpx !important;
  }
  .wave_2--statue0,
  .wave_2--statue2 {
    right: 0;
    top: 650rpx;
    background-image: url("~@/static/wave_2.png");
    animation: slideshow-reverse 15s linear infinite;
    background-size: 3840rpx 1600rpx !important;
  }
  .wave_3--statue0,
  .wave_3--statue2 {
    left: 0;
    top: 900rpx;
    background-image: url("~@/static/wave_3.png");
    animation: slideshow 15s linear infinite;
    background-size: 800rpx 1200rpx !important;
  }
  .wave_1--statue1,
  .wave_1--statue4 {
    left: 0;
    top: 400rpx;
    height: 1600rpx;
    background-image: url("~@/static/wave_1.png");
    animation: slideshow 15s linear infinite;
    background-size: 3840rpx 1600rpx !important;
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
    background-size: 3840rpx 1600rpx !important;
  }
  .wave_3--statue1,
  .wave_3--statue4 {
    left: 0;
    top: 600rpx;
    background-image: url("~@/static/wave_3.png");
    animation: slideshow 15s linear infinite;
    background-size: 800rpx 1200rpx !important;
  }
  .wave_1--statue3 {
    left: 50%;
    transform: translateX(-50%);
    top: 300rpx;
    height: 1600rpx;
    background-size: 3840rpx 1600rpx !important;
    background-image: url("~@/static/wave_1.png");
  }
  .wave_2--statue3 {
    right: 0;
    top: 100vh;
    background-image: url("~@/static/wave_2.png");
    background-size: 3840rpx 1600rpx !important;
  }
  .wave_3--statue3 {
    left: 0;
    top: 100vh;
    background-image: url("~@/static/wave_3.png");
    background-size: 800rpx 1200rpx !important;
  }
  .wave_1--statue5 {
    left: 0;
    top: 100vh;
    background-size: 3840rpx 1600rpx !important;
    background-image: url("~@/static/wave_1.png");
  }
  .wave_2--statue5 {
    right: 50%;
    transform: translateX(50%);
    top: 300rpx;
    height: 1600rpx;
    background-image: url("~@/static/wave_2.png");
    background-size: 3840rpx 1600rpx !important;
  }
  .wave_3--statue5 {
    left: 0;
    top: 100vh;
    background-image: url("~@/static/wave_3.png");
    background-size: 800rpx 1200rpx !important;
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
    position: fixed !important;
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
    bottom: 120rpx;
    bottom: calc(120rpx + constant(safe-area-inset-bottom));
    bottom: calc(120rpx + env(safe-area-inset-bottom));
    opacity: 0;
  }
  .down {
    position: relative;
    top: 100vh;
    width: 100%;
    min-height: 1000rpx;
    overflow: hidden;
    transition: all 0.5s ease-in;
    background-color: #5cd7d4;
    .name {
      position: absolute;
      top: 20rpx;
      left: 0;
      background-color: white;
      width: 250rpx;
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
      touch-action: auto;
      position: absolute;
      padding: 20rpx;
      top: 170rpx;
      left: 0;
      bottom: 260rpx;
      overflow-y: visible;
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
    bottom: 150rpx;
    bottom: calc(150rpx + constant(safe-area-inset-bottom));
    bottom: calc(150rpx + env(safe-area-inset-bottom));
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
.popup {
  position: relative;
  width: 650rpx;
  max-width: 450px;
  background-color: #1c2550;
  border-radius: 24rpx;
  overflow: hidden;
  padding: 50rpx;
  padding-bottom: 36rpx;
  box-sizing: border-box;
  .popupText {
    width: 100%;
    border-radius: 24rpx;
  }
}
.h5Top {
  top: 400rpx !important;
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
