import React from 'react'

const Rate = ({ currency, rate }) => (
  <div>
    <img src="https://cdn.countryflags.com/thumbs/switzerland/flag-800.png" alt={currency} />
    <h3>{currency}</h3>
    <b>{rate}</b>
    <style jsx>{`
      div {
        display: flex;
        padding: 6px 0;
        margin: 12px 0;
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
