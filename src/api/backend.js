import axios from 'axios'

const request = axios.create({
  baseURL: process.env.VUE_APP_BACKEND_BASE_URL
})

export const Nodes = {
  getConfig () {
    return request('/nodes/config').then(res => res.data)
  },
  updateConfig (config) {
    return request('/nodes/config', {
      method: 'put',
      data: config
    })
  }
}

export const Subscriptions = {
  createOne (subscription) {
    return request(`/subscriptions`, {
      method: 'post',
      data: subscription
    }).then(res => res.data)
  },
  listAll () {
    return request('/subscriptions').then(res => res.data)
  },
  getOne (id) {
    return request(`/subscriptions/${id}`).then(res => res.data)
  },
  updateOne (subscription) {
    return request(`subscriptions/${subscription.id}`, {
      method: 'put',
      data: subscription
    })
  },
  updateNodes (id) {
    return request(`/subscriptions/${id}/update`, {
      method: 'post'
    })
  },
  deleteOne (id) {
    return request(`/subscriptions/${id}`, {
      method: 'delete'
    })
  }
}

export const Cow = {
  getConfig () {
    return request('/cow/config').then(res => res.data)
  },
  updateConfig (config) {
    return request('/cow/config', {
      method: 'put',
      data: config
    })
  }
}
