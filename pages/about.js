import Header from '../components/Header'
import withStyles from 'react-jss'

const styles = {
  textContainer: {
    margin: 'auto',
    marginTop: 100,
    maxWidth: 900,
    display: 'flex',
  },

  image: {
    marginRight: 30,
  },
}

const AboutPage = ({ classes }) => (
  <div>
    <Header />
    <div className={classes.textContainer}>
      <img className={classes.image} src="static/jeffrey_miller_cropped.jpg" />
      <p>
        We are a painting company based out of Palm Springs, California. We provide painting services to residences and
        businesses throughout the Coachella Valley.
      </p>
    </div>
  </div>
)

export default withStyles(styles)(AboutPage)
