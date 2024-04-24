<script setup lang="ts">
  import { computed, ref } from 'vue'
  import { useRouter } from 'vue-router'

  import type { Planet } from '@/types/planet'

  import PlanetCard from '@/components/PlanetCard.vue'
  import { usePlanetApiStore } from '@/stores/planets'

  const router = useRouter()
  const store = usePlanetApiStore()
  const planets = ref<Planet[]>(store.data)

  const currentPlanet = computed<any>(() =>
    planets.value?.find(
      planet => planet.name === router.currentRoute.value.params.name
    )
  )
</script>

<template>
  <div class="flex flex-col justify-center items-center mt-16">
    <div
      class="flex flex-col p-4 border-2 border-teal-400 rounded-md m-4 border-dashed shadow-xl shadow-teal-50 max-w-96 min-h-64 items-stretch justify-around">
      <div v-if="currentPlanet">
        <PlanetCard :planet="currentPlanet">
          <template #heading>{{ currentPlanet?.name }}</template>
        </PlanetCard>
      </div>
      <div v-if="!currentPlanet">
        <h2 class="font-semibold text-xl text-center">
          Unfortunately, there is no such planet. You can see the list of all
          available planets on the main page.
        </h2>
      </div>
      <button
        @click="$router.push({ path: '/' })"
        class="border rounded-lg py-1 px-3 m-4 border-teal-400 transition delay-75 duration-100 ease-in-out hover:-translate-y-[2px] hover:scale-105">
        Return to the main page
      </button>
    </div>
  </div>
</template>
