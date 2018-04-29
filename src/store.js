import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const baseUrl = 'http://localhost:4566'

export default new Vuex.Store({
  state: {
    nodes: [{
      server: 'cn.bing.com'
    }]
  },
  mutations: {
    updateNodes (state, payload) {
      console.log(payload)
      state.nodes = payload
    }
  },
  actions: {
    refreshNodes ({ commit }) {
      axios.get(`${baseUrl}/nodes`).then(response => {
        commit('updateNodes', response.data)
      }).catch(err => console.error(err))
    },
    enableNode ({ commit }, node) {
      axios.put(`${baseUrl}/nodes/${node.id}/enabled`, { enabled: true }).then(response => {
      }).catch(err => console.error(err))
    },
    disableNode ({ commit }, node) {
      axios.put(`${baseUrl}/nodes/${node.id}/enabled`, { enabled: false }).then(response => {
      }).catch(err => console.error(err))
    }
  }
})
