import React, { Component } from 'react';
import './style/App.css';
import ErrorBoundry from './common/error'
import { Loading } from './common/loading'
import Template from './templates/template'
import { Container } from 'reactstrap';
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
        this.setState({
          isLoading: false
        })
    }


    renderContent = () => {
      if( this.state.isLoading ) {
        return (<Loading size="lg" />)
      } else {
        return (<p>Parlorsoft</p>)
      }
    }

    render() {
      const { isLoading } = this.state
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
