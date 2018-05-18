import {
  getRates
} from '../../services/rateService'

describe('rateService', () => {
  describe('getRates', () => {
    beforeEach(() => {
      global.fetch = jest.fn(() => ({
        json() {
          return 'happy-rate'
        }
      }))
    })

    afterEach(() => {
      global.fetch.mockRestore()
    })

    it('returns expected values', async () => {
      const response = await getRates()

      expect(global.fetch.mock.calls).toMatchSnapshot()
      expect(response).toEqual({
        'rates': 'happy-rate',
        'usdmxn': 'happy-rate'
      })
    })
  })
})
