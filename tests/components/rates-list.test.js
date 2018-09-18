import React from 'react'
import { shallow } from 'enzyme'

import RatesList from '../../components/rates-list'

describe('Rate', () => {
  describe('main', () => {
    const baseRate = 'MXN'
    const rates = [{
      currency: 'currency'
    }, {
      currency: 'MXN'
    }, {
      currency: 'currency'
    }]
    const wrapper = shallow(<RatesList rates={rates} baseRate={baseRate} />)

    it('matches snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    })

    it('renders all rates except baseRate', () => {
      expect(wrapper.find('Rate').length).toBe(2)
    })
  })
})
