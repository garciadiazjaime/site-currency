import React, { Component } from 'react'
import { scaleLinear, scaleBand } from 'd3-scale'
import { select } from 'd3-selection'

import { triggerRateItemHoverState } from './rates-list'
import colors from '../config/colors'

export function triggerBarHoverState(index, state) {
  select('#viz')
    .selectAll('rect')
    .style('fill', (d, i) => index === i && state ? colors.hover : colors.base)
}

export default class RatesComparision extends Component {

  componentDidMount () {
    const { rates, height } = this.props
    if (rates && rates.length) {
      const data = rates.map(rate => rate.rate)
      const dataMax = Math.max(...data)
      const xScale = scaleBand()
        .domain(Object.keys(rates))
        .range([0, window.innerWidth])
      const yScale = scaleLinear()
        .domain([0, dataMax])
        .range([0, height])

      select('#viz')
        .selectAll('rect')
        .data(data)
        .enter()
        .append('rect')
        .style('fill', colors.base)
        .attr('stroke', colors.line)
        .attr('x', (d, i) => xScale(i))
        .attr('y', d => height - yScale(d))
        .attr('height', d => yScale(d))
        .attr('width', () => xScale.bandwidth())
        .on('mouseover', function(_, i) {
          select(this)
            .style('fill', colors.hover)
            triggerRateItemHoverState(i, true)
        })
        .on('mouseout', function(_, i) {
          select(this)
            .style('fill', colors.base)
            triggerRateItemHoverState(i, false)
        })

      select('#viz')
        .selectAll('text')
        .data(data)
        .enter()
        .append('text')
        .attr('x', (d,i) => xScale(i) + (xScale.bandwidth() / 2))
        .attr('y', height - 10)
        .attr('fill', '#000')
        .attr('dy', '.35em')
        .attr('text-anchor', 'middle')
        .text((d, i) => rates[i].currency)
    }
  }

  render() {
    const { height } = this.props
    return (
      <section>
        <svg id="viz" width={window.innerWidth} height={height} />
      </section>
    )
  }
}
