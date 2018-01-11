<template>
  <f7-page :name="$route.route.name" :class="$route.route.name">
    <navbar :title="$route.route.title"></navbar>

    <f7-list form>
      <f7-list-item title="页面传值 id=1" link="/playground/routeparamsub/1"></f7-list-item>
      <f7-list-item title="页面传值 id=2" link="/playground/routeparamsub/2"></f7-list-item>
    </f7-list>

  </f7-page>
</template>
