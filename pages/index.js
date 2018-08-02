import Head from 'next/head'
import Header from '../components/Header'
import { JssProvider, SheetsRegistry } from 'react-jss'

export default () => {
  return (
    <div style={{ position: 'relative' }}>
      <Head>
        <title>Miller Painting - Palm Springs</title>
        <link href="https://fonts.googleapis.com/css?family=Merriweather" rel="stylesheet" />
        <style global jsx>{`
          body {
            margin: 0;
          }
        `}</style>
      </Head>

      <Header />
      <img style={{ width: '100%' }} src="/static/red-house-landscape.jpg" alt="my image" />
    </div>
  )
}
