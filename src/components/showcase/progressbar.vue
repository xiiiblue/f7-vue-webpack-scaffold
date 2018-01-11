<template>
  <f7-page :name="$route.route.name" :class="$route.route.name">
    <navbar :title="$route.route.title"></navbar>

    <f7-block-title>进度条</f7-block-title>

    <f7-block>
      <!-- Determinate Progress Bar -->
      <f7-progressbar :progress="20"></f7-progressbar>

    </f7-block>

    <f7-block>
      <!-- Determinate Red Progress Bar -->
      <f7-progressbar :progress="30" color="red"></f7-progressbar>
    </f7-block>


    <f7-block>
      <!-- Infinite Blue Progress Bar -->
      <f7-progressbar infinite color="blue"></f7-progressbar>
    </f7-block>

    <f7-block>
      <!-- Infinite Multi-color Progress Bar -->
      <f7-progressbar infinite color="multi"></f7-progressbar>
    </f7-block>


  </f7-page>
</template>
