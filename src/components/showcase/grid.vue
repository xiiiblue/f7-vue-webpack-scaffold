<template>
  <f7-page :name="$route.route.name" :class="$route.route.name">
    <navbar :title="$route.route.title"></navbar>

    <f7-block-title>栅格</f7-block-title>
    <f7-grid>
      <f7-col>Col 1</f7-col>
      <f7-col>Col 2</f7-col>
      <f7-col>Col 3</f7-col>
    </f7-grid>

    <f7-block-title>无间隔栅格</f7-block-title>
    <f7-grid no-gutter>
      <f7-col width="50">Col 50%</f7-col>
      <f7-col width="25">Col 25%</f7-col>
      <f7-col width="25">Col 25%</f7-col>
    </f7-grid>


    <f7-block-title>自动换行</f7-block-title>
    <f7-grid>
      <f7-col width="50">Col 1</f7-col>
      <f7-col width="50">Col 1</f7-col>
      <f7-col width="50">Col 1</f7-col>
      <f7-col width="50">Col 1</f7-col>
      <f7-col width="50">Col 1</f7-col>
      <f7-col width="50">Col 1</f7-col>
    </f7-grid>
  </f7-page>

</template>
