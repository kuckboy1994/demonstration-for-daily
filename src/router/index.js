import Vue from 'vue'
import Router from 'vue-router'
import fatherCom from '@/components/father'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'fatherpage',
      component: fatherCom
    }
  ]
})
