import React from 'react';
import { Nav, NavItem, NavbarText } from 'reactstrap';
import { Categories } from '../../constant';
import StyledNavbarText from './FilterSortBarStyles';

const FilterSortBar = (props) => {
  return (
    <div>
      <Nav style={{ backgroundColor: '#ecf0f1' }}>
        <StyledNavbarText active>
          <strong>Categories :</strong>
        </StyledNavbarText>
        {Categories.map((it) => (
          <NavItem>
            <StyledNavbarText>{it}</StyledNavbarText>
          </NavItem>
        ))}
        {/* <NavItem>
          <NavbarText>it</NavbarText>
        </NavItem>
        <NavItem>
          <NavbarText>it</NavbarText>
        </NavItem>
        <NavItem>
          <NavbarText>it</NavbarText>
        </NavItem> */}
      </Nav>
    </div>
  );
};

export default FilterSortBar;
