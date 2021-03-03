import { combineReducers } from "redux";
import loadOuputReducer from "./loadOutputReducer";

const rootReducer = combineReducers({
  data: loadOuputReducer,
});

export default rootReducer;
