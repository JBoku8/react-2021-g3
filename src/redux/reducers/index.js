import { combineReducers } from 'redux';

import { booksReducer } from './booksReducer';
import { counterReducer } from './counterReducer';
import { userReducer } from './userReducer';

const rootReducer = combineReducers({
  counter: counterReducer,
  books: booksReducer,
  user: userReducer,
});

export default rootReducer;
