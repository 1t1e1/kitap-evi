import * as Actions from './types';
import Axios from 'axios';
import { apiUrl } from '../../../constant';

const addBook = (values) => {
  return (dispatch) => {
    Axios.post(`${apiUrl}/booksDene`, values)
      .then(function (result) {
        dispatch({
          type: Actions.ADD_BOOK,
          payload: result.data,
        });
      })
      .catch(function (error) {
        console.log(error);
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
