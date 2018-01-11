<template>
  <f7-page :name="$route.route.name" :class="$route.route.name">
    <f7-navbar back-link=" " :title="$route.route.title"></f7-navbar>

    <div class="content-block-title">变量名</div>
    <f7-list>
      <f7-list-item>
        <f7-input type="text" placeholder="请输入变量名" v-model="localStorageName"></f7-input>
      </f7-list-item>
    </f7-list>

    <div class="content-block-title">变量值</div>

    <f7-list>
      <f7-list-item>
        <textarea id="localStorageValueArea" class="resizable" placeholder="请输入变量值" v-model="localStorageValue"/>
      </f7-list-item>
    </f7-list>

    <f7-block>
      <f7-button big fill color="green" @click="clickButtonSet">写入</f7-button>
    </f7-block>

  </f7-page>
</template>
<style lang="less">
  .content-block {
    word-break: break-all;
  }
</style>

<script>
  import util from '../../util'

  export default {
    data() {
      return {
        localStorageName: 'native_env',
        localStorageValue: '{"nextUrl": "UiBox_4yw3mj","profile": "dev"}',
      }
    },
    mounted() {
      this.$f7.resizeTextarea('#localStorageValueArea')
    },
    methods: {
      clickButtonSet() {
        util.setLocalStorage(this.localStorageName, this.localStorageValue.trim(), function () {
          util.alert('存入成功')
        })
      },
    }
  }
</script>
