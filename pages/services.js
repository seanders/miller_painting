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

const ServicesPage = ({ classes }) => (
  <div>
    <Header />
    <div className={classes.textContainer}>
      <p>We provide a number of services</p>
    </div>
  </div>
)

export default withStyles(styles)(ServicesPage)
