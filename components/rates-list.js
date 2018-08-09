import React from 'react'

import{ truncate } from '../utils/rateUtil'

const Rate = ({ currency, rate, baseCurrency }) => currency && rate && baseCurrency && (
  <div>
    <img src={`/static/images/flags/${currency}.jpg`} alt={currency} />
    <h3>1 {currency} </h3>
    <b>{truncate(rate, 2)} pesos</b>
    <style jsx>{`
      div {
        display: flex;
        padding: 6px 0;
        margin: 0 0 12px;
        padding: 12px;
        border-bottom: 1px solid #CCC;
      }
      img {
        max-width: 25px;
        height: 25px;
        margin-right: 12px;
      }
      div > * {
        flex: 1;
      }
      h3 {
        margin: 0;
      }
    `}
    </style>
  </div>
) || null

const RatesList = ({ rates, baseCurrency}) => {
  if (!rates || !rates.length) {
    return null
  }

  return (
    <section>
      {
        rates
          .sort((a, b) => a.rate - b.rate)
          .filter(rate => rate.currency !== 'MXN')
          .map(rate => <Rate {...rate} baseCurrency={baseCurrency} key={rate.currency} />)
      }
    </section>)
}

export default RatesList
