import React, { Component } from 'react'
import { Header } from './header'
import { Footer } from './footer'
import { Container } from 'react-bootstrap'

export default class Template extends Component {
  constructor(props){super(props)}

  render(){
    return (
      <div>
          <Header />
              <Container style={{height: "auto",paddingBottom: "20px"}}>
                  {this.props.children}
              </Container>
          <Footer />
      </div>
    )
  }
}
