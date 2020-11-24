import { hackerNewsAPI } from "../../api/api";
import {
  SET_COMMENTS,
  SET_COMMENTS_LOADING,
  CLEAR_COMMENTS,
} from "../constants/constants";

const setComments = (comments) => ({ type: SET_COMMENTS, comments });

export const clearComments = () => ({ type: CLEAR_COMMENTS });

const setCommentsLoading = (loading) => ({
  type: SET_COMMENTS_LOADING,
  loading,
});

export const getComments = (id) => async (dispatch) => {
  dispatch(setCommentsLoading(true));
  const comments = await hackerNewsAPI.getItemCommentsById(id);
  dispatch(setComments(comments));
  dispatch(setCommentsLoading(false));
};
