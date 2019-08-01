import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink } from 'reactstrap';
import { Link } from 'react-router-dom'

export const Header = ({isAuth}) => {
  const [isOpen,toggle] = useState(false)

    return (
      <div>
        <Navbar color="white" light expand="md">
          { !isAuth ?
            <>
            <NavbarBrand><Link to="/"><small>ParlorSoft</small></Link></NavbarBrand>
          <NavbarToggler onClick={() => toggle(!isOpen)} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink><Link to="/login">Login</Link></NavLink>
              </NavItem>
              <NavItem>
                <NavLink><Link to="/register">Register</Link></NavLink>
              </NavItem>
            </Nav>
          </Collapse>
          </>
          :
          <>
          <NavbarBrand><Link to="/"><small>ParlorSoft</small></Link></NavbarBrand>
          <NavbarToggler onClick={() => toggle(!isOpen)} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink><Link to="logout">Logout</Link></NavLink>
              </NavItem>
            </Nav>
          </Collapse>
          </>
          }
        </Navbar>
      </div>
    );
}
