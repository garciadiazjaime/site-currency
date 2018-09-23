import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <html lang="es">
        <Head>
          <script async src="https://www.googletagmanager.com/gtag/js?id=UA-21817878-2" />
          <script src="https://d3js.org/d3.v5.min.js" />
          <script src="https://unpkg.com/topojson@3" />
          <style>{`
            body {
              margin: 0;
            }
          `}
          </style>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <meta name="description" content="peso mexicano" />
          <meta charSet="utf-8" />
          <link rel="shortcut icon" href="/static/images/favicon.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
