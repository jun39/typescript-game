import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false
#HTMLに出力
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
