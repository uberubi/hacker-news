import { hackerNewsAPI } from "../../api/api";
import { SET_ITEM } from "../constants/constants";

export const setItem = (item) => ({ type: SET_ITEM, item });

export const getItem = (id) => async (dispatch) => {
  const item = await hackerNewsAPI.getItemById(id);
  dispatch(setItem(item));
};
