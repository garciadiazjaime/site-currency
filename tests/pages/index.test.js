import React from 'react'
import { shallow } from 'enzyme'

import IndexPage from '../../pages/index'

jest.mock('../../utils/rateUtil', () => ({
  renderRatesFor() {
    return 'happy-rates'
  }
}));

describe('IndexPage', () => {
  describe('main', () => {
    const wrapper = shallow(<IndexPage />)

    it('matches snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    })

    it('calls renderRatesFor', () => {
      expect(wrapper.text().includes('happy-rates')).toBe(true);
    })
  })
})
