import React, { Component } from 'react'
import Head from 'next/head'

import RatesMap from '../components/rates-map'
import { getRates } from '../services/rateService'

class IndexPage extends Component {
  constructor(props) {
    super(props);
    this.height = 300
    this.state = {}
  }

  async componentDidMount() {
    const { rates } = await getRates()
    if (rates) {
      this.setState({ rates}) //eslint-disable-line
    }
  }

  render() {
    const { rates } = this.state
    return (
      <section>
        <Head>
          <title>USD Dollar price around the world</title>
          <meta name="description" content="USD Dollar price around the world" />
        </Head>
        <h1>
        USD Dollar price around the world
        </h1>
        { rates ? <RatesMap rates={rates} /> : null }
      </section>
    )
  }
}

export default IndexPage
