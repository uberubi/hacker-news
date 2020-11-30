import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import commentsReducer from "./reducers/commentsReducer";
import homeReducer from "./reducers/homeReducer";
import itemReducer from "./reducers/itemReducer";
import errorsReducer from "./reducers/errorsReducer";
import { composeWithDevTools } from "redux-devtools-extension";

let reducers = combineReducers({
  home: homeReducer,
  item: itemReducer,
  comments: commentsReducer,
  errors: errorsReducer
});

const store = createStore(
  reducers,
  compose(applyMiddleware(thunkMiddleware), composeWithDevTools())
);

window.store = store;

export default store;
