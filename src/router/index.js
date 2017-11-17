import Vue from 'vue'
import Router from 'vue-router'
import MyVueComponent from '@/components/MyVueComponent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MyVueComponent',
      component: MyVueComponent
    }
  ]
})
