import util from '../util'

// initial state
const state = {
  logPool: [],
}

// getters
const getters = {}

// actions
const actions = {}

// mutations
const mutations = {
  log(state, msg) {
    let logObj = {
      timestamp: util.getDateTime(), //moment().format('YYYY-MM-DD HH:mm:ss')
      message: msg
    }
    state.logPool.unshift(logObj)
    if (state.logPool.length > 100) state.logPool.pop()
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
