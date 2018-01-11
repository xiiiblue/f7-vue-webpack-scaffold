<template>
  <f7-page :name="$route.route.name" :class="$route.route.name" pull-to-refresh @ptr:refresh="onRefresh">
    <f7-navbar back-link=" " :title="$route.route.title"></f7-navbar>

    <f7-card v-for="(item,index) in logPool" :key="index">
      <f7-card-header>
        <span>{{item.timestamp}}</span>
        <a href="#" class="link" @click="clickMessage(item.message)">复制剪贴板</a>
      </f7-card-header>
      <f7-card-content>
        {{formatMessage(item.message)}}
      </f7-card-content>
    </f7-card>

  </f7-page>
</template>

<style lang="less">
  @import "../../assets/styles/mixins.less";

  .console-loglist {
    .accordion-item {
      .item-content {
        font-size: 13px;
        font-weight: normal;
      }
    }
    .card-header {
      min-height: 0;
      padding: 5px 10px;
      font-size: 12px;
      font-weight: bold;
      color: @darkGreyColor;
      background-color: @lightGreyColor;
      a {
        color: @darkGreyColor;
        font-size: 12px;
      }
    }
    .card-content {
      .card-content-inner {
        padding: 5px 10px;
        word-break: break-all;
        color: @greyColor;
        font-size: 13px;
      }
    }
  }
</style>

<script>
  import util from '../../util'
  import {mapState} from 'vuex'

  export default {
    computed: {
      ...mapState({
        logPool: state => state.console.logPool,
      }),
    },
    methods: {
      formatMessage(msg) {
        if (typeof msg === 'object') msg = JSON.stringify(msg)
        return msg
      },
      clickMessage(msg) {
        util.copyToClipboard(this.formatMessage(msg))
        util.alert('复制成功')
      },
      onRefresh() {
        let that = this
        setTimeout(function () {
          that.$router.refreshPage()
        }, 500)
      }
    }
  }
</script>
