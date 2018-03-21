import Vue from 'vue'
import Router from 'vue-router'
import SplashScreen from '@/components/SplashScreen'
import DashboardScreen from '@/components/DashboardScreen'
import LoginScreen from '@/components/LoginScreen'
import PageNotFound from '@/components/PageNotFound'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'SplashScreen',
      component: SplashScreen
    },
    {
      path: '/dashboard',
      name: 'DashboardScreen',
      component: DashboardScreen
    },
    {
      path: '/login',
      name: 'LoginScreen',
      component: LoginScreen
    },
    {
      path: '/*',
      name: 'PageNotFound',
      component: PageNotFound
    }
  ]
})
