<template>
  <div class="page5">
    <div class="desc" v-if="this.index === 4">
      <div v-if="data.TDB_NUMBER">
        <p v-if="timer>=1">在团队宝中</p>
        <p v-if="timer>=5">{{this.isAnother}}送出了<span class="weightContent">{{data.TDB_NUMBER}}</span>次鼓励和分享</p>
        <p v-if="timer>=9">团队的成长</p>
        <p v-if="timer>=13">离不开{{this.isAnother}}的无私奉献</p>
      </div>
      <div v-if="!data.TDB_NUMBER">
        <p v-if="timer>=1">在团队宝中</p>
        <p v-if="timer>=4">{{this.isAnother}}还未参与过团队鼓励和分享</p>
        <p v-if="timer>=9">现在打开团队宝和小伙伴来一次互动吧</p>
      </div>
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
        if (this.timer > 13) {
          clearInterval(myInterval)
        }
      }, 200)
    }
  },
  watch: {
    index () {
      if (this.index === 4) {
        this.timer = 0
        this.test()
      }
    }
  }
}
</script>

<style lang='stylus' scoped>
  .page5
    width 100vw
    height 100vh
    background url(../assets/imgs/page5.png)
    background-size cover
    background-repeat no-repeat
    background-position center
    position relative
    text-align left
    .desc
      position absolute
      left 5%
      top 10%
      line-height 160%
      p
        width 0
        overflow hidden
        white-space nowrap
        animation textShow 1s forwards
  @keyframes textShow
    from
      width 0
    to
      width 100%
</style>
