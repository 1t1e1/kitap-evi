import * as Actions from './types';

const initialState = {
  data: [{ title: 'first book' }, { title: 'second book' }],
  loading: false,
  filter: '',
  searchTerm: '',
};

function booksReducer(state = initialState, action) {
  switch (action.type) {
    case Actions.SET_BOOKS:
      return {
        ...state,
        data: [...action.payload],
        loading: false,
      };
    case Actions.ADD_BOOK:
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    case Actions.LOAD_BOOKS:
      return {
        ...state,
        loading: true,
      };
    case Actions.SET_FILTER:
      return {
        ...state,
        filter: action.payload,
      };
    case Actions.SEARCH_BOOKS:
      return {
        ...state,
        searchTerm: action.payload.toLowerCase().trim(),
      };
    default:
      return state;
  }
}

export default booksReducer;
