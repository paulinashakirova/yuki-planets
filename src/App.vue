<script setup lang="ts">
  import { usePlanetApiStore } from '@/stores/planets'
  import { computed, onBeforeMount } from 'vue'
  const store = usePlanetApiStore()
  const planets = computed(() => store.data.results)
  onBeforeMount(async () => {
    await store.fetchPlanets()
  })
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <template v-for="planet in planets" :key="planet.name">
          <RouterLink class="border-2 p-4" :to="`/planet/${planet.name}`">{{
            planet.name
          }}</RouterLink>
        </template>
      </nav>
    </div>
  </header>

  <RouterView />
</template>
