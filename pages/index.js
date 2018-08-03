import Head from 'next/head'
import Header from '../components/Header'
import { JssProvider, SheetsRegistry } from 'react-jss'
import ProgressiveImage from 'react-progressive-image'

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
      <ProgressiveImage src="static/red-house-landscape.jpg" placeholder="static/red-house-landscape-loading.jpg">
        {(src, loading) => (
          <img
            style={{ transition: 'filter 1s', width: '100%', filter: loading ? 'blur(5px)' : 'none' }}
            src={src}
            alt="my image"
          />
        )}
      </ProgressiveImage>
    </div>
  )
}
