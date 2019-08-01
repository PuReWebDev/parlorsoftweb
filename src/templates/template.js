import React, { Component } from 'react'
import { Footer } from './footer'
import { Container } from 'reactstrap'
import { storage } from '../api/storage'
import * as api from '../api/api'
import { GuestRouter, AuthRouter } from '../navigation/router'


export const Template = () => {

  function renderRouter(){
    const user = api.getUser()
    /**User is logged in*/
    if ( !false ) {
      return (<GuestRouter />)
    } else {
      return (<AuthRouter />)
    }
  }

    return(
      <>
          <Container fluid  style={{minHeight: "50%"}}>
              {renderRouter()}
          </Container>
          <Footer />
      </>
    )
}
