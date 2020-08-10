import React from 'react';
import { Nav, NavItem } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Categories } from '../../constant';
import StyledNavbarText from './FilterSortBarStyles';
import { setFilter } from './../../state/ducks/books/actions';

const FilterSortBar = (props) => {
  const dispatch = useDispatch();

  const { activeFilter } = useSelector((state) => ({
    activeFilter: state.books.filter,
  }));
  return (
    <div>
      <Nav style={{ backgroundColor: '#ecf0f1' }}>
        <StyledNavbarText>
          <strong>Categories :</strong>
        </StyledNavbarText>
        <StyledNavbarText
          onClick={() => {
            dispatch(setFilter(''));
          }}
          active={!activeFilter}
        >
          All
        </StyledNavbarText>
        {Categories.map((categ) => (
          <NavItem>
            <StyledNavbarText
              onClick={() => {
                dispatch(setFilter(categ));
              }}
              active={activeFilter === categ && true}
            >
              {categ}
            </StyledNavbarText>
          </NavItem>
        ))}
      </Nav>
    </div>
  );
};

export default FilterSortBar;
