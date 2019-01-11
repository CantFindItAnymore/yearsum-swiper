<template>
  <div class="swiper" @click='test'>
    <van-swipe
      vertical
      :show-indicators='false'
      :loop='false'
    >
      <van-swipe-item >
        <img src="../assets/imgs/home.png">
      </van-swipe-item>
      <van-swipe-item>
        <img src="../assets/imgs/page1.png">
      </van-swipe-item>
      <van-swipe-item>
        <img src="../assets/imgs/page2.png">
      </van-swipe-item>
      <van-swipe-item>
        <img src="../assets/imgs/page3.png">
      </van-swipe-item>
    </van-swipe>
    <img
      class="slideIcon"
      src="../assets/imgs/slideIcon.png"
    />
  </div>
</template>

<script>
export default {
  name: 'Swiper',
  methods: {
    test () {
      this.$toast('test')
    }
  }
}
</script>

<style lang='stylus' scoped>
  .swiper
    position fixed
    top 0
    left 0
    right 0
    bottom 0
    >>>.van-swipe
      height 100%
      .van-swipe-item
        height 100%
        img
          height 100%
          width 100%
    .slideIcon
      width 26px
      height 14px
      position absolute
      bottom 25px
      left 50%
      transform translateX(-50%)
      animation jump 2s infinite
    @keyframes jump
      0%
        position absolute
        bottom 25px
      50%
        position absolute
        bottom 70px
</style>
