import { combineReducers } from "redux";
import { reducer as toastrReducer } from "react-redux-toastr";

import testReducer from "./testReducer";
import asyncReducer from "../features/async/asyncReducer";
import signInReducer from "../../signin/signInReducer";

const rootReducer = combineReducers({
  test: testReducer,
  toastr: toastrReducer,
  async: asyncReducer,
  user: signInReducer
});

export default rootReducer;
