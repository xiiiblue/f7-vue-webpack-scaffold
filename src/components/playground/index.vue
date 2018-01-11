<template>
  <f7-page :name="$route.route.name" :class="$route.route.name">
    <navbar :title="$route.route.title"></navbar>

    <f7-block-title>请选择</f7-block-title>

    <f7-list>
      <f7-list-item link="/playground/temp/" title="01: 临时测试" media="<i class='icon icon-f7'></i>"></f7-list-item>
      <f7-list-item link="/playground/svcinvoke/" title="02: 服务调用" media="<i class='icon icon-f7'></i>"></f7-list-item>
      <f7-list-item link="/playground/uiboxroute/" title="03: UIBOX跳转" media="<i class='icon icon-f7'></i>"></f7-list-item>
      <f7-list-item link="/playground/localstoragesave/" title="04: LocalStorage存取" media="<i class='icon icon-f7'></i>"></f7-list-item>
      <f7-list-item link="/playground/stateadd/" title="05: 状态生成" media="<i class='icon icon-f7'></i>"></f7-list-item>
      <f7-list-item link="/playground/routeparam/" title="06: 页面间传值" media="<i class='icon icon-f7'></i>"></f7-list-item>
    </f7-list>
  </f7-page>
</template>
