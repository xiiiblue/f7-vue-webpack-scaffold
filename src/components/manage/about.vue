<template>
  <f7-page :name="$route.route.name" :class="$route.route.name" pull-to-refresh @ptr:refresh="onRefresh">
    <navbar :title="$route.route.title"></navbar>

    <f7-block>
      <div class="logo">
      </div>
    </f7-block>

    <f7-block class="my-product">
      <div class="name">{{env.appName}}</div>
      <div class="version">{{env.appVersion}}</div>
    </f7-block>

    <f7-block class="about-copyright">
      {{env.appCopyright}}
    </f7-block>

  </f7-page>
</template>

<style lang="less">
  .manage-about {
    .content-block {
      color: #666;
    }

    .logo {
      width: 90px;
      height: 90px;
      background: url("../../../static/img/func-icon-1.png") center no-repeat #fff;
      background-size: 83%;
      text-indent: -9999px;
      border-radius: 5px;
      margin: 50px auto;
      border: 1px solid #dfdfdf;
    }

    .my-product {
      text-align: center;
      .name {
        font-size: 20px;
      }
    }

    .about-copyright {
      position: absolute;
      left: 0;
      text-align: center;
      bottom: 0;
      font-size: 10px;
      color: #9C9C9C;
      width: 100%;
      padding: 0;
    }
  }
</style>

<script>
  import {mapState} from 'vuex'

  export default {
    computed: {
      ...mapState({
        env: state => state.env,
      }),
    },
    methods: {
      onRefresh() {
        let that = this
        setTimeout(function () {
          that.$router.refreshPage()
        }, 1000)
      }
    },
  }
</script>
