<script setup lang="ts">
  import SinglePlanet from '@/components/SinglePlanet.vue'
  import { usePlanetApiStore } from '@/stores/planets'
  import type { Planet } from '@/types/planet'
  import { computed } from 'vue'
  import { useRoute } from 'vue-router'

  const route = useRoute()
  const store = usePlanetApiStore()
  const planets = computed<Planet[]>(() => store.data) //.results

  const currentPlanet = computed(() =>
    planets.value?.find(planet => planet.name === route.params.name)
  )
</script>
<template>
  <div class="flex flex-col justify-center items-center mt-16">
    <div
      class="flex flex-col p-4 border-2 border-teal-400 rounded-md m-4 border-dashed shadow-xl shadow-teal-50">
      <SinglePlanet :planet="currentPlanet" />
      <button
        @click="$router.push({ path: '/' })"
        class="border rounded-lg py-1 px-3 m-4 border-teal-400 transition delay-75 duration-100 ease-in-out hover:-translate-y-[2px] hover:scale-105">
        Return to the main page
      </button>
    </div>
  </div>
</template>
