import React, { useState } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom'
import { AuthNavbarView } from '../navigation/components/auth-navbar-view'
import { GuestNavbarView } from '../navigation/components/guest-navbar-view'
/**NOTE Change this to redux useSelector*/
export const Header = () => {
  const isAuthenticated = false
  let links

  if ( isAuthenticated ) {
    links = <AuthNavbarView />
  } else {
    links = <GuestNavbarView />
  }

  return (
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Navbar.Brand><Link style={{ color:'#fff' }} to="/">ParlorSoft</Link></Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
      </Nav>
      <Nav>
          {links}
      </Nav>
    </Navbar.Collapse>
  </Navbar>
   )
}
