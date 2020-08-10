import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  InputGroupButtonDropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu,
} from 'reactstrap';
import { searchBooks, searchBy } from '../../state/ducks/books/actions';

const SearchBar = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { searchByValue } = useSelector((state) => ({
    searchByValue: state.books.searchByValue,
  }));

  const toggleDropDown = () => setDropdownOpen(!dropdownOpen);

  const handleState = (e) => {
    dispatch(searchBy(e.target.value));
  };

  const dispatch = useDispatch();
  return (
    <div>
      <InputGroup>
        <Input
          placeholder="Book Title"
          onChange={(e) => {
            dispatch(searchBooks(e.target.value));
          }}
        />

        <InputGroupButtonDropdown
          addonType="append"
          isOpen={dropdownOpen}
          toggle={toggleDropDown}
        >
          <DropdownToggle caret>
            {' '}
            Search By {searchByValue}{' '}
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem onClick={handleState} value="Title">
              Title
            </DropdownItem>
            <DropdownItem onClick={handleState} value="Author">
              Author
            </DropdownItem>
            <DropdownItem onClick={handleState} value="Publisher" disabled>
              Publisher
            </DropdownItem>
          </DropdownMenu>
        </InputGroupButtonDropdown>
      </InputGroup>
    </div>
  );
};

export default SearchBar;
