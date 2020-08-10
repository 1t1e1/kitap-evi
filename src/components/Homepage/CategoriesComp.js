import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Nav } from 'reactstrap';
import { Categories } from '../../constant';
import StyledNavbarText from './FilterSortBarStyles';
import { setFilter } from '../../state/ducks/books/actions';

const CategoriesComp = (props) => {
  const dispatch = useDispatch();

  const { activeFilter } = useSelector((state) => ({
    activeFilter: state.books.filter,
    /// useSelector reselect gibi seyleri kullanarak filteri tekrar yap. 6,5??
  }));
  return (
    <Nav>
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
        <StyledNavbarText
          onClick={() => {
            dispatch(setFilter(categ));
          }}
          active={activeFilter === categ && true}
        >
          {categ}
        </StyledNavbarText>
      ))}
    </Nav>
  );
};

export default CategoriesComp;
