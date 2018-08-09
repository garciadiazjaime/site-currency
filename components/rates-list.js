import React from 'react'

import { triggerBarHoverState } from './rates-comparison'
import{ truncate } from '../utils/rateUtil'
import colors from '../config/colors'

export function triggerRateItemHoverState(index, state) {
  const items = document.querySelectorAll('#rates-list div')
  if (items && items[index]) {
    items[index].style.backgroundColor = state ? colors.hover : null
  }
}

const Rate = ({ index, currency, rate }) => currency && rate && (
  <div onMouseEnter={() => triggerBarHoverState(index, true)} onMouseOut={() => triggerBarHoverState(index, false)} onBlur={() => triggerBarHoverState(index, false)}>
    <img src={`/static/images/flags/${currency}.jpg`} alt={currency} />
    <h3>1 {currency} </h3>
    <b>{truncate(rate, 2)} mxn</b>
    <style jsx>{`
      div {
        display: flex;
        padding: 6px 0;
        padding: 12px;
        border-bottom: 1px solid #CCC;
        cursor: pointer;
      }
      div:hover {
        background-color: orange;
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

const RatesList = ({ rates }) => {
  if (!rates || !rates.length) {
    return null
  }

  return (
    <section id="rates-list">
      {
        rates
          .sort((a, b) => a.rate - b.rate)
          .filter(rate => rate.currency !== 'MXN')
          .map((rate, index) => <Rate {...rate} key={rate.currency} index={index} />)
      }
    </section>)
}

export default RatesList
