import { combineReducers, createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import commentsReducer from "./comments-reducer";
import homeReducer from "./home-reducer";
import itemReducer from "./item-reducer";

let reducers = combineReducers({
  home: homeReducer,
  item: itemReducer,
  comments: commentsReducer
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;
