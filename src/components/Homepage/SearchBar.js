import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
} from 'reactstrap';
import { setFilter } from '../../state/ducks/books/actions';

const SearchBar = (props) => {
  return (
    <div>
      <InputGroup>
        <Input placeholder="Book Title" />
        <InputGroupAddon addonType="prepend">
          <InputGroupText>Search by Book Name </InputGroupText>
        </InputGroupAddon>
      </InputGroup>
    </div>
  );
};

export default SearchBar;
