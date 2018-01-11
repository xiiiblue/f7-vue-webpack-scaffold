<template>
  <f7-page :name="$route.route.name" :class="$route.route.name" pull-to-refresh @ptr:refresh="onRefresh">
    <f7-navbar back-link=" " :title="$route.route.title"></f7-navbar>

    <div class="content-block-title">DATA</div>

    <f7-list accordion>

      <f7-list-item title="" divider></f7-list-item>

      <f7-list-item accordion-item :title="key" v-for="(val, key) in vueData" :key="key">

        <f7-accordion-content>
          <f7-block v-if="val">
            <a href="#" class="link" @click="clickMessage(val)">复制剪贴板</a>
          </f7-block>
          <f7-block>
            <pre v-if="val">{{val}}</pre>
            <pre v-else>未定义</pre>
          </f7-block>
        </f7-accordion-content>
        <f7-list-item title="" divider></f7-list-item>

      </f7-list-item>
    </f7-list>

  </f7-page>
</template>

<style lang="less">
  @import "../../assets/styles/mixins.less";

  .console-varlist {
    .accordion-item {
      .accordion-item-content {
        .content-block {
          word-break: break-all;
          margin-top: 3px;
          overflow: scroll;

        }
      }
    }
  }
</style>

<script>
  import util from '../../util'

  export default {
    computed: {
      vueData() {
        let nodePages = this.$root.$children[0].$children[0].$children[0].$children[1]
        let nodeMobile = nodePages.$children[nodePages.$children.length - 1]
        return nodeMobile.$data
      },
    },
    methods: {
      clickMessage(msg) {
        if (typeof msg === 'object') msg = JSON.stringify(msg)
        util.copyToClipboard(msg)
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
