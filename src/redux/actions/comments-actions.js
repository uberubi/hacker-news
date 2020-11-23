import { hackerNewsAPI } from "../../api/api";
import { SET_COMMENTS } from "../constants/constants";

export const setComments = (comments) => ({ type: SET_COMMENTS, comments });

export const getComments = (id) => async (dispatch) => {
  const comments = await hackerNewsAPI.getItemCommentsById(id);
  dispatch(setComments(comments));
};
