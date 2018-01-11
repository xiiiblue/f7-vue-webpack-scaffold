<template>
  <f7-page :name="$route.route.name" :class="$route.route.name">
    <f7-navbar back-link=" " :title="$route.route.title"></f7-navbar>

    <f7-list>
      <f7-list-item>
        <f7-label>变量名</f7-label>
        <f7-input type="text" placeholder="请输入变量名" v-model="localStorageName"></f7-input>
      </f7-list-item>
    </f7-list>

    <f7-block>
      <f7-button big fill color="green" @click="clickButtonGet">读取</f7-button>
    </f7-block>


    <f7-block v-if="storeType==='字符串'" class="result-block">
      {{localStorageValue}}
    </f7-block>

    <f7-block v-if="storeType==='对象'" class="result-block">
      <pre>{{localStorageObj}}</pre>
    </f7-block>

    <f7-block v-if="storeType">
      <f7-button big fill color="green" @click="clickMessage(localStorageValue)">复制到剪贴板</f7-button>
    </f7-block>

  </f7-page>
</template>
<style lang="less">
  @import "../../assets/styles/mixins.less";

  .console-localstoragelist {
    .content-block {
      margin-top: 5px;
      margin-bottom: 5px;
      word-break: break-all;
      overflow: scroll;
    }
    .result-block {
      margin-top: 25px;
      margin-bottom: 25px;
      border-top: 1px solid #ccc;
      border-bottom: 1px solid #ccc;
    }
  }

</style>

<script>
  import util from '../../util'
  import {mapState} from 'vuex'
  import _ from 'lodash'

  export default {
    data() {
      return {
        localStorageName: 'native_env',
        localStorageValue: '',
        localStorageObj: {},
        storeType: '',
      }
    },
    computed: {
      ...mapState({
        env: state => state.env,
      }),
    },
    watch: {
      localStorageValue() {
        let obj = _.attempt(JSON.parse.bind(null, this.localStorageValue), null)
        if (_.isError(obj)) {
          this.storeType = '字符串'
          return {}
        }
        this.storeType = '对象'
        console.log(this.storeType)
        this.localStorageObj = obj
      }
    },
    methods: {
      clickMessage(msg) {
        if (typeof msg === 'object') msg = JSON.stringify(msg)
        util.copyToClipboard(msg)
        util.alert('复制成功')
      },
      clickButtonGet() {
        let that = this
        util.getLocalStorage(this.localStorageName, function (result) {
          that.localStorageValue = result
        })
      },
    }
  }
</script>
