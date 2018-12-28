import withStyles from 'react-jss'
import Link from 'next/link'

const styles = {
  headerContainer: {
    width: '100%',
    position: 'absolute',
    background: 'linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.2))',
    color: 'white',
    top: 0,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    zIndex: 10,
  },

  rightSideContent: {
    display: 'flex',
    justifyContent: 'flex-end',
    flexBasis: '40%',
  },

  leftSideContent: {
    display: 'flex',
    justifyContent: 'flex-end',
  },

  headerText: {
    margin: 0,
  },

  headerAnchor: {
    textDecoration: 'none',
    color: 'white',
    padding: '16px',
    '&:hover': {
      cursor: 'pointer',
      backgroundColor: 'rgba(200, 200, 100, 0.64)',
      transition: 'background-color 0.3s',
    },
  },

  phoneNumber: {
    display: 'flex',
    alignItems: 'center',
  },
}

const Header = ({ classes }) => (
  <div className={classes.headerContainer}>
    <div className={classes.leftSideContent}>
      <Link href="/" prefetch>
        <a className={classes.headerAnchor}>
          <h2 className={classes.headerText}>Miller Painting</h2>
        </a>
      </Link>
      <a className={classes.phoneNumber}>
        <h3>760-668-7808</h3>
      </a>
    </div>
    <div className={classes.rightSideContent}>
      <Link href="/services" prefetch>
        <a className={classes.headerAnchor}>
          <h2 className={classes.headerText}>Services</h2>
        </a>
      </Link>

      <Link href="/about" prefetch>
        <a className={classes.headerAnchor}>
          <h2 className={classes.aboutUs}>About Us</h2>
        </a>
      </Link>

      <Link href="/contact_us" prefetch>
        <a className={classes.headerAnchor}>
          <h2 className={classes.aboutUs}>Contact Us</h2>
        </a>
      </Link>
    </div>
  </div>
)

export default withStyles(styles)(Header)
