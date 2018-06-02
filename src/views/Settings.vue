<template>
  <div>
    <mdc-layout-grid>
      <mdc-layout-cell :desktop="6">
        <mdc-card>
          <mdc-card-header title="Cow Settings" subtitle="COW is a HTTP proxy to simplify bypassing the great firewall."></mdc-card-header>
          <mdc-card-text>
            <form>
              <mdc-switch label="Enabled" v-model="cowConfig.enabled" />
              <mdc-textfield v-model="cowConfig.executablePath" label="Executable" />
              <mdc-textfield v-model="cowConfig.listen" label="Listening HTTP address" />
              <mdc-select v-model="cowConfig.loadBalance" label="Load balance">
                <option v-for="option in cowConfigLoadBalanceOptions" :key="option.value" :value="option.value">{{option.title}}</option>
              </mdc-select>
            </form>
          </mdc-card-text>
          <mdc-card-actions>
            <mdc-card-action-buttons>
              <mdc-card-action-button @click="onCowConfigSaveClick()">Save</mdc-card-action-button>
            </mdc-card-action-buttons>
            <mdc-card-action-icons>
              <a href="https://github.com/cyfdecyf/cow/blob/master/doc/sample-config/rc" target="_blank">
                <mdc-card-action-icon icon="help"/>
              </a>
            </mdc-card-action-icons>
          </mdc-card-actions>
        </mdc-card>
      </mdc-layout-cell>
      <mdc-layout-cell :desktop="6">
        <mdc-card>
          <mdc-card-header title="Nodes Settings"></mdc-card-header>
          <mdc-card-text>
            <form>
              <mdc-textfield v-model="nodesConfig.executablePath" label="Executable"/>
            </form>
          </mdc-card-text>
          <mdc-card-actions>
            <mdc-card-action-buttons>
              <mdc-card-action-button @click="onNodesConfigSaveClick()">Save</mdc-card-action-button>
            </mdc-card-action-buttons>
          </mdc-card-actions>
        </mdc-card>
      </mdc-layout-cell>
    </mdc-layout-grid>
    <mdc-snackbar ref="snackbar"/>
  </div>
</template>

<script>
import { Nodes, Cow } from '../api/backend'

export default {
  name: 'settings',
  data () {
    return {
      loadBalance: '',
      cowConfigLoadBalanceOptions: [
        { value: 'backup', title: 'Backup' },
        { value: 'hash', title: 'Hash' },
        { value: 'latency', title: 'Latency' }
      ],
      cowConfig: {
        enabled: false,
        executablePath: '',
        listen: '',
        loadBalance: 'hash'
      },
      nodesConfig: {
        executablePath: ''
      }
    }
  },
  created () {
    Cow.getConfig().then(config => {
      this.cowConfig = config
    })
    Nodes.getConfig().then(config => {
      this.nodesConfig = config
    })
  },
  methods: {
    onCowConfigSaveClick () {
      Cow.updateConfig(this.cowConfig).then(() => {
        this.$refs.snackbar.show({ message: 'Changes saved.' })
      })
    },
    onNodesConfigSaveClick () {
      Nodes.updateConfig(this.nodesConfig).then(() => {
        this.$refs.snackbar.show({ message: 'Changes saved.' })
      })
    }
  }
}
</script>

<style scoped>
.mdc-textfield-wrapper,.mdc-select {
  width: 100%;
}
</style>

