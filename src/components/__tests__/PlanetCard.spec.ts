import { describe, expect, it } from 'vitest'

import PlanetCard from '@/components/PlanetCard.vue'
import { mount } from '@vue/test-utils'

describe('PlanetCard', () => {
  it('renders properly', () => {
    const wrapper = mount(PlanetCard, {
      props: {
        planet: {
          name: 'First Planet',
          population: 1,
          rotation_period: 2,
          residents: ['one', 'two'],
          films: ['three', 'four'],
          url: 'url',
        },
      },
    })
    expect(wrapper.text()).toContain(['First Planet'])
  })
})
