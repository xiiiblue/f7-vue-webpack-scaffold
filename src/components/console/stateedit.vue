<template>
  <f7-page :name="$route.route.name" :class="$route.route.name">
    <f7-navbar back-link=" " :title="$route.route.title"></f7-navbar>

    <f7-list form>
      <f7-list-item>
        <f7-label>State名称</f7-label>
        <f7-input type="text" placeholder="请输入名称" v-model="stateName"></f7-input>
      </f7-list-item>

      <f7-list-item>
        <f7-label>State键</f7-label>
        <f7-input type="text" placeholder="请输入键" v-model="stateKey"></f7-input>
      </f7-list-item>

      <f7-list-item>
        <f7-label>State值</f7-label>
        <f7-input type="text" placeholder="请输入值" v-model="stateValue"></f7-input>
      </f7-list-item>
    </f7-list>

    <f7-block>
      <f7-grid>
        <f7-col>
          <f7-button big fill color="green" @click="clickButtonSet">写入</f7-button>
        </f7-col>
        <f7-col>
          <f7-button big fill color="green" @click="clickButtonDelete">删除</f7-button>
        </f7-col>
        <f7-col>
          <f7-button big fill color="green" @click="clickButtonReset">重置</f7-button>
        </f7-col>
      </f7-grid>
    </f7-block>

  </f7-page>
</template>

<style lang="less">

  .console-stateedit {
    .accordion-item {
      .item-content {
        word-break: break-all;
      }
    }
  }
</style>

<script>
  import util from '../../util'

  export default {
    data() {
      return {
        stateName: 'env',
        stateKey: 'foo',
        stateValue: 'bar',
      }
    },
    methods: {
      clickButtonSet() {
        if (this.$store.state.hasOwnProperty(this.stateName)) {
          let obj = {}
          obj[this.stateKey] = this.stateValue
          this.$store.commit(this.stateName, obj)
          util.alert('状态参数[' + this.stateKey + ']写入成功')
        } else {
          util.alert('状态' + this.stateName + '不存在')
        }
      },
      clickButtonDelete() {
        if (this.$store.state.hasOwnProperty(this.stateName)) {
          this.$store.commit(this.stateName + '_delete', this.stateKey)
          util.alert('状态参数[' + this.stateKey + ']删除成功')
        } else {
          util.alert('状态' + this.stateName + '不存在')
        }
      },
      clickButtonReset() {
        if (this.$store.state.hasOwnProperty(this.stateName)) {
          this.$store.commit(this.stateName + '_reset')
          util.alert('状态[' + this.stateName + ']重置成功')
        } else {
          util.alert('状态' + this.stateName + '不存在')
        }
      }
    }
  }
</script>
