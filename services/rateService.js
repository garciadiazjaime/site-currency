import 'isomorphic-unfetch'

// const apiUrl = 'http://0.0.0.0:3000';
const apiUrl = 'http://45.55.12.200:49192';

export async function getRates() {
  const results = Promise.all([
    fetch(`${apiUrl}/rates?query={rate{rate,currency,createdAt}}`)
  ])
  // fetch('http://api-currency.mintitmedia.com/rates/usdmxn'),
  // fetch('http://api-currency.mintitmedia.com/rates/airbnb'),

  const res = await results
  const { data: { rate: rates } } = await res[0].json()
  // const usdmxn = await res[1].json()
  // const airbnbRates = await res[2].json()

  // return { rates, usdmxn, airbnbRates }

  return {
    rates
  }
}

export default {}
