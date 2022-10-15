<template>
  <v-list>
    <v-list-item
        prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
        title="Sandra Adams"
        subtitle="sandra_a88@gmailcom"
    ></v-list-item>
  </v-list>

  <v-divider></v-divider>

  <v-list density="compact" nav>
    <v-list-item
        v-for="(link, i) in links"
        :key="i"
        :prepend-icon="link.prependIcon"
        :title="link.title"
        link
        :to="link.to"
        exact
    />
  </v-list>
</template>

<script>
export default {
  name: 'AppNavigation',
  data: () => ({
    links: [
      { prependIcon: 'mdi-home', title: 'Главная страница', to: '/' },
      { prependIcon: 'mdi-card-account-details-outline', title: 'Резюме', to: '/resume' },
      { prependIcon: 'mdi-briefcase-outline', title: 'Проекты', to: '/project' },
    ],
  }),
}
</script>

<style scoped>

</style>