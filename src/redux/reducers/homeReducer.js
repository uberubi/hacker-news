import {
  SET_ITEMS,
  SET_ITEMS_LOADING,
  CLEAR_ITEMS,
} from "../constants/constants";

let initialState = {
  items: [],
  loading: false,
};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ITEMS:
      return { ...state, items: [...state.items, ...action.items] };
    case SET_ITEMS_LOADING:
      return { ...state, loading: action.loading };
    case CLEAR_ITEMS:
      return initialState;
    default:
      return state;
  }
};

export default homeReducer;
