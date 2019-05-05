import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import logger from 'redux-logger'
// 中间件
const middlewares = [thunk]
const store = createStore(rootReducer, applyMiddleware(...middlewares));
export default store;