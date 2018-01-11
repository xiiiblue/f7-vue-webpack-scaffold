<template>
  <f7-page :name="$route.route.name" :class="$route.route.name">
    <navbar :title="$route.route.title"></navbar>

    <f7-block-title>表单</f7-block-title>

    <f7-list form>
      <f7-list-item>
        <f7-label>Name</f7-label>
        <f7-input type="text" placeholder="Name"></f7-input>
      </f7-list-item>
      <f7-list-item>
        <f7-label>Password</f7-label>
        <f7-input type="password" placeholder="Password"></f7-input>
      </f7-list-item>
      <f7-list-item>
        <f7-label>E-mail</f7-label>
        <f7-input type="email" placeholder="E-mail"></f7-input>
      </f7-list-item>
      <f7-list-item>
        <f7-label>URL</f7-label>
        <f7-input type="url" placeholder="URL"></f7-input>
      </f7-list-item>
      <f7-list-item>
        <f7-label>Phone</f7-label>
        <f7-input type="tel" placeholder="Phone"></f7-input>
      </f7-list-item>
      <f7-list-item>
        <f7-label>Birth date</f7-label>
        <f7-input type="date" placeholder="Birth date" value="2014-04-30"></f7-input>
      </f7-list-item>
      <f7-list-item>
        <f7-label>Date time</f7-label>
        <f7-input type="datetime-local"></f7-input>
      </f7-list-item>
      <f7-list-item>
        <f7-label>Gender</f7-label>
        <f7-input type="select">
          <option value="1">Male</option>
          <option value="1">Female</option>
        </f7-input>
      </f7-list-item>
      <f7-list-item>
        <f7-label>Switch</f7-label>
        <f7-input type="switch"></f7-input>
      </f7-list-item>
      <f7-list-item>
        <f7-label>Range</f7-label>
        <f7-input type="range" min="0" max="100" step="1" value="90"></f7-input>
      </f7-list-item>
      <f7-list-item>
        <f7-label>Textarea</f7-label>
        <f7-input type="textarea" placeholder="Textarea"></f7-input>
      </f7-list-item>
    </f7-list>


    <f7-block-title>无标签</f7-block-title>
    <f7-list form>
      <f7-list-item>
        <f7-input type="text" placeholder="Name"></f7-input>
      </f7-list-item>
      <f7-list-item>
        <f7-input type="password" placeholder="Password"></f7-input>
      </f7-list-item>
      <f7-list-item>
        <f7-input type="email" placeholder="E-mail"></f7-input>
      </f7-list-item>
    </f7-list>

    <f7-block-title>复选</f7-block-title>
    <f7-list form>
      <f7-list-item v-for="n in 3" :key="n" checkbox name="my-checkbox" :value="n"
                    :title="'Checkbox ' + n"></f7-list-item>
    </f7-list>

    <f7-list form>
      <f7-list-item checkbox name="my-checkbox" value="1" title="Checkbox 1" checked></f7-list-item>
      <f7-list-item checkbox name="my-checkbox" value="2" title="Checkbox 1"></f7-list-item>
      <f7-list-item checkbox name="my-checkbox" value="3" title="Checkbox 1"></f7-list-item>
    </f7-list>

    <f7-block-title>单选</f7-block-title>
    <f7-list form>
      <f7-list-item v-for="n in 3" :key="n" radio name="my-radio" :checked="n === 1" :value="n"
                    :title="'Radio ' + n"></f7-list-item>
    </f7-list>

  </f7-page>
</template>
