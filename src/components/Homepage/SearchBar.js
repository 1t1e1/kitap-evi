import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
} from 'reactstrap';
import { searchBooks } from '../../state/ducks/books/actions';

const SearchBar = (props) => {
  const dispatch = useDispatch();
  return (
    <div>
      <InputGroup>
        <Input
          placeholder="Book Title"
          onChange={(e) => {
            dispatch(searchBooks(e.target.value));
            console.log(e.target.value);
          }}
        />
        <InputGroupAddon addonType="prepend">
          <InputGroupText>Search by Book Name </InputGroupText>
        </InputGroupAddon>
      </InputGroup>
    </div>
  );
};

export default SearchBar;
