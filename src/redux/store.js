import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import commentsReducer from "./reducers/comments-reducer";
import homeReducer from "./reducers/home-reducer";
import itemReducer from "./reducers/item-reducer";
import { composeWithDevTools } from "redux-devtools-extension";

let reducers = combineReducers({
  home: homeReducer,
  item: itemReducer,
  comments: commentsReducer,
});

const store = createStore(
  reducers,
  compose(applyMiddleware(thunkMiddleware), composeWithDevTools())
);

window.store = store;

export default store;
