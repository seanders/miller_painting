import Head from 'next/head'
import Header from '../components/Header'
import withStyles from 'react-jss'
import jss from 'jss'
import ProgressiveImage from 'react-progressive-image'

const styles = {
  blurb: {
    position: 'absolute',
    top: '20%',
    left: '10%',
    color: 'white',
  },
}
const IndexPage = ({ classes }) => {
  return (
    <div style={{ position: 'relative', height: '100vh' }}>
      <Head>
        <title>Miller Painting - Palm Springs</title>
      </Head>

      <Header />
      <ProgressiveImage src="static/red-house-landscape.jpg" placeholder="static/red-house-landscape-loading.jpg">
        {(src, loading) => (
          <img
            style={{ transition: 'filter 1s', height: '100%', width: '100%', filter: loading ? 'blur(5px)' : 'none' }}
            src={src}
            alt="my image"
          />
        )}
      </ProgressiveImage>

      <div className={classes.blurb}>
        <h3>Painting, sanding, and wallpaper services for the Coachella Valley</h3>
      </div>
    </div>
  )
}

export default withStyles(styles)(IndexPage)
