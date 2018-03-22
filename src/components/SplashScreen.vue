<template>
  <div class="splashscreen-wrapper">
    <transition @leave="leaveEl" v-on:after-appear="leaveEl"  appear>
      <div class="logo-wrapper">
      </div>
     </transition>
    <div class="logo-letters-group">
      <span class="logo-letter" v-for="(item, index) in logoName" :key="index" v-if="item !== 'img'">{{item}}</span>
      <span class="logo-letter" v-else > <img src="https://geekyants.com/images/logo-icon-lg.png" /> </span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'SplashScreen',
  data () {
    return {
      show: true,
      logoName: ['B', 'U', 'I', 'L', 'T', '  ', 'W', 'I', 'T', 'H', '  ', '<3', '  ', 'A', 'T', '  ', 'img', '  ', 'G', 'E', 'E', 'K', 'Y', 'A', 'N', 'T', 'S']
    }
  },
  methods: {
    leaveEl (el) {
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../style/splashScreen.scss'
</style>
