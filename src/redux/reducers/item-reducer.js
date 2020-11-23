import { SET_ITEM } from "../constants/constants";

let initialState = {
  item: {},
};

const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ITEM:
      return { ...state, item: action.item };
    default:
      return state;
  }
};

export default itemReducer;
