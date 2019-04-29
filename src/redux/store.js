import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./modules";
// 中间件
let store = createStore(rootReducer, applyMiddleware(thunk));
export default store;