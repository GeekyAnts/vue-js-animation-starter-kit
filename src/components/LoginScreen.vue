<template>
  <div class="wrapper" v-bind:class="[show ? 'activeClass' : '']" >
    <div class="preload">
    </div>
    <div class="placeholder">
    </div>
		<transition name="trial" appear>
      <div class="content">
        <div class="form-wrapper image-after-login">
          <div class="flip-img-wrapper">
            <transition name="fade-profile-pic">
              <img  v-if="name === 'user'" class="user-profile" :src="imgSrc" alt="user-profile-pic" v-image />
              <icon v-if="name !== 'user'" class="user-icon image-after-login" name="user-circle-o"></icon>
            </transition>
          </div>
          <form class="animate-form">
              <div class="textbox-wrapper">
                <input  v-model="name" class="text-box" type="text" />
                    <span class="user-o-icon">
                        <icon name="user-o"></icon>
                    </span>
              </div>
              <div class="textbox-wrapper">
                <input class="text-box" type="password" />
                    <span class="lock-icon">
                        <icon name="lock"></icon>
                    </span>
              </div>
              <button type="submit"  v-on:click.prevent="onSubmit" class="btn submit-btn" >
                  <span class="login-text">LOGIN</span>
              </button>
                  <p class="text">Forgot your password?</p>
                  <p class="text footer-text">Have already account? Sign In</p>
          </form>
        </div>
      </div>
		</transition>
  </div>
</template>

<script>
export default {
  name: 'SignUp',
  data () {
    return {
      show: false,
      name: '',
      imgSrc: require('../assets/userTwo.jpg')
    }
  },
  methods: {
    onSubmit: function () {
      console.log('??')
      this.show = true
      setTimeout(() => {
        this.$router.push('/dashboard')
      }, 2000)
    },
    customHook: function (el) {
      console.log('on render')
    },
    foo: function () {
      return <icon name="spinner" />
    }
  },
  beforeCreate: function () {
    let imageOne = new Image()
    imageOne.src = require('../assets/userOne.jpg')
    let imageTwo = new Image()
    imageTwo.src = require('../assets/userTwo.jpg')
    let imageThree = new Image()
    imageThree.src = require('../assets/userThree.jpeg')
    let imageFour = new Image()
    imageFour.src = require('../assets/eventOne.jpg')
    let imageFive = new Image()
    imageFive.src = require('../assets/eventTwo.jpg')
    let imageSix = new Image()
    imageSix.src = require('../assets/eventThree.jpeg')
  }
}
</script>

<style lang="scss" scoped>
@import "../style/designLoginPage.scss";
</style>
