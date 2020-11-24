import {
  SET_COMMENTS,
  SET_COMMENTS_LOADING,
  CLEAR_COMMENTS,
} from "../constants/constants";

let initialState = {
  comments: {},
  loading: false,
};

const commentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_COMMENTS:
      return { ...state, comments: action.comments };
    case SET_COMMENTS_LOADING:
      return { ...state, loading: action.loading };
    case CLEAR_COMMENTS:
      return initialState;
    default:
      return state;
  }
};

export default commentsReducer;
