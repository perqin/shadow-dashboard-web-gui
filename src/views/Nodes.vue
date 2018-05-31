<template>
  <div class="nodes-content">
    <!-- TODO: List Group by Subscriptions -->
    <mdc-list interactive>
      <mdc-list-item v-for="node in nodes" :key="node.id">
        {{ node.remarks && node.remarks !== '' ? node.remarks : node.server }}
        <div slot="end-detail">
          <mdc-switch v-model="node.enabled" slot="end-detail" @change="onNodeSwitchChanged(node)"/>
        </div>
      </mdc-list-item>
    </mdc-list>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'nodes',
  computed: mapState([
    'nodes'
  ]),
  methods: {
    onNodeSwitchChanged (node) {
      this.$store.dispatch(node.enabled ? 'enableNode' : 'disableNode', node)
    }
  },
  created () {
    this.$store.dispatch('refreshNodes')
  }
}
</script>

<style scoped>
.nodes-content {
  height: 100%;
  overflow-y: auto;
}
</style>

