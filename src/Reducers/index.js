import { combineReducers } from "redux";
import underlayingReducer from "./underlayingReducer";
import derivetiveReducer from "./derivetiveReducer";

const reducers = combineReducers({
  underlayingData: underlayingReducer,
  derivetiveData: derivetiveReducer,
});

export default reducers;
