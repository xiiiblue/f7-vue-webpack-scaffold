<template>
  <!-- App -->
  <div id="app" class="theme-default">
    <!-- Main Views -->
    <f7-views>
      <f7-view id="init-view" navbar-through :dynamic-navbar="true" main>
        <f7-pages>
          <f7-page></f7-page>
        </f7-pages>
      </f7-view>
    </f7-views>
    <!-- Right Panel -->
    <rightpanel></rightpanel>
    <!-- Login Screen -->
    <loginscreen></loginscreen>
  </div>
</template>

<script>
  import rightpanel from './public/rightpanel.vue'
  import loginscreen from './public/loginscreen.vue'
  import util from '../util'
  import _ from 'lodash'
  import {mapState} from 'vuex'

  export default {
    computed: {
      ...mapState({
        env: state => state.env,
      })
    },
    mounted() {
    },
    methods: {
      // F7初始化
      onF7Init() {
        util.log('Framework7初始化')

        // 初始化全局变量
        this.initEnv()

        // 设置页面事件
        this.$f7.onPageBeforeInit('*', function (page) {
          //util.log('onPageBeforeInit: ' + page.name)
        })

        this.$f7.onPageInit('*', function (page) {
          util.log('页面初始化： ' + page.name)
        })

        this.$f7.onPageBeforeAnimation('*', function (page) {
          //util.log('onPageBeforeAnimation: ' + page.name)
        })
      },
      // 初始化全局变量
      initEnv() {
        console.log('从URL和LocalStorage中读入环境变量')
        this.getUrlEnv()
        this.getLocalEnv()
      },
      // 读取URL参数
      getUrlEnv() {
        let urlEnv = util.getUrlParam()  // initPage staffId eparchyCode token lastUrl profile debugTag
        util.log('URL环境变量读取成功: ' + JSON.stringify(urlEnv))
        this.$store.commit('env', urlEnv)
      },
      // 读取原生APP本地变量
      getLocalEnv() {
        let that = this
        util.getLocalStorage('native_env', function (result) {
          let localStorageEnv = JSON.parse(result)
          let storeEnv = {}
          // 仅当store中的值为undefined或null时才存入store
          _.forEach(localStorageEnv, function (value, key) {
            if (!_.get(that.env, key)) {
              storeEnv[key] = value
            }
          })
          that.$store.commit('env', storeEnv)
        })
      },
    },
    components: {
      rightpanel,
      loginscreen
    }
  }
</script>
