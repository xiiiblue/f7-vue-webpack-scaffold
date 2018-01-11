<template>
  <f7-page :name="$route.route.name" :class="$route.route.name">
    <navbar :title="$route.route.title"></navbar>

    <f7-block-title>TAB页</f7-block-title>
    <f7-block>
      <!-- Tabs -->
      <f7-tabs>
        <f7-tab id="tab01" active>Tab 1</f7-tab>
        <f7-tab id="tab02">Tab 2</f7-tab>
      </f7-tabs>
      <!-- Switch Between Tabs -->
      <f7-link tab-link="#tab01">Show Tab 1</f7-link>
      <f7-link tab-link="#tab02">Show Tab 2</f7-link>
    </f7-block>

    <f7-block-title>动画TAB页</f7-block-title>
    <f7-block>
      <!-- Tabs -->
      <f7-tabs animated>
        <f7-tab id="tab11" active>Tab 1 content...</f7-tab>
        <f7-tab id="tab12">Tab 2 content...</f7-tab>
      </f7-tabs>
      <!-- Switch Between Tabs -->
      <f7-link tab-link="#tab11">Show Tab 1</f7-link>
      <f7-link tab-link="#tab12">Show Tab 2</f7-link>
    </f7-block>

    <f7-block-title>划动TAB页</f7-block-title>
    <f7-block>
      <!-- Tabs -->
      <f7-tabs swipeable>
        <f7-tab id="tab21" active>Tab 1 content...</f7-tab>
        <f7-tab id="tab22">Tab 2 content...</f7-tab>
      </f7-tabs>
      <!-- Switch Between Tabs -->
      <f7-link tab-link="#tab21">Show Tab 1</f7-link>
      <f7-link tab-link="#tab22">Show Tab 2</f7-link>
    </f7-block>



  </f7-page>
</template>
