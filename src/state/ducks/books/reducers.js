import * as Actions from './types';

const initialState = {
  data: [{ title: 'first book' }, { title: 'second book' }],
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
        data: [...state.data, action.payload],
      };
    default:
      return state;
  }
}

export default booksReducer;
