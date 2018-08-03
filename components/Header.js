import withStyles from 'react-jss'

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

  headerText: {
    margin: 0,
  },

  headerAnchor: {
    padding: '16px',
    '&:hover': {
      cursor: 'pointer',
      backgroundColor: 'rgba(200, 200, 100, 0.64)',
      transition: 'background-color 0.3s',
    },
  },
}

const Header = ({ classes }) => (
  <div className={classes.headerContainer}>
    <a className={classes.headerAnchor}>
      <h2 className={classes.headerText}>Miller Painting</h2>
    </a>
    <div className={classes.rightSideContent}>
      <a className={classes.headerAnchor}>
        <h2 className={classes.headerText}>Contact</h2>
      </a>

      <a className={classes.headerAnchor}>
        <h2 className={classes.aboutUs}>About Us</h2>
      </a>
    </div>
  </div>
)

export default withStyles(styles)(Header)
