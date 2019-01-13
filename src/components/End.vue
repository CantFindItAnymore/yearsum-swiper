<template>
  <div class="end">
    <div class="desc" v-if="this.index === 5">
      <p v-if="timer>=1" class="weightContent">易来客运</p>
      <p v-if="timer>=5">因您而更有价值</p>
      <img
        v-if="timer>=9"
        src="../assets/imgs/shareBtn.png"
        @click="share"
      >
    </div>
    <div class="mongolia" @click="hide" v-if="shareStatus">
      点击右上角分享给好友！↗
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['data'])
  },
  props: {
    index: Number
  },
  data () {
    return {
      timer: 0,
      shareStatus: false
    }
  },
  methods: {
    share () {
      this.shareStatus = true
    },
    hide () {
      this.shareStatus = false
    },
    test () {
      let myInterval = setInterval(() => {
        this.timer++
        if (this.timer > 25) {
          clearInterval(myInterval)
        }
      }, 200)
    }
  },
  watch: {
    index () {
      if (this.index === 5) {
        this.shareStatus = false
        this.timer = 0
        this.test()
      }
    }
  }
}
</script>

<style lang='stylus' scoped>
  .end
    width 100vw
    height 100vh
    background url(../assets/imgs/end.png)
    background-size cover
    background-repeat no-repeat
    background-position center
    text-align center
    .desc
      position absolute
      top 20%
      left 50%
      transform translateX(-50%)
      line-height 200%
      p
        opacity 0
        overflow hidden
        white-space nowrap
        animation textShow 2s forwards
      img
        margin-top 50px
        width 0
        overflow hidden
        animation buttonShow 1s forwards
    .mongolia
      position absolute
      top 0
      left 0
      right 0
      bottom 0
      background #111
      opacity 0.4
      font-size 50px
      font-family none
      display flex
      justify-content center
      color #fff
      padding-top 50px
  @keyframes textShow
    from
      opacity 0
    to
      opacity 1
  @keyframes buttonShow
    from
      width 0
    to
      width 236px
</style>
