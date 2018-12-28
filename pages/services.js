import Header from '../components/Header'
import withStyles from 'react-jss'
import PageContainer from '../components/PageContainer';

const styles = {}

const ServicesPage = ({ classes }) => (
  <PageContainer>
    <div>
      <p>We provide a number of services</p>
      <p>Color Matching</p>
      <p>Custom Paint</p>
      <p>Garage Floors</p>
      <p>Expoxy Floors</p>
      <p>Pool Decks</p>
      <p>Exterior Painting</p>
      <p>Interior Painting</p>
    </div>
  </PageContainer>
)

export default withStyles(styles)(ServicesPage)
