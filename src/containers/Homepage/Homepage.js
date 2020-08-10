import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from 'reactstrap';
import { Books, FilterSortBar } from '../../components';
import './style.js';
import { getBooks } from '../../state/ducks/books/actions';

const Homepage = (props) => {
  // const books = useSelector((state) => state.books.data);
  const { books, loading, activeFilter, searchTerm } = useSelector(
    (state) => ({
      books: state.books.data,
      loading: state.books.loading,
      activeFilter: state.books.filter,
      searchTerm: state.books.searchTerm,
    }),
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, []);
  if (loading) return <div> books are loading </div>;

  // category lere gore filter
  let filteredBooks;
  if (activeFilter) {
    filteredBooks = books.filter((book) => book.category === activeFilter);
  } else {
    filteredBooks = books;
  }
  // book title lara gore filter
  if (searchTerm) {
    filteredBooks = filteredBooks.filter((book) =>
      book.title.toLowerCase().includes(searchTerm),
    );
  } else {
    filteredBooks = filteredBooks;
  }

  console.log(searchTerm, 'term');
  return (
    <div>
      <FilterSortBar></FilterSortBar>
      {filteredBooks.length ? (
        <Container>
          <Books items={filteredBooks}></Books>;
        </Container>
      ) : (
        <Container>
          <h1> there is no boooks </h1>;
        </Container>
      )}
    </div>
  );
};
export default Homepage;
