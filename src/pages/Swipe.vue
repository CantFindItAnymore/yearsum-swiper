<template>
  <div class="swipe">
    <van-swipe
      vertical
      :show-indicators='false'
      :loop='false'
      @change='onChange'
    >
      <van-swipe-item>
        <Page1 :index='index' :isAnother="anotherTell?'TA':'您'" />
      </van-swipe-item>
      <van-swipe-item>
        <Page2 :index='index' :isAnother="anotherTell?'TA':'您'" />
      </van-swipe-item>
      <van-swipe-item>
        <Page3 :index='index' :isAnother="anotherTell?'TA':'您'" />
      </van-swipe-item>
      <van-swipe-item >
        <Page4 :index='index' :isAnother="anotherTell?'TA':'您'" />
      </van-swipe-item>
      <van-swipe-item >
        <Page5 :index='index' :isAnother="anotherTell?'TA':'您'" />
      </van-swipe-item>
      <van-swipe-item >
        <End :index='index' />
      </van-swipe-item>
    </van-swipe>
    <img
      class="slideIcon"
      src="../assets/imgs/slideIcon.png"
      v-if="index !== 5"
    />
  </div>
</template>

<script>
import Page1 from '../components/Page1'
import Page2 from '../components/Page2'
import Page3 from '../components/Page3'
import Page4 from '../components/Page4'
import Page5 from '../components/Page5'
import End from '../components/End'
import { mapState } from 'vuex'

export default {
  name: 'Swipe',
  computed: {
    ...mapState(['anotherTell'])
  },
  data () {
    return {
      index: 0
    }
  },
  components: {
    Page1,
    Page2,
    Page3,
    Page4,
    Page5,
    End
  },
  methods: {
    onChange (index) {
      this.index = index
    }
  },
  activated () {
    this.index = 0
  }
}
</script>

<style lang='stylus' scoped>
  .swipe
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
