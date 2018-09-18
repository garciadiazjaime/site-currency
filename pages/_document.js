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
          <style>{`
            body {
              margin: 0;
            }
          `}
          </style>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <meta name="description" content="peso mexicano" />
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
