<script setup lang="ts">
  import PlanetCard from '@/components/PlanetCard.vue'
  import type { Planet } from '@/types/planet'

  interface Props {
    allPlanets: Planet[]
  }

  const props = defineProps<Props>()
</script>

<template>
  <div v-for="planet in props.allPlanets" :key="planet.name">
    <RouterLink :to="{ name: 'planet', params: { name: planet.name } }">
      <div
        class="border rounded-md py-8 px-2 border-dashed border-teal-400 shadow-lg transition delay-75 duration-100 ease-in-out hover:-translate-y-[2px] hover:scale-105 hover:bg-teal-50">
        <PlanetCard>
          <template #heading>{{ planet.name }}</template>
        </PlanetCard>
      </div>
    </RouterLink>
  </div>
</template>
