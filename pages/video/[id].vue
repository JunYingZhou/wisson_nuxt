<script setup lang="ts">

definePageMeta({
  // middleware: 'auth'
  title: '视频',
  authRequired: true
})

const route = useRoute()
console.log(route)
</script>

<template>
  <div>video</div>
  <div>
    <h1>{{ route.params.id }}</h1>
  </div>
</template>

<style scoped></style>
