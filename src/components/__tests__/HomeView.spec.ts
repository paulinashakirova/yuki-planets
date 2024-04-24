import HomeView from '@/views/HomeView.vue'
import { createTestingPinia } from '@pinia/testing'
import { shallowMount } from '@vue/test-utils'
import { beforeAll, describe, expect, it, vi } from 'vitest'

const createMockSpy = (...args: any[]) => vi.fn(...args)

beforeAll(() => {
  createTestingPinia({
    createSpy: createMockSpy,
  })
})
describe('PlanetsList', () => {
  it('renders properly', () => {
    const wrapper = shallowMount(HomeView)
    expect(wrapper.text()).toContain([
      'Here you can see the list of all planets',
    ])
  })
})
