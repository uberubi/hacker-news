import { hackerNewsAPI } from "../../api/api";
import {
  ERROR_MESSAGE,
  SET_ITEMS,
  SET_ITEMS_LOADING,
  CLEAR_ITEMS,
} from "../constants/constants";
import { setError } from "../actions/errorsActions";

const setItems = (items) => ({ type: SET_ITEMS, items });
const clearItems = () => ({ type: CLEAR_ITEMS });
const setItemsLoading = (loading) => ({ type: SET_ITEMS_LOADING, loading });

export const getLatestItemsById = (num, isRefresh = false) => async (
  dispatch,
  getState
) => {
  try {
    if (isRefresh) dispatch(clearItems());

    if (getState().home.items.length > 0) return;

    dispatch(setItemsLoading(true));
    const itemsIds = await hackerNewsAPI.getNewItemsIds(num);
    // fetch data by 10 items parts
    while (itemsIds.data.length) {
      let items = await Promise.all(
        itemsIds.data.splice(0, 10).map((id) => hackerNewsAPI.getItemById(id))
      );
      const filteredItems = items.filter((item) => item !== null);
      dispatch(setItems(filteredItems));
    }

    dispatch(setItemsLoading(false));
    dispatch(setError(null));
  } catch (err) {
    console.log(err);
    dispatch(setError(ERROR_MESSAGE));
    dispatch(setItemsLoading(false));
  }
};
