import Document, { Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <link
            rel='stylesheet'
            href='https://cdn.jsdelivr.net/npm/inter-ui@3.5.0/inter.min.css'
          />
          <link rel='stylesheet' href='/static/css/nprogress.css' />
          <link rel='stylesheet' href='/static/css/normalize.css' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}

export default MyDocument
