import { usePlanetApiStore } from '@/stores/planets'
import { createPinia, setActivePinia } from 'pinia'
import { beforeEach, describe, expect, it } from 'vitest'
import { mockPlanets } from './mockPlanets'

describe('Planets Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('fetches data', async () => {
    const store = usePlanetApiStore()
    await store.fakeFetchPlanets()
    expect(store.data).toStrictEqual(mockPlanets)
    expect(store.data[0].name).toBe(mockPlanets[0].name)
  })
})
