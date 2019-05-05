import { combineReducers } from "redux";
import home from "./home";
import detail from "./detail";
import app from "./app";


//合并成根reducer
const rootReducer = combineReducers({
  home,
  detail,
  app
})
export default rootReducer