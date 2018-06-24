import React from 'react'
import Head from 'next/head'

import Rate from '../components/rate'
import { renderRatesFor } from '../utils/rateUtil'
import { getRates } from '../services/rateService'

const IndexPage = ({ rates }) => (
  <section>
    <Head>
      <title>My page title</title>
    </Head>
    <h1>Peso Mexicano</h1>
    <p>
      Cuántos pesos necesito para un:
    </p>
    <div>
      {renderRatesFor(Rate, rates)}
    </div>
    <style jsx>{`
      h1 {
        background: #000;
        color: #FFF;
        margin: 0px;
        padding: 12px;
      }
      p {
        padding: 0 12px;
      }
    `}
    </style>
  </section>
)

IndexPage.getInitialProps = getRates

export default IndexPage
