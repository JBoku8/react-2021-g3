import { createStore, applyMiddleware } from 'redux';
// import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { validationMiddleware, autoLoginMiddleware } from './middleware';
import rootReducer from './reducers';

const middleware = [validationMiddleware, autoLoginMiddleware, thunk];

const rootStore = createStore(rootReducer, applyMiddleware(...middleware));

export default rootStore;
