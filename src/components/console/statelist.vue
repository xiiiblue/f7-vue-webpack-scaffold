<template>
  <f7-page :name="$route.route.name" :class="$route.route.name">
    <f7-navbar back-link=" " :title="$route.route.title"></f7-navbar>

    <f7-list accordion>
      <f7-list-item title="" divider></f7-list-item>

      <f7-list-item accordion-item :title="stateName" v-for="(state, stateName) in this.$store.state" :key="stateName"
                    v-if="stateName != 'console' && stateName != 'env'">
        <f7-accordion-content>
          <f7-block>
            <a href="#" class="link" @click="clickMessage(state)">复制剪贴板</a>
          </f7-block>
          <f7-block>
            <pre>{{state}}</pre>
          </f7-block>
        </f7-accordion-content>

        <f7-list-item title="" divider></f7-list-item>

      </f7-list-item>
    </f7-list>

  </f7-page>
</template>

<style lang="less">
  @import "../../assets/styles/mixins.less";

  .console-statelist {
    .accordion-item {
      .accordion-item-content {
        .content-block {
          margin-top: 5px;
          margin-bottom: 5px;
          overflow:scroll;
          div {
            word-break: break-all;
            margin-top: 3px;
            border-bottom: 1px solid #ccc;
          }
        }
      }
    }
  }
</style>

<script>
  import util from '../../util'

  export default {
    methods: {
      clickMessage(msg) {
        if (typeof msg === 'object') msg = JSON.stringify(msg)
        util.copyToClipboard(msg)
        util.alert('复制成功')
      }
    }
  }
</script>
