import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './router'
import './assets/scss/reset.scss'
Vue.use(VueAxios, axios)
Vue.config.productionTip = false
const mock = true;
if(mock){
  require('./mock/api');
}
axios.defaults.baseURL = '/api'
axios.defaults.timeout = 8000
axios.interceptors.response.use(function(response) {
  let res = response.data
  let path = location.hash
  if (res.status == 0) {
    return res.data
  } else if (res.status == 10) {
    if (path != '#/index') {
      window.location.href = '/#/login'
    }
    return Promise.reject(res)
  } else {
    alert('错误')
    return Promise.reject(res)
  }
})
new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app')
