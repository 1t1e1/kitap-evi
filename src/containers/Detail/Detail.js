import React, { useEffect } from 'react';
import './style.js';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from 'reactstrap';

import { getBookById } from '../../state/ducks/books/actions';
import { BookDetail } from '../../components/Detail';

const Detail = (props) => {
  let { bookid } = useParams();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBookById(bookid));
  }, []);

  const { loading, detailBookData } = useSelector((state) => ({
    loading: state.books.loading,
    detailBookData: state.books.detailBookData,
  }));

  if (loading) {
    return <h2>This page is loading </h2>;
  } else {
    return (
      <Container>
        <BookDetail {...detailBookData}> </BookDetail>
      </Container>
    );
  }
};

export default Detail;
