import App, { Container } from 'next/app'
import React from 'react'

export default class MyApp extends App {
  static async getInitialProps ({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return {pageProps}
  }

  componentDidMount() {
    window.dataLayer = window.dataLayer || []
    function gtag () {
      dataLayer.push(arguments) //eslint-disable-line
    }

    gtag('js', new Date())
    gtag('config', 'UA-21817878-2')
  }

  render () {
    const { Component, pageProps } = this.props
    return (
      <Container>
        <Component {...pageProps} />
      </Container>
    )
  }
}
