import React, { Component } from 'react';
import './App.css';
import ErrorBoundry from './common/error'
import { Loading } from './common/loading'
import { Template } from './templates/template'
import { GuestRouter, AuthRouter } from './navigation/router'
import { Container } from 'reactstrap';
import { storage } from './api/storage'
import * as api from './api/api'
import { Provider } from 'react-redux'

import { store } from './api/store'
/**TODO change this to a functional component*/
class App extends Component {
    constructor() {
      super()
        this.state={
           isLoading: true,
           error: null,
           errorInfo: ""
        }
    }

    componentDidMount() {
        setTimeout(() => {
          this.setState({ isLoading: false })
        },100)
    }


    renderContent = () => {
      if( this.state.isLoading ) {
        return (<Loading size="lg" />)
      } else {
        return (<p>Parlorsoft</p>)
      }
    }

    render() {
      const {isLoading} = this.state
      return(
        <ErrorBoundry>
        <Provider store={store} >
        <div className="App">
        <Container fluid={true}>
            { isLoading ? <Loading size="lg" />
              :
              <Template />
            }
        </Container>
        </div>
        </Provider>
        </ErrorBoundry>
      )
    }


}

export default App;
