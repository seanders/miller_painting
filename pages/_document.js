// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file

// ./pages/_document.js
import Document, { Head, Main, NextScript } from 'next/document'
import { JssProvider, SheetsRegistry } from 'react-jss'

export default class MyDocument extends Document {
  static async getInitialProps({ renderPage }) {
    const sheets = new SheetsRegistry()

    const decoratedPage = Page => props => (
      <JssProvider registry={sheets}>
        <Page {...props} />
      </JssProvider>
    )

    const page = renderPage(decoratedPage)
    const ssrCss = sheets.toString()
    return { ...page, ssrCss }
  }

  render() {
    return (
      <html>
        <Head>
          <style type="text/css">
            {`
              body * {
                margin: 0;
                font-family: Merriweather, serif;
                margin: 0px;
                box-sizing: border-box;
              }

              body {
                margin: 0;
              }
            `}
          </style>
          <style data-jss dangerouslySetInnerHTML={{ __html: this.props.ssrCss }} />
        </Head>
        <body className="custom_class">
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
