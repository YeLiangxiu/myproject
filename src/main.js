import Vue from 'vue'
import App from './App'
import router from '@/router'
import store from '@/store'
// import MpvueRouterPatch from 'mpvue-router-patch'

Vue.config.productionTip = false
// Vue.use(MpvueRouterPatch)


const app = new Vue({
  el: '#app',
  router,
  store,
  ...App
})
app.$mount()

export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: ['^pages/users/main'],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      color: '#999',
      selectedColor: '#d22222',
      backgroundColor: '#fff',
      borderStyle: 'black',
      list: [{
        pagePath: 'pages/logs/main',
        text: '我的',
        iconPath: 'static/assets/arrow.png',
        selectedIconPath: 'static/assets/arrow-right.png'
      }, {
        pagePath: 'pages/users/main',
        text: '成功',
        iconPath: 'static/assets/arrow.png',
        selectedIconPath: 'static/assets/arrow-right.png'
      }]
    }
  }
}
