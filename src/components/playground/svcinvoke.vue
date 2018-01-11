<template>
  <f7-page :name="$route.route.name" :class="$route.route.name">
    <navbar :title="$route.route.title"></navbar>

    <f7-block>
      <div class="item-input">
        <f7-button big fill color="green" @click="clickSubmit">提交</f7-button>

      </div>

    </f7-block>

    <f7-list>
      <f7-list-item v-for="num in numList" :key="num.numId" :title="num.numId"></f7-list-item>
    </f7-list>

    <f7-block>
      {{numList}}
    </f7-block>

  </f7-page>
</template>

<script>
  import util from '../../util'

  export default {
    data() {
      return {
        numList: [],
      }
    },
    methods: {
      clickSubmit() {
        var that = this
        var jsInObj = {
          queryType: '01',
          netName: '33',
        }
        util.svcInvoke('common', 'ywcreateNew.getNumList', jsInObj, function (jsOutObj) {
          that.numList = jsOutObj.numInfo
        })
      },
    }
  }
</script>
