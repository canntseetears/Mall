import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import toast from '@/components/common/toast'
import fastclick from 'fastclick'
Vue.config.productionTip = false
Vue.use(toast)
//解决移动端300ms ping
fastclick.attach(document.body)
Vue.prototype.$bus=new Vue()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
