// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'vue-awesome/icons/user-o'
import 'vue-awesome/icons/lock'
import 'vue-awesome/icons/map-marker'
import 'vue-awesome/icons/star'
import 'vue-awesome/icons/check-circle-o'
import Icon from 'vue-awesome/components/Icon'
import SplashScreen from './components/SplashScreen'
import LoginScreen from './components/LoginScreen'

Vue.config.productionTip = false
Vue.component('icon', Icon)
Vue.component('SplashScreen', SplashScreen)
Vue.component('LoginScreen', LoginScreen)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App, SplashScreen, LoginScreen, Icon },
  template: '<App/>'
})
