import { combineReducers } from "redux";

import { booksReducer } from "../reducers/books";

export default combineReducers({
  books: booksReducer,
});
