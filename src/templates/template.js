import React, { Component } from 'react'
import { Footer } from './footer'
import { Container } from 'reactstrap'

export default class Template extends Component {
  render() {
    return(
      <>
          <Container fluid  style={{minHeight: "50%"}}>
              {this.props.children}
          </Container>
          <Footer />
      </>
    )
  }
}
