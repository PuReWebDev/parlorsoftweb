import React, { useState } from 'react';
import SubMenu from './subMenu';
import { FaBeer } from 'react-icons/fa';
import { NavItem, NavLink, Nav, Input, Form, FormGroup, Label } from 'reactstrap';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

const SideBar = () => {

    const [isOpen, toggle] = useState(true)

    function toggleMenu() {
      toggle(!isOpen)
    }

    function renderPulltab() {
      if( !isOpen ) {
        return (<button className="fixed-tab" onClick={toggleMenu}>Pull Tab</button>)
      }
      return null
    }

    return (
    <>
    <div className={classNames('sidebar', {'is-open': isOpen})}>
      {renderPulltab()}
      <div className="sidebar-header">
        <button color="info" onClick={toggleMenu} style={{color: '#fff'}}>&times;</button>
        <h3>Username</h3>
        <FormGroup>
          <Label for="exampleSearch">Search</Label>
          <Input
            type="search"
            name="search"
            id="exampleSearch"
            placeholder="search placeholder"
          />
        </FormGroup>
      </div>
      <div className="side-menu">
        <Nav vertical className="list-unstyled pb-3">
          <p>Dummy Heading</p>
          <SubMenu title="Home" icon={FaBeer} items={submenus[0]}/>
          <NavItem>
            <NavLink tag={Link} to={'/about'}>
              <FaBeer />About
            </NavLink>
          </NavItem>
          <SubMenu title="Pages" icon={FaBeer} items={submenus[1]}/>
          <NavItem>
            <NavLink tag={Link} to={'/pages'}>
                <FaBeer />Page
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to={'/faq'}>
            <FaBeer />Page
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to={'/contact'}>
            <FaBeer />Page
            </NavLink>
          </NavItem>
        </Nav>
      </div>
    </div>
    </>
    )
  };

  const submenus = [
    [
      {
        title: "Home 1",
        target: "dummy"
      },
      {
        title: "Home 2",
        target: "dummy",
      },
      {
        itle: "Home 3",
        target: "dummy",
      }
    ],
    [
      {
        title: "Page 1",
        target: "dummy",
      },
      {
        title: "Page 2",
        target: "dummy",
      }
    ]
  ]


export default SideBar;
