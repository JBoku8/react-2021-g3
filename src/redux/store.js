import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { validationMiddleware, autoLoginMiddleware } from './middleware';
import { appReducer } from './reducers';

const middleware = [logger, validationMiddleware, autoLoginMiddleware, thunk];

const rootStore = createStore(appReducer, applyMiddleware(...middleware));

export default rootStore;
