import Vue from 'vue'
import Router from 'vue-router'
import Air from '@/components/Air.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Vue
    },
    {
      path: '/air',
      component: Air
    }
  ]
})
