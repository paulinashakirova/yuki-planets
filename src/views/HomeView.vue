<script setup lang="ts">
  import { usePlanetApiStore } from '@/stores/planets'
  const store = usePlanetApiStore()
  store.fetchPlanets()
</script>
<template>
  <main>
    <h1>This is home page</h1>
    <div class="border-2 border-red-300">{{ store.result }}</div>
  </main>
</template>
