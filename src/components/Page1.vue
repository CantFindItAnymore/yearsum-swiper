<template>
  <div class="page1">
    <div class="desc" v-if="this.index === 0">
      <p v-if="timer>=1">这一年里</p>
      <p v-if="timer>=5">{{this.isAnother}}一共行驶了<span class="weightContent">{{data.MILEAGE}}</span>公里</p>
      <p v-if="timer>=9">成为了城市里</p>
      <p v-if="timer>=13">一道美丽的风景线</p>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Page1',
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
      if (this.index === 0) {
        this.timer = 0
        this.test()
      }
    }
  },
  activated () {
    this.timer = 0
    this.test()
  }
}
</script>

<style lang='stylus' scoped>
  .page1
    width 100vw
    height 100vh
    background url(../assets/imgs/page1.png)
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
