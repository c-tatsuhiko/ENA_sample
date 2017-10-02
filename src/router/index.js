import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
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
      path: '/hello',
      component: Hello,
      props: {str: 'Vue'}
    },
    {
      path: '/air',
      component: Air,
      props: {str: 'Vue'}
    }
  ]
})
