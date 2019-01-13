<template>
  <div class="page2">
    <div class="desc" v-if="this.index === 1">
      <p v-if="timer>=1">您到<span class="weightContent">{{data.CITY}}</span>的次数最多</p>
      <p v-if="timer>=5">就像是</p>
      <p v-if="timer>=9">您的第二故乡</p>
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
      timer: 0
    }
  },
  methods: {
    test () {
      let myInterval = setInterval(() => {
        this.timer++
        if (this.timer > 9) {
          clearInterval(myInterval)
        }
      }, 200)
    }
  },
  watch: {
    index () {
      if (this.index === 1) {
        this.timer = 0
        this.test()
      }
    }
  }
}
</script>

<style lang='stylus' scoped>
  .page2
    width 100vw
    height 100vh
    background url(../assets/imgs/page2.png)
    background-size cover
    background-repeat no-repeat
    background-position center
    position relative
    text-align left
    .desc
      position absolute
      left 10%
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
