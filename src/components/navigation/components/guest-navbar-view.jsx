import React from 'react'
import { Link } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'

export const GuestNavbarView = () => (
  <>
  <Nav.Link href="#deets">
  <Link to="/login">Login</Link>
  </Nav.Link>
  <Nav.Link href="#deets">
  <Link to="/register">Register</Link>
  </Nav.Link>
  </>
)
