import * as actionType from '../action-types';

const initialState = {
  error: null,
  loading: false,
  data: [],
};

export const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    // Books
    case actionType.GET_BOOKS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case actionType.GET_BOOKS_FAILURE:
      return {
        ...state,
        loading: false,
        data: [],
        error: action.payload,
      };
    case actionType.GET_BOOKS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: null,
      };
    default:
      return state;
  }
};

export default booksReducer;
