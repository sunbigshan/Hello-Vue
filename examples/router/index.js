import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
  {
    path: '/input',
    component: r => require.ensure([], () => r(require('../doc/input.md')))
  }
]

export default new Router({
  mode: 'hash',
  routes
})
