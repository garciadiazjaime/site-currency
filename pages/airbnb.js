import React from 'react'

import Rate from '../components/rate'
import Usdmxn from '../components/usdmxn'
import Airbnb from '../components/airbnb'
import { renderRatesFor } from '../utils/rateUtil'
import { getRates } from '../services/rateService'

const IndexPage = ({ rates, usdmxn, airbnbRates }) => (
  <div>
    Tipo de Cambio: <br />
    {renderRatesFor(Rate, rates)}

    <br />
    Venta/Compra del Dolar en México:
    {renderRatesFor(Usdmxn, usdmxn)}

    <br />
    Venta/Compra del Dolar en México:
    {renderRatesFor(Airbnb, airbnbRates)}
  </div>
)

IndexPage.getInitialProps = getRates

export default IndexPage
