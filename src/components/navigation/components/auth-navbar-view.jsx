import React from 'react'
import { Link } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'

export const AuthNavbarView = () => (
  <>
  <Nav.Link href="#deets">
  <Link to="/">Home</Link>
  </Nav.Link>
  </>
)
