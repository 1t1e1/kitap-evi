import * as Actions from './types';

const initialState = {
  data: [{ name: 'first book' }, { name: 'secondh book' }],
};

function booksReducer(state = initialState, action) {
  switch (action.type) {
    case Actions.GET_BOOKS:
      return state;
    case Actions.SET_BOOKS:
      return {
        ...state,
      };
    case Actions.ADD_BOOK:
      return {
        ...state,
        books: [...state.books, action.payload],
      };
    default:
      return state;
  }
}

export default booksReducer;
