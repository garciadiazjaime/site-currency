import React from 'react'

import{ truncate } from '../utils/rateUtil'

const Rate = ({ currency, base, rate }) => (
  <div>
    <img src={`/static/images/flags/${currency}.jpg`} alt={currency} />
    <h3>{currency}</h3>
    <b>{truncate(base / rate, 2)}</b>
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
)

export default Rate
