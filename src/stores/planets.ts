import { defineStore } from 'pinia'
import { ref } from 'vue'

export const usePlanetApiStore = defineStore('planet-api', () => {
  const data = ref<any>([])
  const loading = ref(false)

  async function fetchPlanets() {
    try {
      loading.value = true
      const response = await fetch('https://swapi.dev/api/planets/')
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.status}`)
      }
      data.value = await response.json()
    } catch (error: any) {
      console.error(error)
      return error
    } finally {
      loading.value = false
    }
  }
  return { data, fetchPlanets }
})
