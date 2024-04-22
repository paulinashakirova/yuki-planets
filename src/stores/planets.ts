import { defineStore } from 'pinia'
import { onMounted, ref } from 'vue'
import { mockPlanets } from './mockPlanets'

export const usePlanetApiStore = defineStore('planet-api', () => {
  const data = ref<any>([])
  const data2 = ref<any>([])
  const loading = ref(false)
  const error = ref(null)

  async function fetchPlanets() {
    try {
      loading.value = true
      const response = await fetch('https://swapi.dev/api/planets/')
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.status}`)
      }
      const result = await response.json()
      data2.value = result.results
    } catch (error: any) {
      error.value = error
      console.error('Error fetching planets:', error)
    } finally {
      loading.value = false
    }
  }

  onMounted(async () => {
    // await fetchPlanets()
    console.log('mounted in store')
    await fakeFetchPlanets()
    console.log('data', data.value)
  })

  async function fakeFetchPlanets() {
    try {
      const mockAsyncPromise = (mockList: any, delay: any) =>
        new Promise((resolve, reject) =>
          setTimeout(
            () =>
              mockList
                ? resolve(mockList)
                : reject(
                    new Error(
                      "Sadly, we couldn't load the necessary data. Please try again, or contact us. Sorry for the inconvenience."
                    )
                  ),
            delay
          )
        )
      data.value = await mockAsyncPromise(mockPlanets, 1000)
    } catch (error) {
      console.error(error)
      return error
    }
  }
  return { data, fetchPlanets, fakeFetchPlanets, error, loading }
})
