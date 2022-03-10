import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { createWrapper } from "next-redux-wrapper";

import promise from "redux-promise";
import thunk from "redux-thunk";

import rootReducer from "../reducers";

// Create the store with middleware
// 1. promise: Makes redux-promise work
// 2. thunk: Makes redux-thunk work
const middlewares = [promise, thunk];

const composeEnhancers = composeWithDevTools({});

const initStore = () =>
  createStore(
    rootReducer,
    undefined,
    composeEnhancers(applyMiddleware(...middlewares))
  );

const wrapper = createWrapper(initStore);
export default wrapper;
