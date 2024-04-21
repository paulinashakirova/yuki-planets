<script setup lang="ts">
  import type { Planet } from '@/types/planet'
  import PlanetPreviewCard from './PlanetPreviewCard.vue'
  interface Props {
    allPlanets: Planet[]
  }
  const props = defineProps<Props>()
</script>

<template>
  <div
    v-for="planet in props.allPlanets"
    :key="planet.name"
    class="border h-full rounded-md py-8 px-2">
    <RouterLink :to="{ name: 'planet', params: { name: planet.name } }">
      <PlanetPreviewCard :planet="planet" />
    </RouterLink>
  </div>
</template>
