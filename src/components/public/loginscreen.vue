<template>
  <f7-login-screen id="login-screen">
    <f7-view>
      <f7-pages>
        <f7-page login-screen>
          <f7-login-screen-title>{{env.appName}}</f7-login-screen-title>
          <f7-list form>
            <f7-list-item>
              <f7-label>用户名:</f7-label>
              <f7-input name="username" type="text" placeholder="请输入用户名" v-model="username"></f7-input>
            </f7-list-item>
            <f7-list-item>
              <f7-label>密码:</f7-label>
              <f7-input name="current-password" type="password" placeholder="请输入密码" v-model="password"></f7-input>
            </f7-list-item>
          </f7-list>
          <f7-block>
            <f7-button id="btn-next" class="button-big button-half active" @click="clickLogin">登录</f7-button>
          </f7-block>
          <f7-block class="bottom-block" v-if="!this.env.forceLogin">
            <f7-list form>
              <f7-list-button title="返回" close-login-screen></f7-list-button>
            </f7-list>
          </f7-block>
        </f7-page>
      </f7-pages>
    </f7-view>
  </f7-login-screen>
</template>

<style lang="less">
  @import "../../assets/styles/mixins.less";

  #login-screen {
    border-radius: 0;
    .login-screen-title {
      font-weight: bold;
      margin-bottom: 20%;
    }
    .content-block {
      margin-top: 15%;

    }
    .list-block {
      .item-content {
        padding-left: 10%;
        padding-right: 10%;
      }
    }
    .bottom-block {
      position: absolute;
      left: 0;
      bottom: 0;
      padding: 0;
      margin-bottom: 0;
      text-align: center;
      width: 100%;
      a {
        color: @greyColor;
        font-size: 14px;
      }
    }
  }
</style>


<script>
  import util from '../../util'
  import {mapState} from 'vuex'

  export default {
    data() {
      return {
        username: '',
        password: '',
      }
    },
    computed: {
      ...mapState({
        env: state => state.env,
      }),
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
          // 保存环境变量
          let envObj = {
            token: result.accessToken,
            staffId: result.staffId,
            staffName: result.staffName,
            eparchyCode: result.eparchyCode,
            departId: result.departId,
            departLevel: result.departLevel,
          }
          that.$store.commit('env', envObj)

          // 关闭窗口并刷新主页面
          util.alert('登录成功', function () {
            that.$f7.closeModal()
            that.$f7.views.main.router.refreshPage()
          })
        })
      }
    }
  }
</script>
