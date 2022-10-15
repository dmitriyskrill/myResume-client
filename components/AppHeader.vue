<template>
  <v-app-bar app>
    <v-app-bar-nav-icon @click="$emit('toggleDrawer')"/>
    <v-app-bar-title>Photos</v-app-bar-title>
    <template #append>
      <v-btn icon="mdi-dots-vertical"></v-btn>
    </template>
  </v-app-bar>
</template>
