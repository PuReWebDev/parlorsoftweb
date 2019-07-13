import React, { Component } from 'react'
import { Header } from './header'
import { Footer } from './footer'
import { Container } from 'reactstrap'

export default class Template extends Component {

  constructor(props) {
    super(props)
  }

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
