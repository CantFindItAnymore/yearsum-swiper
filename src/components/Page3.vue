<template>
  <div class="page3">
    <div class="desc" v-if="this.index === 2">
      <p v-if="timer>=1">一共有<span class="weightContent">{{data.TOTAL_PASSENGER}}</span>位乘客</p>
      <p v-if="timer>=4">对{{this.isAnother}}很满意</p>
      <p v-if="timer>=8">靠谱的{{this.isAnother}}</p>
      <p v-if="timer>=12">让城际出行</p>
      <p v-if="timer>=15">变得越来越美好</p>
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
        if (this.timer > 17) {
          clearInterval(myInterval)
        }
      }, 200)
    }
  },
  watch: {
    index () {
      if (this.index === 2) {
        this.timer = 0
        this.test()
      }
    }
  }
}
</script>

<style lang='stylus' scoped>
  .page3
    width 100vw
    height 100vh
    background url(../assets/imgs/page3.png)
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
