import React from 'react'
import { Footer } from './footer'
import { Container } from 'reactstrap'
import * as api from '../api/api'
import ErrorBoundry from '../common/error'
import { GuestRouter, AuthRouter } from '../navigation/router'


export const Template = () => {
  function renderRouter(){
    const user = api.getUser()
    /**User is logged in*/
    if ( user.id === null ) {
      return (<GuestRouter />)
    } else {
      return (<AuthRouter />)
    }
  }

    return(
      <>
          <ErrorBoundry>
          <Container className="content" fluid style={{minHeight: "50%"}}>
              {renderRouter()}
          </Container>
          <Footer />
          </ErrorBoundry>
      </>
    )
}
