import '../assets/styles/app.less'
import 'es6-object-assign/auto'
import 'es6-promise/auto'
import Vue from 'vue'
import 'framework7'
import Framework7Vue from 'framework7-vue'
import routes from '../routes.js'
import app from '../components/app.vue'
import navbar from '../components/public/navbar.vue'
import util from '../util'
import store from '../store'

// Vue初始化
Vue.use(Framework7Vue)
new Vue({
  el: '#app',
  store,
  template: '<app/>',
  framework7: {
    root: '#app',
    swipeBackPage: false,
    swipeout: false,
    modalTitle: '提示信息',
    modalButtonOk: '确定',
    modalButtonCancel: '取消',
    routes: routes,
    navbar: {
      hideOnPageScroll: true,
      iosCenterTitle: false,
    },
  },
  mounted() {
    this.renderMainPage()
  },
  methods: {
    // 跳转至主页
    renderMainPage() {
      let initPage = util.formatRoute(util.getUrlParam('initPage'))
      console.log('开始渲染首页: ' + initPage)
      window.f7.views.main.router.load({url: initPage})
    },
  },
  components: {
    app: app,
  },
})

// 注册全局组件
Vue.component('navbar', navbar)
