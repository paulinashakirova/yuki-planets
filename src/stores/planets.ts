import { defineStore } from 'pinia'
import { ref } from 'vue'

export const usePlanetApiStore = defineStore('planet-api', () => {
  const result = ref()
  const loading = ref(false)
  const error = ref(null)

  async function fetchPlanets() {
    try {
      loading.value = true
      error.value = null
      const data = await fetch('https://swapi.dev/api/planets/')
      if (!data.ok) {
        throw new Error(`Network response was not ok: ${data.status}`)
      }
      result.value = await data.json()
    } catch (error: any) {
      error.value = error
    } finally {
      loading.value = false
    }
  }

  return { result, fetchPlanets }
})
