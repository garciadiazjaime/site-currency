import React from 'react'
import { shallow } from 'enzyme'

import Usdmxn from '../../components/usdmxn'

describe('Usdmxn', () => {
  describe('main', () => {
    it('matches snapshot', () => {
      const wrapper = shallow(<Usdmxn />)
  
      expect(wrapper).toMatchSnapshot()
    })

    it('renders props when passed', () => {
      const entity = 'entity'
      const buy = 'buy'
      const sale = 'sale'

      const wrapper = shallow(<Usdmxn entity={entity} buy={buy} sale={sale} />)
  
      expect(wrapper).toMatchSnapshot()
    })
  })
})
