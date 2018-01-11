import Vue from 'vue'
import Vuex from 'vuex'
import env from './env'
import console from './console'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  modules: {
    env,
    console,
  },
})
