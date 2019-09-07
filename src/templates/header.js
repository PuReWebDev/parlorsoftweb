import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink } from 'reactstrap';
import { Link, Redirect } from 'react-router-dom'
import { history } from '../api/store'

const SubMenu = ({key}) => {
    console.log("submenu key",key)
    if( !key ) {
      key = "dashboard"
    }
    switch(key) {
      case "dashboard":
          return (
            <Nav>
              <NavItem>
                  <NavLink><Link to="/dashboard/stats">Stats</Link></NavLink>
              </NavItem>
              <NavItem>
                  <NavLink><Link to="/dashboard/menuitem">Menu item</Link></NavLink>
              </NavItem>
              <NavItem>
                  <NavLink><Link to="/dashboard/menuitem">Menu item</Link></NavLink>
              </NavItem>
              <NavItem>
                  <NavLink><Link to="/dashboard/menuitem">Menu item</Link></NavLink>
              </NavItem>
              <NavItem>
                  <NavLink><Link to="/dashboard/menuitem">Menu item</Link></NavLink>
              </NavItem>
            </Nav>
          )
      break;
      case "clients":
          return (
            <Nav className="ml-auto" navbar>
              <NavItem>
                  <NavLink><Link to="/dashboard/stats">Stats</Link></NavLink>
              </NavItem>
              <NavItem>
                  <NavLink><Link to="/dashboard/menuitem">Menu item</Link></NavLink>
              </NavItem>
              <NavItem>
                  <NavLink><Link to="/dashboard/menuitem">Menu item</Link></NavLink>
              </NavItem>
              <NavItem>
                  <NavLink><Link to="/dashboard/menuitem">Menu item</Link></NavLink>
              </NavItem>
              <NavItem>
                  <NavLink><Link to="/dashboard/menuitem">Menu item</Link></NavLink>
              </NavItem>
            </Nav>
          )
      break;
      case "mychair":
          return (
            <Nav className="ml-auto" navbar>
              <NavItem>
                  <NavLink><Link to="/dashboard/stats">Stats</Link></NavLink>
              </NavItem>
              <NavItem>
                  <NavLink><Link to="/dashboard/menuitem">Menu item</Link></NavLink>
              </NavItem>
              <NavItem>
                  <NavLink><Link to="/dashboard/menuitem">Menu item</Link></NavLink>
              </NavItem>
              <NavItem>
                  <NavLink><Link to="/dashboard/menuitem">Menu item</Link></NavLink>
              </NavItem>
              <NavItem>
                  <NavLink><Link to="/dashboard/menuitem">Menu item</Link></NavLink>
              </NavItem>
            </Nav>
          )
      break;
      case "maps":
          return (
            <Nav className="ml-auto" navbar>
              <NavItem>
                  <NavLink><Link to="/dashboard/stats">Stats</Link></NavLink>
              </NavItem>
              <NavItem>
                  <NavLink><Link to="/dashboard/menuitem">Menu item</Link></NavLink>
              </NavItem>
              <NavItem>
                  <NavLink><Link to="/dashboard/menuitem">Menu item</Link></NavLink>
              </NavItem>
              <NavItem>
                  <NavLink><Link to="/dashboard/menuitem">Menu item</Link></NavLink>
              </NavItem>
              <NavItem>
                  <NavLink><Link to="/dashboard/menuitem">Menu item</Link></NavLink>
              </NavItem>
            </Nav>
          )
      break;
      default:
          return null
    }
}

export const Header = ({isAuth}) => {
    //For toggling
    const { pathname } = history.location
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
          <Redirect to="/login" />
          </>
          :
          <>
          <NavbarBrand><Link to="/"><small>ParlorSoft</small></Link></NavbarBrand>
          <NavbarToggler onClick={() => toggle(!isOpen)} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                  <NavLink><Link to="/dashboard">Dashboard</Link></NavLink>
              </NavItem>
              <NavItem>
                  <NavLink><Link to="/clients">Clients</Link></NavLink>
              </NavItem>
              <NavItem>
                  <NavLink><Link to="/mychair">My Chair</Link></NavLink>
              </NavItem>
              <NavItem>
                  <NavLink><Link to="/maps">Maps</Link></NavLink>
              </NavItem>
              <NavItem>
                  <NavLink><Link to="/logout">Logout</Link></NavLink>
              </NavItem>
            </Nav>
          </Collapse>
          <br/>
          <Collapse isOpen={isOpen} navbar>
              <SubMenu key={pathname.replace("/","")} />
          </Collapse>
          <Redirect to={ pathname } />
          </>
          }
        </Navbar>
      </div>
    );
}
