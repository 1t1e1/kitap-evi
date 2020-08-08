import * as reducers from './ducks';
// import  reducers  from './ducks';
import { combineReducers, createStore, compose } from 'redux';

console.log('reducer', reducers);
console.log('console', console);

const rootReducer = combineReducers(reducers);

const composeEnhancers =
  (typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const store = createStore(rootReducer, composeEnhancers());

export default store;
