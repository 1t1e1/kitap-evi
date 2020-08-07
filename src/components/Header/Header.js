import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from 'reactstrap';
import { Link as RRLink } from 'react-router-dom';
import './style.js';
import navigations from '../../navigations';

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand tag={RRLink} to="/">
          Kitap Evi
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            {navigations.left.map((nav) => (
              <NavItem key={nav.title}>
                <NavLink
                  tag={RRLink}
                  exact
                  to={nav.to}
                  activeClassName="active"
                >
                  {nav.title}
                </NavLink>
              </NavItem>
            ))}
          </Nav>
          {navigations.right.map((nav) => (
            <NavbarText key={nav.title}>
              <NavLink
                tag={RRLink}
                exact
                to={nav.to}
                activeClassName="active"
              >
                {nav.title}
              </NavLink>
            </NavbarText>
          ))}
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
