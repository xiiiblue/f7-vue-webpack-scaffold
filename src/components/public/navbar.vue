<template>
  <f7-navbar>
    <f7-nav-left v-if="title && !hideBack">
      <f7-link v-if="backToNative" icon="icon-back" @click="leftButtonClick()"></f7-link>
      <f7-link v-else icon="icon-back" back></f7-link>
    </f7-nav-left>
    <f7-nav-center>{{title}}</f7-nav-center>
    <f7-nav-right>
      <f7-link v-if="env.debugTag === 'on'" open-panel="right">
        <i class="iconfont icon-iconfontjixieqimo"></i>
      </f7-link>
      <f7-link v-else @click="rightButtonClick()">
        <i class="iconfont icon-iconfontjixieqimo hideicon"></i>
      </f7-link>
    </f7-nav-right>
  </f7-navbar>
</template>

<style lang="less">
  .hideicon {
    visibility: hidden
  }
</style>

<script>
  import util from '../../util'
  import {mapState} from 'vuex'

  export default {
    props: {
      title: String,
    },
    data() {
      return {
        debugModeCount: 0,
        debugResetTag: true,
        backToNative: false,
        hideBack: false
      }
    },
    computed: {
      ...mapState({
        env: state => state.env,
      })
    },
    mounted() {
      let currentPage = this.$route.url
      let initPage = util.formatRoute(this.env.initPage)
      if (currentPage === initPage) {
        this.backToNative = true // 当前页是首页，则返回按钮会跳转至原生
        if (!this.env.lastUrl) {
          this.hideBack = true  // 当前页是首页，且没有传入lastURL参数，则隐藏返回按钮
        }
      }
      // 其它情况下正常返回上一级页面
      util.log('初始化返回按钮 - currentPage: ' + currentPage + '   initPage: ' + initPage + '   backToNative: ' + this.backToNative)
    },
    methods: {
      // 跳回原生界面
      leftButtonClick() {
        util.openUiBox(this.env.lastUrl)
      },
      // 调试模式开关
      rightButtonClick() {
        // this.$f7.openPanel('right')
        if (this.env.debugTag === 'on') {
          this.$f7.openPanel('right')
        } else {
          if (this.debugModeCount >= 10) {
            // 点击10次后击活DEBUG模式
            this.$store.commit('env', {
              debugTag: 'on',
            })
            util.alert('调试模式已开启')
          } else {
            let that = this
            this.debugModeCount++
            util.log('debugModeCount: ' + this.debugModeCount)

            // 若3秒内无点击，重置计数器
            if (this.debugResetTag) {
              this.debugResetTag = false
              setTimeout(function () {
                that.debugModeCount = 0
                that.debugResetTag = true
                util.log('debugModeCount reset!')
              }, 3000)
            }
          }
        }
      },
    }
  }
</script>
