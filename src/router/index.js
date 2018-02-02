import Vue from 'vue'
import Router from 'vue-router'
import fatherCom from '@/components/father'
import sectransferPage from '@/components/sectransferPage'
import anchorlinkPage from '@/components/anchorlink'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'fatherpage',
      component: fatherCom
    },
    {
      path: '/sectransfer',
      name: 'sectransfer',
      component: sectransferPage
    },
    {
      path: '/anchorlink',
      name: 'anchorlink',
      component: anchorlinkPage
    },
  ]
})
