import PlanetsList from '@/components/PlanetsList.vue'
import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'

describe('PlanetsList', () => {
  it('renders properly', () => {
    const wrapper = mount(PlanetsList, {
      props: {
        allPlanets: [
          {
            name: 'Second Planet',
            population: 1,
            rotation_period: 2,
            residents: ['one', 'two'],
            films: ['three', 'four'],
            url: 'url',
          },
        ],
      },
    })
    expect(wrapper.text()).toContain(['Second Planet'])
  })
})
