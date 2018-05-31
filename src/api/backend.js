import axios from 'axios'

const request = axios.create({
  baseURL: 'http://localhost:4566'
})

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
