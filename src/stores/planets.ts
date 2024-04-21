import { defineStore } from 'pinia'
import { ref } from 'vue'

export const usePlanetApiStore = defineStore('planet-api', () => {
  const data = ref<any>([
    {
      name: 'planetname',
      population: '200',
      rotation_period: '345',
      residents: ['mira', 'mara'],
      films: ['film1', 'film2'],
      url: 'someurl',
    },
    {
      name: 'planetname22222',
      population: '200',
      rotation_period: '345',
      residents: ['mira', 'mara'],
      films: ['film1', 'film2'],
      url: 'someurl',
    },
    {
      name: 'planetname444444',
      population: '200',
      rotation_period: '345',
      residents: ['mira', 'mara'],
      films: ['film1', 'film2'],
      url: 'someurl',
    },
    {
      name: '55555555',
      population: '200',
      rotation_period: '345',
      residents: ['mira', 'mara'],
      films: ['film1', 'film2'],
      url: 'someurl',
    },
    {
      name: '556676897luigmgnb',
      population: '200',
      rotation_period: '345',
      residents: ['mira', 'mara'],
      films: ['film1', 'film2'],
      url: 'someurl',
    },
    {
      name: '12121212',
      population: '200',
      rotation_period: '345',
      residents: ['mira', 'mara'],
      films: ['film1', 'film2'],
      url: 'someurl',
    },
  ])
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
      data2.value = result.results //remember about results inside components
    } catch (error: any) {
      error.value = error
      console.error('Error fetching planets:', error)
    } finally {
      loading.value = false
    }
  }
  // onMounted(async () => {
  //   await fetchPlanets()
  // })
  return { data, fetchPlanets, error, loading }
})
