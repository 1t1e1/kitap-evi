import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from 'reactstrap';
import { Books, FilterSortBar } from '../../components';
import './style.js';
import { getBooks } from '../../state/ducks/books/actions';

const Homepage = (props) => {
  // const books = useSelector((state) => state.books.data);
  const { books, loading, activeFilter } = useSelector((state) => ({
    books: state.books.data,
    loading: state.books.loading,
    activeFilter: state.books.filter,
  }));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, []);
  if (loading) return <div> books are loading </div>;

  let filteredBooks;
  if (activeFilter) {
    filteredBooks = books.filter((book) => book.category === activeFilter);
  } else {
    filteredBooks = books;
  }

  return (
    <div>
      <FilterSortBar></FilterSortBar>
      <Container>
        <Books items={filteredBooks}></Books>;
      </Container>
    </div>
  );
};
export default Homepage;
