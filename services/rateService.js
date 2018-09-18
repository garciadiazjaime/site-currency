import 'isomorphic-unfetch'

// const apiUrl = 'http://0.0.0.0:3000';
const apiUrl = 'http://api-currency.mintitmedia.com';

export async function getRates() {
  const res = await fetch(`${apiUrl}/rates?query={rate{rate,currency,createdAt}}`)
  const { data: { rate: rates } } = await res.json()

  return {
    rates
  }
}

export default {}
