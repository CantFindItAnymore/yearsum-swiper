<template>
  <div class="page4">
    <div class="desc1" v-if="this.index === 3">
      <p v-if="timer>=1">
        <span class="weightContent">{{data.MONTH_INFO}}</span>
        月
        <span class="weightContent">{{data.DAY_INFO}}</span>
        日这一天很平凡
      </p>
      <p v-if="timer>=5">但有位乘客</p>
      <p v-if="timer>=8">给{{this.isAnother}}留下了这样的评价</p>
    </div>
    <div class="desc2" v-if="timer>=13 && this.index === 3">
      {{data.COMMENT}}
    </div>
    <div class="desc3" v-if="this.index === 3">
      <p v-if="timer>=17">{{this.isAnother}}或许已不记得 &nbsp; 但却让人很感动</p>
      <p v-if="timer>=21">每个温暖的瞬间 &nbsp; 都值得被记录</p>
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
    index: Number,
    isAnother: String
  },
  data () {
    return {
      timer: 0
    }
  },
  methods: {
    test () {
      let myInterval = setInterval(() => {
        this.timer++
        if (this.timer > 21) {
          clearInterval(myInterval)
        }
      }, 200)
    }
  },
  watch: {
    index () {
      if (this.index === 3) {
        this.timer = 0
        this.test()
      }
    }
  }
}
</script>

<style lang='stylus' scoped>
  .page4
    width 100vw
    height 100vh
    background url(../assets/imgs/page4.png)
    background-size cover
    background-repeat no-repeat
    background-position center
    position relative
    text-align left
    p
      width 0
      overflow hidden
      white-space nowrap
      animation textShow 1s forwards
    .desc1
      position absolute
      left 10%
      top 5%
      line-height 160%
    .desc2
      opacity 0
      animation divShow 2s forwards
      background #fff
      width 78%
      position absolute
      left 50%
      top 50%
      transform translate(-50%, -50%)
      line-height 160%
      font-family none
      font-size 30px
      padding 20px 10px 15px 20px
      &:before
        position absolute
        content ''
        width 0
        height 0
        top 100%
        right 100px
        border-bottom 50px solid transparent
        border-right 50px solid #fff
      &:after
        position absolute
        content ''
        width 0
        height 0
        top 100%
        right 100px
        border-bottom 50px solid transparent
        border-right 50px solid #fff
    .desc3
      position absolute
      left 50%
      transform translateX(-50%)
      top 82%
      line-height 160%
  @keyframes textShow
    from
      width 0
    to
      width 100%
  @keyframes divShow
    from
      opacity 0
    to
      opacity 1
</style>
