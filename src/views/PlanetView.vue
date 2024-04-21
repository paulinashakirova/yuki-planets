<script setup lang="ts">
  import SinglePlanet from '@/components/SinglePlanet.vue'
  import { usePlanetApiStore } from '@/stores/planets'
  import type { Planet } from '@/types/planet'
  import { computed, onBeforeMount, onMounted, watch } from 'vue'
  import { useRoute } from 'vue-router'

  const store = usePlanetApiStore()
  const planets = computed<Planet[]>(() => store.data.results)

  onBeforeMount(async () => {
    await store.fetchPlanets()
  })
  const route = useRoute()
  const currentPlanet = computed(() =>
    planets.value.find(planet => planet.name === route.params.name)
  )

  watch(
    () => route.params.name,
    (newId, oldId) => {
      console.log('water id changes', oldId, newId)
    }
  )
  onMounted(() => {
    console.log('planets', planets)
  })
</script>
<template>
  <div>planet view component</div>
  <SinglePlanet :planet="currentPlanet" />
</template>
