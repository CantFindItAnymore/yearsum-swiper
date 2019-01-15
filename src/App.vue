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
      isplaying: false,
      playing,
      paused,
      yoyoyo
    }
  },
  methods: {
    changeMusic () {
      this.isplaying = !this.isplaying
    }
  },
  watch: {
    isplaying () {
      if (this.isplaying) {
        document.getElementById('audio').load()
      } else {
        document.getElementById('audio').pause()
      }
    }
  },
  created () {
    // 配置微信分享接口
    // console.log(location.origin, location.pathname)
    let linkUrl = this.data.shareUrl
    let linkImg = this.data.shareImg
    this.getConfig(location.origin + location.pathname, res => {
      wx.config({
        debug: res.debug,
        appId: res.appId,
        timestamp: res.timestamp,
        nonceStr: res.nonceStr,
        signature: res.signature,
        jsApiList: res.jsApiList
      })
      wx.ready(function () { // 需在用户可能点击分享按钮前就先调用
        // IOS audio问题
        // document.getElementById('suorce').setAttribute('src', yoyoyo)
        // document.getElementById('audio').load()
        // 分享配置
        wx.updateAppMessageShareData({
          title: '致敬易来客运司机，2018感恩同行', // 分享标题
          desc: '感谢每一位易来客运司机，让城市变得更有故事有温度，让出行变得更加美好。', // 分享描述
          link: linkUrl, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
          imgUrl: linkImg // 分享图标
          // success: function () {
          //   // 设置成功
          // }
        })
      })
    })
  },
  mounted () {
    this.isplaying = true
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
