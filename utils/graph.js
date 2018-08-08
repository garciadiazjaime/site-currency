import { scaleLinear, scaleBand } from 'd3-scale'
import { select } from 'd3-selection'

export default {}

export function renderRatesComparison({ rates, node, height, width }) {
  const data = rates.map(rate => rate.rate) || []
  const dataMax = Math.max(...data)
  const xScale = scaleBand()
    .domain(Object.keys(rates))
    .range([0, width])
  const yScale = scaleLinear()
    .domain([0, dataMax])
    .range([0, height])

  select(node)
      .selectAll('rect')
      .data(data)
      .enter()
      .append('rect')
      .style('fill', 'steelblue')
      .attr('stroke', '#FFF')
      .attr('x', (d, i) => xScale(i))
      .attr('y', d => height - yScale(d))
      .attr('height', d => yScale(d))
      .attr('width', () => xScale.bandwidth())

  select(node)
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
