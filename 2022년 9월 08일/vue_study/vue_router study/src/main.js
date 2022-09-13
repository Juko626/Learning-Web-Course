import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

//ctrl + P  폴더 및 파일 검색
//ctrl + shift + F 전체 내용 검색


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
