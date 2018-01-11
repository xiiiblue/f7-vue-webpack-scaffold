<template>
  <f7-page :name="$route.route.name" :class="$route.route.name">
    <navbar :title="$route.route.title"></navbar>

    <f7-list form>
      <f7-list-item>
        <f7-label>UIBOX</f7-label>
        <f7-input type="text" v-model="uiBoxName"></f7-input>
      </f7-list-item>
    </f7-list>

    <f7-block>
      <div class="item-input">
        <f7-button big fill color="green" @click="clickSubmit1">仅跳转</f7-button>
      </div>
    </f7-block>
    <f7-block>
      <div class="item-input">
        <f7-button big fill color="green" @click="clickSubmit2">保存后跳转</f7-button>
      </div>
    </f7-block>


  </f7-page>
</template>

<script>
  import util from '../../util'
  import {mapState} from 'vuex'

  export default {
    data() {
      return {
        uiBoxName: 'UiBox_4yw3mj',
      }
    },
    computed: {
      ...mapState({
        env: state => state.env,
      }),
    },
    methods: {
      clickSubmit1() {
        util.openUiBox(this.uiBoxName)
      },
      clickSubmit2() {
        util.openUiBox(this.uiBoxName, 'env')
      },
    }
  }
</script>
