<template>
  <f7-page :name="$route.route.name" :class="$route.route.name">
    <f7-navbar back-link=" " :title="$route.route.title"></f7-navbar>

    <div class="content-block-title">请求</div>

    <f7-list form>
      <f7-list-item>
        <textarea id="requestArea" class="resizable" placeholder="请输入请求报文" v-model="request"/>
      </f7-list-item>
    </f7-list>

    <div class="content-block-title">响应</div>

    <f7-list form>
      <f7-list-item>
        <textarea id="responseArea" class="resizable" placeholder="响应报文展示" v-model="response"/>
      </f7-list-item>
    </f7-list>

    <f7-block>
      <f7-button big fill color="green" @click="clickSubmit()">调用</f7-button>
    </f7-block>

  </f7-page>
</template>

<style lang="less">
</style>

<script>
  import util from '../../util'
  import _ from 'lodash'

  export default {
    data() {
      return {
        request: '{"method":"login","staffId":"staff123","password":"123456","ip":"127.0.0.1","aboutVersion":"5","termManu":"apple","termModel":"iPhone7","termVersion":"1.0"}',
        response: '',
      }
    },
    mounted() {
      this.$f7.resizeTextarea('#requestArea')
    },
    methods: {
      clickSubmit() {
        let payload = _.attempt(JSON.parse.bind(null, this.request), null)
        if (_.isError(payload)) {
          util.alert('报文格式不正确')
          return
        }
        let that = this
        util.svcInvoke(payload, function (result) {
          that.response = JSON.stringify(result)
          that.$nextTick(function() {
            that.$f7.resizeTextarea('#responseArea')
          })
        })
      }
    }
  }
</script>
