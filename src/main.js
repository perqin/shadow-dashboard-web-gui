import './theme.scss'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueMdcAdapter from 'vue-mdc-adapter'
import 'normalize.css'
import 'material-design-icons/iconfont/material-icons.css'
import 'typeface-roboto'
import 'typeface-roboto-mono'

Vue.use(VueMdcAdapter)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
