import { combineReducers } from "redux";
import loadOuputReducer from "./loadOutputReducer";
import uploadTransactionReducer from "./uploadTransactionReducer";

const rootReducer = combineReducers({
  data: loadOuputReducer,
  uploadDataBoolean: uploadTransactionReducer,
});

export default rootReducer;
