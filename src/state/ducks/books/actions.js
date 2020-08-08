import * as Actions from './types';

const addBook = (values) => {
  return (dispatch) => {
    dispatch({
      type: Actions.ADD_BOOK,
      payload: values,
    });
  };
};

const getBooks = (values) => ({
  type: Actions.GET_BOOKS,
  payload: values,
});

const setBooks = (values) => ({
  type: Actions.SET_BOOKS,
  payload: values,
});

export { addBook, getBooks, setBooks };
