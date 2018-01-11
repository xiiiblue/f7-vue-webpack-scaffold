export function staticRoute(path, title) {
  let items = path.split('/')
  return {
    path: path + '/',
    component: require('./components/' + items[1] + '/' + items[2] + '.vue'),
    title: title,
    name: items[1] + '-' + items[2]
  }
}

export default [
  // 主页
  staticRoute('/home/index', '主页'),
  // 管理功能
  staticRoute('/manage/about', '关于'),
  // PLAYGROUND
  staticRoute('/playground/index', '功能展示'),
  staticRoute('/playground/temp', '临时测试'),
  staticRoute('/playground/svcinvoke', '服务调用'),
  staticRoute('/playground/stateadd', 'State生成'),
  staticRoute('/playground/uiboxroute', 'UIBOX跳转'),
  staticRoute('/playground/localstoragesave', 'LocalStorage存取'),
  staticRoute('/playground/routeparam', '页面间传值'),
  staticRoute('/playground/routeparamsub/:id', '页面间传值接收'),
  // SHOWCASE
  staticRoute('/showcase/index', '组件展示'),
  staticRoute('/showcase/structure', '基础页面结构'),
  staticRoute('/showcase/form', '表单'),
  staticRoute('/showcase/list', '列表'),
  staticRoute('/showcase/element', '基础控件'),
  staticRoute('/showcase/smartlist', '智能选单'),
  staticRoute('/showcase/grid', '栅格'),
  staticRoute('/showcase/modal', '模态窗口'),
  staticRoute('/showcase/progressbar', '进度条'),
  staticRoute('/showcase/tab', 'TAB页'),
  staticRoute('/showcase/button', '按钮'),
  staticRoute('/showcase/report', '报表'),
  // 控制台
  staticRoute('/console/index', '控制台'),
  staticRoute('/console/loglist', '控制台日志查看'),
  staticRoute('/console/alterenv', '系统环境变量'),
  staticRoute('/console/serviceinvoke', '服务模拟调用'),
  staticRoute('/console/varlist', '页面变量查询'),
  staticRoute('/console/statelist', '状态查询'),
  staticRoute('/console/stateedit', '状态写入'),
  staticRoute('/console/localstoragelist', 'LocalStorage查询'),
  staticRoute('/console/localstorageedit', 'LocalStorage写入'),
  staticRoute('/console/simlogin', '模拟登录'),
]
