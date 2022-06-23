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
      @click="hideAllStatue"
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
              ? require('../../static/tota.svg')
              : pageStatue === 5
              ? require('../../static/about.svg')
              : require('../../static/52hz.svg')
          "
          :class="
            'text' +
            (pageStatue === 4 ? ' highText' : '')
          "
          mode="heightFix" />
          
          <image
          src="../../static/refresh.svg"
          :class="'refreshBtn' + (refreshLoading ? ' rotateLoading' : '')"
          v-if="pageStatue === 3"
          @click="getMyInfo(myInfo,1)"
        ></image
        >
          <image
          src="../../static/blackList.svg"
          class="refreshBtn"
          v-if="pageStatue === 2"
          @click="getBlackList"
        ></image
        >
        <image
          src="../../static/refresh.svg"
          :class="'refreshBtn' + (refreshLoading2 ? ' rotateLoading' : '')"
          v-if="pageStatue === 1"
          @click="getMyInfo(myInfo,1)"
        ></image
        >
        <image
          src="../../static/mail.svg"
          class="refreshBtn2"
          v-if="pageStatue === 1"
          @click="getRead"
        ></image
        ><view class="msgDot" v-if="pageStatue === 1&&msgNum">{{msgNum}}</view><view class="icon" @click="toChange" v-show="pageStatue !== 0"
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
        :style="
          (tempStatue_4 ? 'height:800rpx;' : '') +
          (tempStatue_8 ? 'z-index:-1;' : '')
        "
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
        :style="tempStatue_8 ? 'z-index:-1;' : ''"
        v-show="!tempStatue_4 || !tempStatue_3"
      ></view>
      <view
        :class="
          'theWave subTheWave wave_3--statue' +
          pageStatue +
          (pageStatue === 4 ? ' subUp-class' : '')
        "
        :style="tempStatue_8 ? 'z-index:-1;' : ''"
        v-show="!tempStatue_4 || !tempStatue_3"
      ></view>
      <image
        src="../../static/whale_1.svg"
        style="z-index: 2"
        :class="'aboutWhale' + (tempStatue_7 ? ' textShow' : '')"
        v-if="pageStatue === 5 || tempStatue_6"
      />
      <image
        src="../../static/aboutText.svg"
        :class="
          'aboutText' +
          (tempStatue_7 ? ' textShow' : '') +
          (windowStatue ? ' h5Top' : '')
        "
        mode="widthFix"
        v-if="pageStatue === 5 || tempStatue_6"
      />
      <view
        :class="'anchorBar' + (tempStatue_3 ? ' anchorBarShow' : '')"
        v-if="pageStatue === 3 || tempStatue_4"
      ></view>
      <image
        :class="'anchor' + (tempStatue_3 ? ' anchorShow' : '')"
        src="../../static/anchor.svg"
        v-if="pageStatue === 3 || tempStatue_4"
      />
      <view
        :class="
          'subAnchorBar offset-1' + (tempStatue_3 ? ' subAnchorBarShow' : '')
        "
        v-if="pageStatue === 3 || tempStatue_4"
      ></view>
      <image
        :class="'subAnchor offset-1' + (tempStatue_3 ? ' subAnchorShow' : '')"
        src="../../static/anchor.svg"
        v-if="pageStatue === 3 || tempStatue_4"
      />
      <view
        :class="
          'subAnchorBar offset-2' + (tempStatue_3 ? ' subAnchorBarShow' : '')
        "
        v-if="pageStatue === 3 || tempStatue_4"
      ></view>
      <image
        :class="'subAnchor offset-2' + (tempStatue_3 ? ' subAnchorShow' : '')"
        src="../../static/anchor.svg"
        v-if="pageStatue === 3 || tempStatue_4"
      />
      <view
        :class="
          'subAnchorBar offset-3' + (tempStatue_3 ? ' subAnchorBarShow' : '')
        "
        v-if="pageStatue === 3 || tempStatue_4"
      ></view>
      <image
        :class="'subAnchor offset-3' + (tempStatue_3 ? ' subAnchorShow' : '')"
        src="../../static/anchor.svg"
        v-if="pageStatue === 3 || tempStatue_4"
      />
      <view
        :class="
          'subAnchorBar offset-4' + (tempStatue_3 ? ' subAnchorBarShow' : '')
        "
        v-if="pageStatue === 3 || tempStatue_4"
      ></view>
      <image
        :class="'subAnchor offset-4' + (tempStatue_3 ? ' subAnchorShow' : '')"
        src="../../static/anchor.svg"
        v-if="pageStatue === 3 || tempStatue_4"
      />
      <text
        :class="'date' + (tempStatue_3 ? ' textShow' : '')"
        v-if="pageStatue === 3 || tempStatue_4"
        >{{ today }}</text
      >
      <text
        :class="'days' + (tempStatue_3 ? ' textShow' : '')"
        v-if="pageStatue === 3 || tempStatue_4"
        >{{
          personalStatue === 0
            ? (Object.keys(msgBetweenFriends).length?"您还没有进行爱情告白哦~":"您还没有进行告白哦~")
            : "和 " + (myConfession.u_name||myConfession.stu_number) + " 告白的第" + day + "天"
        }}</text
      >
      <text
        :class="'wait' + (tempStatue_3 ? ' textShow' : '')"
        v-if="personalStatue === 1 && (pageStatue === 3 || tempStatue_4)"
        >也有在认真等待Ta的告白……</text
      >
      <view
        :class="'dialog' + (windowStatue ? ' h5DialogTop' : '')"
        v-if="(pageStatue === 3 || tempStatue_4)"
      >
        <view :class="'dialogContent' + (tempStatue_3 ? ' textShow' : '')" v-if="personalStatue!==0">
          <view style="font-weight: 700;font-size:36rpx;text-align:center;margin-bottom:20rpx">与 Ta 的告白</view>
          <view v-if="myConfession.msg"
            ><view style="display:flex;justify-content:space-between"><text
              style="font-weight: 700"
              >我说</text
            ><text
              style="font-weight: 700;font-style:italic"
              >{{myConfession.updated_at}}</text
            ></view><view
              class="detail"
              @click.stop="hideAllStatue();myConfession.statue=true"
              style="border-radius: 0px 18rpx 18rpx 18rpx;"
              ><text
                user-select
                selectable
                style="
                  width: 100%;
                  display: inline-block;
                  white-space: pre-wrap;
                  word-wrap: break-word;
                  word-break: break-word;
                  height: auto;
                "
                >{{ myConfession.msg }}</text
              ><image
                src="../../static/edit.svg"
                :class="'editBtn' + (myConfession.statue ? ' editBtn_show' : '')"
                @click="newMsg=myConfession.msg;popupShow_9=true"
              ></image><image
                src="../../static/delete.svg"
                :class="'deleteBtn' + (myConfession.statue ? ' deleteBtn_show' : '')"
                @click="popupShow_10=true"
              ></image></view></view>
              <view  v-if="taConfession.msg"
            ><view style="display:flex;justify-content:space-between"><text
              style="font-weight: 700"
              >Ta 说</text
            ><text
              style="font-weight: 700;font-style:italic"
              >{{taConfession.updated_at}}</text
            ></view><view
              class="detail"
              @click.stop="hideAllStatue();taConfession.statue=true"
              ><text
                user-select
                selectable
                style="
                  width: 100%;
                  display: inline-block;
                  white-space: pre-wrap;
                  word-wrap: break-word;
                  word-break: break-word;
                  height: auto;
                "
                >{{ taConfession.msg }}</text
              ></view></view>
              <view v-if="personalStatue===2">
              <view style="font-weight: 700;font-size:36rpx;text-align:center;margin-bottom:20rpx">与 Ta 的消息</view>
              <view v-for="(item,i) in msgBetweenUs" :key="i">
                <view style="display:flex;justify-content:space-between"><text
              style="font-weight: 700"
              >{{item.sender===myInfo.u_id?'我说':'Ta 说'}}</text
            ><text
              style="font-weight: 700;font-style:italic"
              >{{item.created_at}}</text
            ></view><view
              class="detail"
              :style="item.sender===myInfo.u_id?'border-radius: 0px 18rpx 18rpx 18rpx;':''"
              ><text
                user-select
                selectable
                style="
                  width: 100%;
                  display: inline-block;
                  white-space: pre-wrap;
                  word-wrap: break-word;
                  word-break: break-word;
                  height: auto;
                "
                >{{ item.msg }}</text
              ></view>
              </view>
              <u-button
        text="发送消息"
        :custom-style="infoBtnStyle"
        @click="theSendMsg='';popupShow_8=true"
      ></u-button>
              </view>
              </view
      >
      </view>
      <text
        :class="'more' + (tempStatue_3 ? ' textShow' : '')"
        v-if="(pageStatue === 3 || tempStatue_4)&&Object.keys(msgBetweenFriends).length"
        >友情告白</text
      >
      <template v-if="(pageStatue === 3 || tempStatue_4)">
      <view
        class="dialogMore"
         
      >
      <view :class="'dialogContent' + (tempStatue_3 ? ' textShow' : '')" v-for="(person,j) in Object.keys(msgBetweenFriends)" :key="j" style="margin-bottom:40rpx">
            <view style="font-weight: 700;font-size:36rpx;text-align:center;margin-bottom:20rpx">{{nicknameList[person]||'以下信息接收者尚未登陆过52Hz哦'}}</view>
        <template v-for="(item,i) in msgBetweenFriends[person]" >
          <view :key="i">
          <view style="display:flex;justify-content:space-between"><text
              style="font-weight: 700"
              >{{nicknameList[person]?nicknameList[item.sender]:((nicknameList[item.r_id]||item.r_stu_number||item.r_phone||'未知对象')+' 收')}}</text
            ><text
              style="font-weight: 700;font-style:italic"
              >{{item.created_at}}</text
            ></view><view
              class="detail"
              :style="item.sender===myInfo.u_id?'border-radius: 0px 18rpx 18rpx 18rpx;':''"
              ><text
                user-select
                selectable
                style="
                  width: 100%;
                  display: inline-block;
                  white-space: pre-wrap;
                  word-wrap: break-word;
                  word-break: break-word;
                  height: auto;
                "
                >{{ item.msg }}</text
              ></view></view>
        </template>
              <u-button
        text="发送消息"
        :custom-style="infoBtnStyle"
        v-if="nicknameList[person]"
        @click="theSendFCMsg='';sender=person;nicknameList[person][0].sender===myInfo.u_id?(()=>{r_stu_number=nicknameList[person][0].r_stu_number;r_phone=nicknameList[person][0].r_phone})():(()=>{})();popupShow_11=true"
      ></u-button>
              </view
      >
      </view> 
      </template>
      <view v-if="pageStatue === 3 || tempStatue_4" class="bottom-back"></view>
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
        confirm-type="next"
        placeholder-style="color:#1C2550;opacity:0.7;font-weight:400;font-family: Product Sans;letter-spacing:2rpx"
        v-if="pageStatue === 0"
      />
      <input
        type="text"
        placeholder="密码"
        class="password"
        v-model="password"
        confirm-type="done"
        placeholder-style="color:#5CD7D4;opacity:0.7;font-weight:400;font-family: Product Sans;letter-spacing:2rpx"
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
        style="z-index: 2"
        :class="
          'whale_1' +
          (pageStatue === 1 || (pageStatue === 4 && !tempStatue_2)
            ? ''
            : ' hide-class')
        "
      />
      <image
        v-show="personalStatue === 2"
        style="z-index: 2"
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
        :class="'downBack' + (pageStatue === 4 ? ' downBack-normal' : '')"
        v-if="!tempStatue_4"
      ></view>
      <view
        :class="
          'down' +
          (pageStatue === 4
            ? ' down-normal' + (windowStatue ? ' h5Down' : '')
            : '')
        "
        v-if="!tempStatue_4"
        :style="
          pageStatue === 4 && tempStatue_5 ? 'background-color:#FF97A1;' : ''
        "
      >
        <view class="name" @click="popupShow_3 = true">
          <image src="../../static/triangle.svg" class="name-prefix" />
          <image
            src="../../static/suffix.svg"
            class="name-suffix"
            mode="heightFix"
          />
            <text class="name-text">{{
              showName || "Ta 是？"
            }}</text></view>
          <u-transition :show="mode===1" mode="fade-right">
        <view class="name-pro" @click="nickname===''?popupShow_4 = true:toast('您的昵称无法更改哦~')" :style="mode===1?'':'right:-400rpx'">
          <image src="../../static/triangle.svg" class="name-prefix" />
          <image
            src="../../static/suffix.svg"
            class="name-suffix"
            mode="heightFix"
          />
          <text class="name-text">{{
              nickname || "您的昵称"
            }}</text></view
          >
        </u-transition>
        <image
          src="../../static/toyou.svg"
          class="toYou"
          mode="heightFix"
        />
        <view class="changeMode" @click="mode=mode===0?1:0;showName = Ta.u_name||Ta.stu_number||Ta.wechat||Ta.phone"><image src="../../static/refresh.svg" class="changeIcon"/><text class="changeText">{{mode===0?'切换为友情告白':'切换为爱情告白'}}</text></view>
        <view
          class="textContent"
          :style="tempStatue_5 ? 'border-radius: 24rpx 24rpx 0px 24rpx;' : ''"
        >
          <u--textarea
            style="
              z-index: 11;
              background-color: #ffffff00;
              padding: 0;
              font-size: 18px;
            "
            height="580rpx"
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
    <u-popup
      :show="popupShow_2"
      mode="center"
      @close="popupShow_2 = false"
      bgColor="transparent"
    >
      <view class="popup">
      </view>
    </u-popup>
    <u-popup
      :show="popupShow_3"
      mode="center"
      @close="popupShow_3 = false"
      bgColor="transparent"
    >
      <view class="subPopup"
        ><text
          >Tips：请为我们提供有关于Ta的一些信息吧，越详细匹配越准确哦（推荐使用学号进行精准匹配OvO）！</text
        >
        <u--input
        v-model="Ta.u_name"
          placeholder="姓名"
          clearable
          color="#fff"
          confirm-type="next"
          :customStyle="{ margin: '30rpx 0' }"
        ></u--input>
        <u--input
        v-model="Ta.stu_number"
          placeholder="学号"
          clearable
          color="#fff"
          confirm-type="next"
          :customStyle="{ margin: '30rpx 0' }"
        ></u--input>
         <u--input
        v-model="Ta.phone"
          placeholder="电话"
          clearable
          color="#fff"
          confirm-type="next"
          :customStyle="{ margin: '30rpx 0' }"
        ></u--input>
         <u--input
        v-model="Ta.qq"
        v-if="mode===0"
          placeholder="QQ"
          clearable
          color="#fff"
          confirm-type="next"
          :customStyle="{ margin: '30rpx 0' }"
        ></u--input>
         <!-- <u--input
        v-model="Ta.wechat"
          placeholder="微信"
          clearable
          color="#fff"
          confirm-type="next"
          :customStyle="{ margin: '30rpx 0' }"
        ></u--input> -->
         <u--input
        v-model="Ta.email"
        v-if="mode===0"
          placeholder="邮箱"
          clearable
          color="#fff"
          confirm-type="next"
          :customStyle="{ margin: '30rpx 0' }"
        ></u--input>
        <view v-show="mode===0">
          <image src="../../static/whale_1.svg" :class="'male'+(Ta.gender==='男'?'  genderChosen':'')" @click="changeGender('男')">
          <image src="../../static/whale_2.svg" :class="'female'+(Ta.gender==='女'?' genderChosen':'')" @click="changeGender('女')">
          <text class="grade_1" @click="gradeShow_1=true">{{Ta.grade_1||'年级'}}</text>
          <text class="grade_2" @click="gradeShow_2=true">{{Ta.grade_2||'学生类型'}}</text>
        </view>
        <u-button
        text="确认"
        :custom-style="infoBtnStyle"
        @click="toConfirmInfo"
      ></u-button>
      </view>
      <u-action-sheet :actions="gradeColumns" :closeOnClickOverlay="true" :closeOnClickAction="true"  title="年级" :show="gradeShow_1" @close="gradeShow_1=false" @select="toGetVal1"></u-action-sheet>
      <u-action-sheet :actions="gradeColumns_2" :closeOnClickOverlay="true" :closeOnClickAction="true"  title="学生类型" :show="gradeShow_2" @close="gradeShow_2=false" @select="toGetVal2"></u-action-sheet>
      <!-- <u-picker :show="gradeShow_1" :columns="[gradeColumns]" closeOnClickOverlay @cancel="Ta.grade_1='';gradeShow_1=false;$forceUpdate();" :defaultIndex='[gradeColumns.indexOf(Ta.grade_1)]' @confirm="toGetVal1" @close="gradeShow_1=false"></u-picker> -->
      <!-- <u-picker :show="gradeShow_2" :columns="[gradeColumns_2]" closeOnClickOverlay @cancel="Ta.grade_2='';gradeShow_2=false;$forceUpdate();" :defaultIndex='[gradeColumns_2.indexOf(Ta.grade_2)]' @confirm="toGetVal2" @close="gradeShow_2=false"></u-picker> -->
    </u-popup>
    <u-popup
      :show="popupShow_4"
      mode="center"
      @close="popupShow_4 = false"
      bgColor="transparent"
    >
      <view class="subPopup"
        ><text
          >Tips：昵称唯一且确认后不可更改哦，请仔细考虑后确认！</text
        >
        <u--input
        v-model="wantName"
          placeholder="您想要的昵称"
          clearable
          color="#fff"
          confirm-type="next"
          :customStyle="{ margin: '30rpx 0' }"
        ></u--input>
        <u-button
        text="确认"
        :custom-style="infoBtnStyle"
        @click="toConfirmName"
      ></u-button>
      </view>
    </u-popup>
    <u-popup
      :show="popupShow_12"
      mode="center"
      @close="popupShow_12 = false"
      bgColor="transparent"
    >
      <view class="popup_2">
        <image
          src="../../static/qr_code.svg"
          class="popupText"
          mode="widthFix"
          @touchstart.prevent
        />
      </view>
    </u-popup>
    <u-popup
      :show="popupShow"
      mode="center"
      @close="popupShow = false"
      bgColor="transparent"
    >
      <view class="popup">
        <image
          src="../../static/aboutText.svg"
          class="popupText"
          mode="widthFix"
          @touchstart.prevent
        />
      </view>
    </u-popup>
    
    <view class="newMsg" :style="showMsg?'z-index:200':'z-index:-1'">
      <view class="helloText">嗨，{{vuex_userName}} ！</view>
      <view class="subText">你知道吗？有些话我一直想对你说：</view>
      <image src="../../static/unlike.svg" class="unlike" @click="popupShow_5=true"/>
      <view class="msgContent" user-select selectable>{{tempMsg.msg}}</view>
      <view class="taName"><view class="taNickname">{{taName||'对方昵称'}}</view></view>
      <image
        src="../../static/backBtn.svg"
        class="backBtn"
        @click="showMsg=false"
      /><image
        src="../../static/addBtn.svg"
        class="addBtn"
        @click="theSendFCMsg='';sender=tempMsg.sender;popupShow_11=true"
      />
    </view>
    <u-popup
      :show="popupShow_5"
      mode="center"
      @close="popupShow_5 = false"
      bgColor="transparent"
    >
      <view class="subPopup" style="text-align:center"
        ><text style="line-height:80rpx"
          >您确认要将该用户拉入黑名单吗?</text
        >
        <u-button
        text="确认"
        :custom-style="infoBtnStyle"
        @click="sureDislikeTa"
      ></u-button>
      </view>
    </u-popup>
    <u-popup
      :show="popupShow_10"
      mode="center"
      @close="popupShow_10 = false"
      bgColor="transparent"
    >
      <view class="subPopup" style="text-align:center"
        ><text style="line-height:80rpx"
          >您确认要删除该告白吗?</text
        ><view style="line-height:40rpx"
          >如果已经配对，你们之间的消息也会被删除哦！</view
        >
        <u-button
        text="确认"
        :custom-style="infoBtnStyle"
        @click="toDeleteMyConfession"
      ></u-button>
      </view>
    </u-popup>
    <u-popup
      :show="popupShow_6"
      mode="center"
      @close="popupShow_6 = false"
      bgColor="transparent"
    >
      <view class="subPopup" style="text-align:center"
        ><text style="line-height:80rpx;font-size:40rpx"
          >您的黑名单</text
        >
        <view style="line-height:80rpx;font-size:32rpx" v-if="blackList.length===0">空空如也</view>
        <view class="blackItem" v-for="(item,i) in blackList" :key="i"><text class="blackName">{{item.nick_name||item.b_u_id}}</text><image
                  src="../../static/delete.svg"
                  class="deleteBlackBtn"
                  @click="toDeleteBlack(item.b_u_id)"
                ></image></view>
      </view>
    </u-popup>
     <u-popup
      :show="popupShow_7"
      mode="center"
      @close="popupShow_7 = false"
      bgColor="transparent"
    >
      <view class="subPopup" style="text-align:center"
        ><text style="line-height:80rpx"
          >爱情告白只能发送一次哦</text
        ><view style="line-height:40rpx"
          >您想好了吗?</view
        >
        <u-button
        text="就是Ta了!"
        :custom-style="infoBtnStyle"
        @click="toConfirm"
      ></u-button>
      </view>
    </u-popup>
    <u-popup
      :show="popupShow_8"
      mode="center"
      @close="popupShow_8 = false"
      bgColor="transparent"
    >
      <view class="subPopup"
        >
        <u--textarea
            style="
              z-index: 11;
              padding: 0;
              font-size: 18px;
            "
            height="580rpx"
            fixed
            count
            v-model="theSendMsg"
            maxlength="250"
            border="none"
            confirmType=""
            placeholder="消息内容"
            :show-confirm-bar="false"
          ></u--textarea>
        <u-button
        text="确认"
        :custom-style="infoBtnStyle"
        :loading="sendMsgLoading"
        @click="toSendMsg"
      ></u-button>
      </view>
    </u-popup>
    <u-popup
      :show="popupShow_9"
      mode="center"
      @close="popupShow_9 = false"
      bgColor="transparent"
    >
      <view class="subPopup"
        >
        <u--textarea
            style="
              z-index: 11;
              padding: 0;
              font-size: 18px;
            "
            height="580rpx"
            fixed
            count
            v-model="newMsg"
            maxlength="250"
            border="none"
            confirmType=""
            placeholder="新的告白内容"
            :show-confirm-bar="false"
          ></u--textarea>
        <u-button
        text="确认"
        :custom-style="infoBtnStyle"
        :loading="updateLoading"
        @click="toConfirmNewMsg"
      ></u-button>
      </view>
    </u-popup><u-popup
      :show="popupShow_11"
      mode="center"
      @close="popupShow_11 = false"
      bgColor="transparent"
    >
      <view class="subPopup"
        >
        <u--textarea
            style="
              z-index: 11;
              padding: 0;
              font-size: 18px;
            "
            height="580rpx"
            fixed
            count
            v-model="theSendFCMsg"
            maxlength="250"
            border="none"
            confirmType=""
            :placeholder="'给 '+(nicknameList[sender])+' 发送消息'"
            :show-confirm-bar="false"
          ></u--textarea>
        <u-button
        text="确认"
        :custom-style="infoBtnStyle"
        :loading="sendFCMsgLoading"
        @click="toSendFCMsg"
      ></u-button>
      </view>
    </u-popup>
    <!-- <u-notice-bar :text="noticeText" mode="closable" class="notice" bgColor="#3c9cff" color="#fff" v-show="noticeText"></u-notice-bar> -->
  </scroll-view>
</template>

<script>
//#ifdef H5
const { aplus_queue } = window;
aplus_queue.push({
  action: "aplus.sendPV",
  arguments: [{ is_auto: false }],
});
//#endif
import {
  loginTwt,
  loginToken_new,
  getMyConfession_new,
  getMyConfessionStatue_new,
  getMyInfo_new,
  addConfession_new,
  getMyNickname_new,
  setMyNickname_new,
  addFriendshipConfession_new,
  getNewFMsg_new,
  setReadFConfession_new,
  addBlackList_new,
  getMyBlackList_new,
  getNickName_new,
  deleteBlackList_new,
  deleteConfession_new,
  updateConfession_new,
  getMyRecvFConfession_new,
  getMySentFConfession_new,
  sendMsg_new,
  getMyMsg_new,
} from "../../api/index";
export default {
  data() {
    return {
      mode: 0,
      refreshLoading2: false,
      updateLoading: false,
      sendMsgLoading: false,
      sendFCMsgLoading: false,
      msgBetweenUs: [],
      myConfession: {},
      taConfession: {},
      refreshLoading: false,
      noticeText: "",
      newMsg: "",
      wantName: "",
      theSendFCMsg: "",
      nicknameList: {},
      windowStatue: false,
      popupShow: false,
      popupShow_2: false,
      popupShow_3: false,
      popupShow_4: false,
      popupShow_5: false,
      popupShow_6: false,
      popupShow_7: false,
      popupShow_8: false,
      popupShow_9: false,
      popupShow_10: false,
      popupShow_11: false,
      popupShow_12: false,
      sendLoading: false,
      gradeShow_1: false,
      gradeShow_2: false,
      personalStatue: 0,
      scrollTop: 0,
      title: "Hello",
      pageStatue: 0,
      password: "",
      account: "",
      thePerson: "",
      theText: "",
      loginLoading: false,
      r_wechat: "",
      r_stu_number: "",
      r_phone: "",
      genderMe: "",
      genderTa: "",
      thatDay: "",
      taName: "",
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
      gradeColumns: [
        { name: "2021" },
        { name: "2020" },
        { name: "2019" },
        { name: "2018" },
      ],
      gradeColumns_2: [
        { name: "本科生" },
        { name: "硕士生" },
        { name: "博士生" },
      ],
      messageList: [],
      recordList: {},
      isPassword: true,
      rate: 1,
      msgNum: 0,
      msgList: [],
      objectRealName: "",
      theSendMsg: "",
      showName: "",
      nickname: "",
      sender: 0,
      myInfo: {},
      blackList: [],
      showMsg: false,
      tempStatue: false,
      tempStatue_2: false,
      tempStatue_3: false,
      tempStatue_4: false,
      tempStatue_5: false,
      tempStatue_6: false,
      tempStatue_7: false,
      tempStatue_8: false,
      checked: false,
      msgBetweenFriends_Sent: [],
      msgBetweenFriends_Recv: [],
      msgBetweenFriends: {},
      tempMsg: {},
      Ta: {
        gender: "",
        stu_number: "",
        u_name: "",
        grade_1: "",
        grade_2: "",
        phone: "",
        qq: "",
        wechat: "",
        email: "",
      },
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
      infoBtnStyle: {
        width: "170rpx",
        height: "70rpx",
        marginTop: "15rpx",
        borderRadius: "24rpx",
        boxSizing: "border-box",
        backgroundColor: "#5CD7D4",
        color: "#1C2550",
        fontWeight: "700",
        border: "1px solid #5CD7D4",
      },
    };
  },
  created() {
    let thisYear = new Date().getFullYear();
    let thisMonth = new Date().getMonth() + 1;
    if (thisMonth < 7) thisYear--;
    let xYear = 2022;
    while (xYear <= thisYear) {
      this.gradeColumns.unshift({ name: "" + xYear });
      xYear++;
    }
    this.Ta = JSON.parse(this.vuex_Ta);
    this.Ta.gender = this.Ta.gender || "";
    this.Ta.stu_number = this.Ta.stu_number || "";
    this.Ta.u_name = this.Ta.u_name || "";
    this.Ta.grade_1 = this.Ta.grade_1 || "";
    this.Ta.grade_2 = this.Ta.grade_2 || "";
    this.Ta.phone = this.Ta.phone || "";
    this.Ta.qq = this.Ta.qq || "";
    this.Ta.wechat = this.Ta.wechat || "";
    this.Ta.email = this.Ta.email || "";
    this.showName =
      this.Ta.u_name || this.Ta.stu_number || this.Ta.wechat || this.Ta.phone;
    this.account = this.vuex_account;
    this.password = this.vuex_password;
    this.$forceUpdate();
    let { token: token } = this.getRequestParams();
    if (!uni.getStorageSync("cookie")) {
      this.popupShow = true;
      if (window) {
        this.popupShow_12 = true;
      }
      //this.popupShow_2 = true;
    }
    if (token) {
      this.loginLoading = true;
      loginToken_new(token)
        .then(() => {
          getMyInfo_new()
            .then(({ result: res }) => {
              this.getMyInfo(res, 0);
            })
            .catch((res) => {
              this.initVuex();
              if (res && (res.code === 6001 || res.code === 1005)) {
                this.toast("用户登录已过期，请重新登录！");
              } else {
                this.toast(
                  "登录失败，可能是服务器出现问题，请联系管理员处理！"
                );
              }
              this.loginLoading = false;
            });
        })
        .catch(({ result: res }) => {
          this.initVuex();
          if (res && res.code === 1004) {
            this.toast("用户登录已过期，请重新登录！");
          } else {
            this.toast("登录失败，可能是服务器出现问题，请联系管理员处理！");
          }
          this.loginLoading = false;
        });
    } else if (uni.getStorageSync("cookie")) {
      this.loginLoading = true;
      getMyInfo_new()
        .then(({ result: res }) => {
          this.getMyInfo(res, 0);
        })
        .catch((res) => {
          this.initVuex();
          if (res && (res.code === 6001 || res.code === 1005)) {
            this.toast("用户登录已过期，请重新登录！");
          } else {
            this.toast("登录失败，可能是服务器出现问题，请联系管理员处理！");
          }
          this.loginLoading = false;
        });
    } else {
      this.pageStatue = 0;
    }
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
      this.windowStatue = true;
    }
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
    day() {
      let date = this.myConfession.created_at || "";
      let minus = new Date() - new Date(date.replaceAll("-", "/"));
      return Math.ceil(minus / 86400000);
    },
  },
  methods: {
    toGetVal1(val) {
      this.Ta.grade_1 = val.name;
      this.gradeShow_1 = false;
      this.$forceUpdate();
    },
    toGetVal2(val) {
      this.Ta.grade_2 = val.name;
      this.gradeShow_2 = false;
      this.$forceUpdate();
    },
    toSendMsg() {
      if (!this.theSendMsg) {
        this.toast("请输入您要发送的消息内容~");
        return;
      }
      this.sendMsgLoading = true;
      sendMsg_new({ msg: this.theSendMsg })
        .then((res) => {
          if (res.message === "Success") {
            this.toast("发送消息成功~");
            this.popupShow_8 = false;
            this.getMyInfo(this.myInfo);
          } else {
            this.toast("发送消息失败……");
          }
          this.sendMsgLoading = false;
        })
        .catch(() => {
          this.toast("发送消息失败……");
          this.sendMsgLoading = false;
        });
    },
    toSendFCMsg() {
      if (!this.theSendFCMsg) {
        this.toast("请输入您要发送的消息内容~");
        return;
      }
      this.sendFCMsgLoading = true;
      addFriendshipConfession_new({
        msg: this.theSendFCMsg,
        stu_number: this.r_stu_number || "",
        sender_id: this.sender || "",
        wechat: this.r_wechat || "",
        u_name: "",
        phone: this.r_phone || "",
      })
        .then((res) => {
          if (res.message === "Success") {
            this.toast("发送消息成功~");
            this.popupShow_11 = false;
            this.showMsg = false;
            this.getMyInfo(this.myInfo);
          } else {
            this.toast("发送消息失败……");
          }
          this.sendFCMsgLoading = false;
        })
        .catch(() => {
          this.toast("发送消息失败……");
          this.sendFCMsgLoading = false;
        });
    },
    toConfirmNewMsg() {
      if (!this.newMsg) {
        this.toast("请输入新的告白内容~");
        return;
      }
      this.updateLoading = true;
      updateConfession_new({ msg: this.newMsg })
        .then((res) => {
          if (res.result === "更新成功") {
            this.toast("更新告白内容成功~");
            this.popupShow_9 = false;
            this.getMyInfo(this.myInfo);
          } else {
            this.toast("更新告白内容失败……");
          }
          this.updateLoading = false;
        })
        .catch(() => {
          this.toast("更新告白内容失败……");
          this.updateLoading = false;
        });
    },
    toDeleteBlack(val) {
      deleteBlackList_new({ b_u_id: val })
        .then((res) => {
          if (res.result === "OK") {
            this.toast("成功将该用户从黑名单中移除！");
            this.getBlackList();
          } else {
            this.toast("将该用户从黑名单中移除失败~");
          }
        })
        .catch(() => {
          this.toast("将该用户从黑名单中移除失败~");
        });
    },
    getBlackList() {
      getMyBlackList_new()
        .then((res) => {
          if (res.message === "Success") {
            this.blackList = res.result;
            this.blackList.map((item) => {
              getNickName_new({ u_id: item.b_u_id })
                .then((res) => {
                  item.nick_name = res.result.nick_name;
                  this.nicknameList[res.result.u_id] = res.result.nick_name;
                })
                .catch(() => {
                  item.nick_name = "未设置昵称用户";
                  this.nicknameList[res.result.u_id] = "未设置昵称用户";
                });
            });
          } else {
            this.toast("获取您的黑名单失败，请稍后再试~");
          }
        })
        .catch(() => {
          this.toast("获取您的黑名单失败，请稍后再试~");
        });
      this.popupShow_6 = true;
    },
    sureDislikeTa() {
      addBlackList_new({ b_u_id: this.tempMsg.sender })
        .then((res) => {
          if (res.result === "OK") {
            this.toast("成功将Ta拉黑~");
            this.popupShow_5 = false;
            setTimeout(() => {
              this.showMsg = false;
            }, 1000);
          } else {
            this.toast("将Ta拉黑失败，请稍后再试~");
          }
        })
        .catch(() => {
          this.toast("将Ta拉黑失败，请稍后再试~");
        });
    },
    getRead() {
      if (this.msgNum === 0) {
        this.toast("暂时未收到新消息哦~");
        return;
      }
      this.taName = "";
      this.tempMsg = this.msgList[0];
      this.showMsg = true;
      setReadFConfession_new({ latestId: this.tempMsg.fm_id }).then(() => {
        getNewFMsg_new().then(({ result: res }) => {
          this.msgList = res;
          this.msgNum = this.msgList.length;
        });
      });
      getNickName_new({ u_id: this.tempMsg.sender })
        .then((res) => {
          this.taName = res.result.nick_name;
        })
        .catch(() => {
          this.taName = "未设置昵称用户";
        });
    },
    toConfirmName() {
      if (!this.wantName) {
        this.toast("请输入您想要的名称哦~");
        return;
      }
      setMyNickname_new({ nickname: this.wantName })
        .then((res) => {
          if (res.result === "Nickname Set") {
            this.toast("设置昵称成功！");
            this.getNickname();
            this.popupShow_4 = false;
          } else {
            this.toast("该昵称已存在，换一个试试吧！");
          }
        })
        .catch(() => {
          this.toast("设置昵称失败，请稍后再试！");
        });
    },
    getNickname() {
      getMyNickname_new()
        .then(({ result: res }) => {
          if (res.is_deleted === 0) {
            this.nickname = res.nick_name;
            this.nicknameList[res.u_id] = res.nick_name;
            return true;
          }
        })
        .catch(() => {
          this.nicknameList[this.myInfo.u_id] =
            this.myInfo.u_name || this.myInfo.stu_number || "未设置昵称用户";
        });
    },
    toConfirmInfo() {
      if (
        !this.Ta.stu_number &&
        !this.Ta.u_name &&
        !this.Ta.qq &&
        !this.Ta.wechat &&
        !this.Ta.email &&
        !this.Ta.phone
      ) {
        this.toast("请再提供详细点的信息吧~");
        return;
      }
      if (
        this.mode === 0 &&
        this.Ta.u_name &&
        !this.Ta.stu_number &&
        (!this.Ta.gender || !this.Ta.grade_1 || !this.Ta.grade_2)
      ) {
        this.toast("仅提供姓名的同时也请提供性别和年级哦~");
        return;
      }
      if (this.mode === 1 && !this.Ta.u_name) {
        this.toast("请填写好朋友的名字哦~");
        return;
      }
      this.$u.vuex("vuex_Ta", JSON.stringify(this.Ta) || "{}");
      this.showName =
        this.Ta.u_name || this.Ta.stu_number || this.Ta.wechat || this.Ta.phone;
      this.popupShow_3 = false;
    },
    changeGender(gender) {
      this.$set(this.Ta, "gender", this.Ta.gender === gender ? "" : gender);
      this.$forceUpdate();
    },
    hideAllStatue() {
      this.myConfession.statue = false;
      this.taConfession.statue = false;
    },
    changeDeleteStatue(key, val) {
      this.hideAllStatue();
      if (this.recordList[key][val].pursuit !== this.vuex_user)
        this.recordList[key][val].statue = !this.recordList[key][val].statue;
    },
    toDeleteMyConfession() {
      deleteConfession_new()
        .then((res) => {
          if (res.message === "Success") {
            this.toast("删除告白成功!");
            this.refreshLoading = true;
            this.popupShow_10 = false;
            this.$u.vuex("vuex_Ta", "{}");
            this.getMyInfo(this.myInfo);
          } else {
            this.toast("删除告白失败……");
          }
        })
        .catch(() => {
          this.toast("删除告白失败……");
        });
    },
    initVuex() {
      uni.setStorageSync("cookie", "");
      this.$u.vuex("vuex_token", "");
      this.$u.vuex("vuex_user", "");
      this.$u.vuex("vuex_object", "");
      this.$u.vuex("vuex_userName", "");
      this.$u.vuex("vuex_Ta", "{}");
      Object.assign(this.$data, this.$options.data());
      this.account = this.vuex_account;
      this.password = this.vuex_password;
    },
    toLogout() {
      this.toast("ヾ(￣▽￣)Bye~Bye~");
      this.tempStatue = false;
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
            this.tempStatue = false;
            this.pageStatue = 4;
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
        if (this.mode === 0 && this.personalStatue !== 0) {
          this.toast("您已经发送过一条告白了哦~");
          return;
        }
        if (this.sendLoading) {
          this.toast("正在发送哦~");
          return;
        }
        if (!this.showName) {
          this.toast("请输入Ta的一些信息哦~");
          return;
        }
        if (!this.theText) {
          this.toast("对Ta说点什么吧~");
          return;
        }
        if (this.mode === 0) {
          this.popupShow_7 = true;
        } else {
          this.toConfirm();
        }
      }
    },
    sortByTime(arr, key) {
      let compare = (property) => {
        return function (a, b) {
          return (
            new Date(a[property].replaceAll("-", "/")) -
            new Date(b[property].replaceAll("-", "/"))
          );
        };
      };
      arr.sort(compare(key));
    },
    toConfirm() {
      this.sendLoading = true;
      if (this.mode === 0) {
        let query = {};
        query.stu_number = this.Ta.stu_number || "";
        query.u_name = this.Ta.u_name || "";
        query.gender = this.Ta.gender || "";
        query.wechat = this.Ta.wechat || "";
        query.email = this.Ta.email || "";
        query.phone = this.Ta.phone || "";
        query.qq = this.Ta.qq || "";
        if (this.Ta.grade_1 && this.Ta.grade_2) {
          query.grade = this.Ta.grade_2[0] + this.Ta.grade_1;
        } else {
          query.grade = "";
        }
        query.msg = this.theText;
        this.popupShow_7 = false;
        addConfession_new(query)
          .then((res) => {
            if (res.message === "Success") {
              this.toast("告白成功，等待好消息吧！");
              this.theText = "";
              this.toChange();
              this.sendLoading = false;
              this.getMyInfo(this.myInfo);
            } else {
              this.toast("告白可能失败了，请重试~");
              this.sendLoading = false;
            }
          })
          .catch((res) => {
            if (res && res.code === 2009) {
              this.toast("嘻嘻，知道你喜欢自己啦~");
              this.sendLoading = false;
            } else {
              this.toast("告白可能失败了，请重试~");
              this.sendLoading = false;
            }
          });
      } else {
        addFriendshipConfession_new({
          msg: this.theText,
          stu_number: this.Ta.stu_number,
          wechat: this.Ta.wechat,
          phone: this.Ta.phone,
          u_name: this.Ta.u_name,
          sender_id: "",
        })
          .then((res) => {
            if (res.message === "Success") {
              this.toast("告白成功，等待好消息吧！");
              this.theText = "";
              this.toChange();
              this.getMyInfo(this.myInfo);
              this.sendLoading = false;
            } else {
              this.toast("告白可能失败了，请重试~");
              this.sendLoading = false;
            }
          })
          .catch((res) => {
            if (res && res.code === 2009) {
              this.toast("嘻嘻，知道你喜欢自己啦~");
              this.sendLoading = false;
            } else if (res && res.code === 30010) {
              this.toast("貌似Ta的学号和姓名不匹配哦~");
              this.sendLoading = false;
            } else {
              this.toast("告白可能失败了，请重试~");
              this.sendLoading = false;
            }
          });
      }
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
        }, 500);
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
        .then(() => {
          getMyInfo_new()
            .then(({ result: res }) => {
              this.$u.vuex("vuex_account", this.account);
              this.$u.vuex("vuex_password", this.password);
              this.getMyInfo(res, 0);
            })
            .catch((res) => {
              this.initVuex();
              if (res && (res.code === 6001 || res.code === 1005)) {
                this.toast("用户登录已过期，请重新登录！");
              } else {
                this.toast(
                  "登录失败，可能是服务器出现问题，请联系管理员处理！"
                );
              }
              this.loginLoading = false;
            });
        })
        .catch((res) => {
          this.initVuex();
          if (res && res.code === 1004) {
            this.toast("账号或密码错误，请检查后重新登录！");
          } else {
            this.toast("登录失败，可能是服务器出现问题，请联系管理员处理！");
          }
          this.loginLoading = false;
          this.password = "";
          this.$u.vuex("vuex_password", "");
        });
    },
    getRequestParams() {
      if (window) {
        let url = location.href;
        let requestParams = { token: "" };
        if (url.indexOf("?") !== -1) {
          let str = url.substr(url.indexOf("?") + 1);
          let strs = str.split("&");
          for (let i = 0; i < strs.length; i++) {
            requestParams[strs[i].split("=")[0]] = decodeURI(
              strs[i].split("=")[1]
            );
          }
        }
        return requestParams;
      } else {
        return { token: "" };
      }
    },
    getMyInfo(info, type) {
      if (type === 1) {
        this.refreshLoading2 = true;
      }
      this.myInfo = info;
      this.genderMe = info.gender;
      this.$u.vuex("vuex_user", info.userNumber);
      this.$u.vuex("vuex_userName", info.realname || info.u_name);
      getMyConfession_new()
        .then(({ result: res }) => {
          if (res.length) {
            this.myConfession = res[0];
            this.genderTa = res[0].gender;
          }
          this.myConfession.statue = false;
          if (res.length) {
            this.personalStatue =
              this.personalStatue > 1 ? this.personalStatue : 1;
          } else {
            this.personalStatue = 0;
          }
          this.timer = setInterval(() => {
            this.refreshWave(this.personalStatue);
          }, 200);
          if (type === 0) {
            this.toast("登录成功");
            this.pageStatue = 1;
            this.loginLoading = false;
          } else if (type === 1) {
            setTimeout(() => {
              this.toast("刷新用户信息成功！");
              this.refreshLoading2 = false;
            }, 500);
          }
          setTimeout(() => {
            this.refreshLoading = false;
          }, 500);
        })
        .catch(() => {
          if (type === 0) {
            this.initVuex();
            this.toast("非常抱歉，获取用户信息失败，请联系管理员解决！");
            this.loginLoading = false;
          } else if (type === 1) {
            setTimeout(() => {
              this.toast("获取用户信息失败，请稍后再试~");
              this.refreshLoading2 = false;
            }, 500);
          }
          setTimeout(() => {
            this.refreshLoading = false;
          }, 500);
        });
      getMyConfessionStatue_new().then((res) => {
        if (res.message === "匹配成功") {
          this.personalStatue = 2;
          this.taConfession = res.result;
          this.taConfession.statue = false;
          this.timer = setInterval(() => {
            this.refreshWave(this.personalStatue);
          }, 200);
        }
      });
      getNewFMsg_new().then(({ result: res }) => {
        this.msgList = res;
        this.msgNum = this.msgList.length;
      });
      getMyMsg_new().then((res) => {
        if (res.message === "Success") {
          this.msgBetweenUs = [
            ...(res.result.sentList || []),
            ...(res.result.receivedList || []),
          ];
          this.sortByTime(this.msgBetweenUs, "created_at");
        }
      });
      getMySentFConfession_new().then((res) => {
        if (res.message === "Success") {
          this.msgBetweenFriends_Sent = res.result;
          getMyRecvFConfession_new().then((res) => {
            if (res.message === "Success") {
              this.msgBetweenFriends_Recv = res.result;
              let x = this.dealWithData(this.msgBetweenFriends_Sent);
              this.msgBetweenFriends_Recv.map((item) => {
                if (!x[item.sender]) {
                  x[item.sender] = [item];
                } else {
                  x[item.sender].push(item);
                }
              });
              Object.keys(x).forEach((item) => {
                if (
                  !this.nicknameList[item] &&
                  item != "null" &&
                  item !== this.myInfo.u_id
                ) {
                  getNickName_new({ u_id: item })
                    .then((res) => {
                      this.nicknameList[res.result.u_id] = res.result.nick_name;
                    })
                    .catch(() => {
                      if (item) {
                        if (x[item][0].sender === this.myInfo.u_id) {
                          this.nicknameList[item] =
                            x[item][0].r_stu_number ||
                            x[item][0].r_phone ||
                            "未设置昵称用户";
                        }
                      }
                    });
                }
                this.sortByTime(x[item], "created_at");
              });
              this.msgBetweenFriends = x;
            }
          });
        }
      });
      this.getNickname();
    },
    dealWithData(data) {
      let d = {};
      data.forEach((element) => {
        if (!d[element.r_id]) {
          d[element.r_id] = [element];
        } else {
          d[element.r_id].push(element);
        }
      });
      return d;
    },
    toPast() {
      this.pageStatue = 3;
      this.tempStatue = false;
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
    position: relative;
    .text {
      z-index: 10;
      height: 96rpx;
    }
    .highText {
      height: 180rpx;
    }
    .refreshBtn {
      width: 56rpx;
      height: 56rpx;
      position: absolute;
      right: 110rpx;
      top: 21rpx;
      cursor: pointer;
    }
    .refreshBtn2 {
      width: 56rpx;
      height: 56rpx;
      position: absolute;
      right: 220rpx;
      top: 21rpx;
      cursor: pointer;
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
  .subUp-class {
    transition: all 0.85s ease-in !important;
    top: -100vh !important;
  }
  .hide-class {
    transition: all 0.5s ease-in !important;
    opacity: 0 !important;
  }
  .show-class {
    transition: opacity 0.5s ease-in !important;
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
  .more {
    position: relative;
    font-size: 40rpx;
    width: 100%;
    margin-top: 40rpx;
    margin-bottom: 20rpx;
    display: inline-block;
    text-align: center;
    font-weight: 700;
    color: #00284c;
    opacity: 0;
    transition: all 0.1s ease-in;
  }
  .bottom-back {
    height: 240rpx;
    height: calc(240rpx + constant(safe-area-inset-bottom));
    height: calc(240rpx + env(safe-area-inset-bottom));
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
    width: calc(100% - 220rpx);
    position: absolute;
    top: 580rpx;
    left: 50%;
    transform: translateX(-50%);
    transition: all 0.1s ease-in;
    opacity: 0;
  }
  .dialog {
    position: relative;
    margin-top: 400rpx;
    width: 100%;
    border-radius: 32rpx;
  }
  .dialogMore {
    position: relative;
    width: 100%;
    border-radius: 32rpx;
    margin-bottom: 20rpx;
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
    border-radius: 32rpx;
    background-color: #00284c;
    opacity: 0;
    transition: opacity 0.1s ease-in;
    color: #fff;
    font-size: 28rpx;
    .detail {
      position: relative;
      color: black;
      background-color: #fff;
      padding: 16rpx;
      border-radius: 18rpx 18rpx 0 18rpx;
      margin-top: 10rpx;
      margin-bottom: 20rpx;
      .deleteBtn {
        position: absolute;
        right: 37rpx;
        top: 50%;
        transform: translateY(-50%);
        width: 0rpx;
        height: 0rpx;
        transform-origin: 50% 50%;
        transition: all ease-in 0.2s;
      }
      .editBtn {
        position: absolute;
        right: 37rpx;
        top: 50%;
        transform: translateY(-50%);
        width: 0rpx;
        height: 0rpx;
        transform-origin: 50% 50%;
        transition: all ease-in 0.2s;
      }
    }
  }
  .deleteBtn_show {
    width: 50rpx !important;
    height: 50rpx !important;
    right: 12rpx !important;
  }
  .editBtn_show {
    width: 50rpx !important;
    height: 50rpx !important;
    right: 74rpx !important;
  }
  .theWave {
    width: 3840rpx;
    height: 1100rpx;
    position: absolute;
    transition: all 1s;
    background-size: auto 100%;
  }
  .subTheWave {
    transition: all 0.85s;
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
    height: 1600rpx;
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
    pointer-events: none;
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
    pointer-events: none;
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
      background-color: rgba(28, 37, 80, 0.4);
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
  .downBack {
    position: absolute;
    top: 100vh;
    height: 120vh;
    left: -25rpx;
    background-color: #1c2550;
    width: 800rpx;
    transition: all 0.95s ease-in;
  }
  .downBack-normal {
    top: 0;
    transition: all 0.65s ease-in !important;
  }
  .down {
    position: relative;
    z-index: 3;
    top: 100vh;
    width: 100%;
    min-height: 1000rpx;
    transition: all 0.5s ease-in;
    .name {
      position: absolute;
      cursor: pointer;
      top: 45rpx;
      left: 0;
      background-color: white;
      width: 200rpx;
      height: 64rpx;
      font-size: 40rpx;
      text-align: center;
      border-radius: 0 0 32rpx 32rpx;
      .name-prefix {
        position: absolute;
        left: 0;
        top: -30rpx;
        width: 32rpx;
        height: 32rpx;
      }
      .name-text {
        position: absolute;
        left: 20rpx;
        line-height: 64rpx;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        width: 100%;
      }
      .name-suffix {
        position: absolute;
        right: -55rpx;
        top: 0rpx;
        height: 100rpx;
      }
    }
    .toYou {
      position: absolute;
      top: 145rpx;
      left: 0;
      height: 42rpx;
    }
    .textContent {
      touch-action: auto;
      position: absolute;
      padding: 20rpx;
      top: 210rpx;
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
  }
}
.popup_2 {
  position: relative;
  width: 650rpx;
  max-width: 450px;
  background-color: #fff;
  border-radius: 24rpx;
  overflow: hidden;
  padding: 50rpx;
  padding-bottom: 36rpx;
  box-sizing: border-box;
  .popupText {
    width: 100%;
  }
}
.subPopup {
  position: relative;
  width: 650rpx;
  max-width: 450px;
  background-color: #1c2550;
  border-radius: 24rpx;
  overflow: hidden;
  padding: 50rpx;
  padding-bottom: 36rpx;
  box-sizing: border-box;
  color: white;
  .popupText {
    width: 100%;
  }
}
.h5Top {
  width: calc(100% - 400rpx) !important;
}
.h5Down {
  top: 0rpx !important;
}
.h5DialogTop {
  margin-top: 480rpx !important;
}
.rotateLoading {
  transform-origin: 50% 50%;
  animation: rotate 0.5s linear infinite;
}
@keyframes rotate {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
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
.male {
  display: inline-block;
  width: 60rpx;
  height: 60rpx;
  margin-right: 30rpx;
  margin-top: 10rpx;
  margin-bottom: 10rpx;
}
.female {
  display: inline-block;
  width: 60rpx;
  height: 60rpx;
  margin-top: 10rpx;
  margin-bottom: 10rpx;
}
.genderChosen {
  width: 80rpx !important;
  height: 80rpx !important;
  margin-top: 0 !important;
  margin-bottom: 0 !important;
}
.grade_1 {
  float: right;
  line-height: 80rpx;
  margin-left: 50rpx;
}
.grade_2 {
  float: right;
  line-height: 80rpx;
}
.changeMode {
  position: absolute;
  top: 145rpx;
  right: 0;
  color: white;
  cursor: pointer;
}
.changeIcon {
  width: 30rpx;
  height: 30rpx;
  display: inline-block;
  margin-right: 10rpx;
  vertical-align: middle;
}
.changeText {
  vertical-align: middle;
}
.name-pro {
  position: absolute;
  cursor: pointer;
  top: 45rpx;
  right: 0;
  background-color: white;
  width: 200rpx;
  height: 64rpx;
  font-size: 40rpx;
  text-align: center;
  border-radius: 0 0 32rpx 32rpx;
  .name-prefix {
    position: absolute;
    right: 0;
    top: -30rpx;
    width: 32rpx;
    height: 32rpx;
    transform: rotateY(180deg);
  }
  .name-text {
    position: absolute;
    right: 20rpx;
    line-height: 64rpx;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
  }
  .name-suffix {
    position: absolute;
    left: -55rpx;
    top: 0rpx;
    height: 100rpx;
    transform: rotateY(180deg);
  }
}
.msgDot {
  height: 24rpx;
  min-width: 24rpx;
  position: absolute;
  right: 220rpx;
  top: 20rpx;
  border-radius: 12rpx;
  background-color: #f56c6c;
  text-align: center;
  font-size: 20rpx;
  color: white;
  font-weight: 400;
}
.newMsg {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: #0d8380;
  padding: 40rpx;
  .helloText {
    position: absolute;
    top: 160rpx;
    font-size: 80rpx;
    color: white;
  }
  .subText {
    position: absolute;
    font-size: 36rpx;
    top: 270rpx;
    color: white;
  }
  .unlike {
    position: absolute;
    width: 80rpx;
    height: 80rpx;
    right: 40rpx;
    top: 200rpx;
    cursor: pointer;
  }
  .msgContent {
    position: relative;
    width: 670rpx;
    padding: 30rpx;
    box-sizing: border-box;
    background-color: white;
    background: #f1f6ff;
    border-radius: 0px 32rpx 32rpx 32rpx;
    top: 300rpx;
    display: inline-block;
    white-space: pre-wrap;
    word-wrap: break-word;
    word-break: break-word;
  }
  .taName {
    position: relative;
    top: 315rpx;
    text-align: right;
  }
  .taNickname {
    background: #f1f6ff;
    border-radius: 0px 32rpx 32rpx 32rpx;
    display: inline-block;
    padding: 12rpx 40rpx;
  }
}
.backBtn {
  width: 144rpx;
  height: 144rpx;
  position: fixed !important;
  left: 120rpx;
  bottom: 60rpx;
  bottom: calc(60rpx + constant(safe-area-inset-bottom));
  bottom: calc(60rpx + env(safe-area-inset-bottom));
}
.addBtn {
  width: 144rpx;
  height: 144rpx;
  position: fixed !important;
  right: 120rpx;
  bottom: 60rpx;
  bottom: calc(60rpx + constant(safe-area-inset-bottom));
  bottom: calc(60rpx + env(safe-area-inset-bottom));
}
.deleteBlackBtn {
  width: 50rpx;
  height: 50rpx;
}
.blackItem {
  display: flex;
  justify-content: space-between;
}
.blackName {
  color: white;
}
</style>
