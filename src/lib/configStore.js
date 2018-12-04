import { createStore , applyMiddleware  } from "redux";
import rootReducer from "./reducers";
import createSagaMiddleware from 'redux-saga';

/**
 * 中间件
 */
export const sagaMiddleware = createSagaMiddleware();

export default createStore(rootReducer,applyMiddleware(sagaMiddleware));