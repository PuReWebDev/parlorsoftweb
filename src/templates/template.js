import React, { Component } from 'react'
import * as api from '../api/api'
import * as valid from '../api/validate'
import { Footer } from './footer'
import { Container } from 'reactstrap'
import { connect } from 'react-redux'
import ErrorBoundry from '../common/error'

import { GuestRouter, AuthRouter } from '../navigation/router'


class Template extends Component {

  constructor() {
    super()
  }

  componentDidMount() {
    this.props.getUser()
  }

  renderRouter = () => {
    const { user } = this.props
    /**User is logged in*/
    if ( /*user.id == null*/false ) {
      return (<GuestRouter />)
    } else {
      return (<AuthRouter />)
    }
  }

  render() {
    return(
      <>
          <ErrorBoundry>
          <Container className="content" fluid style={{minHeight: "50%"}}>
              {this.renderRouter()}
          </Container>
          <Footer />
          </ErrorBoundry>
      </>
    )
  }
}

const mapStateToProps = state => ({
  user: state.authenticationReducer.user
})

const mapActionToProps = dispatch => ({
  getUser: () => api.getUser(),
})

export default connect(mapStateToProps,mapActionToProps)(Template)
