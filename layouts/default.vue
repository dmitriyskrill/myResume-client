<template>
  <div>
    <v-navigation-drawer v-model="drawer" app>
      <app-navigation/>
    </v-navigation-drawer>
    <app-header @toggleDrawer="drawer=!drawer"/>
    <v-main>
      <v-container fluid>
        <slot/>
      </v-container>
    </v-main>

    <v-footer app/>
  </div>
</template>

<script>
import AppNavigation from '../components/AppNavigation'

export default {
  components: { AppNavigation },
  data: () => ({
    drawer: false,
  }),
}
</script>
