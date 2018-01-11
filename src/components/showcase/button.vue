<template>
  <f7-page :name="$route.route.name" :class="$route.route.name">
    <navbar :title="$route.route.title"></navbar>

    <f7-block-title>按钮</f7-block-title>

    <f7-block>
      <p>
        <f7-button>Button</f7-button>
      </p>
      <p>
        <f7-button round>Button Round</f7-button>
      </p>
      <p>
        <f7-button fill>Button Fill</f7-button>
      </p>
      <p>
        <f7-buttons>
          <f7-button round active>Button 1</f7-button>
          <f7-button round>Button 2</f7-button>
          <f7-button round>Button 3</f7-button>
        </f7-buttons>
      </p>
      <p>
        <f7-buttons color="orange">
          <f7-button round big>Button 1</f7-button>
          <f7-button round big active>Button 2</f7-button>
          <f7-button round big>Button 3</f7-button>
        </f7-buttons>
      </p>
      <p>
        <f7-grid>
          <f7-col>
            <f7-button big fill color="green">Send</f7-button>
          </f7-col>
          <f7-col>
            <f7-button big fill color="red">Delete</f7-button>
          </f7-col>
        </f7-grid>
      </p>
      <p>
        <f7-grid>
          <f7-col>
            <f7-button fill raised color="green">Raised</f7-button>
          </f7-col>
          <f7-col>
            <f7-button raised color="red">Raised</f7-button>
          </f7-col>
          <f7-col>
            <f7-button fill raised color="pink">Raised</f7-button>
          </f7-col>
        </f7-grid>
      </p>
    </f7-block>

  </f7-page>
</template>
