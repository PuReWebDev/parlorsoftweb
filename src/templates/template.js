import React, { useState } from 'react'
import { Footer } from './footer'
import { Container } from 'reactstrap'
import { storage } from '../api/storage'
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

  function renderTitle() {
    let title = "Parlor Soft"

    if( window.location.pathname ) {
      title = window.location.pathname
      title.replace("/")
    }

    return (
      <h3>{title}</h3>
    )
  }

  function getError(err) {
    if( err ) {

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
