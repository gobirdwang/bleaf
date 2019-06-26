import Vue from 'vue'
import Router from 'vue-router'
import index from '@/view/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      name: 'index',
      component: index
    }
  ]
})
