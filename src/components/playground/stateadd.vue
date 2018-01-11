<template>
  <f7-page :name="$route.route.name" :class="$route.route.name">
    <navbar :title="$route.route.title"></navbar>

    <f7-block-title>输入绑定</f7-block-title>

    <f7-list form>
      <f7-list-item>
        <f7-label>输入绑定</f7-label>
        <f7-input type="text" v-model="pageValue" @input="updateStore"></f7-input>
      </f7-list-item>

      <f7-list-item>
        <f7-label>store实时更新</f7-label>
        <div class="item-input">{{env.testValue1}}</div>
      </f7-list-item>

      <f7-list-item>
        <f7-label>store手工更新</f7-label>
        <div class="item-input">{{env.testValue2}}</div>
      </f7-list-item>
    </f7-list>

    <f7-block-title>事件触发</f7-block-title>

    <f7-block>
      <f7-grid>
        <f7-col>
          <f7-button big fill color="green" @click="clickButtonSet">存入</f7-button>
        </f7-col>
        <f7-col>
          <f7-button big fill color="green" @click="clickButtonGet">提取</f7-button>
        </f7-col>
      </f7-grid>
    </f7-block>

  </f7-page>
</template>

<script>
  import {mapState} from 'vuex'
  import util from '../../util'

  export default {
    data() {
      return {
        pageValue: '',
      }
    },
    computed: {
      ...mapState({
        env: state => state.env,
      }),
    },
    watch: {},
    mounted() {
    },
    methods: {
      updateStore(val) {
        this.$store.commit('env', {testValue1: val})
      },
      clickButtonSet() {
        this.$store.commit('env', {testValue2: this.pageValue})
      },
      clickButtonGet() {
        util.alert(this.env.testValue2)
      },
    }
  }
</script>
