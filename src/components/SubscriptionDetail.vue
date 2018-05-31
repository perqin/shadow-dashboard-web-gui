<template>
  <div>
    <mdc-dialog v-model="open" title="Subscription detail" accept="Save" cancel="Discard" @validate="onValidate">
      <form class="detail-form">
        <mdc-textfield v-model="subscription.url" label="URL" fullwidth/>
      </form>
    </mdc-dialog>
  </div>
</template>

<script>
import { Subscriptions } from '../api/backend'

export default {
  name: 'subscriptionDetail',
  data () {
    return {
      open: false,
      subscription: {},
      updating: false
    }
  },
  methods: {
    show (id) {
      this.open = true
      this.subscription = { id }
      this.loadSubscription()
    },
    loadSubscription () {
      this.subscription = { id: this.subscription.id, url: '' }
      if (this.subscription.id) {
        Subscriptions.getOne(this.subscription.id).then(subscription => {
          this.subscription = subscription
        })
      }
    },
    onValidate ({ accept }) {
      Promise.resolve().then(() => {
        this.updating = true
      }).then(() => {
        if (this.subscription.id) {
          return Subscriptions.updateOne(this.subscription)
        } else {
          return Subscriptions.createOne(this.subscription).then(subscription => this.subscription = subscription)
        }
      }).then(() => {
        this.updating = false
        accept()
        this.$store.commit('insertOrUpdateSubscription', this.subscription)
      }).catch(err => {
        this.updating = false
      })
    }
  }
}
</script>

<style scoped>
</style>

