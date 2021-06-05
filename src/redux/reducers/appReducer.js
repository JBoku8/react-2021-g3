import * as actionType from '../action-types';

const initialState = {
  counter: 0,
  message: 'ReactJS Redux!',
  error: null,
  auth: null,
  loading: false,
  books: [],
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    // Counter
    case actionType.ADD_NUMBER:
      return {
        ...state,
        counter: state.counter + action.payload,
      };
    case actionType.SUBTRACT_NUMBER:
      return {
        ...state,
        counter: state.counter - action.payload,
      };
    case actionType.RESET_NUMBER:
      return {
        ...state,
        counter: 0,
      };
    // Auth

    case actionType.SET_AUTH_GUEST:
      return {
        ...state,
        auth: null,
      };
    case actionType.SET_AUTH_USER:
      return {
        ...state,
        auth: action.payload,
      };

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
        books: [],
        error: action.payload,
      };
    case actionType.GET_BOOKS_SUCCESS:
      return {
        ...state,
        loading: false,
        books: action.payload,
        error: null,
      };
    default:
      return state;
  }
};

export default appReducer;
