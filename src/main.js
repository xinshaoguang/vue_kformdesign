import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import KFormDesign from 'k-form-design'
import 'k-form-design/lib/k-form-design.css'
Vue.use(KFormDesign)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
