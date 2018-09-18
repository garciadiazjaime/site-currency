import {
  getRates
} from '../../services/rateService'

describe('rateService', () => {
  describe('getRates', () => {
    beforeEach(() => {
      global.fetch = jest.fn(() => ({
        json() {
          return {
            data: {
              rate: [{
                currency: 'currency'
              }]
            }
          }
        }
      }))
    })

    afterEach(() => {
      global.fetch.mockRestore()
    })

    it('returns expected values', async () => {
      const response = await getRates()

      expect(response).toEqual({ rates: [ { currency: 'currency' } ] })
    })
  })
})
