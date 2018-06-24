import 'isomorphic-unfetch'

export async function getRates() {
  const results = Promise.all([
    fetch('http://127.0.0.1:3000/rates'),
    fetch('http://127.0.0.1:3000/rates/usdmxn'),
    fetch('http://127.0.0.1:3000/rates/airbnb'),
  ])

  const res = await results
  const rates = await res[0].json()
  const usdmxn = await res[1].json()
  const airbnbRates = await res[2].json()

  return { rates, usdmxn, airbnbRates }
}

export default {}
