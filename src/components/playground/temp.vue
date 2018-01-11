<template>
  <f7-page :name="$route.route.name" :class="$route.route.name">
    <navbar :title="$route.route.title"></navbar>

    <f7-block>
      <div class="item-input">
        <f7-button big fill color="green" @click="clickSubmit">提交</f7-button>
      </div>
    </f7-block>


  </f7-page>
</template>

<style lang="less">
</style>

<script>
  import util from '../../util'
  import {mapState} from 'vuex'

  export default {
    data() {
      return {
        numList: [],
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
    methods: {
      clickSubmit() {
        util.openUiBox('UiBox_4yw3mj', null)
      },
    }
  }
</script>
