import React, { Component } from 'react'
import Head from 'next/head'

import Rate from '../components/rate'
import { renderRatesFor, formatRates, getBaseRate } from '../utils/rateUtil'
import { getRates } from '../services/rateService'
import { renderRatesComparison } from '../utils/graph'

class IndexPage extends Component {
  constructor(props) {
    super(props);
    this.height = 300
  }

  async componentDidMount() {
    const { rates } = await getRates()
    if (rates) {
      const baseCurrency = 'MXN'
      const newRates = formatRates(rates, baseCurrency)
      this.setState({
        rates: newRates,
        baseCurrency: getBaseRate(rates, baseCurrency),
        innerWidth: window.innerWidth
      })
      renderRatesComparison({ rates: newRates, node: this.node, height: this.height, width: window.innerWidth })
    }
  }

  render() {
    const { rates, baseCurrency, innerWidth } = this.state || {};
    return (
      <section>
        <Head>
          <title>Valor del Peso Mexicano en el Mundo</title>
          <meta name="description" content="Cuántos pesos mexicanos necesito para comprar un dólar y otras monedas" />
        </Head>
        <h1>
          <img src="/static/images/flags/MXN.jpg" alt="" />
          Peso Mexicano
        </h1>
        <h2>
          Cuántos pesos necesito para un:
        </h2>
        <div>
          {renderRatesFor(Rate, rates, baseCurrency)}
        </div>
        <h2>
          Cuántos pesos necesito para un:
        </h2>
        <div className="viz">
          { innerWidth ? <svg ref={node => this.node = node} width={innerWidth} height={this.height} /> : null }
        </div>
        <style jsx>{`
          h1 {
            background: #000;
            color: #FFF;
            display: flex;
            margin: 0px;
            padding: 12px;
            align-items: center;
          }
          h2 {
            margin: 12px 12px 0 12px;
            font-size: 18px;
            font-weight: normal;
          }
          img {
            width: 40px;
            height: 40px;
            margin-right: 10px;
          }
        `}
        </style>
      </section>
    )
  }
}

export default IndexPage
