import _ from 'lodash'
import axios from 'axios'
import * as copy from 'copy-to-clipboard'
import store from './store'
import routes from './routes.js'
import base64url from 'base64-url'

const env = store.state.env

export default {
  /**
   * 复制到剪贴板
   * @param msg 文本信息
   */
  copyToClipboard(msg) {
    copy(msg)
  },
  /**
   * 获取URL参数
   * @param key 键。若传空则返回全部键值对。
   * @returns {*}
   */
  getUrlParam(key) {
    let sPageURL = decodeURIComponent(window.location.search.substring(1)), sURLVariables = sPageURL.split('&'),
      sParameterName, i
    let paramObj = {}
    for (i = 0; i < sURLVariables.length; i++) {
      sParameterName = sURLVariables[i].split('=')
      paramObj[sParameterName[0]] = sParameterName[1]
    }
    if (key) {
      return paramObj[key]
    } else {
      return paramObj
    }
  },
  /**
   * 格式化路由名称
   * 将URL传参中的initPage参数，由foo.bar的形式转换为/foo/bar/。同时校验页面是否存在，若不存在，返回默认页面。
   * @param initPage 初始页
   * @returns {*}
   */
  formatRoute(initPage) {
    let defaultPage = '/home/index/'
    if (!initPage) {
      initPage = defaultPage
    } else {
      initPage = '/' + initPage.replace('.', '/') + '/'
      let isRouteExist = _.find(routes, function (o) {
        return o.path === initPage
      })

      if (isRouteExist === undefined) {
        this.log('initPage不存在，跳转至主页')
        initPage = defaultPage
      }
    }
    return initPage
  },
  /**
   * 服务调用
   * @param proxyType 代理类型 可选值：common/openapi
   * @param method 方法名
   * @param payload 请求内容
   * @param callback 回调函数
   */
  svcInvoke(proxyType, method, payload, callback) {
    let httpUrl, httpMethod
    if (env.profile === 'dev') {
      //当profile为dev时，调用mock-api
      httpMethod = 'get'
      httpUrl = env.mockApiUrl + method + '.resp.json'
    } else {
      // 当profile为test或prd时，调用代理服务
      httpMethod = 'post'
      if (proxyType === 'common') {
        // CommonService公共服务
        if (!payload.hasOwnProperty('method')) payload.method = method
        if (!payload.hasOwnProperty('staffId')) payload.staffId = env.staffId
        if (!payload.hasOwnProperty('eparchyCode')) payload.eparchyCode = env.eparchyCode
        if (!payload.hasOwnProperty('accessToken')) payload.accessToken = env.token
        httpUrl = env.apiBaseUrl + '?method=common&env=' + env.profile  // 调用CommonService公共接口
      } else {
        // OpenAPI开放服务
        httpUrl = env.apiBaseUrl + '?method=openapi&env=' + env.profile + '&api=' + method // 调用OpenApi接口
      }
    }
    this.log('服务调用开始: ' + env.profile + ' - ' + httpMethod + ' - ' + httpUrl)
    this.log(payload)

    window.f7.showIndicator()
    let that = this
    axios({method: httpMethod, url: httpUrl, data: payload})
      .then(function (response) {
        window.f7.hideIndicator()
        let returnFlag = response.data.returnFlag
        let returnInfo = response.data.returnInfo
        that.log(response.data)
        if (returnFlag === '0000') {
          callback(response.data)
        } else if (returnFlag === '8103') {
          window.f7.confirm('<p>用户登录已失效</p><p>点击确定重新登录</p>', function () {
            window.f7.loginScreen()
          })
        } else {
          window.f7.alert('<p>错误代码: ' + returnFlag + '</p><p>原因: ' + returnInfo + '</p>')
        }
      })
      .catch(function (error) {
        window.f7.hideIndicator()
        that.log(error)
        window.f7.alert('服务调用失败，请检查网络连接')
      })
  },
  /**
   * 跳转原生界面
   * 首先将指定的vuex状态保存到原生的LocalStorage中，以实现参数传递。成功后跳转至原生UIBOX。
   * @param uibox 原生UIBOX名称
   * @param stateKey vuex的状态名
   */
  openUiBox(uibox, stateKey) {
    if (uibox === undefined) {
      window.f7.alert('UIBOX名不能为空！')
      return
    }
    if (typeof OpenNativeUiBox !== 'undefined') {
      this.log('UIBOX真机跳转 - ' + uibox + ' - ' + stateKey)
      if (typeof stateKey === 'string') {
        // 先存入LocalStorage，然后跳转
        let stateObj = _.get(store.state, stateKey)
        this.setLocalStorage('hybird_' + stateKey, stateObj, function () {
          OpenNativeUiBox.open(uibox)  // eslint-disable-line
        })
      } else {
        // 直接跳转
        OpenNativeUiBox.open(uibox)  // eslint-disable-line
      }
    } else {
      this.log('UIBOX模拟跳转: ' + uibox)
      window.f7.alert('UIBOX模拟跳转: ' + uibox)
    }
  },
  /**
   * 调试参数打印
   * 用于替代console.log()，可以在DEBUG模式里查看日志。
   * @param msg
   */
  log(msg) {
    console.log(msg)
    if (env.debugTag === 'on') {
      store.commit('log', msg)
    }
  },
  /**
   * 显示提示框
   * 可传入一个字符串或对象
   * @param msg
   * @param callback
   */
  alert(msg, callback) {
    msg = (typeof msg === 'string') ? msg : JSON.stringify(msg)
    if (typeof callback === 'function') {
      window.f7.alert(msg, '提示', callback)
    } else {
      window.f7.alert(msg, '提示')
    }
  },
  /**
   * 读取APP本地变量（LocalStorage）
   * @param key 变量名
   * @param callback 回调
   */
  getLocalStorage(key, callback) {
    if (typeof LocalStorage !== 'undefined') {
      this.log('LocalStorage真机读取开始 - ' + key)
      let outer = this  // eslint-disable-line
      LocalStorage.getItem(key, 'store_get_' + key, 'store_get_fail')  // eslint-disable-line
      let evalStr = `
          window.store_get_${key} = function (result) {
            outer.log('LocalStorage真机读取成功 - ' + key  + ' - ' + result)
            
            if(typeof callback === 'function') {
              callback(result)
            }
          }
        `
      eval(evalStr)  // eslint-disable-line
    } else {
      this.log('LocalStorage模拟读取开始 - ' + key)
      let outer = this
      axios({method: 'get', url: env.mockLocalStorageUrl + key + '.json'})
        .then(function (response) {
          window.f7.hideIndicator()
          outer.log('LocalStorage模拟读取成功 - ' + key + ' - ' + JSON.stringify(response.data))
          if (typeof callback === 'function') {
            callback(JSON.stringify(response.data))
          }
        })
        .catch(function (error) {
          window.f7.hideIndicator()
          outer.log(error)
          window.f7.alert('模拟读取失败，请检查mock文件')
        })
    }
  },
  /**
   * 写入APP本地变量（LocalStorage）
   * @param key 键
   * @param value 值
   * @param callback 回调
   */
  setLocalStorage(key, value, callback) {
    if (typeof value !== 'string') {
      value = JSON.stringify(value)
    }
    if (typeof LocalStorage !== 'undefined') {
      this.log('LocalStorage真机写入 - ' + key + ' - ' + value)
      let outer = this  // eslint-disable-line
      LocalStorage.setItem(key, value, 'store_set_' + key, 'store_set_fail')  // eslint-disable-line
      let evalStr = `
          window.store_set_${key} = function () {
            outer.log('LocalStorage Set: ' + key + ' - ' + value)

            if(typeof callback === 'function') {
              callback()
            }
          }
        `
      eval(evalStr)  // eslint-disable-line
    } else {
      this.log('LocalStorage模拟写入 - ' + key + ' - ' + value)
      if (typeof callback === 'function') {
        callback()
      }
    }
  },
  /**
   * 读取Vuex状态
   * @param module 模块名
   * @param key 状态名
   */
  getState(module, key) {
    let stateObj = store.state
    let moduleObj = _.get(stateObj, module)
    return _.get(moduleObj, key)
  },
  /**
   * 写入Vuex状态
   * @param module 模块名
   * @param obj 键值对对象
   */
  setState(module, obj) {
    store.commit(module, obj)
  },
  /**
   * 检查对象中的无效键
   * @param obj
   * @returns {boolean}
   */
  checkUndefined(obj) {
    let that = this
    let result = true
    _.forEach(obj, function (value, key) {
      if (value === undefined) {
        let errMsg = '错误：参数[' + key + ']不存在'
        that.alert(errMsg)
        result = false
      }
    })
    return result
  },
  /**
   * 取当前时间（替代moment以减小体积）
   * @returns {string}
   */
  getDateTime() {
    let now = new Date()
    let year = now.getFullYear()
    let month = now.getMonth() + 1
    let day = now.getDate()
    let hour = now.getHours()
    let minute = now.getMinutes()
    let second = now.getSeconds()
    if (month.toString().length === 1) month = '0' + month
    if (day.toString().length === 1) day = '0' + day
    if (hour.toString().length === 1) hour = '0' + hour
    if (minute.toString().length === 1) minute = '0' + minute
    if (second.toString().length === 1) second = '0' + second
    return year + '/' + month + '/' + day + ' ' + hour + ':' + minute + ':' + second
  },
  /**
   * JSON Parse
   * @param str
   * @returns {*}
   */
  jsonParse(str) {
    return _.attempt(JSON.parse.bind(null, str))
  },
  /**
   * JSON格式验证
   * @param str
   * @returns {boolean|*}
   */
  jsonValid(str) {
    return !_.isError(this.jsonParse(str))
  },
  /**
   * base64 URL编码
   * @param buffer
   * @returns {string}
   */
  encode(rawStr) {
    return base64url.encode(rawStr)
  },
  /**
   * base64 URL解码
   * @param base64
   */
  decode(b64Str) {
    return base64url.decode(b64Str)
  },
}
