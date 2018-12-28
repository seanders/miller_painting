import React, { Component } from 'react'
import Header from '../components/Header';
import PageContainer from '../components/PageContainer';

export default class contact extends Component {
  render() {
    return (
      <PageContainer>
        <div>
          <p>Miller Painting</p>
          <p>Serving the Entire Coachella Valley</p>
          <p>760-327-9350 office</p>
          <p>760-831-0928 cell</p>
        </div>
      </PageContainer>
    )
  }
}
