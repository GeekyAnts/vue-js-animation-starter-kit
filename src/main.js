// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'vue-awesome/icons/user-o'
import 'vue-awesome/icons/user-circle-o'
import 'vue-awesome/icons/lock'
import 'vue-awesome/icons/map-marker'
import 'vue-awesome/icons/star'
import 'vue-awesome/icons/cog'
import 'vue-awesome/icons/spinner'
import 'vue-awesome/icons/check-circle-o'
import 'vue-awesome/icons/book'
import Icon from 'vue-awesome/components/Icon'
import SplashScreen from './components/SplashScreen'
import LoginScreen from './components/LoginScreen'
import PageNotFound from './components/PageNotFound'
import PreloadingImage from './directives/PreLoadingImage'
// import { VLazyImagePlugin } from 'v-lazy-image'

Vue.config.productionTip = false
Vue.component('Icon', Icon)
Vue.component('SplashScreen', SplashScreen)
Vue.component('LoginScreen', LoginScreen)
Vue.component('PageNotFound', PageNotFound)
Vue.directive('image', PreloadingImage)
// Vue.use(VLazyImagePlugin)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App, Icon, SplashScreen, LoginScreen, PageNotFound },
  template: '<App/>'
})
