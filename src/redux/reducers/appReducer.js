import * as actionType from '../action-types';

const initialState = {
  counter: 0,
  message: 'ReactJS Redux!',
  error: null,
  auth: null,
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

    default:
      return state;
  }
};

export default appReducer;
