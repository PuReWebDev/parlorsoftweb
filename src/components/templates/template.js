import React, { Component } from 'react'
import { Header } from './header'
import { Footer } from './footer'
import { Container } from 'react-bootstrap'
import NavbarProvider from '../navigation/navbar-provider'
import { Loading } from '../common/loading'


export default class Template extends Component {
  constructor(props){
    super(props)
    this.state = {
      isLoading: true
    }
  }

  componentDidMount() {
        this.setState({isLoading: false})
  }

  renderContent = () => {
    if( !this.state.isLoading ) {
        return( <NavbarProvider /> )
    } else {
        return( <Loading /> )
    }
  }

  render(){
    return (
      <div>
          <Container fluid={true} style={{height: "auto",paddingBottom: "20px"}}>
              <Header />
              {this.renderContent()}
              <Footer />
          </Container>
      </div>
    )
  }
}
