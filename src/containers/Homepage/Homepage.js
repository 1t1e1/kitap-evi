import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Books } from '../../components';
import { get } from '../../components';
import './style.js';
import { getBooks } from '../../state/ducks/books/actions';

const Homepage = (props) => {
  // const books = useSelector((state) => state.books.data);
  const { books, loading } = useSelector((state) => ({
    books: state.books.data,
    loading: state.books.loading,
  }));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, []);
  return (
    <div>
      This is home page
      {loading ? (
        <div> books are loading </div>
      ) : (
        <Books items={books}></Books>
      )}
    </div>
  );
};
export default Homepage;
