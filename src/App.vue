<template>
  <div id="app">
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
import wx from 'weixin-js-sdk'
import {mapState} from 'vuex'
export default {
  name: 'App',
  computed: {
    ...mapState(['data'])
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
  }
}
</script>

<style>
@import './assets/font/font.css';
#app {
  font-family: hyqy;
  font-size: 40px;
}
.weightContent {
  font-family: dfpgb;
}
</style>
