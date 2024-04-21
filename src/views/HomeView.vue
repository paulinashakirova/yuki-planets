<script setup lang="ts">
  import PlanetsList from '@/components/PlanetsList.vue'
  import { usePlanetApiStore } from '@/stores/planets'
  import type { Planet } from '@/types/planet'
  import { computed, onBeforeMount } from 'vue'

  const store = usePlanetApiStore()
  const planets = computed<Planet[]>(() => store.data.results)
  onBeforeMount(async () => {
    await store.fetchPlanets()
  })
</script>
<template>
  <main>
    <h1>Here you can see the list of all planets</h1>
    <PlanetsList :all-planets="planets" />
  </main>
</template>
