import { SET_ERROR } from "../constants/constants";

let initialState = {
  error: null,
};

const commentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ERROR:
      return { ...state, error: action.err };
    default:
      return state;
  }
};

export default commentsReducer;
