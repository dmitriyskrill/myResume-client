<template>
  <div>wf</div>
</template>

<script setup lang="ts">
const route = useRoute()

definePageMeta({
  validate: async (route) => {
    const nuxtApp = useNuxtApp()
    // Check if the id is made up of digits
    return /^\d+$/.test(route.params.id)
  },
})

// When accessing /posts/1, route.params.id will be 1
console.log(route.params.id)
</script>