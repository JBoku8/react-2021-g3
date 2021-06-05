import { getFakerBooks } from '../../services/faker';
import {
  GET_BOOKS_FAILURE,
  GET_BOOKS_REQUEST,
  GET_BOOKS_SUCCESS,
} from '../action-types/book-types';

export const getBooksRequestAction = () => ({
  type: GET_BOOKS_REQUEST,
});

export const getBooksSuccessAction = (payload) => ({
  type: GET_BOOKS_SUCCESS,
  payload,
});

export const getBooksFailureAction = (payload) => ({
  type: GET_BOOKS_FAILURE,
  payload,
});

export const getBooksActionAsync = (amount = 10) => {
  return async (dispatch) => {
    try {
      dispatch(getBooksRequestAction());
      const data = await getFakerBooks(amount);
      dispatch(getBooksSuccessAction(data));
    } catch (error) {
      dispatch(getBooksFailureAction(error));
    }
  };
};
