import { hackerNewsAPI } from "../../api/api";
import {
  SET_ITEM,
  SET_ITEM_LOADING,
  CLEAR_ITEM,
  ERROR_MESSAGE,
} from "../constants/constants";
import { setError } from "./errorsActions";

const setItem = (item) => ({ type: SET_ITEM, item });

export const clearItem = () => ({ type: CLEAR_ITEM });

const setItemLoading = (loading) => ({ type: SET_ITEM_LOADING, loading });

export const getItem = (id) => async (dispatch) => {
  try {
    if (window.store.getState().item.item.id === Number(id)) return;
    dispatch(setItemLoading(true));
    const item = await hackerNewsAPI.getItemById(id);
    dispatch(setItem(item));
    dispatch(setItemLoading(false));
    dispatch(setError(null));
  } catch {
    dispatch(setError(ERROR_MESSAGE));
    dispatch(setItemLoading(false));
  }
};
