import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Loading } from './common/loading'
import Template from './templates/template'
import { GuestRouter, AuthRouter } from './navigation/router'
import { Container, Row, Col } from 'reactstrap';
import { storage } from './api/storage'
import * as api from './api/api'

class App extends Component {
    constructor() {
      super()
        this.state={ isLoading: true }
    }

    componentDidMount() {
        //fetch authentication
        setTimeout(() => {
          this.setState({ isLoading: false })
        },100)
    }

    renderContent = () => {
      if( this.state.isLoading ) {
        return (<Loading size="lg" />)
      } else {
        return (<p>ColonyOneGame</p>)
      }
    }

    renderRouter = () => {
      /**User is logged in*/
      if ( !false ) {
        return (<GuestRouter />)
      } else {
        return (<AuthRouter />)
      }
    }

    render() {
      const {isLoading} = this.state
      return(
        <div className="App">
        <Container fluid={true}>
            { isLoading ? <Loading size="lg" />
              :
              <Template>
                  {this.renderRouter()}
              </Template>
            }
        </Container>
        </div>
      )
    }


}

export default App;
