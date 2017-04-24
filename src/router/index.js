import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Cropper from '../components/Cropper'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Cropper',
      component: Cropper
    },
    {
      path: '/hello',
      name: 'Hello',
      component: Hello
    }
  ]
})
