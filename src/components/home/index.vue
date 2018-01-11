<template>
  <f7-page name="home-index" toolbar-fixed navbar-fixed>

    <navbar :title="navbarTitle"></navbar>

    <f7-tabs animated>
      <f7-tab id="home-main-tab" active @tab:show="tabActived('main')">
        <home-main-view></home-main-view>
      </f7-tab>
      <f7-tab id="home-func-tab" @tab:show="tabActived('func')">
        <home-func-view></home-func-view>
      </f7-tab>
      <f7-tab id="home-stat-tab" @tab:show="tabActived('stat')">
        <home-stat-view></home-stat-view>
      </f7-tab>
      <f7-tab id="home-profile-tab" @tab:show="tabActived('mine')">
        <home-profile-view></home-profile-view>
      </f7-tab>
    </f7-tabs>

    <f7-toolbar tabbar labels>
      <f7-link icon="iconfont icon-wxbzhuye" text="主页" tab-link="#home-main-tab" active></f7-link>
      <f7-link icon="iconfont icon-all" text="工作台" tab-link="#home-func-tab"></f7-link>
      <f7-link icon="iconfont icon-wxbbaobiao" text="数据中心" tab-link="#home-stat-tab"></f7-link>
      <f7-link icon="iconfont icon-account" text="我的" tab-link="#home-profile-tab"></f7-link>
    </f7-toolbar>

  </f7-page>
</template>

<script>
  import {mapState} from 'vuex'
  import homeMainView from './main.vue'
  import homeFuncView from './func.vue'
  import homeStatView from './stat.vue'
  import homeProfileView from './profile.vue'

  export default {
    data() {
      return {
        activedTab: 'main',
      }
    },
    computed: {
      ...mapState({
        env: state => state.env,
      }),
      navbarTitle() {
        let funcMap = {
          main: this.env.appName,
          func: '工作台',
          stat: '数据中心',
          mine: '个人中心',
        }
        return funcMap[this.activedTab]
      }
    },
    mounted() {
      this.forceLogin()
    },
    methods: {
      tabActived(tab) {
        this.activedTab = tab
      },
      forceLogin() {
        if (this.env.forceLogin && !this.env.token) {
          this.$f7.loginScreen()
        }
      }
    },
    components: {
      homeMainView,
      homeFuncView,
      homeStatView,
      homeProfileView,
    }
  }
</script>
