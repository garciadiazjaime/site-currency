import React from 'react'

export function renderRatesFor(Component, rates) {
  if (!rates || !rates.length) {
    return null
  }

  return rates.map(rate => <Component {...rate} key={rate._id} />)
}

export default {}
