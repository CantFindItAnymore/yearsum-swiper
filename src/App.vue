<template>
  <div id="app">
    <keep-alive>
      <router-view/>
    </keep-alive>
    <img
      :class="{
        'musicIcon': true,
        'playing': isplaying
      }"
      :src="isplaying ? playing : paused"
      @click="changeMusic"
    >
    <audio autoplay loop preload="auto" id="audio">
      <source :src='yoyoyo' type="audio/mpeg" id="suorce">
      您的浏览器不支持 audio 元素
    </audio>
  </div>
</template>

<script>
import wx from 'weixin-js-sdk'
import {mapState} from 'vuex'
import playing from './assets/imgs/playing.png'
import paused from './assets/imgs/paused.png'
import yoyoyo from './assets/yoyoyo.mp3'

export default {
  name: 'App',
  computed: {
    ...mapState(['data'])
  },
  data () {
    return {
      isplaying: true,
      playing,
      paused,
      yoyoyo
    }
  },
  methods: {
    changeMusic () {
      if (!this.isplaying) {
        document.getElementById('audio').play()
      } else {
        document.getElementById('audio').pause()
      }
      this.isplaying = !this.isplaying
    }
  },
  created () {
    // 配置微信分享接口
    let path = encodeURIComponent(location.href.split('#')[0])
    this.getConfig(path, res => {
      wx.config({
        debug: res.debug,
        appId: res.appId,
        timestamp: res.timestamp,
        nonceStr: res.nonceStr,
        signature: res.signature,
        jsApiList: res.jsApiList
      })
      wx.ready(function () { // 需在用户可能点击分享按钮前就先调用
        // IOS audio自动播放问题
        document.getElementById('audio').play()
        // 分享配置(已转移至swipe路由，因为此时link和imgUrl还未获取到)
        // wx.updateAppMessageShareData({
        //   title: '致敬易来客运司机，2018感恩同行', // 分享标题
        //   desc: '感谢每一位易来客运司机，让城市变得更有故事有温度，让出行变得更加美好。', // 分享描述
        //   link: linkUrl, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
        //   imgUrl: linkImg // 分享图标
        // })
      })
    })
  }
}
</script>

<style>
@import './assets/font/font.css';
#app {
  font-family: hyqy;
  font-size: 40px;
}
.musicIcon {
  position: absolute;
  top: 20px;
  right: 30px;
  height: 70px;
}
.playing {
  animation: rotate 5s linear infinite
}
.weightContent {
  font-family: dfpgb;
}
@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
