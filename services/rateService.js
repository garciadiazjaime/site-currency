import 'isomorphic-unfetch'

export async function getRates() {
  const results = Promise.all([
    fetch('http://127.0.0.1:3000/rates'),
    fetch('http://127.0.0.1:3000/rates/usdmxn'),
  ])

  const res = await results
  const rates = await res[0].json()
  const usdmxn = await res[1].json()

  return { rates, usdmxn }
}

export default {}
