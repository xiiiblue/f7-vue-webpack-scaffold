<template>
  <f7-page :name="$route.route.name" :class="$route.route.name">
    <f7-navbar back-link=" " :title="$route.route.title"></f7-navbar>

    <f7-list form>

      <f7-list-item>
        <f7-label>环境</f7-label>
        <f7-input type="select" v-model="envObj.profile">
          <option value="dev">开发 - dev</option>
          <option value="test">测试 - test</option>
          <option value="prod">生产 - prod</option>
        </f7-input>
      </f7-list-item>
      <f7-list-item>
        <f7-label>调试模式</f7-label>
        <f7-input type="switch" v-model="envObj.debugTag" @change="onSwitchChange"
                  :checked="this.envObj.debugTag === 'on'"></f7-input>
      </f7-list-item>
      <f7-list-item>
        <f7-label>工号</f7-label>
        <f7-input type="text" placeholder="请输入" v-model="envObj.staffId"></f7-input>
      </f7-list-item>
      <f7-list-item>
        <f7-label>地市</f7-label>
        <f7-input type="text" placeholder="请输入" v-model="envObj.eparchyCode"></f7-input>
      </f7-list-item>
      <f7-list-item>
        <f7-label>Token</f7-label>
        <f7-input type="text" placeholder="请输入" v-model="envObj.token"></f7-input>
      </f7-list-item>
      <f7-list-item>
        <f7-label>发展人ID</f7-label>
        <f7-input type="text" placeholder="请输入" v-model="envObj.recomPersonId"></f7-input>
      </f7-list-item>
      <f7-list-item>
        <f7-label>发展人姓名</f7-label>
        <f7-input type="text" placeholder="请输入" v-model="envObj.recomPersonName"></f7-input>
      </f7-list-item>
      <f7-list-item>
        <f7-label>发展部门ID</f7-label>
        <f7-input type="text" placeholder="请输入" v-model="envObj.recomDepartId"></f7-input>
      </f7-list-item>
      <f7-list-item>
        <f7-label>起始路由</f7-label>
        <f7-input type="text" placeholder="请输入" v-model="envObj.initPage"></f7-input>
      </f7-list-item>
      <f7-list-item>
        <f7-label>前一页</f7-label>
        <f7-input type="text" placeholder="请输入" v-model="envObj.lastUrl"></f7-input>
      </f7-list-item>
      <f7-list-item>
        <f7-label>下一页</f7-label>
        <f7-input type="text" placeholder="请输入" v-model="envObj.nextUrl"></f7-input>
      </f7-list-item>
      <f7-list-item>
        <f7-label>服务调用</f7-label>
        <f7-input type="text" placeholder="请输入" v-model="envObj.apiBaseUrl"></f7-input>
      </f7-list-item>
      <f7-list-item>
        <f7-label>服务模拟</f7-label>
        <f7-input type="text" placeholder="请输入" v-model="envObj.mockApiUrl"></f7-input>
      </f7-list-item>
      <f7-list-item>
        <f7-label>本地存储模拟</f7-label>
        <f7-input type="text" placeholder="请输入" v-model="envObj.mockLocalStorageUrl"></f7-input>
      </f7-list-item>

    </f7-list>

    <f7-block>
      <f7-button big fill color="green" @click="clickButtonSubmit">提交</f7-button>
    </f7-block>

  </f7-page>
</template>

<script>
  import util from '../../util'
  import _ from 'lodash'

  export default {
    computed: {
      envObj() {
        return _.clone(this.$store.state.env)
      }
    },
    methods: {
      onSwitchChange(e) {
        this.envObj.debugTag = e.target.checked ? 'on' : 'off'
      },
      clickButtonSubmit() {
        this.$store.commit('env', this.envObj)
        let that = this
        util.alert('提交成功', function () {
          that.$router.back()
        })
      },
    }
  }
</script>
