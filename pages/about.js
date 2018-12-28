import { Fragment } from "react";
import withStyles from 'react-jss'
import Header from '../components/Header'
import PageContainer from '../components/PageContainer';

const styles = {
  image: {
    marginRight: 30,
  },

  paragraph: {
    marginBottom: 30,
  }
}

const AboutPage = ({ classes }) => (
  <PageContainer>
    <Fragment>
      <img className={classes.image} src="static/jeffrey_miller_cropped.jpg" />
      <div>
        <p className={classes.paragraph}>Miller Painting has been providing Interior and Exterior Custom Painting to Local Desert Residents since 1968 for both Residential and Commercial clients.</p>
        <p className={classes.paragraph}>Whether your in need of Interior or Exterior Painting, Custom Repainting, On- Site Color Matching, Acoustic Ceiling Removal, Wall Paper Removal, Stucco Repair, Wall Texturing & Repair, Elastomeric Coatings, Cabinet Refinishing, Pool Decks or an Epoxy Garage Floor help is just a Click Away.</p>
        <p className={classes.paragraph}>Miller Painting offers a Free In Home Estimate, 7 Days A Week, not to mention Immediate Same Day Service if needed. References are available upon request.</p>
        <p className={classes.paragraph}>Don't wait another minute contact us Today for a FREE In HOME Estimate.</p>
      </div>
    </Fragment>
  </PageContainer>
)

export default withStyles(styles)(AboutPage)
