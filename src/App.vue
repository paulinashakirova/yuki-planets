<!-- It is also possible to use the router as well to show each of the planets' names -->

<script setup lang="ts">
  import { usePlanetApiStore } from '@/stores/planets'
  import { computed } from 'vue'
  const store = usePlanetApiStore()
  const planets = computed(() => store.data)
</script>

<template>
  <header>
    <div>
      <!-- <nav>
        <RouterLink to="/">Home</RouterLink>
        <template v-for="planet in planets" :key="planet.name">
          <RouterLink class="border-2 p-4" :to="`/planet/${planet.name}`">{{
            planet.name
          }}</RouterLink>
        </template>
      </nav> -->
    </div>
  </header>

  <RouterView />
</template>
