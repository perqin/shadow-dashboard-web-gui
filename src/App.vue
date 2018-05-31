<template>
  <div id="app">
    <mdc-layout-app>
      <mdc-toolbar slot="toolbar" fixed>
        <mdc-toolbar-row>
          <mdc-toolbar-section align-start >
            <mdc-toolbar-menu-icon event="toggle-drawer"></mdc-toolbar-menu-icon>
            <mdc-toolbar-title>Shadow Dashboard</mdc-toolbar-title>
          </mdc-toolbar-section>
        </mdc-toolbar-row>
      </mdc-toolbar>
      <mdc-drawer slot="drawer" toggle-on="toggle-drawer">
        <mdc-drawer-list>
          <mdc-drawer-item start-icon="storage" to="nodes">Nodes</mdc-drawer-item>
          <mdc-drawer-item start-icon="cloud" to="subscriptions">Subscriptions</mdc-drawer-item>
          <mdc-drawer-item start-icon="settings">Settings</mdc-drawer-item>
        </mdc-drawer-list>
      </mdc-drawer>
      <main class="content" >
        <router-view/>
      </main>
    </mdc-layout-app>
  </div>
</template>

<style>
html,body,
#app,
#app .mdc-layout-app,
#app .mdc-layout-app .content {
  height: 100%;
}
</style>
