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

// const setBooks = (values) => {
//   return (dispatch) => {
//     dispatch({
//       type: Actions.SET_BOOKS,
//       payload: values,
//     });
//   };
// };

export { addBook, getBooks }; //, setBooks };
