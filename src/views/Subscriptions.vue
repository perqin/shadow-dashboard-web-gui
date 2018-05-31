<template>
  <div class="subscription-content">
    <mdc-list interactive>
      <mdc-list-item v-for="subscription in subscriptions" :key="subscription.id">
        {{ subscription.url }}
        <div slot="end-detail">
          <div class="list-item-actions-container">
            <mdc-button @click="onRefreshButtonClick(subscription.id)" :disabled="subscription.refreshing">
              {{subscription.refreshing ? 'Refreshing' : 'Refresh'}}
            </mdc-button>
            <mdc-button @click="onEditButtonClick(subscription.id)" :disabled="subscription.refreshing">Edit</mdc-button>
            <mdc-button @click="onDeleteButtonClick(subscription.id)" :disabled="subscription.refreshing">Delete</mdc-button>
            <!-- mdc-icon-toggle is buggy -->
            <!-- <mdc-icon-toggle v-model="subscription.refreshing" toggle-on="hourglass_full" toggle-off="refresh" disabled></mdc-icon-toggle> -->
            <!-- <mdc-icon-toggle toggle-on="edit" toggle-off="edit" @click="onEditButtonClick(subscription.id)"></mdc-icon-toggle> -->
            <!-- <mdc-icon-toggle toggle-on="delete" toggle-off="delete" @click="onDeleteButtonClick(subscription.id)"></mdc-icon-toggle> -->
          </div>
        </div>
      </mdc-list-item>
    </mdc-list>
    <mdc-fab fixed icon="add" @click="onAddFabClick"></mdc-fab>
    <SubscriptionDetail ref="subscriptionDetailDialog"/>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import SubscriptionDetail from '../components/SubscriptionDetail.vue'

export default {
  name: 'subscriptions',
  components: {
    SubscriptionDetail
  },
  data () {
    return {}
  },
  computed: mapState({
    subscriptions: 'subscriptions'
  }),
  created () {
    this.$store.dispatch('refreshSubscriptions')
  },
  methods: {
    onEditButtonClick (id) {
      this.$refs.subscriptionDetailDialog.show(id)
    },
    onAddFabClick () {
      this.$refs.subscriptionDetailDialog.show(null)
    },
    onRefreshButtonClick (id) {
      this.$store.dispatch('refreshSubscriptionNodes', id)
    },
    onDeleteButtonClick (id) {
      this.$store.dispatch('removeSubscription', id)
    }
  }
}
</script>

<style scoped>
.list-item-actions-container {
  display: flex;
  flex-direction: row;
  align-items: center;
}
</style>

