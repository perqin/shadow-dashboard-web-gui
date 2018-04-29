import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Nodes from './views/Nodes.vue'
import Subscriptions from './views/Subscriptions.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/nodes',
      name: 'nodes',
      component: Nodes
    },
    {
      path: '/subscriptions',
      name: 'subscriptions',
      component: Subscriptions
    }
  ]
})
