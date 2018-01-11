import _ from 'lodash'

// initial state
const state = {
  appName: '应用名称',
  appVersion: '1.0.0',
  appCopyright: 'Copyright © 2017 YOUR COMPANY',
  profile: 'dev',
  apiBaseUrl: '/path/to/proxy',
  mockApiUrl: 'static/mock/api/',
  mockLocalStorageUrl: 'static/mock/localstorage/',
  forceLogin: false,
  debugTag: 'off',
  initPage: 'home.index',
  token: null,
  lastUrl: null,
  nextUrl: null,
  staffId: null,
  eparchyCode: null,
}

// getters
const getters = {}

// actions
const actions = {}

// mutations
const mutations = {
  env(state, payload) {
    for (var key in payload) {
      if (payload.hasOwnProperty(key)) state[key] = payload[key]
    }
  },
  env_delete(state, key) {
    delete state[key]
  },
  env_reset(state) {
    _.forEach(state, function (value, key) {
      delete state[key]
    })
  },
}

export default {
  state,
  getters,
  actions,
  mutations
}
