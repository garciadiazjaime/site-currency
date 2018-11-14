import React, {Component} from 'react'

function getColorRange(range) {
  return d3.scaleLinear()
    .domain([18, .03])
    .interpolate(d3.interpolateHcl)
    .range([d3.rgb('#8bace5'), d3.rgb('#f44646')])
}


export default class RatesMap extends Component {

  componentDidMount() {
    const { rates } = this.props
    this.renderMap(rates)
  }

  renderMap(rates) {
    console.log('rates', rates)
    d3.json('/static/json/world_countries.json')
      .then(countries => {
        // console.log('countries', countries)
        const width = 900
        const height = 800
        const project = d3.geoMercator()
          .scale(130)
          .translate([width / 2, height / 2])
        const path = d3.geoPath().projection(project)

        const svg = d3.select('svg')
          .attr('width', width)
          .attr('height', height)

        const rateBoard = d3.select('#rate-board')

        const colorRange = getColorRange()

        svg.selectAll('g')
          // .data(topojson.feature(countries, countries.objects.units).features)
          .data(countries.features)
          .enter()
          .append('path')
          .attr('d', path)
          .attr('fill', (d, i) => {
            if (d.id === 'USA') {
              return '#OOO'
            }
            return colorRange(rates[i % 8].rate)
          })
          .attr('stroke','#000')
          .style('stroke-width', 0.5)
          .style('opacity',0.8)
          .on('mouseover', d => {
            console.log('over', d)
            rateBoard
              .text(d.properties.name)
          })
          .on('mouseout', d => {
            rateBoard
              .text(null)
          })
    })
  }

  render() {
    return (
      <section id="rates-map">
        <div id="rate-board" style={{ height: '20px' }} />
        <svg style={{ border: '1px solid #000' }} />
      </section>
    )
  }
}
