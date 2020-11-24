import { hackerNewsAPI } from "../../api/api";
import { SET_ITEM, SET_ITEM_LOADING, CLEAR_ITEM } from "../constants/constants";

const setItem = (item) => ({ type: SET_ITEM, item });

export const clearItem = () => ({ type: CLEAR_ITEM });

const setItemLoading = (loading) => ({ type: SET_ITEM_LOADING, loading });

export const getItem = (id) => async (dispatch) => {
  if (window.store.getState().item.item.id === +id) return;
  dispatch(setItemLoading(true));
  const item = await hackerNewsAPI.getItemById(id);
  dispatch(setItem(item));
  dispatch(setItemLoading(false));
};
