import { hackerNewsAPI } from "../../api/api";
import {
  SET_COMMENTS,
  SET_COMMENTS_LOADING,
  CLEAR_COMMENTS,
  ERROR_MESSAGE,
} from "../constants/constants";
import { setError } from "./errorsActions";

const setComments = (comments) => ({ type: SET_COMMENTS, comments });

export const clearComments = () => ({ type: CLEAR_COMMENTS });

const setCommentsLoading = (loading) => ({
  type: SET_COMMENTS_LOADING,
  loading,
});

export const getComments = (id) => async (dispatch) => {
  try {
    const getItemCommentsById = async (id) => {
      const comment = await hackerNewsAPI.getItemById(id);
      if (comment.kids) {
        let kids = await Promise.all(
          comment.kids.map((_id) => getItemCommentsById(_id))
        );
        kids = kids.filter((kid) => !kid.hasOwnProperty("deleted"));
        return { ...comment, kids };
      } else return comment;
    };

    dispatch(setCommentsLoading(true));
    const comments = await getItemCommentsById(id);
    dispatch(setComments(comments));
    dispatch(setCommentsLoading(false));
    dispatch(setError(null));
  } catch {
    dispatch(setError(ERROR_MESSAGE));
    dispatch(setCommentsLoading(false));
  }
};
