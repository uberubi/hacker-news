import { hackerNewsAPI } from "../../api/api";
import { SET_ITEMS } from "../constants/constants";

export const setItems = (items) => ({ type: SET_ITEMS, items });

export const getLatestItemsById = (num) => async (dispatch) => {
  const response = await hackerNewsAPI.getLatestItemsById(num);

  dispatch(setItems(response));
};
