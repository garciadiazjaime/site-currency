import React from 'react'

export function formatRates(rates, currency) {
  const baseCurrency = rates.find(rate => rate.currency === currency)

  return rates
    .filter(rate => rate.currency !== currency)
    .map(rate => Object.assign({}, rate, {
      rate: 1 / rate.rate * baseCurrency.rate
    }))
}

export function renderRatesFor(Component, rates, baseCurrency) {
  if (!rates || !rates.length) {
    return null
  }

  return rates
    .sort((a, b) => a.rate - b.rate)
    .filter(rate => rate.currency !== 'MXN')
    .map(rate => <Component {...rate} baseCurrency={baseCurrency} key={rate.currency} />)
}

export function truncate(value, digits) {
  const precision = Math.pow(10, digits)
  return Math.floor(value * precision) / precision;
}

export default {}
