import React from 'react'

export function renderRatesFor(Component, rates) {
  if (!rates || !rates.length) {
    return null
  }

  const { rate: MXN } = rates.find(rate => rate.currency === 'MXN' )

  return rates
    .sort((a, b) => a.rate - b.rate)
    .filter(rate => rate.currency !== 'MXN')
    .map(rate => <Component {...rate} base={MXN} key={rate._id} />)
}

export function truncate(value, digits) {
  const precision = Math.pow(10, digits)
  return Math.floor(value * precision) / precision;
}

export default {}
