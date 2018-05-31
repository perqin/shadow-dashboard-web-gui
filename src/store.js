import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import { Subscriptions } from './api/backend'

Vue.use(Vuex)

const baseUrl = 'http://localhost:4566'

export default new Vuex.Store({
  state: {
    nodes: [],
    subscriptions: []
  },
  mutations: {
    updateNodes (state, payload) {
      state.nodes = payload
    },
    updateSubscriptions (state, payload) {
      state.subscriptions = payload
    },
    updateSubscription (state, payload) {
      let newIndex = -1
      let newValue
      state.subscriptions.forEach((subscription, index) => {
        if (subscription.id === payload.id) {
          newIndex = index
          newValue = { ...subscription, ...payload }
        }
      })
      if (newIndex !== -1) {
        state.subscriptions.splice(newIndex, 1, newValue)
      }
    },
    insertOrUpdateSubscription (state, payload) {
      let newIndex = -1
      let newValue
      state.subscriptions.forEach((subscription, index) => {
        if (subscription.id === payload.id) {
          newIndex = index
          newValue = { ...subscription, ...payload }
        }
      })
      if (newIndex !== -1) {
        state.subscriptions.splice(newIndex, 1, newValue)
      } else {
        state.subscriptions.push(payload)
      }
    },
    deleteSubscription (state, payload) {
      let newIndex = -1
      state.subscriptions.forEach((subscription, index) => {
        if (subscription.id === payload) {
          newIndex = index
        }
      })
      if (newIndex !== -1) {
        state.subscriptions.splice(newIndex, 1)
      }
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
    },
    refreshSubscriptions ({ commit }) {
      Subscriptions.listAll().then(subscriptions => {
        commit('updateSubscriptions', subscriptions)
      })
    },
    refreshSubscriptionNodes ({ commit }, id) {
      Promise.resolve().then(() => {
        // Set refreshing to true
        commit('updateSubscription', { id: id, refreshing: true })
      }).then(() => {
        return Subscriptions.updateNodes(id)
      }).then(() => {
        // Set refreshing to false
        commit('updateSubscription', { id: id, refreshing: false })
      })
    },
    removeSubscription ({ commit }, id) {
      Subscriptions.deleteOne(id).then(() => {
        commit('deleteSubscription', id)
      })
    }
  }
})
