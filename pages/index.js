import React, { Component } from 'react'
import Head from 'next/head'
import { scaleLinear } from 'd3-scale'
import { max } from 'd3-array'
import { select } from 'd3-selection'

import Rate from '../components/rate'
import { renderRatesFor, formatRates, getBaseRate } from '../utils/rateUtil'
import { getRates } from '../services/rateService'

class IndexPage extends Component {
  constructor(props) {
    super(props);
    this.createBarChart = this.createBarChart.bind(this)
  }

  async componentDidMount() {
    const { rates } = await getRates()
    if (rates) {
      const baseCurrency = 'MXN'
      this.setState({
        rates: formatRates(rates, baseCurrency),
        baseCurrency: getBaseRate(rates, baseCurrency),
        innerWidth: window.innerWidth
      })
      this.createBarChart(rates)
    }
  }

  createBarChart() {
    const innerWidth = window.innerWidth

    const { rates } = this.state
    const data = rates.map(rate => rate.rate) || []
    // const size = [500, 500]
    const barWidth = innerWidth / rates.length // 50
    const node = this.node
    const dataMax = max(data)
    const yScale = scaleLinear()
       .domain([0, dataMax])
       .range([0, 500])
    

    select(node)
        .selectAll('rect')
        .data(data)
        .enter()
        .append('rect')
        .style('fill', 'steelblue')
        .attr('stroke', '#FFF')
        .attr('x', (d,i) => i * barWidth)
        .attr('y', d => innerWidth - yScale(d))
        .attr('height', d => yScale(d))
        .attr('width', barWidth)
    
    select(node)
      .selectAll('text')
      .data(data)
      .enter()
      .append('text')
      .attr('x', (d,i) => i * barWidth + barWidth / 2)
      .attr('y', innerWidth - 10)
      .attr('fill', '#000')
      .attr('dy', '.35em')
      .attr('text-anchor', 'middle')
      .text((d, i) => rates[i].currency)
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
          { innerWidth ? <svg ref={node => this.node = node} width={innerWidth} height={innerWidth} /> : null }
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
