import { describe, expect, it } from 'vitest'

import SinglePlanet from '@/components/SinglePlanet.vue'
import { mount } from '@vue/test-utils'

describe('SinglePlanet', () => {
  it('renders properly', () => {
    const wrapper = mount(SinglePlanet, {
      props: {
        planet: {
          name: 'asf',
          population: 1,
          rotation_period: 2,
          residents: ['one', 'two'],
          films: ['three', 'four'],
          url: 'url',
        },
      },
    })
    expect(wrapper.text()).toContain(['asf'])
  })
})
