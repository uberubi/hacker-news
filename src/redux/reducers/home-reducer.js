import { SET_ITEMS } from "../constants/constants";

let initialState = {
  items: [],
};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ITEMS:
      return { ...state, items: action.items };
    default:
      return state;
  }
};

export default homeReducer;
