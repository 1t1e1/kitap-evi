import * as Actions from './types';
import Axios from 'axios';
import { apiUrl } from '../../../constant';

const addBook = (values, history) => {
  return (dispatch) => {
    Axios.post(`${apiUrl}/booksDene`, values)
      .then(function (result) {
        dispatch({
          type: Actions.ADD_BOOK,
          payload: result.data,
        });
        history();
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};

const getBooks = () => {
  return (dispatch) => {
    dispatch({
      type: Actions.LOAD_BOOKS,
    });
    Axios.get(`${apiUrl}/booksDene`)
      .then((result) => {
        dispatch({ type: Actions.SET_BOOKS, payload: result.data });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

const getBookById = (bookId) => {
  return (dispatch) => {
    dispatch({
      type: Actions.LOAD_BOOKS,
    });
    Axios.get(`${apiUrl}/booksDene/${bookId}`)
      .then((result) => {
        dispatch({ type: Actions.SET_DETAIL_BOOK, payload: result.data });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

const setFilter = (filter) => {
  return (dispatch) => {
    dispatch({
      type: Actions.SET_FILTER,
      payload: filter,
    });
  };
};

const searchBooks = (searchTerm) => {
  return (dispatch) => {
    dispatch({
      type: Actions.SEARCH_BOOKS,
      payload: searchTerm,
    });
  };
};

const searchBy = (searchBy) => {
  return (dispatch) => {
    dispatch({
      type: Actions.SEARCH_BY_VALUE,
      payload: searchBy,
    });
  };
};

export {
  addBook,
  getBooks,
  getBookById,
  setFilter,
  searchBooks,
  searchBy,
};
