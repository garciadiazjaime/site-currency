import React from 'react'
import { shallow } from 'enzyme'

import Rate from '../../components/rate'

describe('Rate', () => {
  describe('main', () => {
    it('matches snapshot', () => {
      const wrapper = shallow(<Rate />)
  
      expect(wrapper).toMatchSnapshot()
    })

    it('renders props when passed', () => {
      const currency = 'currency'
      const rate = 'rate'
      const wrapper = shallow(<Rate currency={currency} rate={rate} />)
  
      expect(wrapper).toMatchSnapshot()
    })
  })
})
