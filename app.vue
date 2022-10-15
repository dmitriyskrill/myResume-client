<template>
  <v-app>
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
  </v-app>
</template>

<script setup lang="ts">
useHead({
  title: 'My App',
  meta: [
    { name: 'description', content: 'My amazing site 2.' },
  ],
  bodyAttrs: {
    class: 'test',
  },
  script: [{ children: 'console.log(\'Hello world\')' }],
})
</script>