<template>
  <div class="home" id="home">
    <div class="desc">
      <p> 2018</p>
      <p>您在易来客运</p>
      <p>度过的</p>
      <p>日日夜夜</p>
      <img
        class="anotherBtn"
        v-if="anotherTell"
        @click="lookAnother"
        src="../assets/imgs/selfBtn.png"
      />
    </div>
    <img
      class="selfBtn"
      v-if="anotherTell"
      @click="goSelf"
      src="../assets/imgs/selfBtn.png"
    />
    <div class="tellInput" v-if="!anotherTell">
      <input
        type="tel"
        placeholder="请输入手机号查看"
        maxlength="11"
        v-model.trim="input"
        @blur="wxPolyfill"
        @focus="keyPolyfill"
      />
      <div class="tellInputBtn" @click="query">
        <img src="../assets/imgs/right.png" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['tell', 'anotherTell'])
  },
  data () {
    return {
      isAnother: false,
      input: '',
      /**
     * 通用加载信息
     */
      loadInfo: {
        duration: 0,
        forbidClick: true,
        mask: true,
        loadingType: 'circular',
        message: '加载中...'
      }
    }
  },
  methods: {
    // 修复ios微信页面被顶起的bug
    wxPolyfill () {
      // 是否是IOS系统
      let wechatInfo = window.navigator.userAgent.toLowerCase()
      let isIphone = !!wechatInfo.match(/\(i[^;]+;( u;)? cpu.+mac os x/)
      // 是否是微信6.7.4以上版本
      // eslint-disable-next-line
      let wechatVersion = window.navigator.userAgent.match(/MicroMessenger\/([\d\.]+)/i)
      // eslint-disable-next-line
      if (wechatVersion && wechatVersion[1][0] >= 6 && isIphone) {
        this._temporaryRepair()
      }
    },
    // 修复ios微信键盘挡住输入框的bug
    keyPolyfill () {
      console.log(666)
      this.$nextTick(() => {
        document.getElementById('home').scrollIntoView(false)
      })
    },
    // 查看他人的报告
    lookAnother () {
      this.$toast.loading(this.loadInfo)
      this.getData(this.anotherTell, res => {
        this.$router.push('/swiper')
      })
    },
    // 查询自己的报告
    goSelf () {
      this.$store.commit('changeAnotherTell', '')
    },
    // 查询电话号码
    query () {
      this.$toast.loading(this.loadInfo)
      // 1.本地校验手机号
      const reg = /^[1][3456789]\d{9}$/
      if (reg.test(this.input) === false) {
        this.$toast('输入的手机号码有误')
        return
      }
      // 2.vuex存值
      this.$store.commit('changeTell', this.input)
      // 3.请求数据
      this.getData(
        this.input,
        res => {
          this.$router.push('/swiper')
        },
        res => {
          this.$toast('该号码不存在！')
        },
        err => {
          this.$toast('请求失败！请稍后重试', err)
        }
      )
    },
    _temporaryRepair () {
      let currentPosition, timer
      let speed = 1// 页面滚动距离
      timer = setInterval(function () {
        currentPosition = document.documentElement.scrollTop || document.body.scrollTop
        currentPosition -= speed
        window.scrollTo(0, currentPosition)// 页面向上滚动
        currentPosition += speed // speed变量
        window.scrollTo(0, currentPosition)// 页面向下滚动
        clearInterval(timer)
      }, 1)
    }
  },
  activated () {
    this.input = this.tell
  }
}
</script>

<style lang='stylus' scoped>
  .home
    position fixed
    top 0
    left 0
    right 0
    bottom 0
    background url(../assets/imgs/home.png)
    background-size cover
    background-repeat no-repeat
    background-position center
    text-align left
    .desc
      position relative
      top 56%
      left 7%
      transform translateY(-50%)
      line-height 160%
      // .delay1
      //   animation-delay 100ms
      //   padding-left 8px
      // .delay2
      //   animation-delay 200ms
      // .delay3
      //   animation-delay 300ms
      // .delay4
      //   animation-delay 400ms
      .anotherBtn
        height 34px
        width 133px
    .selfBtn
      position absolute
      bottom 0
      left 0
      right 0
      width 100%
    .tellInput
      position fixed
      bottom 0
      left 0
      right 0
      width 100%
      height 97px
      background #fff
      display flex
      align-items center
      input
        height 100%
        flex 1
        font-size 34px
        padding-left 36px
        caret-color #F4A78E
      input::-webkit-input-placeholder
          color #F4A78E
          font-size 30px
      .tellInputBtn
        height 100%
        padding 0 36px
        display flex
        align-items center
        img
          height 18px
          width 37px
</style>
