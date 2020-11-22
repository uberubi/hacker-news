import { hackerNewsAPI } from "../api/api";

let initialState = {
  lastItemsIds: [],
  items: [],
  loading: true,
};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_LATEST_ITEMS_IDS":
      return { ...state, lastItemsIds: action.ids };
    case "SET_ITEMS":
      return { ...state, items: action.items };
    case "SET_LOADING":
      return { ...state, loading: action.status };
    default:
      return state;
  }
};

export const setLatestItemsIds = (ids) => ({
  type: "SET_LATEST_ITEMS_IDS",
  ids,
});
export const setItems = (items) => ({ type: "SET_ITEMS", items });
export const setLoading = (status) => ({ type: "SET_LOADING", status });
export const getLatestItemsIds = () => (dispatch) => {
  hackerNewsAPI.getLatestItemsIds().then((response) => {
    dispatch(setLatestItemsIds(response.data));
  });
};
// export const getItemById = (id) => (dispatch) => {
//   hackerNewsAPI.getItemById(id).then(response => {
//     dispatch(setItem(response.data))
//   })
// }

export const getLatestItemsById = () => async (dispatch) => {
  const response = await hackerNewsAPI.getLatestItemsById();
  dispatch(setLoading(true))
  dispatch(setItems(response));
  dispatch(setLoading(false))
};

export default homeReducer;
