import { hackerNewsAPI } from "../../api/api";
import { SET_ITEMS, SET_ITEMS_LOADING } from "../constants/constants";

export const setItems = (items) => ({ type: SET_ITEMS, items });

const setItemsLoading = (loading) => ({ type: SET_ITEMS_LOADING, loading });

export const getLatestItemsById = (num) => async (dispatch) => {
  if (window.store.getState().home.items.length > 0) return;
  dispatch(setItemsLoading(true));
  const items = await hackerNewsAPI.getLatestItemsById(num);
  dispatch(setItemsLoading(false));
  dispatch(setItems(items));
};

export const refreshItemsById = (num) => async (dispatch) => {
  dispatch(setItemsLoading(true));
  const items = await hackerNewsAPI.getLatestItemsById(num);
  dispatch(setItemsLoading(false));
  dispatch(setItems(items));
};
