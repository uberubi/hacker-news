import { SET_COMMENTS } from "../constants/constants";

let initialState = {
  comments: [],
};


const commentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_COMMENTS:
      return { ...state, comments: action.comments };
    default:
      return state;
  }
};

export default commentsReducer;
