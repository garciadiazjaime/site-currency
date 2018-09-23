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
    d3.json('https://d3-geomap.github.io/d3-geomap/topojson/world/countries.json')
      .then(countries => {
        // console.log('countries', countries)
        const width = 960
        const height = 1160
        const project = d3.geoMercator()
          .scale(150)
          .translate([width / 2, height / 2])
        const path = d3.geoPath().projection(project)

        let svg = d3.select('svg')
          .attr('width', width)
          .attr('height', height)

        const colorRange = getColorRange()

        svg.selectAll('g')
          .data(topojson.feature(countries, countries.objects.units).features)
          .enter()
          .append('path')
          .attr('d', path)
          .attr('fill', (d, i) => {
            if (d.id === 'ATA') {
              return '#FFF'
            }
            if (d.id === 'USA') {
              return '#OOO'
            }
            return colorRange(rates[i % 8].rate)
          })
          .attr('stroke', d => d.id === 'ATA' ? '#FFF' : '#000')
    })
  }

  render() {
    return (
      <section id="rates-map">
        <svg />
      </section>
    )
  }
}
