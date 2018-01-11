<template>
  <f7-panel right cover>
    <f7-view id="right-panel-view" navbar-through :dynamic-navbar="true">
      <f7-navbar title="CONSOLE" sliding></f7-navbar>

      <f7-pages>
        <indexmenu></indexmenu>
      </f7-pages>
    </f7-view>
  </f7-panel>
</template>

<style lang="less">
  @import "../../assets/styles/mixins.less";

  .panel {
    width: 85%;
  }

  .panel.panel-right {
    box-shadow: -3px 0px 3px @greyColor;
  }

  #right-panel-view {
    .navbar {
      background-color: #444444;
    }
  }
</style>


<script>
  import indexmenu from '../console/index.vue'

  export default {
    components: {
      indexmenu
    }
  }
</script>
