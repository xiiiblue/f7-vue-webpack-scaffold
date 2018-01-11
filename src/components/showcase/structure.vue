<template>
  <f7-page :name="$route.route.name" :class="$route.route.name">
    <navbar :title="$route.route.title"></navbar>

    <f7-block-title>Block Title</f7-block-title>
    <f7-block>Block</f7-block>

    <f7-block>
      <f7-button>Button</f7-button>
    </f7-block>

    <f7-block>
      <f7-link href="/about/">About</f7-link>
      <f7-link back>Back</f7-link>
    </f7-block>

  </f7-page>
</template>

<style lang="less">
  @import "../../assets/styles/mixins.less";

  .showcase-structure {
  }
</style>


<script>
  import {mapState} from 'vuex'

  export default {
    data() {
      return {
        foobar: null,
      }
    },
    computed: {
      ...mapState({
        env: state => state.env,
      }),
    },
    watch: {},
    mounted() {
    },
    methods: {},
    components: {}
  }
</script>
