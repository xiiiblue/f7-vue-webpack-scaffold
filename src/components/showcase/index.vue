<template>
  <f7-page :name="$route.route.name" :class="$route.route.name">
    <navbar :title="$route.route.title"></navbar>
    <f7-block-title>请选择</f7-block-title>
    <f7-list>
      <f7-list-item link="/showcase/structure/" title="01: 基础页面结构" media="<i class='icon icon-f7'></i>"></f7-list-item>
      <f7-list-item link="/showcase/form/" title="02: 表单元素" media="<i class='icon icon-f7'></i>"></f7-list-item>
      <f7-list-item link="/showcase/list/" title="03: 列表" media="<i class='icon icon-f7'></i>"></f7-list-item>
      <f7-list-item link="/showcase/element/" title="04: 基础控件" media="<i class='icon icon-f7'></i>"></f7-list-item>
      <f7-list-item link="/showcase/smartlist/" title="05: 智能选单" media="<i class='icon icon-f7'></i>"></f7-list-item>
      <f7-list-item link="/showcase/grid/" title="06: 栅格" media="<i class='icon icon-f7'></i>"></f7-list-item>
      <f7-list-item link="/showcase/modal/" title="07: 模态窗口" media="<i class='icon icon-f7'></i>"></f7-list-item>
      <f7-list-item link="/showcase/progressbar/" title="08: 进度条" media="<i class='icon icon-f7'></i>"></f7-list-item>
      <f7-list-item link="/showcase/tab/" title="09: TAB页" media="<i class='icon icon-f7'></i>"></f7-list-item>
      <f7-list-item link="/showcase/button/" title="10: 按钮" media="<i class='icon icon-f7'></i>"></f7-list-item>
      <f7-list-item link="/showcase/report/" title="11: 报表" media="<i class='icon icon-f7'></i>"></f7-list-item>
    </f7-list>
  </f7-page>
</template>
