import {
  SET_ERROR,
} from "../constants/constants";

export const setError = (err) => ({ type: SET_ERROR, err });
