<template>
  <f7-page :name="$route.route.name" :class="$route.route.name">
    <navbar :title="$route.route.title"></navbar>

    <f7-block-title>气泡窗</f7-block-title>
    <f7-block>
      <p><a href="#" data-popover=".popover-about" class="open-popover">打开气泡窗</a></p>
      <p><a href="#" data-popover=".popup-about" class="open-popup">打开底部弹窗</a></p>

    </f7-block>

    <!-- popover -->
    <f7-popover class="popover-about">
      <p>About</p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac diam ac quam euismod porta vel a nunc. Quisque sodales scelerisque est, at porta justo cursus ac.</p>
    </f7-popover>

    <!-- Popup -->
    <f7-popup class="popup-about">
      <p><a href="#" class="close-popup">Close popup</a></p>
      <p>Services</p>
      <p>Lorem ipsum dolor ...</p>
    </f7-popup>

  </f7-page>
</template>

<style lang="less">
  .showcase-modal {
    .popover {
      width: 200px;
    }
  }
</style>
