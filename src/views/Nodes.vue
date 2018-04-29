<template>
  <div>
    <!-- TODO: List Group by Subscriptions -->
    <mdc-list>
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
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'nodes',
  components: {
    HelloWorld
  },
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
