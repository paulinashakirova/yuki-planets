<script setup lang="ts">
  import PlanetsList from '@/components/PlanetsList.vue'
  import { usePlanetApiStore } from '@/stores/planets'
  import type { Planet } from '@/types/planet'
  import { computed } from 'vue'

  const store = usePlanetApiStore()
  const planets = computed<Planet[]>(() => store.data) //removing .results for fake data
  const isLoading = computed(() => store.loading)
  const error = computed(() => store.error) // Access the error state
  // onBeforeMount(async () => {
  //   await store.fetchPlanets()
  // })
</script>

<template>
  <main class="mx-auto my-16 max-w-7xl">
    <h1 class="text-center text-2xl mb-6 uppercase">
      Here you can see the list of all planets
    </h1>
    <h2 class="text-center text-xl mb-12">
      Click on a tile to get more details
    </h2>
    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-4">
      <PlanetsList :all-planets="planets" />
    </div>
  </main>
</template>
