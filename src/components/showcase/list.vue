<template>
  <f7-page :name="$route.route.name" :class="$route.route.name">
    <navbar :title="$route.route.title"></navbar>

    <f7-block-title>普通列表</f7-block-title>

    <f7-list>
      <f7-list-item title="Item 1"></f7-list-item>
      <f7-list-item title="Item 2"></f7-list-item>
    </f7-list>

    <f7-block-title>徽标与分栏</f7-block-title>

    <f7-list>
      <f7-list-item title="Item 1" badge="5" badge-color="red"></f7-list-item>
      <f7-list-item title="Item 2" badge="3" badge-color="red"></f7-list-item>
      <f7-list-item title="我是分栏" divider></f7-list-item>
      <f7-list-item title="Item 3"></f7-list-item>
    </f7-list>

    <f7-block-title>链接</f7-block-title>

    <f7-list>
      <f7-list-item link="/about/" title="About"></f7-list-item>
      <f7-list-item link="/contacts/" title="Contacts"></f7-list-item>
    </f7-list>

    <f7-block-title>含图片</f7-block-title>

    <f7-list media-list>
      <f7-list-item
        link="/item/"
        media="<img src='/static/img/func-icon-1.png'>"
        title="Item Title"
        subtitle="Item Subtitle"
        text="Some text"
        after="Read more"
      ></f7-list-item>
    </f7-list>

    <f7-block-title>SLOT</f7-block-title>

    <f7-list media-list>
      <f7-list-item
        link="/home/"
        media="<img src='image.jpg'>"
        title="Item Title"
        subtitle="Item Subtitle"
        text="Text"
        after="Read more"
      >
        <div slot="root-start">Root Start</div>
        <div slot="root">Root</div>
        <div slot="content-start">Content Start</div>
        <div slot="content">Content</div>
        <div slot="media-start">Media Start</div>
        <div slot="media">Media</div>
        <span slot="after-start">After Start</span>
        <span slot="after">After</span>
        <div slot="inner-start">Inner Start</div>
        <div slot="inner">Inner</div>
      </f7-list-item>
    </f7-list>

    <f7-block-title>列表组</f7-block-title>

    <f7-list>
      <f7-list-group>
        <f7-list-item title="Group 1" group-title></f7-list-item>
        <f7-list-item title="Item 1"></f7-list-item>
        <f7-list-item title="Item 2"></f7-list-item>
      </f7-list-group>
      <f7-list-group>
        <f7-list-item title="Group 2" group-title></f7-list-item>
        <f7-list-item title="Item 1"></f7-list-item>
        <f7-list-item title="Item 2"></f7-list-item>
      </f7-list-group>
    </f7-list>

    <f7-block-title>折叠</f7-block-title>

    <f7-list accordion>
      <f7-list-item accordion-item title="Accordion Item 1">
        <f7-accordion-content>
          <f7-block>
            <p>Accordion Item 1 Content</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu felis volutpat, rutrum ex quis, lobortis ex. Curabitur quis mattis lorem. Nullam magna lacus, interdum vel maximus nec, vestibulum non quam. Phasellus ornare efficitur porttitor. Quisque neque diam, imperdiet in fermentum nec, congue vitae ante. Nullam imperdiet maximus commodo. Morbi pharetra id purus ac ultrices. Duis non posuere libero.</p>
          </f7-block>
        </f7-accordion-content>
      </f7-list-item>
      <f7-list-item accordion-item title="Accordion Item 2">
        <f7-accordion-content>
          <f7-block>
            <p>Accordion Item 2 Content</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu felis volutpat, rutrum ex quis, lobortis ex. Curabitur quis mattis lorem. Nullam magna lacus, interdum vel maximus nec, vestibulum non quam. Phasellus ornare efficitur porttitor. Quisque neque diam, imperdiet in fermentum nec, congue vitae ante. Nullam imperdiet maximus commodo. Morbi pharetra id purus ac ultrices. Duis non posuere libero.</p>
          </f7-block>
        </f7-accordion-content>
      </f7-list-item>
    </f7-list>

    <f7-block-title>按钮列表</f7-block-title>

    <f7-list>
      <f7-list-button>Button 1</f7-list-button>
      <f7-list-button>Button 2</f7-list-button>
    </f7-list>

  </f7-page>
</template>
