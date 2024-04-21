<script setup lang="ts">
  import type { Planet } from '@/types/planet'
  import SinglePlanet from './SinglePlanet.vue'
  interface Props {
    allPlanets: Planet[]
  }
  const props = defineProps<Props>()
</script>

<template>
  <h1>planets list</h1>
  <div
    class="border-2 border-blue-300"
    v-for="planet in props.allPlanets"
    :key="planet.name">
    <SinglePlanet :planet="planet" />
  </div>
</template>
