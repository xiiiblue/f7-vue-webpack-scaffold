<template>
  <f7-page :name="$route.route.name" :class="$route.route.name">
    <f7-navbar back-link=" " :title="$route.route.title"></f7-navbar>

    <f7-list form>
      <f7-list-item>
        <f7-label>用户名</f7-label>
        <f7-input name="username" type="text" placeholder="请输入用户名" v-model="username"></f7-input>
      </f7-list-item>
      <f7-list-item>
        <f7-label>密码</f7-label>
        <f7-input name="current-password" type="password" placeholder="请输入密码" v-model="password"></f7-input>
      </f7-list-item>
    </f7-list>

    <f7-block>
      <f7-button big fill color="green" @click="clickLogin()">登录</f7-button>
    </f7-block>

  </f7-page>
</template>

<style lang="less">
</style>

<script>
  import util from '../../util'

  export default {
    data() {
      return {
        username: '',
        password: '',
      }
    },
    methods: {
      clickLogin() {
        let that = this
        let payload = {
          staffId: this.username,
          password: this.password,
          ip: '127.0.0.1',
          aboutVersion: '5',
          termManu: 'apple',
          termModel: 'iPhone7',
          termVersion: '1.0'
        }
        util.svcInvoke('common', 'login', payload, function (result) {
          if (result.returnFlag === '0000') {
            util.alert('模拟登录成功', function () {
              that.$router.back()
            })
            let envObj = {
              token: result.accessToken,
              staffId: result.staffId,
              staffName: result.staffName,
              eparchyCode: result.eparchyCode,
              departId: result.departId,
              departLevel: result.departLevel,
            }
            that.$store.commit('env', envObj)
          } else {
            util.alert('模拟登录失败')
          }
        })
      }
    }
  }
</script>
