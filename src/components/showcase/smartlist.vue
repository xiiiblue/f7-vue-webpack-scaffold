<template>
  <f7-page :name="$route.route.name" :class="$route.route.name">
    <navbar :title="$route.route.title"></navbar>

    <f7-block-title>选单</f7-block-title>


    <f7-list form>
      <!-- Enables Smart Select behavior by adding "smart-select" prop -->
      <f7-list-item smart-select title="Fruit" smart-select-back-text=" ">
        <!-- Select with values inside -->
        <select name="fruits">
          <option value="apple" selected>Apple</option>
          <option value="pineapple">Pineapple</option>
          <option value="pear">Pear</option>
          <option value="orange">Orange</option>
          <option value="melon">Melon</option>
          <option value="peach">Peach</option>
          <option value="banana">Banana</option>
        </select>
      </f7-list-item>
      <!-- Multiple Smart Select With Searchbar -->
      <f7-list-item smart-select smart-select-searchbar title="Car" smart-select-back-text=" ">
        <select name="car" multiple="multiple">
          <optgroup label="Japanese">
            <option value="honda" selected>Honda</option>
            <option value="lexus">Lexus</option>
            <option value="mazda">Mazda</option>
            <option value="nissan">Nissan</option>
            <option value="toyota">Toyota</option>
          </optgroup>
          <optgroup label="German">
            <option value="audi" selected>Audi</option>
            <option value="bmw">BMW</option>
            <option value="mercedes">Mercedes</option>
            <option value="vw">Volkswagen</option>
            <option value="volvo">Volvo</option>
          </optgroup>
          <optgroup label="American">
            <option value="cadillac">Cadillac</option>
            <option value="chrysler">Chrysler</option>
            <option value="dodge">Dodge</option>
            <option value="ford" selected>Ford</option>
          </optgroup>
        </select>
      </f7-list-item>
      <!-- With back on select -->
      <f7-list-item smart-select smart-select-back-on-select title="Mac or Windows" smart-select-back-text=" ">
        <select name="mac-windows">
          <option value="mac">Mac</option>
          <option value="windows">Windows</option>
        </select>
      </f7-list-item>
    </f7-list>

  </f7-page>
</template>
