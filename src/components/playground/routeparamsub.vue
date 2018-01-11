<template>
  <f7-page :name="$route.route.name" :class="$route.route.name">
    <navbar :title="$route.route.title"></navbar>

    <f7-list form>
      <f7-list-item>
        <f7-label>接收ID</f7-label>
        <f7-input type="text" placeholder="Name" :value="$route.params.id"></f7-input>
      </f7-list-item>
    </f7-list>
  </f7-page>
</template>

<script>
  export default {
    mounted() {
      console.log(this.$route.params)
    },
  }
</script>
