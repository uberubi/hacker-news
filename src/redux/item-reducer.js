import { hackerNewsAPI } from "../api/api";

let initialState = {
  item: {},
  loading: true,
};

const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_ITEM":
      return { ...state, item: action.item };
    case "SET_LOADING":
      return { ...state, loading: action.status };
    default:
      return state;
  }
};

const setItem = (item) => ({ type: "SET_ITEM", item });
const setLoading = (status) => ({ type: "SET_LOADING", status });

export const getItem = (id) => async (dispatch) => {
  const item = await hackerNewsAPI.getItemById(id);
  dispatch(setLoading(true));
  dispatch(setItem(item));
  dispatch(setLoading(false));
};

export default itemReducer;
