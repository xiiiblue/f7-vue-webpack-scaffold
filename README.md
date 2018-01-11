# F7-VUE-WEBPACK-SCAFFOLD

## 1 简介
F7-VUE-WEBPACK-SCAFFOLD，是一个基于Webpack + Vue + Framework7构建的移动端单页应用脚手架，可内嵌于Cordova等平台中。


## 2 快速上手
下面介绍一下如何在零基础的情况下，快速搭建好开发环境，并完成代码克隆、编辑、测试、构建、发布等一系列 开发流程。

### 2.1 安装node.js与npm
node.js是一个基于Chrome  V8引擎的JavaScrip运行时，它是前端工程化的基础。npm是node.js的包管理工具。

- Windows用户

访问 [node.js官网](https://nodejs.org/zh-cn/) ，并下载安装包进行安装

- macOS用户
```
brew install node
```

- Ubuntu用户
```
sudo apt install nodejs
```

### 2.2 安装git
- Windows用户请先下载安装 [msysgit](http://gitforwindows.org/) 。另外最好安装一个命令行模拟器，例如cygwin。
- macOS与Ubuntu默认已经安装。


### 2.3 前端编辑器
提前准备好一个适用于前端开发编辑器或IDE。
推荐 JetBrains的 [WebStorm](https://www.jetbrains.com/webstorm/) 或 微软的 [VSCode](https://code.visualstudio.com/)。


### 2.4 克隆源码
源码使用git进行版本控制，托管在私有的GitLab上。

使用git clone命令将版本库克隆到本地：
```
git clone https://github.com/xiiiblue/f7-vue-webpack-scaffold.git
```

### 2.5 安装依赖
进入到工程目录，执行：
```
npm install
```
npm会将依赖的模块自动下载并安装到`./node_modules`目录下。

如果在内网环境中，无法直连，可以加入`--proxy`参数，使用代理服务器进行连接， 例如： `--proxy socks://IP:PORT`


### 2.6 运行开发服务器
安装好依赖之后，在工程目录下执行：
```
npm run dev
```
会在3000端口上启动一个开发用的HTTP服务器。

接下来访问 [http://127.0.0.1:3000](http://127.0.0.1:3000) ，就可以看到应用首页了。

### 2.7 修改代码
修改任意一个文件，如`src/pages/mamage/about.vue` ，修改完成后保存，会在浏览器上立即看到结果。

### 2.8 代码构建
开发完成后，如果需要在本机构建工程，则需要执行：
```
npm run build
```
编译好的文件会生成在`dist`目录中


### 2.9 持续集成
正常情况下，不需要在本机进行构建。

将代码push到GitLab上之后，仅需要在工程目录下执行脚本：
```
./pushtag.sh
```
Jenkins会自动完成构建、老代码备份、发布等一系列操作。


## 3 应用概述
### 3.1 技术特性
- 模块化 - 使用Webpack+Babel将所有资源打包同步加载
- 组件化 - 使用Vue单页面组件方式开发，降低耦合，并将内容、样式、逻辑3个关注点分离
- 规范化 - 使用Eslint，强制约束编码规范
- 自动化 - 使用Jenkins实现前端执续集成，自动完成构建、备份、部署等操作

### 3.2 主要依赖
- webpack `^2.2.1` - 资源打包
- vue `^2.2.2` - 数据-视图绑定，组件化
- vuex `^2.2.1` - 状态管理
- framework7 `^1.6.5`  - 移动端UI框架
- framework7-vue `^0.9.4`  - f7的vue整合
- lodash `^4.17.4`  - 通用工具库
- moment `^2.17.1`  - 时间工具库
- axios  `^0.15.3`  - 网络请求
- eslint `^3.14.1`  - 代码质量管理
- babel-core `^6.22.1` - ES6转译

### 3.3 目录及用途
- src/entry/index.js - 应用入口
- src/entry/index.html - 空白HTML模板
- src/routes.js - APP路由
- src/util.js - 工具封装
- src/assets/fonts - 图标字体，使用IconFont生成
- src/assets/style - 样式，使用LESS编写
- src/components - 存放后缀为.vue的组件
- src/components/index.html - 基础HTML页面结构，不需要改动
- src/components/index.vue - 初始化空白页面组件，不需要改动
- src/components/public - 公共组件
- src/components/console - 控制台相关组件
- src/components/home - 主界面
- src/components/manage - 系统管理
- src/components/playground - 功能展示
- src/components/showcase - 组件展示
- src/store - vuex状态
- static/img - 图片
- static/mock/api - 后台服务mock
- static/mock/localstorage - 原生APP中本地变量（LocalStorage）的mock


## 4 开发进阶
### 4.1 模块热替换
模块热替换(HMR)是webpack提供的最有用的功能之一。它允许在运行时更新各种模块，而无需进行完全刷新。  

它通过WebSocket等技术实现，当修改完一段代码后，直接保存，就可以立即在浏览器上查看到结果，大幅提升开发效率。

### 4.2 Vue单文件组件
使用Vue实现数据视图绑定以及组件化。  

Vue是一套用于构建用户界面的渐进式框架，Vue 的核心库只关注视图层，易于上手，能够为复杂的单页应用提供驱动。  

一个最简单的Vue单文件组件内容如下：
```
<!-- my-component.vue -->
<template>
  <div>This will be pre-compiled</div>
</template>
<script src="./my-component.js"></script>
<style src="./my-component.css"></style>
```

Vue的单文件组件，解决了复杂项目中的全局定义、字符串模板、不支持 CSS、没有构建步骤等痛点。

在同一个文件中，同时包含了内容、样式和功能。

关注点分离不等于文件类型分离，在现代 UI 开发中，我们已经发现相比于把代码库分离成三个大的层次并将其相互交织起来，把它们划分为松散耦合的组件再将其组合起来更合理一些。

在一个组件里，其模板、逻辑和样式是内部耦合的，并且把他们搭配在一起实际上使得组件更加内聚且更可维护。  

### 4.3 基础工具封装
util.js 中封装了一些基础功能，请直接使用，不要再进行重复开发。

- 复制到剪贴板 - copyToClipboard(msg) 
- 获取URL参数 - getUrlParam(key) 
- 格式化路由名称 - formatRoute(initPage) 
- 服务调用 - svcInvoke(payload, callback) 
- 调试参数打印 - log(msg) 
- 读取APP本地变量 - getLocalStorage(key, callback)
- 写入APP本地变量 - setLocalStorage(key, value, callback)
- 读取Vuex状态 - getState(module, key)
- 写入Vuex状态 - setState(module, obj)
- 检查对象中的无效键 - checkUndefined(obj)

### 4.4 Eslint代码检测
ESLint 是一个开源的 JavaScript 代码检查工具。  

代码检查是一种静态的分析，常用于寻找有问题的模式或者代码，并且不依赖于具体的编码风格。  

对大多数编程语言来说都会有代码检查，一般来说编译程序会内置检查工具。 

JavaScript 是一个动态的弱类型语言，在开发中比较容易出错。因为没有编译程序，为了寻找 JavaScript 代码错误通常需要在执行过程中不断调试。ESLint可以让程序员在编码的过程中发现问题而不是在执行的过程中。

Eslint的规则已经配置好，在WebStorm这样的IDE中可以自动识别，直接使用即可。

### 4.5 Framework7页面结构
Framework7是一个开源的WEB APP前端框架，用于构建IOS 和 Android 风格的应用，它本身提供了很完善的UI组件和工具。

通过F7-Vue插件，Framework7可以和Vue进行整合，它的基础页面结构如下：


```HTML
<!DOCTYPE html>
<html>
  <head>
    <!-- ... metas and styles ... -->
  </head>
  <body>
    <!-- App Root Element -->
    <div id="app">
      <!-- Status bar overlay for full screen mode (Cordova or PhoneGap) -->
      <f7-statusbar></f7-statusbar>
      <!-- Views -->
      <f7-views>
        <!-- Your main view, should have "main" prop -->
        <f7-view main>
          <!-- Pages container, because we use fixed navbar and toolbar, it has additional appropriate props -->
          <f7-pages navbar-fixed toolbar-fixed>
            <!-- Initial Page -->
            <f7-page>
              <!-- Top Navbar-->
              <f7-navbar title="Awesome App"></f7-navbar>
              <!-- Toolbar-->
              <f7-toolbar>
                <f7-link>Link 1</f7-link>
                <f7-link>Link 2</f7-link>
              </f7-toolbar>
              <!-- Page Content -->
              <p>Page content goes here</p>
              <f7-link href="/about/">About App</f7-link>
            </f7-page>
          </f7-pages>
        </f7-view>
      </f7-views>
    </div>
    <!-- ... scripts ... -->
  </body>
</html>
```

在调试过程中，页面结构在在vue-devtools中也可以比较方便的查看。


### 4.6 Vuex状态管理
Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式。

它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。

Vuex 也集成到 Vue 的官方调试工具 devtools extension，提供了诸如零配置的 time-travel 调试、状态快照导入导出等高级调试功能。

![](http://oh0ra6igz.bkt.clouddn.com/bdhg9.png)

以下是一个表示“单向数据流”理念的极简示意：
![](http://oh0ra6igz.bkt.clouddn.com/dcny6.png)

但当我们的应用遇到多个组件共享状态时，单向数据流的简洁性很容易被破坏：
- 多个视图依赖于同一状态。
- 来自不同视图的行为需要变更同一状态。

Vuex把组件的共享状态抽取出来，以一个全局单例模式管理。在这种模式下，我们的组件树构成了一个巨大的“视图”，不管在树的哪个位置，任何组件都能获取状态或者触发行为。
![](http://oh0ra6igz.bkt.clouddn.com/f96ls.png)

Vuex的各模块的代码存放于`src/store`目录中，如果在Mutation中仅做简单的增删改查，可以参考env.js的写法。  

如果应用规模继续扩大，模型与REST调用也可以抽离出来，放在这一层的action中。

### 4.7 环境变量
使用Vuex的env模块来存放环境变量，下面详细解释一下各个环境变量意义：
```
const state = {
  appName: '应用名称',  // 应用名称
  appVersion: '1.0.0', // 版本号
  appCopyright: 'Copyright © 2017 公司名称',  // 版权信息
  profile: 'dev',  // 服务环境，可以传入dev/test/prod，以区分开发、测试、生产
  apiBaseUrl: '/path/to/proxy',  // 服务调用地址
  mockApiUrl: 'static/mock/api/',  // API Mock的路径
  mockLocalStorageUrl: 'static/mock/localstorage/',  // LocalStorage Mock的路径
  debugTag: 'off',  // DEBUG模式的开关
  initPage: null,  // 初始化页面，中间以.分割，例如传入manage.about，则首页会渲染成/manage/about/。如果不传入，或路由不存在，则渲染默认首页。
  staffId: null,  // 工号
  eparchyCode: null, // 地市
  token: null,  // 调用后台服务的token
  lastUrl: null,  // 原生与HTML5混合功能点中，点击左上角返回按钮，将要返回的UIBOX名
  nextUrl: null,  // 原生与HTML5混合功能点中，点击下一步将要跳到的UIBOX名
}
```
### 4.8 页面路由
页面路由，使用了Framework7中集成的routes。  

路由信息配置在`src/routes.js`中，已经做了简单的封装，配置示例如下：
```
export default [
  staticRoute('/home/index', '主页'),
  staticRoute('/manage/about', '关于'),
  staticRoute('/playground/localstoragesave', 'LocalStorage存取'),
  staticRoute('/playground/routeparam', '页面间传值'),
  staticRoute('/playground/routeparamsub/:id', '页面间传值接收'),
]
```

每当新增了一个.vue的单文件组件后，仅需要在routes.js中新增一行，写明路由名称与页面标题即可。

路由名称与真实的文件路径是对应的，建议使用二级目录进行管理。  

.vue组件中，<f7-page>与<navbar>节点，不需要手工录入标题、class等信息，直接复制下面的模板即可：
```
<template>
  <f7-page :name="$route.route.name" :class="$route.route.name">
    <navbar :title="$route.route.title"></navbar>
  </f7-page>
</template>
```

### 4.9 图标字体
页面中的图标，统一封装为字体文件，方便加载。

这里使用了阿里巴巴的iconfont来进行制作，网址为： http://www.iconfont.cn/

![](http://oh0ra6igz.bkt.clouddn.com/l67r4.png)

使用上比较简单，注册好用户后，将选中的图标添加到购物车，或主动上传图标，然后添加到某一个"工程"中，即可导出生成好的字体文件与CSS样式。  

字体文件存放于 `src/assets/fonts` 目录，直接覆盖即可。

### 4.10 静态资源
静态资源：例如图片和Mock文件，不会被WebPack打包，需要统一存放在 `static` 目录。

在CSS等代码中，可以用相对路径来进行引用，打包时会自动修改替换URL。  


### 4.11 LESS样式
使用LESS进行样式的开发，WebPack打包后会转译为CSS。  

公共的样式文件位于 `src/assets/styles` 目录，入口是 `app.less`

![](http://oh0ra6igz.bkt.clouddn.com/hs7uy.png)

在`mixins.less`中，定义了基础的颜色、相对路径等信息，其它的.less中可以直接引用它。

私有的样式，可以直接写在.vue组件中。

### 4.12 组件展示
![](http://oh0ra6igz.bkt.clouddn.com/tlqeg.png)
代码存放于 `src/pages/showcase/` 目录

演示Framework7的各个组件的用法，方便在开发页面时使用。

### 4.13 功能展示
![](http://oh0ra6igz.bkt.clouddn.com/mhur0.png)

代码存放于 `src/pages/playground/` 目录

演示服务调用、UIBOX跳转等用法。

## 5 本机调试
### 5.1 测试URL
运行`npm run dev`后，默认的测试URL是：  

http://127.0.0.1:3000/

也可以在URL中以键值对的方式传入环境变量，例如：

http://127.0.0.1:3000/?debugTag=on&profile=test

PC调试中，一般都会传入debugTag和profile两个环境变量，前者是默认开启DEBUG模式，后者决定REST服务调用是开发、测试、还是生产环境。

所有传入的参数，都会存入名为env的状态中，作为系统环境变量。  

请注意，URL传递环境变量的的优先级最高。例如，已经通过URL方式传入了一个staffId的环境变量，那么通过LocalStorage传入的staffId环境变量则不会生效。


### 5.2 反向代理
反向代理在本机调试时非常有用，可以将前端页面与后端服务拉到同一个域下，在不开启CORS的情况下，前端可以直接调用到后台服务。

生产环境中，反向代理一般用Nginx实现。 本机调试环境中，由于Express已经自带，可以直接在`config/index.js`中，开启并修改其配置。

配置示例：
```
proxyTable: {'/reverseproxy': 'http://xxx.xxx.xxx.xxx:xxx'},
```

此时如果访问 http://127.0.0.1:3000/reverseproxy/whatever ，请求会被转发到后面配置的服务器上，而不是访问本机的文件。


### 5.3 chrome-devtools
![](http://oh0ra6igz.bkt.clouddn.com/es4kx.png)

推荐使用Chrome浏览器进行调试。Chrome的DevTools，比Safari等浏览器的功能要完善一些。  

篇幅原因，具体使用方法不再赘述。  

### 5.4 vue-devtools
![](http://oh0ra6igz.bkt.clouddn.com/uo502.png)

vue-devtools是一个Chrome插件，安装后会集成在原有的chrome-devtools里面。

如果页面是使用vue进行开发，且处于开发环境，vue-devtools则会被激活。

GitHub地址： https://github.com/vuejs/vue-devtools

安装比较简单，直接在Chrome商店中搜索即可。

### 5.5 API Mock
![](http://oh0ra6igz.bkt.clouddn.com/9dgo7.png)

在前端界面复杂的交互逻辑中，需要大量依赖后端REST服务提供的数据来进行驱动。

真实的开发流程中，前端不可能等待后端服务完全写好之后才开始进行开发。  

此时就需要API Mock，后端只要将请求/响应的格式约定好，并提供一个简单的样例给前端，保存成静态的.json文件即可。  

每个服务的API mock分为两个.json文件，存放于`static/mock/api`中。  


例如登录服务：
login.req.json  - 请求报文   
login.resp.json  - 响应报文  

当profile=dev时，网络请求会自动指向这个.json文件，而不是去请求真实的服务。

> 请注意：API Mock的触发条件是环境变量中 **profile=dev**

### 5.6 LocalStorage Mock
LocalStorage，是移动开发平台原生APP的本地变量的，在PC调试的过程中，是无法获取LocalStorage的，这时就需要进行mock。

与API mock类似，也是将内容保存成静态的.json文件，路径位于`mock/localstorage`，文件名即变量名。

当框架读取LocalStorage时，且发现当前是PC环境时，会自动模拟读取这个.json文件。  

> 请注意：LocalStorage Mock的触发条件是 **非真机环境（PC浏览器）**

## 6 真机联调
### 6.1 真机样式调整
由于真实手机的WebView上样式呈现，与PC端有很多差异，所以界面开发完成后，需要分别对Android和IOS进行真机调试。

Android手机的调试，可以借助Chrome浏览器的DevTool实现，可以在PC上展示DOM节点，CSS样式等，并可以实时修改CSS并在手机上查看到结果。  

IOS手机，也可以借助Safari浏览器的DevTool实现，过程类似，不再赘述。

### 6.2 DEBUG控制台呼出
代码最终会运行在移动开发平台的Shell（类似Cordova）中，经常会有原生<-->HTML5页面间的互相调用，由于缺乏调试工具，且访问原生能力的API不是很完善，联调会变的异常困难。  

目前已经开发了一套DEBUG控制台，包含一系列的工具，方便真机情况下的联调。  

3秒钟内，连续点击标题栏右上角10次，会激活DEBUG模式。  

这时，标题栏右上角会出现一个齿轮图标，点击图标后会在右侧呼出控制台。

![](http://oh0ra6igz.bkt.clouddn.com/lyj7q.png)

### 6.3 控制台日志
![](http://oh0ra6igz.bkt.clouddn.com/9bd1w.png)

编码过程中，推荐使用`util.log()`，代替`console.log()`进行日志输出。

DEBUG模式中，使用`util.log()`打印的日志，会出现在此处。  

请注意，为保证性能，仅保留最新的100条日志。  

点击右侧的"复制到剪贴板"按钮后，可以将内容拷贝出来，方便发送到PC查看。  

### 6.4 系统环境变量
![](http://oh0ra6igz.bkt.clouddn.com/1ou1l.png)

在此页面，可以修改所有的环境变量。 

例如可以实时变更开发/测试/生产这3个Profile，以便让APP调用不同环境的后台服务。     

### 6.5 服务模拟调用
![](http://oh0ra6igz.bkt.clouddn.com/nmbkr.png)

该功能点提供了一个简易的REST Client，类似PostMan。  
输入一段JSON请求后，点击调用可以获取响应。  

### 6.6 页面变量查询
![](http://oh0ra6igz.bkt.clouddn.com/qjrzq.png)

此功能点，会展示主视图中，Vue组件的所有的Data变量。

点击某个变量后，会展开显示其内容，并可以复制到剪贴板。  

对应PC端vue-devtools中的位置如下：

![](http://oh0ra6igz.bkt.clouddn.com/3sfix.png)


### 6.7 状态查询  
![](http://oh0ra6igz.bkt.clouddn.com/iznjg.png)

可以查看VueX的各个状态(系统相关的env和console这两个状态不会显示)  ，实现PC端vue-devtools类似的功能。


### 6.8 状态写入
![](http://oh0ra6igz.bkt.clouddn.com/bq883.png)

在此界面，可以手工添加/修改/删除某个VueX状态的值。  
注意，点击重置按钮后，整个状态节点会被清空。 

### 6.9 LocalStorage查询
![](http://oh0ra6igz.bkt.clouddn.com/znxuu.png)

LocalStorage，是原生外壳的本地变量的，可用于保存应用的状态，也是原生与HTML5交互的唯一手段。

请注意，这里的LocalStorage，虽然名称一样，但并不是浏览器中的那个本地存储。  


### 6.10 LocalStorage写入
![](http://oh0ra6igz.bkt.clouddn.com/6j7zc.png)

此功能点，用于伪造一个LocalStorage，方便真机测试。

输入键值对，点击写入按钮即可。 
> 请注意，变量值一般是JSON字符串。    

### 6.11 模拟登录
![](http://oh0ra6igz.bkt.clouddn.com/481vv.png)

打开一个模拟登录界面，登录后会获取一些环境变量并覆盖到env状态中去。  

### 6.12 打开登录界面
![](http://oh0ra6igz.bkt.clouddn.com/g6wqs.png)  
弹出内置的登录界面

### 6.13 页面强制刷新
强制刷新主视图的组件。 这在某些没有启用下拉刷新的页面中非常有用，可以在修改环境变量或其它状态后使用。

请注意，这里的"刷新"是指Vue组件的刷新，并不是指浏览器中的F5刷新。  

​    

## 7 知识储备
在正式动手开发之前，需要对前端开发语言、工具、流程等有一个大概的了解。  

以下简单列举了一些官网及教程，可以有选择性的查看。  

### 7.1 JavaScript
https://www.liaoxuefeng.com/wiki/001434446689867b27157e896e74d51a89c25cc8b43bdb3000

### 7.2 ES2015
https://babeljs.io/learn-es2015/
http://yanhaijing.com/javascript/2015/09/11/learn-es2015/

### 7.3 NPM
https://www.npmjs.com/
http://javascript.ruanyifeng.com/nodejs/npm.html
http://www.runoob.com/nodejs/nodejs-npm.html
http://www.jianshu.com/p/e958a74a0fd7

### 7.4 Webpack
https://webpack.js.org/
https://segmentfault.com/a/1190000006178770
https://llp0574.github.io/2016/11/29/getting-started-with-webpack2/
https://github.com/vuejs-templates/webpack

### 7.5 Framework7 & F7-VUE
https://framework7.io/docs/
https://framework7.io/vue/

### 7.6 vue
https://cn.vuejs.org/v2/guide/

### 7.7 vuex
https://vuex.vuejs.org/zh-cn/

### 7.8 lodash
https://lodash.com/docs/4.17.4
http://lodash.think2011.net/

### 7.9 eslint
https://cn.eslint.org/
