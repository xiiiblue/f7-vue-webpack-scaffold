<template>
  <f7-page name="console-index" class="console-index">
    <f7-navbar back-link=" " title="CONSOLE"></f7-navbar>

    <f7-block-title>DEBUG界面</f7-block-title>

    <f7-list>
      <f7-list-item link="/console/loglist/" title="控制台日志"></f7-list-item>
      <f7-list-item link="/console/alterenv/" title="系统环境变量"></f7-list-item>
      <f7-list-item link="/console/serviceinvoke/" title="服务模拟调用"></f7-list-item>
      <f7-list-item link="/console/varlist/" title="页面变量查询"></f7-list-item>
      <f7-list-item link="/console/statelist/" title="状态查询"></f7-list-item>
      <f7-list-item link="/console/stateedit/" title="状态写入"></f7-list-item>
      <f7-list-item link="/console/localstoragelist/" title="LocalStorage查询"></f7-list-item>
      <f7-list-item link="/console/localstorageedit/" title="LocalStorage写入"></f7-list-item>
      <f7-list-item link="/console/simlogin/" title="模拟登录"></f7-list-item>
    </f7-list>

    <f7-block-title>快捷工具</f7-block-title>

    <f7-list>
      <f7-list-item link="#" title="打开登录界面" class="open-login-screen"></f7-list-item>
      <f7-list-item link="#" title="页面强制刷新" @click="refreshPage"></f7-list-item>
    </f7-list>

  </f7-page>
</template>

<style lang="less">
</style>

<script>
  import util from '../../util'

  export default {
    methods: {
      refreshPage() {
        window.f7.views.main.router.refreshPage()
        util.alert('主页面刷新成功')
      }
    }
  }
</script>
