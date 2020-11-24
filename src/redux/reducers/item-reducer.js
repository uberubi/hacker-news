import { SET_ITEM, SET_ITEM_LOADING, CLEAR_ITEM } from "../constants/constants";

let initialState = {
  item: {},
  loading: false,
};

const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ITEM:
      return { ...state, item: action.item };
    case SET_ITEM_LOADING:
      return { ...state, loading: action.loading };
    case CLEAR_ITEM:
      return initialState;
    default:
      return state;
  }
};

export default itemReducer;
