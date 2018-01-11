<template>
  <f7-page :name="$route.route.name" :class="$route.route.name">
    <navbar :title="$route.route.title"></navbar>

    <f7-block-title>块标题</f7-block-title>

    <f7-block>
      <p>块</p>
      <f7-block inset>内部块</f7-block>
    </f7-block>

    <f7-block-title>按钮</f7-block-title>
    <f7-block>
      <f7-button>Button Text</f7-button>

    </f7-block>

    <f7-block-title>链接</f7-block-title>

    <f7-block>
      <f7-link href="/manage/about/">链接</f7-link>
      <f7-link href="/manage/about/" :animate-pages="false" :ignore-cache="true">带参数链接</f7-link>
      <f7-link back>返回链接</f7-link>
      <f7-link open-popup="#my-popup">打开浮动窗口</f7-link>
      <f7-link close-popup="#my-popup">关闭浮动窗口</f7-link>
    </f7-block>

    <f7-block-title>TAB页链接</f7-block-title>
    <f7-block>
      <!-- Tabs -->
      <f7-tabs>
        <f7-tab id="tab-01" active>Tab 1</f7-tab>
        <f7-tab id="tab-02">Tab 2</f7-tab>
      </f7-tabs>
      <!-- Switch Between Tabs -->
      <f7-link tab-link="#tab-01">Show Tab 1</f7-link>
      <f7-link tab-link="#tab-02">Show Tab 2</f7-link>
    </f7-block>


    <f7-block-title>卡片</f7-block-title>
    <f7-card title="Card Title" content="Card Content" footer="Card Footer"></f7-card>
    <f7-card title="Card Title" content="Card Content" footer="Card Footer"></f7-card>

    <f7-block-title>标签</f7-block-title>
    <f7-block>
      <f7-chip text="Example Chip"></f7-chip>
      <!-- Colored Chip -->
      <f7-chip text="Another Chip" bg="red" color="white"></f7-chip>
      <!-- Media Chip -->
      <f7-chip text="Jane Doe" media='<img src="http://lorempixel.com/100/100/people/9/">'></f7-chip>
      <!-- Deleteable Chip -->
      <f7-chip text="Another Chip" deleteable @delete="onChipDelete"></f7-chip>
      <!-- Deleteable Media Chip -->
      <f7-chip text="Jane Doe" media='<img src="http://lorempixel.com/100/100/people/9/">' media-bg="red" deleteable
               @delete="onChipDelete"></f7-chip>
    </f7-block>

    <!--右下角按钮-->
    <f7-fab color="pink" @click="doSomething">
      <f7-icon>+</f7-icon>
    </f7-fab>

    <f7-block-title>font-icon图标</f7-block-title>
    <f7-block>
      <i class="iconfont icon-wxbbaobiao"></i>
      <i class="iconfont icon-wxbzhuye"></i>
      <i class="iconfont icon-all"></i>
      <i class="iconfont icon-account"></i>
      <i class="iconfont icon-success"></i>
    </f7-block>


    <f7-block-title>xxx</f7-block-title>

    <f7-messagebar placeholder="Message" send-link="Send" @submit="onSubmit"></f7-messagebar>

  </f7-page>
</template>
