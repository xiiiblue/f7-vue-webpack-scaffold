<template>
  <f7-page :name="$route.route.name" :class="$route.route.name">
    <navbar :title="$route.route.title"></navbar>

    <f7-list form>
      <f7-list-item title="" divider></f7-list-item>

      <f7-list-item>
        <f7-label>变量名</f7-label>
        <f7-input type="text" placeholder="请输入变量名" v-model="localStorageName"></f7-input>
      </f7-list-item>

      <f7-list-item title="" divider></f7-list-item>

      <f7-list-item>
        <f7-label>存储类型</f7-label>
        <f7-input type="text" v-model="storeType" disabled></f7-input>
      </f7-list-item>

      <f7-list-item title="" divider></f7-list-item>

      <f7-list-item v-if="storeType === '字符串'">
        <f7-label>变量值</f7-label>
        <f7-input type="textarea" v-model="localStorageValue"></f7-input>
      </f7-list-item>

      <f7-list-item v-for="(val, key) in localStorageObj" :key="key">
        <f7-label>{{key}}</f7-label>
        <f7-input type="text" placeholder="Name" v-model="localStorageObj[key]"></f7-input>
      </f7-list-item>

    </f7-list>

    <f7-block>
      <f7-grid>
        <f7-col>
          <f7-button big fill color="green" @click="clickButtonGet">读取</f7-button>
        </f7-col>
        <f7-col>
          <f7-button big fill color="green" @click="clickButtonSet">写入</f7-button>
        </f7-col>
      </f7-grid>
    </f7-block>

  </f7-page>
</template>

<script>
  import util from '../../util'
  import _ from 'lodash'
  import {mapState} from 'vuex'

  export default {
    data() {
      return {
        localStorageName: 'native_env',
        localStorageValue: '',
        storeType: '',
      }
    },
    computed: {
      ...mapState({
        env: state => state.env,
      }),
      localStorageObj() {
        let obj = _.attempt(JSON.parse.bind(null, this.localStorageValue), null)
        if (_.isError(obj)) {
          this.storeType = '字符串'
          return {}
        }
        this.storeType = '对象'
        return obj
      },
    },
    watch: {},
    mounted() {
    },
    methods: {
      clickButtonGet() {
        this.localStorageValue = ''
        let that = this
        util.getLocalStorage(this.localStorageName, function (result) {
          that.$f7.alert('读取成功： ' + result)
          that.localStorageValue = result
        })

        // 模拟测试数据
        if (typeof LocalStorage === 'undefined') {
          if(this.localStorageName === 'native_env') {
            this.localStorageValue = '{"method":"login","staffId":"1111"}'
          } else {
            this.localStorageValue = 'hello foo bar'
          }
        }
      },
      clickButtonSet() {
        let that = this
        let saveValue = this.storeType === '字符串' ? this.localStorageValue : this.localStorageObj
        console.log(saveValue)
        util.setLocalStorage(this.localStorageName, saveValue, function () {
          that.$f7.alert('存入成功')
        })
      },
    }
  }
</script>
