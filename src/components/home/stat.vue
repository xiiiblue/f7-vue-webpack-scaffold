<template>
  <div class="home-stat-view">
    <f7-searchbar
      cancel-link="取消"
      placeholder="输入功能点名称"
      :clear-button="true"
    ></f7-searchbar>

    <f7-list class="func-list">
      <f7-list-item link="/manage/about/" title="报表大类1" media='<img src="static/img/func-icon-1.png">'></f7-list-item>
      <f7-list-item link="/manage/about/" title="报表大类2" media='<img src="static/img/func-icon-1.png">'></f7-list-item>
      <f7-list-item link="/manage/about/" title="报表大类3" media='<img src="static/img/func-icon-1.png">'></f7-list-item>
    </f7-list>
  </div>
</template>
