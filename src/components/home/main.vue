<template>
  <div class="home-main-view">
    <f7-block-title>积分报表</f7-block-title>

    <f7-block>
      <f7-buttons>
        <f7-button tab-link="#tab1" active>报表1</f7-button>
        <f7-button tab-link="#tab2">报表2</f7-button>
        <f7-button tab-link="#tab3">报表3</f7-button>
      </f7-buttons>

      <f7-tabs animated>
        <f7-tab id="tab1" active>
          <div class="blank-block1"></div>
        </f7-tab>
        <f7-tab id="tab2">
          <div class="blank-block2"></div>
        </f7-tab>
        <f7-tab id="tab3">
          <div class="blank-block3"></div>
        </f7-tab>
      </f7-tabs>
    </f7-block>

    <f7-block-title>常用功能</f7-block-title>

    <f7-block class="list9-block">
      <ul>
        <f7-list-item link="#" title="登录" media='<img src="static/img/func-icon-2.png"/>'
                      class="open-login-screen"></f7-list-item>
        <f7-list-item link="/manage/about/" title="关于" media='<img src="static/img/func-icon-2.png"/>'></f7-list-item>
        <f7-list-item link="/showcase/index/" title="组件展示"
                      media='<img src="static/img/func-icon-3.png"/>'></f7-list-item>
        <f7-list-item link="/playground/index/" title="功能展示" media='<img src="static/img/func-icon-3.png"/>'></f7-list-item>
        <f7-list-item link="/console/index/" title="控制台" media='<img src="static/img/func-icon-3.png"/>'></f7-list-item>
      </ul>
    </f7-block>
  </div>
</template>

<style lang="less">
  @import "../../assets/styles/mixins.less";

  .home-main-view {
    .blank-block1 {
      height: 160px;
      margin-top: 15px;
      background-color: @lightGreyColor;
    }
    .blank-block2 {
      height: 160px;
      margin-top: 15px;
      background-color: @greyColor;
    }
    .blank-block3 {
      height: 160px;
      margin-top: 15px;
      background-color: @mainColor;
    }
  }
</style>
