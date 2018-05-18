import { renderRatesFor } from '../../utils/rateUtil'

describe('rateUtil', () => {
  describe('renderRatesFor', () => {
    it('returns null when not rates are passed', () => {
      const response = renderRatesFor()

      expect(response).toBe(null)
    })

    it('returns components', () => {
      const rates = [{}]
      const HappyComponent = () => ''

      const response = renderRatesFor(HappyComponent, rates)

      expect(response.length).toBe(rates.length)
    })
  })
})
