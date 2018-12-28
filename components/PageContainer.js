import React, { Component } from 'react'
import Header from './Header'
import withStyles from 'react-jss'

const styles = {
  textContainer: {
    margin: 'auto',
    marginTop: 100,
    maxWidth: 900,
    display: 'flex',
  },
}

class PageContainer extends Component {
  render() {
    const { classes, children } = this.props;

    return (
      <div>
        <Header />
        <div className={classes.textContainer}>
          {children}
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(PageContainer)
