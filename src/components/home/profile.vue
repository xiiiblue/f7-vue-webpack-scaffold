<template>
  <div class="home-mine-view">
    <f7-block class="mine-block">
      <div class="logo"><img src="static/img/func-icon-3.png"/></div>
      <div class="staff">
        <div class="staff-info">工号: {{env.staffId}}</div>
        <div>地市: {{env.eparchyCode}}</div>
      </div>
    </f7-block>
    <f7-block class="list9-block">
      <ul>
        <f7-list-item link="/manage/about/" title="关于" media='<img src="static/img/func-icon-1.png"/>'></f7-list-item>
        <f7-list-item link="/manage/about/" title="关于" media='<img src="static/img/func-icon-2.png"/>'></f7-list-item>
        <f7-list-item link="#" title="退出" media='<img src="static/img/func-icon-3.png"/>'
                      @click="exitApp"></f7-list-item>
      </ul>
    </f7-block>
  </div>
</template>

<style lang="less">
  .home-mine-view {
    .mine-block {
      margin-top: 0 !important;
      margin-bottom: 0 !important;
      padding-top: 30px;
      padding-bottom: 30px;
      background-color: antiquewhite;
      .logo {
        width: 120px;
        height: 120px;
        background: url("../../../static/img/func-icon-1.png") center no-repeat;
        text-indent: -9999px;
        border-radius: 5px;
        margin: 0 auto;
      }

      .staff {
        margin: 20px auto;
        text-align: center;
        font-size: 18px;
        line-height: 18px;
        .staff-info {
          margin: 10px auto;
        }
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
        env: state => state.env,
      }),
    },
    methods: {
      exitApp() {
        util.openUiBox('UiBox_4yw3mj')
      }
    }
  }
</script>
