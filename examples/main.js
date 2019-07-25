import Vue from 'vue'
import App from './app.vue'
import router from './router'
import demoBlock from './components/demo-block.vue'
import 'highlight.js/styles/color-brewer.css'
import VUI from '../src/index'

Vue.use(VUI)
Vue.component('demo-block', demoBlock)

const vm = new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

Vue.use({
  vm
})
