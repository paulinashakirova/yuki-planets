<script setup lang="ts">
  import { computed } from 'vue'

  import type { Planet } from '@/types/planet'

  import PlanetsList from '@/components/PlanetsList.vue'
  import { usePlanetApiStore } from '@/stores/planets'

  const store = usePlanetApiStore()
  const planets = computed<Planet[]>(() => store.data)
</script>

<template>
  <main class="mx-auto my-16 max-w-7xl">
    <h1 class="text-center text-2xl mb-6 uppercase mx-4">
      Here you can see the list of all planets
    </h1>
    <h2 class="text-center text-xl mb-12 mx-4">
      Click on a tile to get more details
    </h2>
    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mx-4">
      <PlanetsList :all-planets="planets" />
    </div>
  </main>
</template>
